// Fills each page's HTML file with its rendered content, after `vite build`
// (the browser bundle) and `vite build --ssr` (the renderer) have run.
//
//   dist/index.html, dist/<page>/index.html   gain the page's HTML and styles
//   dist/404.html                              the "page not found" page, which
//                                              Vercel serves (with a 404 status)
//                                              for any address that isn't a page
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = 'dist';
const ssrDir = 'dist-ssr';
const ROOT = '<div id="root"></div>';
const PAGE_META = /<!--page-meta-->[\s\S]*?<!--\/page-meta-->/;

// The site's CSS is small, so it goes straight into each page instead of being a
// separate file the browser must fetch before it can show anything.
const CSS_LINK = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/;
const inlineCss = (html) =>
  html.replace(CSS_LINK, (_, href) => `<style>${readFileSync(join(dist, href), 'utf8')}</style>`);

const { render, ALL_PAGES } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

// The unrendered home template, kept before it's filled in, for the 404 page
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

for (const page of ALL_PAGES) {
  const file = page.path === '/' ? join(dist, 'index.html') : join(dist, page.path, 'index.html');
  const template = readFileSync(file, 'utf8');
  if (!template.includes(ROOT)) throw new Error(`No empty #root in ${file}`);

  const { html, styles } = await render(page.path);
  if (!html.trim()) throw new Error(`Rendered nothing for ${page.path}`);

  writeFileSync(
    file,
    inlineCss(template.replace('</head>', `${styles}\n</head>`).replace(ROOT, `<div id="root">${html}</div>`)),
  );
  console.log(`prerendered ${page.path.padEnd(12)} ${(html.length / 1024).toFixed(1)} KB`);
}

// 404: any address with no route renders the "page not found" page. It must
// not be indexed or claim a canonical address.
{
  const { html, styles } = await render('/this-page-does-not-exist');
  const head = '<title>Page not found | RumiLab</title>\n    <meta data-head="" name="robots" content="noindex" />';
  writeFileSync(
    join(dist, '404.html'),
    inlineCss(
      shell
        .replace(PAGE_META, head)
        .replace('</head>', `${styles}\n</head>`)
        .replace(ROOT, `<div id="root">${html}</div>`),
    ),
  );
  console.log(`prerendered 404          ${(html.length / 1024).toFixed(1)} KB`);
}

rmSync(ssrDir, { recursive: true, force: true });
