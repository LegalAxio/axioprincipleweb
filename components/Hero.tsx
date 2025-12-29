
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Hero: React.FC = () => {
  const { openContact } = useContext(AppContext);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden pt-24 pb-12">
      
      {/* Background Visual Layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -right-[10%] top-[10%] w-[120%] md:w-[80%] h-[120%] md:h-[100%] glow-massive animate-pulse-slow rounded-full z-0" />
        <div className="absolute right-[-10%] top-[15%] w-[1000px] h-[1000px] rounded-full border border-green-500/10 rotate-[20deg] z-10 hidden md:block" />
        <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_15px_#4ade80] z-20 hidden md:block" />
        <div className="absolute -left-[20%] -bottom-[10%] w-[800px] h-[800px] rounded-full border border-green-500/5 z-0" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center relative z-30">
        
        {/* Left Column */}
        <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start gap-12 md:gap-32 mb-12 md:mb-0">
          <div className="flex items-center w-full">
            <div className="relative group cursor-pointer" onClick={openContact}>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#22c55e] rounded-full flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(34,197,94,0.5)]">
                <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1" />
              </div>
              <div className="absolute -inset-2 rounded-full border border-green-500/10 transition-opacity opacity-0 group-hover:opacity-100" />
            </div>
            <div className="h-[1px] flex-grow bg-white/10 ml-6 md:ml-10 hidden sm:block" />
          </div>

          <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="text-[10px] md:text-[12px] tracking-[0.5em] text-gray-500 font-bold uppercase block whitespace-nowrap">
              Adaptive Performance.
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start lg:pl-16">
          
          <div className="relative inline-block mb-8 group animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-[#4ade80]/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center px-5 py-2 rounded-full bg-[#030303]/80 backdrop-blur-xl border border-white/5 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mr-3 animate-pulse shadow-[0_0_8px_#4ade80]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-extrabold text-gray-300">
                Axio Principle <span className="text-[#4ade80] ml-1">No. #1</span> in Brand Protection
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4 leading-[1.05] text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Solving Growth<br />
            <span className="text-white">Fundamentally.</span>
          </h1>

          <div className="mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150">
            <p className="text-[#4ade80] font-bold text-lg md:text-2xl tracking-[0.1em] uppercase">
              ORM <span className="text-white/20 px-2">|</span> Marketing <span className="text-white/20 px-2">|</span> Growth
            </p>
          </div>
          
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            AI-driven protection that learns, adapts, and grows stronger every single day—so you stay one step ahead of every digital threat.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <button onClick={openContact} className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#4ade80] hover:bg-[#5ef095] text-black font-bold rounded-2xl md:rounded-[24px] transition-all hover:scale-105 shadow-[0_10px_40px_rgba(74,222,128,0.25)] active:scale-95">
              Get Protected Today
            </button>
            <button className="w-full sm:w-auto px-10 py-4 md:py-5 bg-transparent border border-[#4ade80]/30 hover:bg-[#4ade80]/5 text-[#4ade80] font-bold rounded-2xl md:rounded-[24px] transition-all active:scale-95">
              How Axio Principle Works?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
