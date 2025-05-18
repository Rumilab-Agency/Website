// import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // optional animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return <Landing />;

}

export default App
