import React, { useState, useEffect } from 'react';
import { Menu, Search, User, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-burgundy/95 backdrop-blur-3xl py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b border-white/5'
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer z-50">
          <div className="w-10 h-10 border border-dune/20 flex items-center justify-center group-hover:bg-dune group-hover:border-dune transition-all duration-500 rounded-lg">
            <div className="w-2.5 h-2.5 bg-dune group-hover:bg-burgundy transition-all rounded-full" />
          </div>
          <div className="ml-1">
            <h1 className="font-serif text-2xl font-black tracking-[0.2em] text-white leading-none">AERIE</h1>
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-dune/40 font-black mt-1">Shoreline</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-black text-white/60">
          {['Buy', 'Rent', 'Off-Plan', 'Communities', 'Services', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-dune transition-all duration-300 relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-dune group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-dune hover:text-burgundy transition-all cursor-pointer shadow-sm group">
            <Phone className="w-3.5 h-3.5 text-dune" />
            <span className="text-[10px] tracking-[0.05em] text-white group-hover:text-burgundy font-black">+971 4 888 8888</span>
          </div>
          <div className="flex items-center gap-5">
            <Search className="w-4.5 h-4.5 text-white/40 hover:text-dune cursor-pointer transition-colors" />
            <User className="w-4.5 h-4.5 text-white/40 hover:text-dune cursor-pointer transition-colors" />
            <button className="lg:hidden p-1.5 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-dune" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};