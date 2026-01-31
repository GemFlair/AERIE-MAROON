import React from 'react';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

const communities = [
  { id: 1, name: 'Palm Jumeirah', image: IMAGES.COMMUNITIES.PALM_JUMEIRAH, count: '142 Properties' },
  { id: 2, name: 'Downtown Dubai', image: IMAGES.COMMUNITIES.DOWNTOWN, count: '89 Properties' },
  { id: 3, name: 'Dubai Hills', image: IMAGES.COMMUNITIES.DUBAI_HILLS, count: '56 Properties' },
  { id: 4, name: 'Dubai Marina', image: IMAGES.COMMUNITIES.DUBAI_MARINA, count: '112 Properties' },
  { id: 5, name: 'Business Bay', image: IMAGES.COMMUNITIES.BUSINESS_BAY, count: '73 Properties' }
];

export const Communities: React.FC = () => {
  return (
    <section className="py-20 bg-burgundy border-t border-white/5" id="communities">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
           <div>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-2">Prime Communities</h2>
              <p className="text-dune/40 font-light text-sm">Explore the most sought-after addresses in the city.</p>
           </div>
           <button className="hidden md:flex items-center gap-2 text-dune text-[10px] uppercase tracking-widest hover:text-white transition-colors">
              View All Locations <ChevronRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-[500px] md:h-[350px]">
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer">
            <img 
              src={communities[0].image} 
              alt={communities[0].name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-6">
              <h3 className="text-white font-serif text-2xl group-hover:text-dune transition-colors">{communities[0].name}</h3>
              <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">{communities[0].count}</p>
            </div>
          </div>

          {communities.slice(1).map((comm) => (
            <div key={comm.id} className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={comm.image} 
                alt={comm.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-6">
                <h3 className="text-white font-serif text-lg group-hover:text-dune transition-colors">{comm.name}</h3>
                <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">{comm.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};