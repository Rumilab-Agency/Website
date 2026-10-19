import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { PAGES, pageMetaTags } from './src/seo'

// In dev, serve /api/* from the same handlers Vercel runs in production, so the
// contact form can be tested locally. Secrets come from .env.local.
function devApi(): Plugin {
  return {
    name: 'dev-api',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, server.config.envDir || server.config.root, ''))
      server.middlewares.use('/api', async (req, res, next) => {
        const name = req.url?.split('?')[0].replace(/^\//, '')
        if (!name || !/^[\w-]+$/.test(name)) return next()
        try {
          const mod = await server.ssrLoadModule(`/api/${name}.ts`)
          const handler = mod[req.method ?? 'GET']
          if (typeof handler !== 'function') {
            res.statusCode = 405
            return res.end()
          }
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)
          const request = new Request(`http://localhost${req.originalUrl}`, {
            method: req.method,
            headers: req.headers as Record<string, string>,
            body: chunks.length ? Buffer.concat(chunks) : undefined,
          })
          const response: Response = await handler(request)
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          res.end(await response.text())
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

// Writes each page's title, description, canonical and link-preview tags into
// the HTML itself. The home page's go into index.html; every other page gets its
// own copy at dist/<path>/index.html, which Vercel serves for that path. Link
// previews (WhatsApp, LinkedIn) don't run JavaScript, so they rely on these.
function pageMeta(): Plugin {
  const MARKER = /<!--page-meta-->[\s\S]*?<!--\/page-meta-->/
  const block = (page: (typeof PAGES)[keyof typeof PAGES]) =>
    `<!--page-meta-->\n    ${pageMetaTags(page)}\n    <!--/page-meta-->`
  let outDir = 'dist'
  return {
    name: 'page-meta',
    configResolved(config) {
      outDir = config.build.outDir
    },
    transformIndexHtml(html) {
      return html.replace(MARKER, block(PAGES.home))
    },
    closeBundle() {
      const index = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const page of Object.values(PAGES)) {
        if (page.path === '/') continue
        const dir = join(outDir, page.path)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), index.replace(MARKER, block(page)))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devApi(), pageMeta()],
})
