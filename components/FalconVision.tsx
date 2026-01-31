import React from 'react';
import { TrendingUp, ShieldCheck, Globe, Activity } from 'lucide-react';

export const FalconVision: React.FC = () => {
  return (
    <section className="py-24 bg-coastal-deep relative overflow-hidden" id="falcon-vision">
      {/* Background Abstract Elements (Teal to transparent) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coastal-teal/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-coastal-teal/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-coastal-teal" />
            <span className="text-coastal-teal uppercase tracking-[0.2em] text-sm">Falcon Vision™</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
            Coastal Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coastal-teal to-coastal-sand">
              Beyond the Tide.
            </span>
          </h2>

          <p className="text-gray-400 font-light text-lg mb-10 leading-relaxed">
            Our proprietary AI-driven analytics platform provides predictive insights into Dubai's ultra-luxury coastal sector. 
            We forecast the trajectory of your investment with maritime precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Predictive ROI", desc: "AI-modeled appreciation forecasts." },
              { icon: ShieldCheck, title: "Asset Security", desc: "Blockchain-verified title capabilities." },
              { icon: Globe, title: "Global Reach", desc: "Instant exposure to 40+ countries." },
              { icon: Activity, title: "Live Valuation", desc: "Real-time market pulse tracking." },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 border border-white/5 hover:bg-coastal-teal/5 hover:border-coastal-teal/30 transition-all duration-300 group">
                <feature.icon className="w-6 h-6 text-coastal-teal group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Data Representation */}
        <div className="relative">
           <div className="aspect-square relative z-10 bg-coastal-deep/80 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div>
                    <h3 className="text-white text-3xl font-serif">AED 2.4B</h3>
                    <p className="text-coastal-teal text-xs uppercase tracking-widest mt-1">Transaction Volume</p>
                 </div>
                 <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-coastal-teal animate-pulse" />
                    <span className="text-[10px] text-coastal-teal uppercase">Live</span>
                 </div>
              </div>

              {/* Fake Graph Lines */}
              <div className="h-40 flex items-end justify-between gap-2 opacity-50">
                 {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95].map((h, i) => (
                    <div key={i} className="w-full bg-gradient-to-t from-coastal-teal to-transparent" style={{ height: `${h}%` }} />
                 ))}
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Palm Jumeirah</span>
                    <span className="text-white">+12.4%</span>
                 </div>
                 <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Dubai Marina</span>
                    <span className="text-white">+8.1%</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Emaar Beachfront</span>
                    <span className="text-white">+15.2%</span>
                 </div>
              </div>
           </div>
           
           {/* Decorative Border */}
           <div className="absolute -top-4 -right-4 w-full h-full border border-coastal-teal/30 z-0" />
        </div>
      </div>
    </section>
  );
};