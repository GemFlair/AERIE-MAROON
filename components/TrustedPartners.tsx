import React from 'react';

// Using stylized typography to represent the brands instead of unreliable external images.
// This ensures consistency and prevents broken image links.
const partners = [
  { name: 'EMAAR', className: 'font-serif tracking-[0.3em] font-semibold' },
  { name: 'DAMAC', className: 'font-sans tracking-tighter font-black' },
  { name: 'NAKHEEL', className: 'font-serif italic tracking-widest font-medium' },
  { name: 'MERAAS', className: 'font-sans tracking-[0.4em] font-light' },
  { name: 'SOBHA', className: 'font-serif tracking-wide font-bold' },
  { name: 'BINGHATTI', className: 'font-sans tracking-[0.2em] font-medium' },
  { name: 'OMNIYAT', className: 'font-serif tracking-[0.25em] font-light' },
  { name: 'DUBAI HOLDING', className: 'font-sans font-bold tracking-wider' },
];

export const TrustedPartners: React.FC = () => {
  return (
    <section className="py-16 bg-obsidian border-y border-white/5 relative overflow-hidden">
      
      {/* Section Title - Subtle */}
      <div className="text-center mb-12">
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-medium">
          Strategic Alliances
        </span>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* Gradient Masks to fade edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-obsidian to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-obsidian to-transparent z-10" />

        {/* The Sliding Track (Duplicated for seamless loop) */}
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {/* We map 3 sets to ensure smooth infinite scrolling even on wide screens */}
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="mx-12 md:mx-20 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer group/item"
            >
              <span className={`text-xl md:text-3xl text-gray-300 group-hover/item:text-falcon-gold group-hover/item:text-glow transition-all duration-300 ${partner.className}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Style for the Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Adjusted for 3 sets */
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 60s linear infinite; /* Slow, majestic speed */
        }
        /* Pause on hover for interaction */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};