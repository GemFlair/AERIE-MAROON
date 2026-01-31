import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
             <h2 className="font-serif text-3xl text-white mb-6">AERIE</h2>
             <p className="text-gray-500 text-sm leading-relaxed mb-6">
               The Falcon Nest. <br/>
               Elevating the standard of luxury living in Dubai and beyond.
             </p>
             <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-falcon-gold cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-falcon-gold cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-falcon-gold cursor-pointer transition-colors" />
             </div>
          </div>

          <div>
             <h4 className="text-white font-serif mb-6">Headquarters</h4>
             <p className="text-gray-500 text-sm mb-2">Unit 8808, Index Tower</p>
             <p className="text-gray-500 text-sm mb-2">DIFC, Dubai</p>
             <p className="text-gray-500 text-sm">United Arab Emirates</p>
          </div>

          <div>
             <h4 className="text-white font-serif mb-6">Services</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li className="hover:text-falcon-gold cursor-pointer transition-colors">Residential Sales</li>
                <li className="hover:text-falcon-gold cursor-pointer transition-colors">Commercial Investment</li>
                <li className="hover:text-falcon-gold cursor-pointer transition-colors">Project Development</li>
                <li className="hover:text-falcon-gold cursor-pointer transition-colors">Golden Visa Concierge</li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-serif mb-6">Newsletter</h4>
             <div className="flex border-b border-white/20 pb-2 mb-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 text-sm"
                />
                <Mail className="w-4 h-4 text-falcon-gold" />
             </div>
             <p className="text-[10px] text-gray-600">
               By subscribing, you agree to our Privacy Policy.
             </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
           <p>© 2026 AERIE REALTY. All Rights Reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-gray-400 cursor-pointer">Privacy</span>
              <span className="hover:text-gray-400 cursor-pointer">Terms</span>
              <span className="hover:text-gray-400 cursor-pointer">Sitemap</span>
           </div>
        </div>
      </div>
    </footer>
  );
};