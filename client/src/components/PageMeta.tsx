import { Helmet } from 'react-helmet-async';
import { pageUrl, type PageSeo } from '../seo';

// Keeps the page-specific head tags in sync when moving between pages in the
// browser. The same tags are written into each page's HTML at build time.
const PageMeta = ({ page }: { page: PageSeo }) => {
  const url = pageUrl(page);
  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </Helmet>
  );
};

export default PageMeta;
