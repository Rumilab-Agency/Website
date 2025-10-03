// import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import FloatingCTA from './components/FloatingCTA/FloatingCTA';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // optional animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);


  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* You can add more routes */}
      </Routes>
    </Router>
  );

}

export default App
