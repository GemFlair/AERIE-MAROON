import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../constants';

const projects = [
  {
    title: "Mercedes-Benz Places",
    developer: "Binghatti",
    location: "Downtown Dubai",
    price: "From AED 8.8M",
    image: IMAGES.OFF_PLAN.MERCEDES
  },
  {
    title: "The Oasis",
    developer: "Emaar",
    location: "Dubailand",
    price: "From AED 8.1M",
    image: IMAGES.OFF_PLAN.OASIS
  },
  {
    title: "Casa Canal",
    developer: "AHS Properties",
    location: "Dubai Water Canal",
    price: "From AED 22.5M",
    image: IMAGES.OFF_PLAN.CASA_CANAL
  }
];

export const OffPlanProjects: React.FC = () => {
  return (
    <section className="py-24 bg-coastal-deep relative" id="off-plan">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coastal-teal text-xs uppercase tracking-[0.3em]">New Coastal Launches</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mt-4 mb-6">Off-Plan <span className="italic text-coastal-sand sand-glow">Masterpieces</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Secure your future in Dubai's most ambitious shoreline marvels. 
            Direct access to developer inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coastal-deep via-coastal-deep/20 to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 bg-coastal-teal text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
                Launching Soon
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-coastal-teal text-xs uppercase tracking-widest mb-2">{project.developer}</p>
                 <h3 className="text-white font-serif text-3xl mb-2">{project.title}</h3>
                 <p className="text-gray-400 text-sm mb-4">{project.location}</p>
                 
                 <div className="w-full h-px bg-white/20 mb-4" />
                 
                 <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{project.price}</span>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-coastal-teal group-hover:border-coastal-teal group-hover:text-white transition-colors">
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};