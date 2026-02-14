import React from 'react';
import FadeIn from './ui/FadeIn';

interface CollectionImage {
  id: number;
  src: string;
  alt: string;
  span: string; // Tailwind span class
}

const images: CollectionImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    alt: "Urban Decay - Look 1",
    span: "col-span-1 md:col-span-1 row-span-2" // Tall portrait
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    alt: "Urban Decay - Detail Texture",
    span: "col-span-1 md:col-span-1 h-64 md:h-full" // Square/Landscape
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605218427368-251c86e09886?q=80&w=800&auto=format&fit=crop",
    alt: "Urban Decay - Silhouette",
    span: "col-span-1 md:col-span-1 row-span-2" // Tall portrait
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    alt: "Urban Decay - Mood",
    span: "col-span-1 md:col-span-1 h-64 md:h-full" // Square
  }
];

const Collections: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <FadeIn>
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-luxury-divider pb-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-offwhite mb-2">Collections</h2>
            <span className="text-luxury-muted text-xs tracking-widest uppercase">Select Works</span>
          </div>
          <div className="text-right mt-8 md:mt-0">
            <h3 className="font-serif text-2xl italic text-luxury-offwhite">SS26 — Urban Decay</h3>
            <p className="text-luxury-muted text-xs tracking-wider mt-2 uppercase">Erosion. Concrete. Renewal.</p>
          </div>
        </header>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
        {images.map((img, index) => (
          <FadeIn key={img.id} delay={index * 100} className={`relative group overflow-hidden ${img.span}`}>
            <div className="w-full h-full bg-luxury-charcoal">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs text-luxury-offwhite tracking-widest uppercase font-light">
                   0{img.id} &mdash; {img.alt}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <FadeIn>
          <a href="#contact" className="inline-block border-b border-luxury-muted pb-1 text-xs tracking-[0.2em] uppercase hover:text-luxury-offwhite hover:border-luxury-offwhite transition-all duration-300">
            View Lookbook
          </a>
        </FadeIn>
      </div>
    </div>
  );
};

export default Collections;