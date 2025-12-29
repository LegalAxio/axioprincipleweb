
import React, { useContext } from 'react';
import { AppContext } from '../App';

const MarketingServices: React.FC = () => {
  const { openContact } = useContext(AppContext);

  return (
    <section className="pt-20 pb-8 md:py-24 px-6 md:px-12 lg:px-24 bg-[#030303] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 mb-4 md:mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                Marketing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Marketing<br className="hidden sm:block" /> Services at a Glance
            </h2>
          </div>
          <div className="lg:max-w-xs xl:max-w-sm">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Scale your brand with precision. Axio Principle uses data-backed strategies and creative excellence to dominate your market category.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center p-8 sm:p-10 text-center border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
              alt="Marketing Analytics" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative z-10 flex flex-col items-center h-full justify-between py-4">
              <div className="mt-auto mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight max-w-[200px] mx-auto">
                  Lower CAC Through Smarter Digital Marketing
                </h3>
                <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-[0_0_30px_rgba(74,222,128,0.3)] transform hover:scale-105 active:scale-95">
                  Start Today
                </button>
              </div>
              <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed max-w-[280px] opacity-80">
                Optimized by machine learning to ensure every dollar of your ad spend yields maximum return on investment.
              </p>
            </div>
          </div>

          <div className="relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" 
              alt="Creative Strategy" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-8 sm:left-10 right-8 sm:right-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Driving D2C Growth With Performance Marketing
              </h3>
              <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95">
                Explore Strategy
              </button>
            </div>
          </div>

          <div className="relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#080808] border border-white/5">
            <div className="h-[45%] relative overflow-hidden m-3 sm:m-4 rounded-[20px] sm:rounded-[24px]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                alt="Growth Hacking" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 sm:p-10 pt-2 sm:pt-4 relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10 leading-tight">
                High-Conversion Lead Generation
              </h3>
              <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95">
                Get Leads
              </button>
              <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-green-600/10 blur-[60px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingServices;
