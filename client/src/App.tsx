// import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';

import { startReveal } from './utils/reveal';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import FloatingCTA from './components/FloatingCTA/FloatingCTA';

// The Work and Contact pages (and the Galaxy effect) load only when visited
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const CostGuide = lazy(() => import('./pages/CostGuide'));
const Guarantee = lazy(() => import('./pages/Guarantee'));
const Faq = lazy(() => import('./pages/Faq'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Start each page at the top, or at its #section when the link has one (e.g.
// "/#pricing" from the navbar). Without this, moving to /contact from the bottom
// of the landing page would open the form scrolled past its first step.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait a frame so the page that holds the section has rendered
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

// The routes and app-wide pieces, without a router, so the same tree renders in
// the browser (BrowserRouter, below) and at build time (StaticRouter, in
// entry-server.tsx) when each page is pre-rendered to HTML.
export function AppRoutes() {
  useEffect(() => startReveal(), []);


  return (
    <>
      <ScrollToTop />
      <FloatingCTA />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<CostGuide />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
