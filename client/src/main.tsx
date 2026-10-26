import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Pre-rendered pages arrive with their HTML already in #root: React takes it
// over (hydrates) instead of rebuilding it. Anything else, and the dev server,
// starts from an empty #root.
const container = document.getElementById('root')!
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
