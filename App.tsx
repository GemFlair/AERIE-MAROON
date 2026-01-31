import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyDubai } from './components/WhyDubai';
import { AboutUs } from './components/AboutUs';
import { Values } from './components/Values';
import { TheStandard } from './components/TheStandard';
import { Communities } from './components/Communities';
import { FeaturedProperties } from './components/FeaturedProperties';
import { TrustedPartners } from './components/TrustedPartners';
import { OffPlanProjects } from './components/OffPlanProjects';
import { Services } from './components/Services';
import { FalconVision } from './components/FalconVision';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-burgundy text-dune font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyDubai />
      <AboutUs />
      <Values />
      <TheStandard />
      
      <Services />
      
      <FalconVision />
      <Communities />
      <FeaturedProperties />
      
      <TrustedPartners />
      <OffPlanProjects />
      
      {/* Call to Action Bar - Compact & High Contrast */}
      <section className="py-20 bg-black text-dune border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
           <div>
             <h3 className="font-serif text-3xl md:text-5xl font-bold mb-3 text-white">Your Legacy Awaits.</h3>
             <p className="text-dune/50 font-medium text-lg max-w-lg">
               Access exclusive 'Ghost Inventory'—private assets for the world's most discerning families.
             </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
             <button className="px-10 py-4 bg-burgundy text-dune uppercase tracking-[0.2em] text-[10px] font-black hover:bg-white hover:text-burgundy transition-all duration-500 rounded-full border border-white/10">
               List Your Asset
             </button>
             <button className="px-10 py-4 bg-transparent border border-dune text-dune uppercase tracking-[0.2em] text-[10px] font-black hover:bg-dune hover:text-burgundy transition-all duration-500 rounded-full">
               Contact Office
             </button>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;