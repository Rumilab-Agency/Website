import { Resend } from 'resend';

// POST /api/enquiry: emails a project enquiry from the /contact form to RumiLab.
// Runs on the server (a Vercel Function in production, Vite middleware in dev),
// so the Resend API key never reaches the browser.
//
// Environment variables:
//   RESEND_API_KEY  Resend API key (required)
//   ENQUIRY_TO      inbox that receives enquiries, e.g. contact@rumilab.org
//   ENQUIRY_FROM    sender on a domain verified in Resend,
//                   e.g. "RumiLab Website <website@rumilab.org>"

type Enquiry = {
  company: string;
  industry: string;
  hasWebsite: string;
  websiteUrl: string;
  goals: string[];
  plan: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Trimmed string, capped so nobody can post a novel
const text = (value: unknown, max = 500) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function parse(body: Record<string, unknown>): Enquiry | string {
  const industry = text(body.industry, 100);
  const enquiry: Enquiry = {
    company: text(body.company, 200),
    industry: industry === 'Other' ? text(body.industryOther, 100) || 'Other' : industry,
    hasWebsite: text(body.hasWebsite, 10),
    websiteUrl: text(body.websiteUrl, 300),
    goals: Array.isArray(body.goals) ? body.goals.map((g) => text(g, 100)).filter(Boolean).slice(0, 10) : [],
    plan: text(body.plan, 100),
    name: text(body.name, 200),
    email: text(body.email, 200),
    phone: text(body.phone, 50),
    notes: text(body.notes, 5000),
  };
  if (!enquiry.company) return 'Missing business name.';
  if (!enquiry.name) return 'Missing name.';
  if (!EMAIL_PATTERN.test(enquiry.email)) return 'Invalid email.';
  return enquiry;
}

function render(e: Enquiry) {
  const rows: [string, string][] = [
    ['Business', e.company],
    ['Industry', e.industry],
    ['Current website', e.hasWebsite === 'yes' ? e.websiteUrl || 'Yes' : 'No, starting fresh'],
    ['Goals', e.goals.join(', ')],
    ['Plan', e.plan],
    ['Name', e.name],
    ['Email', e.email],
    ['Phone', e.phone || '–'],
    ['Notes', e.notes || '–'],
  ];
  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#111;max-width:560px">
      <h2 style="margin:0 0 16px">New project enquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        ${rows
          .map(([label, value]) => `
          <tr style="border-top:1px solid #eee">
            <td style="color:#666;white-space:nowrap;vertical-align:top">${label}</td>
            <td style="white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`)
          .join('')}
      </table>
      <p style="color:#666;font-size:13px;margin-top:20px">Reply to this email to answer ${escapeHtml(e.name)} directly.</p>
    </div>`;
  const plain = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  return { html, text: plain };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: a hidden field people never fill in. Bots that do get a quiet "ok".
  if (text(body.website_confirm)) return json({ ok: true });

  const enquiry = parse(body);
  if (typeof enquiry === 'string') return json({ error: enquiry }, 400);

  const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO || !ENQUIRY_FROM) {
    console.error('Enquiry email is not configured: set RESEND_API_KEY, ENQUIRY_TO and ENQUIRY_FROM.');
    return json({ error: 'Email is not configured.' }, 500);
  }

  const { html, text: plain } = render(enquiry);
  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: ENQUIRY_FROM,
    to: ENQUIRY_TO.split(',').map((s) => s.trim()),
    replyTo: enquiry.email,
    subject: `New enquiry: ${enquiry.company} (${enquiry.name})`,
    html,
    text: plain,
  });

  if (error) {
    console.error('Resend failed:', error);
    return json({ error: 'Could not send.' }, 502);
  }
  return json({ ok: true });
}
