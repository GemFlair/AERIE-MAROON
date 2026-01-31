import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-burgundy relative overflow-hidden" id="about">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative order-2 lg:order-1 reveal">
               <div className="relative z-10 rounded-[3rem] shadow-2xl overflow-hidden aspect-[1.1/1] lg:aspect-[4/5] group border-[12px] border-white/5">
                 <img 
                   src={IMAGES.SECTIONS.ABOUT_US} 
                   alt="Aerie Coastal Heritage" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                 />
               </div>
               
               <div className="absolute bottom-10 -right-6 lg:-right-12 bg-dune p-8 shadow-2xl z-20 max-w-[220px] rounded-[2rem] border-4 border-burgundy reveal">
                  <h3 className="text-5xl font-serif text-burgundy mb-1 leading-none">20+</h3>
                  <div className="h-1 w-12 bg-burgundy/20 mb-4 rounded-full" />
                  <p className="text-burgundy text-[9px] uppercase tracking-[0.3em] leading-relaxed font-black">
                    Years of <br /><span className="text-coastal-teal">Shoreline Legacy</span>
                  </p>
               </div>
            </div>

            <div className="relative order-1 lg:order-2 reveal">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-14 bg-dune/40" />
                  <span className="text-dune uppercase tracking-[0.4em] text-[10px] font-black">The Institution</span>
               </div>

               <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                 Architects of <br />
                 <span className="italic text-dune">Majestic Living.</span>
               </h2>

               <p className="text-white/60 font-medium text-lg leading-relaxed mb-8">
                 AERIE REALTY represents the confluence of desert heritage and royal shoreline standards. We curate the horizon for the world's most discerning families.
               </p>

               <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                     <div className="mt-1 w-10 h-10 bg-dune rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-burgundy" />
                     </div>
                     <div>
                        <h4 className="text-white font-serif text-xl font-bold">Bespoke Coastal Advisory</h4>
                        <p className="text-sm text-white/50 mt-1 font-medium leading-relaxed">Tailored strategies for sovereign property acquisition.</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                     <div className="mt-1 w-10 h-10 bg-dune rounded-xl flex items-center justify-center">
                         <CheckCircle2 className="w-5 h-5 text-burgundy" />
                     </div>
                     <div>
                        <h4 className="text-white font-serif text-xl font-bold">Elite Asset Discovery</h4>
                        <p className="text-sm text-white/50 mt-1 font-medium leading-relaxed">Exclusive entry to private off-market inventory.</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-12">
                 <button className="px-10 py-4 bg-dune text-burgundy uppercase tracking-[0.25em] text-[10px] font-black hover:bg-white transition-all duration-500 rounded-full shadow-xl">
                   Explore Heritage
                 </button>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
};