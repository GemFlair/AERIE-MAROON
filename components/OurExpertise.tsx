import React from 'react';
import { KeyRound, TrendingUp, FileText, ArrowRight } from 'lucide-react';

const expertise = [
  {
    icon: KeyRound,
    title: "Brokerage & Acquisition",
    description: "We facilitate the seamless acquisition and disposition of trophy assets, ensuring complete privacy and expedited transaction protocols for our elite clientele.",
    link: "#contact"
  },
  {
    icon: TrendingUp,
    title: "Strategic Wealth Advisory",
    description: "Whether constructing a diverse portfolio or seeking high-yield singular assets, we provide algorithmic market insights to maximize your capital appreciation.",
    link: "#contact"
  },
  {
    icon: FileText,
    title: "Concierge Asset Management",
    description: "A white-glove approach to asset preservation. From tenant curation to rigorous maintenance, we ensure your portfolio remains a passive, high-performing instrument.",
    link: "#contact"
  }
];

export const OurExpertise: React.FC = () => {
  return (
    <section className="py-28 bg-zinc-950 relative overflow-hidden" id="expertise">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-falcon-gold/20 blur-[120px] rounded-full" />
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
       </div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Expertise</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Precision in every transaction. We focus on what matters most — delivering 
              <span className="text-white"> sovereign real estate solutions</span> that secure your legacy.
            </p>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 flex flex-col items-center text-center rounded-sm hover:border-falcon-gold/50 hover:bg-white/10 transition-all duration-500 cursor-pointer">
                 
                 {/* Icon */}
                 <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-falcon-gold group-hover:text-obsidian group-hover:border-falcon-gold transition-all duration-500">
                    <item.icon className="w-8 h-8 text-gray-300 group-hover:text-obsidian transition-colors duration-500" />
                 </div>

                 {/* Title */}
                 <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-falcon-gold transition-colors duration-300">
                   {item.title}
                 </h3>

                 {/* Description */}
                 <p className="text-gray-500 font-light text-sm leading-relaxed mb-10 min-h-[80px] group-hover:text-gray-300 transition-colors">
                   {item.description}
                 </p>

                 {/* Learn More Link */}
                 <div className="mt-auto pt-6 border-t border-white/5 w-full flex justify-center">
                    <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-falcon-gold font-semibold group-hover:gap-4 transition-all duration-300">
                       Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};