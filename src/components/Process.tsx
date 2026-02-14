import React from 'react';
import FadeIn from './ui/FadeIn';

const Process: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-luxury-divider/30">
      <FadeIn>
        <header className="mb-24 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-offwhite mb-6">The Process</h2>
          <p className="text-luxury-muted text-sm leading-relaxed font-light">
            From abstract digital noise to tangible textile reality. The methodology is rooted in structural deconstruction and material research.
          </p>
        </header>
      </FadeIn>

      <div className="space-y-32 md:space-y-48">
        
        {/* Chapter 1: Concept */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="text-xs text-luxury-muted tracking-widest uppercase block mb-4">Chapter 01</span>
              <h3 className="font-serif text-3xl text-luxury-offwhite mb-6 italic">Concept</h3>
              <p className="text-sm text-luxury-muted font-light leading-relaxed mb-6">
                "Urban Decay" began as a study of brutalist architecture reclaimed by nature. I aggregated textures of moss on concrete and rust on steel, translating these random organic patterns into structured mood boards.
              </p>
              <ul className="text-xs text-luxury-offwhite space-y-2 uppercase tracking-wider opacity-70">
                <li>&mdash; Brutalism</li>
                <li>&mdash; Oxidation</li>
                <li>&mdash; Reclaim</li>
              </ul>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-64 bg-luxury-charcoal overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&auto=format&fit=crop" alt="Moodboard 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
                 </div>
                 <div className="h-64 bg-luxury-charcoal overflow-hidden relative group mt-12">
                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" alt="Moodboard 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
                 </div>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Chapter 2: Material */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
           <div className="md:col-span-8 order-2 md:order-1">
            <FadeIn delay={200}>
              <div className="w-full h-96 bg-luxury-charcoal overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1558374955-449d012480e0?q=80&w=1200&auto=format&fit=crop" alt="Fabric Swatch" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
                <div className="absolute bottom-4 right-4 text-[10px] bg-black/50 backdrop-blur px-2 py-1 text-white uppercase tracking-widest">
                  Heavyweight Linen &middot; Raw Silk
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-4 order-1 md:order-2">
            <FadeIn>
              <span className="text-xs text-luxury-muted tracking-widest uppercase block mb-4">Chapter 02</span>
              <h3 className="font-serif text-3xl text-luxury-offwhite mb-6 italic">Material</h3>
              <p className="text-sm text-luxury-muted font-light leading-relaxed">
                The digital concept required physical weight. I selected raw silks and chemically treated linens to mimic the tactile quality of erosion. The fabric behaves like a living skin, changing character with movement.
              </p>
            </FadeIn>
          </div>
        </article>

        {/* Chapter 3: Construction */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="text-xs text-luxury-muted tracking-widest uppercase block mb-4">Chapter 03</span>
              <h3 className="font-serif text-3xl text-luxury-offwhite mb-6 italic">Construction</h3>
              <p className="text-sm text-luxury-muted font-light leading-relaxed mb-6">
                 Technical flats reveal the architectural precision hidden beneath the drape. Zero-waste pattern cutting techniques were employed to honor the theme of resourcefulness.
              </p>
              <div className="flex gap-4">
                 <div className="w-8 h-8 border border-luxury-divider rounded-full flex items-center justify-center text-xs text-luxury-muted hover:bg-luxury-offwhite hover:text-luxury-black transition-colors">01</div>
                 <div className="w-8 h-8 border border-luxury-divider rounded-full flex items-center justify-center text-xs text-luxury-muted hover:bg-luxury-offwhite hover:text-luxury-black transition-colors">02</div>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={200}>
              <div className="bg-luxury-charcoal/20 border border-luxury-divider p-8 md:p-16 flex items-center justify-center group hover:bg-luxury-charcoal/40 transition-colors duration-500">
                {/* SVG Technical Flat */}
                <svg viewBox="0 0 200 300" className="h-64 md:h-80 stroke-luxury-offwhite stroke-[0.5] fill-none group-hover:stroke-1 transition-all duration-500">
                   <path d="M60,40 Q100,60 140,40 L160,80 L140,280 L60,280 L40,80 Z" strokeLinecap="round" />
                   <path d="M60,40 L60,280" strokeDasharray="4 4" className="opacity-50" />
                   <path d="M140,40 L140,280" strokeDasharray="4 4" className="opacity-50" />
                   <path d="M40,80 Q20,150 40,220" />
                   <path d="M160,80 Q180,150 160,220" />
                   <line x1="100" y1="40" x2="100" y2="280" strokeDasharray="2 2" className="opacity-30" />
                </svg>
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-luxury-muted uppercase tracking-widest">
                <span>Tech Pack: Coat 04</span>
                <span>Scale 1:10</span>
              </div>
            </FadeIn>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Process;