import React from 'react';
import { IMAGES } from '../constants';

export const Values: React.FC = () => {
  return (
    <section className="py-24 bg-coastal-deep relative overflow-hidden" id="values">
      {/* Background Watermark/Text - Subtle Teal */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-serif text-coastal-teal/[0.03] whitespace-nowrap pointer-events-none select-none">
        VISIONARY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            Our Values and <span className="text-coastal-teal italic">Coastal Vision</span>
          </h2>
          <div className="h-1 w-24 bg-coastal-sand mx-auto mt-6 rounded-full opacity-30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Abstract Architectural/Model */}
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-sm border border-white/5 relative">
              <img 
                src={IMAGES.SECTIONS.VALUES} 
                alt="Architectural Vision" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coastal-deep/30 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-coastal-teal/30 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-coastal-teal/30 hidden md:block" />
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              At <span className="text-coastal-teal font-medium">AERIE REALTY</span>, exceptional service is not merely a promise; it is our signature. We operate at the intersection of heritage and innovation, ensuring every interaction is as fluid as the tides.
            </p>

            <p className="text-gray-400 font-light leading-relaxed">
              With over two decades of immersion in Dubai's coastal landscape—spanning construction, pre-sales, and high-yield waterfront acquisition—our team brings a wealth of institutional knowledge to every consultation.
            </p>

            <p className="text-gray-400 font-light leading-relaxed">
              Having observed Dubai’s unparalleled growth from a desert outpost to a global metropolis, we understand the nuances of the shore like no other. Leveraging extensive industry networks and cultural insights, we stay ahead of trends.
            </p>

            <p className="text-gray-400 font-light leading-relaxed border-l-2 border-coastal-teal pl-6 italic">
              "We believe that each client deserves tailor-made solutions and unwavering support throughout their journey on our shores."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};