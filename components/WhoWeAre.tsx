
import React, { useEffect, useState, useRef } from 'react';

const ProgressBar: React.FC<{ label: string; percentage: number; isInView: boolean }> = ({ label, percentage, isInView }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(percentage), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
          {label}
        </span>
        <span className="text-[10px] sm:text-xs font-bold text-[#4ade80]">
          {percentage}%
        </span>
      </div>
      <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#4ade80] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const WhoWeAre: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#030303] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        <div className="order-1 lg:order-2 flex flex-col w-full">
          <div className="inline-block self-start px-4 py-1.5 rounded-full border border-white/10 mb-8 lg:mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
              Who We Are
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-12 lg:mb-16 max-w-xl text-white">
            At Axio Principle, We use AI and real-time intelligence to protect digital credibility through ORM, while delivering standalone marketing solutions focused on growth.
          </h2>

          <div className="max-w-md mb-12 lg:mb-20">
            <ProgressBar label="AI driven ORM solutions" percentage={90} isInView={isInView} />
            <ProgressBar label="Accelerating Brand Growth" percentage={80} isInView={isInView} />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8 relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-12 text-center lg:text-left">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-gray-500 font-medium">Links Down</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tighter">1,00,000+</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-gray-500 font-medium">Crawls</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tighter">10,00,000+</span>
              </div>
            </div>

            <div className="flex flex-col items-center w-full lg:w-40 mt-4 lg:mt-0 lg:absolute lg:-right-4 lg:-bottom-12 xl:-right-12">
              <div className="w-full h-[240px] lg:h-48 rounded-[24px] lg:rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400" 
                  alt="Axio specialist" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1 relative group w-full flex flex-col items-center lg:pt-0 pt-12">
          <div className="relative rounded-[32px] overflow-hidden aspect-video lg:aspect-[4/5] xl:aspect-square w-full">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="Cyber security team" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#22c55e]/90 hover:bg-[#22c55e] rounded-full flex items-center justify-center cursor-pointer transition-all transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(34,197,94,0.4)] border-4 border-black/20">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
