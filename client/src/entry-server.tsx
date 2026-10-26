/// <reference types="node" />
// Build-time only: renders one page to HTML so crawlers that don't run
// JavaScript (most AI crawlers) still get the full content. Used by
// scripts/prerender.mjs after `vite build --ssr`; never shipped to browsers.
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet } from 'styled-components';
import { AppRoutes } from './App';

export { ALL_PAGES } from './seo';

export function render(url: string): Promise<{ html: string; styles: string }> {
  const sheet = new ServerStyleSheet();
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, done) {
        html += chunk.toString();
        done();
      },
    });
    sink.on('finish', () => {
      resolve({ html, styles: sheet.getStyleTags() });
      sheet.seal();
    });

    const { pipe } = renderToPipeableStream(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>,
      ),
      {
        // Wait for every lazy page to load, so the HTML is complete
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
