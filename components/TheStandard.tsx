import React from 'react';
import { Clock, Shield, Gem, Video, Users, Scale, MessageCircle, ArrowRight } from 'lucide-react';

const standards = [
  {
    icon: Clock,
    title: "24/7 Private Office",
    desc: "Our senior advisors are accessible around the clock for your global requirements, beyond local hours."
  },
  {
    icon: Users,
    title: "Senior Board Advisory",
    desc: "Every mandate is overseen by a Director-level consultant with exhaustive market tenure."
  },
  {
    icon: Gem,
    title: "Off-Market Collective",
    desc: "Access the 'Ghost Inventory'—Dubai's most exclusive assets available only through our private network."
  },
  {
    icon: Scale,
    title: "Rigorous Governance",
    desc: "Institutional-grade transparency ensuring your capital is protected by solid legal frameworks."
  },
  {
    icon: Video,
    title: "Cinematic Branding",
    desc: "We don't just list properties; we launch them with world-class cinematic architectural productions."
  },
  {
    icon: Shield,
    title: "Bespoke Concierge",
    desc: "A full-spectrum service from residency acquisition to high-end interior procurement."
  }
];

export const TheStandard: React.FC = () => {
  return (
    <section className="py-32 bg-burgundy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 reveal">
           <span className="text-dune text-[11px] uppercase tracking-[0.65em] font-black">The AERIE Standard</span>
           <h2 className="font-serif text-5xl md:text-7xl text-white mt-8 mb-10 leading-tight">
             Beyond the <br />
             <span className="text-dune italic">Horizon.</span>
           </h2>
           <div className="h-2 w-24 bg-dune mx-auto mb-10 rounded-full" />
           <p className="text-white/60 font-medium leading-relaxed mb-12 text-2xl max-w-2xl mx-auto">
             In a shoreline market flooded with noise, we deliver the silence of strategic certainty. 
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <button className="w-full sm:w-auto min-w-[280px] flex items-center justify-center gap-5 bg-obsidian text-dune px-12 py-5 uppercase tracking-[0.25em] text-[11px] font-black hover:bg-coastal-teal transition-all duration-500 rounded-full shadow-2xl">
               <MessageCircle className="w-5 h-5" />
               Direct WhatsApp
             </button>
             <button className="w-full sm:w-auto min-w-[280px] flex items-center justify-center gap-5 border-2 border-white/20 text-white px-12 py-5 uppercase tracking-[0.25em] text-[11px] font-black hover:bg-dune hover:text-burgundy transition-all duration-500 rounded-full">
               View Credentials
               <ArrowRight className="w-5 h-5" />
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {standards.map((item, idx) => (
             <div key={idx} className="reveal group p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700">
                <div className="w-16 h-16 bg-dune rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-coastal-teal transition-all">
                   <item.icon className="w-7 h-7 text-burgundy group-hover:text-white transition-all" />
                </div>
                <h3 className="text-white font-serif text-2xl mb-5 font-bold group-hover:text-dune transition-colors leading-tight">{item.title}</h3>
                <p className="text-[14px] text-white/50 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};