
import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote: "We've tried three security platforms. Axio is the only one that actually adapts to our daily risk levels. Worth every dollar.",
    name: "Jordan L",
    role: "VP of Infrastructure",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    rating: 5,
    quote: "Axio helped us stop an active threat in real time. Their AI engine is faster than anything we've tested before.",
    name: "Kavya P.",
    role: "Head of Security",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    rating: 5,
    quote: "The seamless integration into our cloud stack was impressive. The daily evolution of the security protocols is a game changer.",
    name: "Marcus Chen",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    rating: 5,
    quote: "Compliance used to be a headache. Now it's automated. Axio Principles's approach to proactive defense is unmatched.",
    name: "Sarah Jenkins",
    role: "Compliance Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // We show 2 cards at a time on desktop, cycling through the list
  const getVisibleTestimonials = () => {
    const first = TESTIMONIALS[activeIndex];
    const second = TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length];
    return [first, second];
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#030303] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 mb-6 bg-black/40">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                Review
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-2xl">
              What Leaders Say About <br /> Axio Principle
            </h2>
          </div>
          <button className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-4 rounded-2xl font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(74,222,128,0.25)] w-fit">
            Talk to a Client Specialist
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Animated Testimonial Card 1 */}
          <div className="lg:col-span-4 transition-all duration-700 ease-in-out">
            <div className="h-full relative bg-[#0a0a0a] border border-[#4ade80]/30 rounded-[32px] p-8 md:p-10 flex flex-col justify-between group overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex gap-1">
                    {[...Array(visible[0].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                    ))}
                  </div>
                  <Quote className="text-white/10 group-hover:text-[#4ade80]/20 transition-colors" size={48} />
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed mb-12 font-medium opacity-90 min-h-[120px]">
                  "{visible[0].quote}"
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-4">
                <img src={visible[0].image} alt={visible[0].name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="text-white font-bold text-lg">{visible[0].name}</h4>
                  <p className="text-gray-500 text-sm">{visible[0].role}</p>
                </div>
              </div>

              {/* Subtle background glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4ade80]/5 blur-[80px] pointer-events-none" />
            </div>
          </div>

          {/* Animated Testimonial Card 2 */}
          <div className="lg:col-span-4 transition-all duration-700 ease-in-out delay-100">
            <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="flex gap-1">
                    {[...Array(visible[1].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                    ))}
                  </div>
                  <Quote className="text-white/10 group-hover:text-[#4ade80]/20 transition-colors" size={48} />
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed mb-12 font-medium opacity-90 min-h-[120px]">
                  "{visible[1].quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={visible[1].image} alt={visible[1].name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <h4 className="text-white font-bold text-lg">{visible[1].name}</h4>
                  <p className="text-gray-500 text-sm">{visible[1].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Thumbnail Section */}
          <div className="lg:col-span-4 relative group cursor-pointer h-full min-h-[380px]">
            <div className="h-full rounded-[32px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Operations Center" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)] transform transition-transform group-hover:scale-110">
                  <Play size={24} fill="white" className="ml-1 text-white" />
                </div>
              </div>

              {/* Floating Decorative Elements matching branding */}
              <div className="absolute top-6 right-6 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse delay-75" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse delay-150" />
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Indicators (Optional but helps UX) */}
        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-[#4ade80]' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
