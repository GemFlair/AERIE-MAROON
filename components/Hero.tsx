import React, { useState, useEffect } from 'react';
import { ArrowDown, Search, Home, ChevronDown, Check } from 'lucide-react';
import { IMAGES } from '../constants';

const PROPERTY_TYPES = ['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Duplex', 'Plot'];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Property Type');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.HERO.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center bg-burgundy !p-0">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div 
          className="flex h-full transition-transform duration-[3000ms] ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {IMAGES.HERO.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
               <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ultra-Deep Overlay */}
      <div className="absolute inset-0 z-0 bg-regal-overlay pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-burgundy via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 w-full mt-[-2vh] reveal active">
        <h1 className="font-serif text-4xl md:text-[5.5rem] text-white font-bold leading-[1.05] mb-5 text-glow tracking-tighter">
          Shoreline <br />
          <span className="italic text-dune font-medium">Masterpieces.</span>
        </h1>

        <p className="font-sans text-dune/60 text-[10px] md:text-sm font-bold tracking-[0.5em] max-w-2xl mx-auto mb-8 uppercase opacity-80">
          Dubai's Ultimate Off-Market Real Estate Collective
        </p>

        {/* Search Widget */}
        <div className="bg-burgundy/80 backdrop-blur-3xl border border-white/5 p-2 rounded-[1.5rem] max-w-3xl mx-auto shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
          <div className="flex gap-1.5 mb-1.5 p-0.5">
            {['buy', 'rent', 'off-plan'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-[8px] uppercase tracking-[0.3em] font-black rounded-xl transition-all duration-500 ${
                  activeTab === tab
                    ? 'bg-dune text-burgundy shadow-lg'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 bg-white/5 p-1.5 rounded-[1.2rem]">
            <div className="relative group md:col-span-2">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Search className="w-3.5 h-3.5 text-dune/30 group-focus-within:text-dune" />
              </div>
              <input 
                type="text" 
                placeholder="Where would you like to reside?" 
                className="w-full h-10 bg-white/5 text-white pl-10 pr-4 rounded-lg text-[11px] border border-transparent focus:border-dune/20 outline-none placeholder-white/10 transition-all font-medium"
              />
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsTypeOpen(!isTypeOpen)}
                className={`w-full h-10 flex items-center justify-between px-4 rounded-lg text-[11px] border transition-all outline-none ${
                  isTypeOpen 
                    ? 'bg-white/10 border-dune text-white' 
                    : 'bg-white/5 border-transparent text-white/50 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Home className={`w-3.5 h-3.5 ${isTypeOpen ? 'text-dune' : 'text-white/20'}`} />
                  <span className="truncate font-bold uppercase tracking-widest text-[8px]">{selectedType}</span>
                </div>
                <ChevronDown className={`w-3 h-3 transition-transform ${isTypeOpen ? 'rotate-180 text-dune' : 'text-white/20'}`} />
              </button>

              <div className={`absolute top-full left-0 right-0 mt-1.5 bg-[#1A0304] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 transition-all origin-top transform ${
                isTypeOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                {PROPERTY_TYPES.map((type) => (
                  <div 
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsTypeOpen(false);
                    }}
                    className="px-4 py-2 text-[8px] font-black uppercase tracking-widest text-white/50 hover:bg-dune hover:text-burgundy transition-all cursor-pointer flex items-center justify-between"
                  >
                    {type}
                    {selectedType === type && <Check className="w-3 h-3 text-dune" />}
                  </div>
                ))}
              </div>
            </div>

            <button className="h-10 bg-dune text-burgundy font-black uppercase tracking-[0.25em] text-[8px] rounded-lg hover:bg-white transition-all shadow-md">
              Search Collective
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 animate-bounce cursor-pointer">
        <ArrowDown className="w-3.5 h-3.5 text-dune" />
      </div>
    </section>
  );
};