// Search and link-preview text for each page, in one place. Used by the pages
// (via <PageMeta>) and at build time by vite.config.ts, which writes each page's
// tags into its own HTML file so WhatsApp, LinkedIn and other link previews
// (which don't run JavaScript) show the right title, description and image.

export const SITE_URL = 'https://www.rumilab.org';

export type PageSeo = {
  path: string;
  title: string;
  description: string;
};

export const PAGES = {
  home: {
    path: '/',
    title: 'Web Design for Singapore Small Businesses | RumiLab',
    description:
      'Custom websites for Singapore SMBs, built to turn visitors into enquiries and bookings. 5% of visitors take action within 90 days, or your fee back.',
  },
  portfolio: {
    path: '/portfolio',
    title: 'Web Design Portfolio | RumiLab Singapore',
    description:
      'Websites RumiLab has designed and built for Maythematics, Trungram Gyalwa Foundation and Wealthous Solutions, from Education to B2B Companies.',
  },
  contact: {
    path: '/contact',
    title: 'Start Your Project | RumiLab',
    description:
      "Tell us about your business and the website you need. It takes about a minute, and we reply within 1 day. Prefer to chat? WhatsApp us.",
  },
} satisfies Record<string, PageSeo>;

export const pageUrl = (page: PageSeo) => SITE_URL + page.path;

// The page-specific tags. Marked data-rh so react-helmet-async takes them over
// in the browser instead of adding duplicates next to them.
export function pageMetaTags(page: PageSeo) {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const url = pageUrl(page);
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(page.description)}" />`,
    `<link data-rh="true" rel="canonical" href="${url}" />`,
    `<meta data-rh="true" property="og:url" content="${url}" />`,
    `<meta data-rh="true" property="og:title" content="${esc(page.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${esc(page.description)}" />`,
    `<meta data-rh="true" name="twitter:title" content="${esc(page.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${esc(page.description)}" />`,
  ].join('\n    ');
}
