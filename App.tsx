import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Clients } from './components/Clients';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { VisionMission } from './components/VisionMission';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS animation library
    if ((window as any).AOS) {
      (window as any).AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-ebs-purple selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Clients />
        <Portfolio />
        <Services />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;