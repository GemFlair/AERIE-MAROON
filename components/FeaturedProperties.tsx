import React from 'react';
import { Property } from '../types';
import { MapPin, Bed, Bath, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../constants';

const properties: Property[] = [
  {
    id: '1',
    title: 'Royal Atlantis Penthouse',
    location: 'Palm Jumeirah',
    price: 'AED 185M',
    image: IMAGES.FEATURED.ATLANTIS,
    beds: 5,
    baths: 7,
    sqft: '14,500',
    tags: ['Waterfront', 'Triplex']
  },
  {
    id: '2',
    title: 'Bugatti Sky Mansion',
    location: 'Business Bay',
    price: 'AED 85M',
    image: IMAGES.FEATURED.BUGATTI,
    beds: 4,
    baths: 5,
    sqft: '9,200',
    tags: ['Car Lift', 'Pool']
  },
  {
    id: '3',
    title: 'Emirates Hills Sector E',
    location: 'Emirates Hills',
    price: 'AED 210M',
    image: IMAGES.FEATURED.EMIRATES_HILLS,
    beds: 8,
    baths: 10,
    sqft: '25,000',
    tags: ['Golf', 'Basement']
  }
];

export const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-20 bg-burgundy relative" id="collection">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
          <div>
            <span className="text-dune text-[10px] uppercase tracking-[0.6em] font-black block mb-6">The Collective</span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-none tracking-tight">
              Majestic <span className="text-dune italic">Coastal Jewels.</span>
            </h2>
          </div>
          <button className="text-white uppercase tracking-[0.3em] text-[10px] font-black hover:text-dune transition-all flex items-center gap-4 group">
            Browse All Assets
            <span className="block w-14 h-[2px] bg-white group-hover:w-20 group-hover:bg-dune transition-all duration-500 rounded-full" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="reveal group relative bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
              <div className="relative h-[440px] overflow-hidden m-4 rounded-[2.5rem]">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 right-8">
                   <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 group-hover:bg-dune transition-all shadow-xl">
                      <ArrowUpRight className="w-6 h-6 text-white group-hover:text-burgundy" />
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {prop.tags.map(tag => (
                       <span key={tag} className="text-[9px] uppercase tracking-[0.2em] text-white bg-white/10 backdrop-blur-xl px-4 py-1.5 border border-white/10 rounded-full font-bold">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <h3 className="text-white text-3xl font-serif leading-tight mb-2 drop-shadow-xl">{prop.title}</h3>
                   <p className="text-dune text-xl font-serif italic">{prop.price}</p>
                </div>
              </div>

              <div className="px-10 py-6 flex justify-between items-center text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-dune" />
                  {prop.location}
                </div>
                <div className="flex gap-6">
                  <span className="flex items-center gap-2"><Bed className="w-4 h-4 text-dune" /> {prop.beds}</span>
                  <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-dune" /> {prop.baths}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};