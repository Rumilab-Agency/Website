// import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import FloatingCTA from './components/FloatingCTA/FloatingCTA';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // optional animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);


  return (
    <>
      <Landing />
      {/* <FloatingCTA /> */}
    </>
  );

}

export default App
