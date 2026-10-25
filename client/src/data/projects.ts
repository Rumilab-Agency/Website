// Client work shown on /portfolio. Screenshots live in public/portfolio
// (desktop 1600x1000, mobile 520x1125, WebP), captured from the live sites.

export type Project = {
  slug: string;
  client: string;
  category: string;
  summary: string;
  built: string[];
  url: string;
  displayUrl: string;
  desktop: string;
  mobile: string;
  /** Real, checkable results only (e.g. from Search Console or GA4). The
      Results section on the case study page appears once this is filled in. */
  results?: { value: string; label: string; source: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'wealthous',
    client: 'Wealthous Solutions',
    category: 'B2B supplies',
    summary:
      'Office and restaurant supplies for procurement teams. The site turns a product catalogue into a quote request in a few taps.',
    built: [
      'Searchable catalogue of office and restaurant supplies',
      'A quote list visitors build as they browse',
      'Step-by-step quote request form',
    ],
    url: 'https://wealthous-site.vercel.app/',
    displayUrl: 'wealthous-site.vercel.app',
    desktop: '/portfolio/wealthous-desktop.webp',
    mobile: '/portfolio/wealthous-mobile.webp',
  },
  {
    slug: 'trungram',
    client: 'Trungram Gyalwa Foundation',
    category: 'Non-profit',
    summary:
      'An education foundation working on schools, scholarships and community programmes. The site tells its story and makes giving easy.',
    built: [
      'Story-led homepage around the foundation’s four pillars',
      'Stories of change and flagship projects',
      'Language switcher and a Donate call to action',
    ],
    url: 'https://trungram-foundation-phi.vercel.app/',
    displayUrl: 'trungram-foundation-phi.vercel.app',
    desktop: '/portfolio/trungram-desktop.webp',
    mobile: '/portfolio/trungram-mobile.webp',
  },
  {
    slug: 'maythematics',
    client: 'Maythematics',
    category: 'Education · Tuition',
    summary:
      'Primary, secondary and JC maths tuition in Singapore. The site helps parents choose a programme and get in touch.',
    built: [
      'Programme pages for every level',
      'The SHINE teaching approach, testimonials and Google reviews',
      'WhatsApp enquiries from every page',
    ],
    url: 'https://www.maythematics.com/',
    displayUrl: 'maythematics.com',
    desktop: '/portfolio/maythematics-desktop.webp',
    mobile: '/portfolio/maythematics-mobile.webp',
  },
];
