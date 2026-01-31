import React from 'react';
import { KeyRound, TrendingUp, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-burgundy relative overflow-hidden" id="services">
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-dune text-[9px] uppercase tracking-[0.4em] font-black opacity-60">Institutional Expertise</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-4 mb-6 leading-tight tracking-tight">
              Sovereign <br />
              <span className="italic text-dune">Solutions.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-lg font-medium">
              We refine the complexities of ultra-luxury real estate into high-performance experiences. 
            </p>
            <button className="group flex items-center gap-4 px-8 py-3.5 bg-dune text-burgundy text-[9px] uppercase tracking-[0.2em] font-black hover:bg-white transition-all rounded-full shadow-lg">
              Private Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { icon: KeyRound, title: "Acquisition", desc: "Discreet procurement protocols." },
              { icon: TrendingUp, title: "Advisory", desc: "Strategic yield modeling." },
              { icon: ShieldCheck, title: "Preservation", desc: "White-glove asset management." },
              { icon: Building2, title: "Branding", desc: "Cinematic marketing production." },
            ].map((s, idx) => (
              <div key={idx} className="premium-card p-6 rounded-[1.5rem] group cursor-pointer h-full">
                 <div className="w-10 h-10 bg-burgundy rounded-lg flex items-center justify-center mb-5 border border-white/5 transition-all group-hover:bg-black">
                   <s.icon className="w-4 h-4 text-dune" />
                 </div>
                 <h3 className="text-inherit font-serif text-lg mb-2 font-bold">{s.title}</h3>
                 <p className="text-inherit opacity-40 text-[11px] leading-relaxed font-medium group-hover:opacity-80">
                   {s.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};