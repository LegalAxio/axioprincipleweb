
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Services: React.FC = () => {
  const { openContact } = useContext(AppContext);

  return (
    <section className="pt-20 pb-8 md:py-24 px-6 md:px-12 lg:px-24 bg-[#030303]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 mb-4 md:mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Our Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Our ORM<br className="hidden sm:block" /> Services at a Glance</h2>
          </div>
          <div className="lg:max-w-xs xl:max-w-sm">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              From real-time threat response to zero-trust infrastructure Axio Principle delivers smart, scalable protection built to adapt every single day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="order-1 md:order-2 relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center p-8 sm:p-10 text-center border border-white/5">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="AI Core" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col items-center h-full justify-between py-4">
              <div className="mt-auto mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight max-w-[200px] mx-auto">Advanced AI Scraping & Reputation Intelligence</h3>
                <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-[0_0_30px_rgba(74,222,128,0.3)] transform hover:scale-105 active:scale-95">Get Started</button>
              </div>
              <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed max-w-[280px] opacity-80">Our system evolves with every data point—learning from new threats and improving protection every day.</p>
            </div>
          </div>

          <div className="order-2 md:order-1 relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#111]">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Security Center" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-8 sm:left-10 right-8 sm:right-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">End-to-End Brand Trust & Visibility Control</h3>
              <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95">Get Started</button>
            </div>
          </div>

          <div className="order-3 relative group h-[420px] sm:h-[480px] lg:h-[500px] rounded-[32px] overflow-hidden bg-[#080808] border border-white/5">
            <div className="h-[45%] relative overflow-hidden m-3 sm:m-4 rounded-[20px] sm:rounded-[24px]">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" alt="Monitoring" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 sm:p-10 pt-2 sm:pt-4 relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10 leading-tight">Transparent Reporting, Insights & Measurable Results</h3>
              <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
