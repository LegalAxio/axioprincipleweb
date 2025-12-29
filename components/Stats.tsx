
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ value: string; duration?: number; start: boolean }> = ({ value, duration = 2000, start }) => {
  const [count, setCount] = useState(0);
  
  // Extract number and formatting
  const numericValue = parseInt(value.replace(/[,+]/g, ''), 10);
  const suffix = value.includes('+') ? '+' : '';
  const hasComma = value.includes(',');

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic function for a smooth finish
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * numericValue);
      
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [numericValue, duration, start]);

  const displayValue = hasComma 
    ? count.toLocaleString('en-US') 
    : count.toString();

  return <span>{displayValue}{suffix}</span>;
};

const Stats: React.FC = () => {
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
    <section ref={sectionRef} className="py-20 relative px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center gap-16 lg:gap-32">
        {STATS.map((stat, idx) => (
          <div 
            key={idx} 
            className={`flex items-center gap-6 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} 
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <span className="text-5xl md:text-6xl font-bold tracking-tighter">
              <CountUp value={stat.value} start={isInView} />
            </span>
            <span 
              className={`text-sm font-medium text-gray-400 uppercase tracking-[0.2em] leading-tight w-24 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                isInView ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-3 scale-90 -rotate-3'
              }`}
              style={{ transitionDelay: `${(idx * 150) + 400}ms` }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Stats;
