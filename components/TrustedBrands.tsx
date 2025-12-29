
import React from 'react';

const BRANDS = [
  { src: '/public/1.png', alt: 'New Me' },
  { src: '/public/2.png', alt: 'Oyo Rooms' },
  { src: '/public/3.png', alt: 'PropEquity' },
  { src: '/public/4.png', alt: 'Blu Smart Mobility' },
  { src: '/public/5.png', alt: 'Delhivery' },
  { src: '/public/6.png', alt: 'Chef C' },
];

const TrustedBrands: React.FC = () => {
  return (
    <section className="py-6 md:py-10 border-y border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        
        {/* Left Side: Static Text - More compact width */}
        <div className="flex-shrink-0 md:w-1/5 lg:w-[15%]">
          <p className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-center md:text-left leading-tight opacity-80">
            Strategic <br className="hidden md:block" /> 
            <span className="text-white">Partners</span>
          </p>
        </div>

        {/* Right Side: Marquee - Increased height to fit larger logos */}
        <div className="flex-grow relative overflow-hidden h-24 md:h-32 flex items-center pause-on-hover cursor-pointer group">
          {/* Mask for smooth fading on edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center gap-16 md:gap-24 animate-marquee whitespace-nowrap">
            {/* Double the array for a seamless infinite scroll */}
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 h-16 md:h-24 w-auto flex items-center justify-center transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="h-full w-auto object-contain max-w-[250px] transition-all duration-500"
                  style={{
                    // Enhanced drop shadow for visibility of black/dark logos
                    filter: 'drop-shadow(0px 4px 20px rgba(255, 255, 255, 0.12)) brightness(1.05)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/public/')) {
                      target.src = target.src.replace('/public/', '');
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
