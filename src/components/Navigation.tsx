import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'py-4 bg-luxury-black/90 backdrop-blur-md' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 md:px-20 flex justify-between items-center">
        <a href="#hero" className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase hover:opacity-70 transition-opacity text-luxury-offwhite">
          Portfolio 2026
        </a>
        
        <ul className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[10px] tracking-editorial uppercase text-luxury-muted hover:text-luxury-offwhite transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Icon Placeholder (could be expanded) */}
        <button className="md:hidden text-luxury-offwhite uppercase text-[10px] tracking-widest">
            Menu
        </button>
      </div>
    </nav>
  );
};

export default Navigation;