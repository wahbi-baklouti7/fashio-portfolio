import React from 'react';
import FadeIn from './ui/FadeIn';
import { ASSETS } from '../utils/assets';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full bg-luxury-black relative overflow-hidden">
      
      {/* Left Side: Typography & Negative Space */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 relative z-10 pt-32 md:pt-0 bg-luxury-black">
        
        {/* Subtitle / Context */}
        <FadeIn delay={200}>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-8 h-[1px] bg-luxury-divider"></div>
            <span className="text-luxury-muted text-[10px] md:text-xs tracking-[0.3em] uppercase">
              Fashion Design &middot; Digital Craft
            </span>
          </div>
        </FadeIn>
        
        {/* Main Title - Designer Name */}
        <FadeIn delay={400}>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-9xl leading-[0.85] text-luxury-offwhite font-thin tracking-tight mb-12">
            Hasna <br />
            <span className="italic opacity-80 ml-4 md:ml-12">Rachmalia</span>
          </h1>
        </FadeIn>

        {/* Description - Editorial Style */}
        <FadeIn delay={600}>
          <p className="max-w-md text-sm text-luxury-muted leading-relaxed font-light mb-16 opacity-80 pl-1 border-l-0 md:border-l border-luxury-divider/30 md:pl-6">
            Architecting silhouettes where digital precision meets the raw tactility of fabric. 
            A study in structure, void, and the quiet power of modesty.
          </p>
        </FadeIn>

        {/* Minimal CTA - Text only */}
        <FadeIn delay={800}>
          <a href="#collections" className="group flex items-center gap-4 w-fit cursor-pointer">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-offwhite group-hover:text-luxury-muted transition-colors duration-500">
                View Collections
            </span>
            <div className="w-12 h-[1px] bg-luxury-offwhite group-hover:w-20 group-hover:bg-luxury-muted transition-all duration-500 ease-out"></div>
          </a>
        </FadeIn>
      </div>

      {/* Right Side: Image - Full height, B&W, Editorial */}
      {/* We use a specific background color #282828 to match the studio background of the photo seamlessly */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative bg-[#282828]">
        {/* Soft overlay for text contrast if needed, mostly for mood */}
        <div className="absolute inset-0 bg-luxury-black/10 z-10 pointer-events-none mix-blend-multiply"></div> 
        
        {/* Gradient to seamless blend with left side on mobile or if needed */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-luxury-black to-transparent z-10 hidden md:block pointer-events-none"></div>

        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
            <FadeIn delay={800} className="w-full h-full">
                <img 
                  src={ASSETS.hero.src} 
                  alt={ASSETS.hero.alt}
                  onError={(e) => {
                    console.error("Image loading failed:", e);
                    e.currentTarget.style.display = 'none'; // Optional: hide if broken
                  }}
                  className="w-full h-full object-cover object-center opacity-90 grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-[2000ms] ease-out"
                />
            </FadeIn>
        </div>

        {/* Editorial Caption / Collection Tag */}
        <div className="absolute bottom-10 right-8 md:right-16 md:bottom-16 z-20 text-right pointer-events-none mix-blend-difference">
            <FadeIn delay={1000}>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-luxury-offwhite/80 mb-2">
                    Latest Editorial
                </span>
                <span className="font-serif text-2xl md:text-3xl text-luxury-offwhite italic tracking-wide">
                    SS26 &mdash; Silence
                </span>
            </FadeIn>
        </div>
      </div>

    </div>
  );
};

export default Hero;