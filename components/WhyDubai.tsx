import React from 'react';
import { Landmark, Coins, TrendingUp, Crown, Key, BarChart4, Briefcase, Gem } from 'lucide-react';

const pillars = [
  {
    icon: Landmark,
    title: "Pegged Stability",
    description: "The AED is tethered to the US Dollar, ensuring your liquidity remains immune to global currency volatility."
  },
  {
    icon: Coins,
    title: "Dual-Stream Yields",
    description: "Capitalize on a market structure that offers both aggressive short-term rental yields and steady long-term appreciation."
  },
  {
    icon: TrendingUp,
    title: "Coastal Expansion",
    description: "Investing early in Dubai's shoreline ensures your portfolio value rises with the city's waterfront expansion."
  },
  {
    icon: Crown,
    title: "Strategic Residency",
    description: "The Golden Visa program grants you and your lineage a secure, 10-year foothold in the region, independent of sponsorship."
  },
  {
    icon: Key,
    title: "Absolute Ownership",
    description: "Foreign investors enjoy 100% freehold title rights, granting you perpetual and unencumbered control over your assets."
  },
  {
    icon: BarChart4,
    title: "Superior Margins",
    description: "Outperforming London and New York, Dubai delivers consistently higher net yields in both residential and commercial sectors."
  },
  {
    icon: Briefcase,
    title: "Commercial Haven",
    description: "A zero-tax corporate environment designed to accelerate enterprise growth and safeguard your operational profits."
  },
  {
    icon: Gem,
    title: "Coastal Lifestyle",
    description: "Access world-class healthcare, education, and leisure in a city built specifically for the ultra-high-net-worth individual."
  }
];

export const WhyDubai: React.FC = () => {
  return (
    <section className="relative py-16 bg-burgundy overflow-hidden" id="why-dubai">
      <div className="absolute top-0 right-0 p-12 opacity-[0.015] select-none pointer-events-none">
        <Landmark className="w-[500px] h-[500px] text-dune" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto reveal">
            <span className="text-dune text-[9px] uppercase tracking-[0.4em] font-black opacity-60">Strategic Sovereignty</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-3 mb-4 leading-tight">
              A Sanctuary for <br />
              <span className="italic text-dune">Global Wealth.</span>
            </h2>
            <div className="h-0.5 w-16 bg-white/10 mx-auto mb-4 rounded-full" />
            <p className="text-white/40 font-medium text-sm leading-relaxed">
              Dubai's shoreline represents a strategic necessity for the modern portfolio.
            </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <div key={idx} className="reveal premium-card p-6 rounded-[1.5rem] flex flex-col items-start h-full cursor-pointer group">
              <div className="w-10 h-10 bg-burgundy rounded-lg flex items-center justify-center mb-5 border border-white/5 transition-all group-hover:bg-black">
                <item.icon className="w-4 h-4 text-dune" />
              </div>
              <h3 className="text-inherit font-serif text-lg mb-2 font-bold leading-tight">{item.title}</h3>
              <p className="text-[11px] opacity-40 font-medium leading-relaxed group-hover:opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};