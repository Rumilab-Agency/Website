// Search and link-preview text for each page, in one place. Used by the pages
// (via <PageMeta>) and at build time by vite.config.ts, which writes each page's
// tags into its own HTML file so WhatsApp, LinkedIn and other link previews
// (which don't run JavaScript) show the right title, description and image.

import { PROJECTS } from './data/projects';

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
      "Custom websites for Singapore SMBs, built to turn visitors into enquiries and bookings. 5% of visitors take action from month one, or you don't pay.",
  },
  portfolio: {
    path: '/portfolio',
    title: 'Web Design Portfolio | RumiLab Singapore',
    description:
      'Websites RumiLab has designed and built for Maythematics, Trungram Gyalwa Foundation and Wealthous Solutions, from Education to B2B Companies.',
  },
  contact: {
    path: '/contact',
    title: 'Apply for a Free Website | RumiLab',
    description:
      "Apply for a free custom website for your Singapore business. It takes about a minute, and we reply within 1 day. Open to our first 10 clients.",
  },
  cost: {
    path: '/pricing',
    title: 'Website Design Pricing in Singapore (2026) | RumiLab',
    description:
      'RumiLab website prices in Singapore: S$4,000 one-time or S$198/month, with add-ons listed upfront. What each plan includes, and how to compare quotes.',
  },
  guarantee: {
    path: '/guarantee',
    title: 'The 5% Guarantee: How We Measure It | RumiLab',
    description:
      "How RumiLab's 5% guarantee works: which buttons count, how clicks are measured each month, and what happens in any month that falls short.",
  },
  faq: {
    path: '/faq',
    title: 'Website FAQs for Singapore Small Businesses | RumiLab',
    description:
      'Answers to common questions about getting a website with RumiLab: timelines, costs, hosting, cancelling, WhatsApp and bookings, and showing up on Google.',
  },
} satisfies Record<string, PageSeo>;

// One page per client project, at /portfolio/<slug>
export const caseStudyPage = (slug: string): PageSeo => {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return PAGES.portfolio;
  return {
    path: `/portfolio/${project.slug}`,
    title: `${project.client} Website Case Study | RumiLab`,
    description: `How RumiLab designed and built the ${project.client} website (${project.category}): the brief, what we built and the live site.`,
  };
};

// Every page that gets its own HTML file and a sitemap entry. Case studies are
// left out until each project has real results to show (see pages/CaseStudy.tsx).
export const ALL_PAGES: PageSeo[] = Object.values(PAGES);

export const pageUrl = (page: PageSeo) => SITE_URL + page.path;

// The page-specific tags. Marked data-head so useHead() replaces them in the
// browser instead of adding duplicates next to them.
export function pageMetaTags(page: PageSeo) {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const url = pageUrl(page);
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta data-head="" name="description" content="${esc(page.description)}" />`,
    `<link data-head="" rel="canonical" href="${url}" />`,
    `<meta data-head="" property="og:url" content="${url}" />`,
    `<meta data-head="" property="og:title" content="${esc(page.title)}" />`,
    `<meta data-head="" property="og:description" content="${esc(page.description)}" />`,
    `<meta data-head="" name="twitter:title" content="${esc(page.title)}" />`,
    `<meta data-head="" name="twitter:description" content="${esc(page.description)}" />`,
  ].join('\n    ');
}
