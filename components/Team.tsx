
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface Expert {
  name: string;
  role: string;
  image: string;
}

const EXPERTS: Expert[] = [
  {
    name: 'Darren Mills',
    role: 'Chief Security Strategist',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Aria Tanaka',
    role: 'AI Systems Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Leo Fernandez',
    role: 'Cloud Security Lead',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Nadya Rahim',
    role: 'Compliance & Risk Advisor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Sasha Volkov',
    role: 'Network Defense Expert',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Elena Rossi',
    role: 'Zero-Trust Architect',
    image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad9f0b?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Marcus Chen',
    role: 'Threat Hunter',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Sarah Jenkins',
    role: 'SOC Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'David Okafor',
    role: 'Forensics Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Kim Min-su',
    role: 'Security Analyst',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=600',
  },
];

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.335 2.698 8.047 6.522 9.554-.09-.806-.17-2.04.035-2.919.184-.794 1.185-5.027 1.185-5.027s-.302-.604-.302-1.498c0-1.403.813-2.451 1.826-2.451.861 0 1.276.646 1.276 1.42 0 .866-.551 2.162-.835 3.363-.238.995.497 1.806 1.481 1.806 1.777 0 3.144-1.874 3.144-4.579 0-2.393-1.72-4.067-4.177-4.067-2.846 0-4.516 2.135-4.516 4.341 0 .86.331 1.78.744 2.28.081.1.094.187.069.29-.076.315-.245.992-.278 1.132-.044.184-.144.223-.333.134-1.246-.58-2.024-2.4-2.024-3.863 0-3.145 2.285-6.033 6.587-6.033 3.458 0 6.146 2.464 6.146 5.759 0 3.435-2.167 6.199-5.174 6.199-1.01 0-1.959-.525-2.283-1.144l-.622 2.368c-.225.865-.832 1.951-1.238 2.611 1.14.331 2.344.511 3.591.511 5.672 0 10.289-4.617 10.289-10.289C22.578 6.617 17.961 2 12.289 2z"/>
  </svg>
);

const Team: React.FC = () => {
  const [rowSize, setRowSize] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setRowSize(5); 
      } else if (width >= 768) {
        setRowSize(4); 
      } else {
        setRowSize(2); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleExperts = isExpanded ? EXPERTS : EXPERTS.slice(0, rowSize);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#030303]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                Our Expert
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Meet the Cyber Architects<br /> of Axio Principle
            </h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md lg:text-right mb-6">
              Behind every defense line is a team of experts constantly thinking ahead. Our specialists combine years of experience with AI innovation.
            </p>
            <button className="hidden lg:block bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3.5 rounded-2xl font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              Meet All Expert
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {visibleExperts.map((expert, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[24px] md:rounded-[32px] p-3 md:p-4 transition-all duration-500 hover:border-[#4ade80]/30 hover:shadow-[0_20px_50px_rgba(74,222,128,0.05)] animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative aspect-[4/5] mb-4 md:mb-6 overflow-hidden rounded-[18px] md:rounded-[24px]">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Social Icons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#22c55e] hover:bg-white text-white hover:text-[#22c55e] rounded-full flex items-center justify-center transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#22c55e] hover:bg-white text-white hover:text-[#22c55e] rounded-full flex items-center justify-center transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-[#22c55e] hover:bg-white text-white hover:text-[#22c55e] rounded-full flex items-center justify-center transition-colors">
                      <PinterestIcon />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="px-1 pb-2">
                <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 md:mb-1 group-hover:text-[#4ade80] transition-colors truncate">
                  {expert.name}
                </h3>
                <p className="text-[12px] md:text-sm text-gray-500 font-medium truncate">
                  {expert.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all border border-white/10 hover:border-[#4ade80]/30"
          >
            {isExpanded ? 'Show less members' : 'View more team members'}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
