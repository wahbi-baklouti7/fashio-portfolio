import React from 'react';
import FadeIn from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black py-32 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-4xl w-full">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-6xl text-luxury-offwhite text-center leading-tight mb-16">
            Digital Precision meets <br/> <span className="italic text-luxury-muted">Textile Tactility</span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <FadeIn delay={200}>
            <p className="text-luxury-offwhite text-lg md:text-xl font-light leading-relaxed">
              I spent a decade architecting pixels, refining user flows, and obsessing over the invisible grid of the web. The transition to fashion wasn't a departure; it was a change in medium.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-sm text-luxury-muted font-light leading-relaxed mb-6">
              In my studio, the logic of code informs the drape of silk. I approach garment construction with the same rigor as a design system—modular, scalable, and obsessively detailed.
            </p>
            <p className="text-sm text-luxury-muted font-light leading-relaxed">
              My work seeks to answer a single question: How can the precision of the digital world enhance the imperfect beauty of the physical one?
            </p>
            
            <div className="mt-12 pt-12 border-t border-luxury-divider flex gap-12">
               <div>
                  <span className="block text-xs text-luxury-muted uppercase tracking-widest mb-2">Location</span>
                  <span className="block text-sm text-luxury-offwhite">Jakarta, Indonesia</span>
               </div>
               <div>
                  <span className="block text-xs text-luxury-muted uppercase tracking-widest mb-2">Focus</span>
                  <span className="block text-sm text-luxury-offwhite">Avant-Garde &middot; Sustainable</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;