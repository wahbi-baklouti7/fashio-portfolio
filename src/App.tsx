import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  // Simple custom cursor logic could go here, but sticking to system cursor for pure minimalism
  
  return (
    <main className="bg-luxury-black min-h-screen text-luxury-offwhite selection:bg-luxury-offwhite selection:text-luxury-black overflow-x-hidden">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="collections">
        <Collections />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="py-12 border-t border-luxury-divider text-center text-luxury-muted text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Hasna Rachmalai. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default App;