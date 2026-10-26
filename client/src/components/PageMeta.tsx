import { useHead } from '../hooks/useHead';
import { pageUrl, type PageSeo } from '../seo';

// Keeps the page-specific head tags in sync when moving between pages in the
// browser. The same tags are written into each page's HTML at build time.
const PageMeta = ({ page }: { page: PageSeo }) => {
  const url = pageUrl(page);
  useHead(page.title, [
    { tag: 'meta', attrs: { name: 'description', content: page.description } },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:title', content: page.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: page.description } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: page.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: page.description } },
  ]);
  return null;
};

export default PageMeta;
