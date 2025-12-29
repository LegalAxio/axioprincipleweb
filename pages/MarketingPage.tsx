
import React, { useEffect, useState, useContext } from 'react';
import { Rocket, Target, Zap, BarChart, Globe, TrendingUp, CheckCircle2, Plus, Minus, Search, Share2, MousePointer2 } from 'lucide-react';
import TrustedBrands from '../components/TrustedBrands';
import { AppContext } from '../App';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 mb-2 overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex justify-between items-center text-left hover:text-[#4ade80] transition-colors">
        <span className="text-lg font-semibold pr-8">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const MarketingPage: React.FC = () => {
  const { openContact } = useContext(AppContext);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    { title: "Performance Marketing", price: "Scale Up", features: ["Meta & Google Ads", "ROAS Optimization", "Creative Studio", "D2C Scaling"] },
    { title: "Brand Engineering", price: "Market Lead", features: ["Category Creation", "PR & Visibility", "Brand Identity", "PR Strategy"] },
    { title: "Growth Infrastructure", price: "Foundational", features: ["Conversion Funnels", "CRM Implementation", "User Conversion", "Data Analytics"] },
    { title: "Fractional CMO", price: "Strategic", features: ["Growth Consulting", "Business Consulting", "New Business Launch", "Team Leadership"] }
  ];

  return (
    <div className="bg-[#030303]">
      {/* Hero Section - Compacted for First Screen visibility */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4ade80]/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#4ade80]">Precision Growth Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1]">
            Scale Without <br /> <span className="text-[#4ade80]">Boundaries.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-8 max-w-2xl">
            Axio Principle combines <strong>Performance Marketing</strong> with deep creative strategy to build <strong>D2C</strong> brands that dominate categories. Specialists in <strong>EdTech</strong>, <strong>PropTech</strong>, and <strong>Growth Consulting</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={openContact} className="px-8 py-4 bg-[#4ade80] hover:bg-[#5ef095] text-black font-bold rounded-2xl shadow-[0_20px_40px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105">Request Growth Audit</button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <TrustedBrands />

      {/* Plans */}
      <section id="marketing-plans" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Choose Your Growth Path</h2>
          <p className="text-gray-500">Expert <strong>Business Consulting</strong> and <strong>Performance Marketing</strong> tailored for your market stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[32px] flex flex-col hover:border-[#4ade80]/30 transition-all group">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-[#4ade80] text-sm font-bold mb-8 uppercase tracking-widest">{plan.price}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-[#4ade80]" /> {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <button onClick={openContact} className="w-full py-4 bg-[#4ade80] text-black font-bold rounded-xl hover:bg-[#5ef095] transition-all">Start Today</button>
                <button onClick={() => scrollToSection('marketing-methodology')} className="w-full py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Growth is the Only <br /> Metric That Matters</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">Most marketing agencies focus on clicks. We focus on ROI and <strong>User Conversion</strong>. Our methodology is built on 400+ data points, integrated via <strong>CRM</strong>, to ensure your cost per acquisition stays low as you scale your <strong>New Business Launch</strong>.</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#4ade80] block mb-2">5.2x</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Average Ad ROAS</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#4ade80] block mb-2">-40%</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Reduction in CAC</p>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-sm md:max-w-md mx-auto">
            <div className="absolute inset-0 bg-[#4ade80] rounded-full blur-[100px] opacity-10 animate-pulse" />
            <div className="relative h-full w-full border border-[#4ade80]/20 rounded-full flex items-center justify-center p-12">
               <TrendingUp size={160} className="text-[#4ade80]/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <Zap size={32} className="text-[#4ade80] mx-auto mb-4" />
                   <p className="text-xl md:text-2xl font-bold">Exponential Scaling</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Why Growth with Axio?</h2>
          <p className="text-gray-500">Unlocking sustainable, profitable market dominance for <strong>PropTech</strong> and <strong>EdTech</strong> leaders.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Target />, title: "Precision Targeting", desc: "Using AI to find your highest-intent customers instantly and drive User Conversion." },
            { icon: <Zap />, title: "Agile Creative", desc: "Constant A/B testing of visuals for D2C brands to hit peak engagement." },
            { icon: <BarChart />, title: "CRM & ROI Tracking", desc: "Transparent CRM dashboards showing every dollar's performance in real-time." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-[#0a0a0a] rounded-[32px] border border-white/5 hover:border-[#4ade80]/20 transition-all">
              <div className="w-14 h-14 bg-[#4ade80]/10 flex items-center justify-center rounded-2xl text-[#4ade80] mb-8">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section id="marketing-methodology" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">The Growth Protocol</h2>
          <p className="text-gray-500">Our systemic approach to scaling <strong>D2C</strong> and <strong>B2B</strong> brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-12 relative">
          {[
            { s: "Phase 1", t: "Discovery & Audit", d: "Analysis of market gaps, competitor ROAS, and current funnel leaks using SEO intelligence." },
            { s: "Phase 2", t: "Strategy Engine", d: "Developing the 12-month Growth Consulting roadmap with clear KPIs." },
            { s: "Phase 3", t: "Creative Ops", d: "High-volume Performance Marketing asset production for constant testing." },
            { s: "Phase 4", t: "CRM Integration", d: "Deploying deep CRM tracking for maximum User Conversion transparency." },
            { s: "Phase 5", t: "ROI Reporting", d: "Weekly transparency meetings on profit margins and D2C growth." },
            { s: "Phase 6", t: "Market Expansion", d: "Scaling successful formulas across new regions using PR and SEO." }
          ].map((step, i) => (
            <div key={i} className="relative group">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#4ade80] block mb-4">{step.s}</span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#4ade80] transition-colors">{step.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation - More Compact */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#4ade80]">Scale Faster. <br /> Pay Less per Lead.</h2>
            <p className="text-gray-400 mb-12">Our growth team is ready to analyze your current strategy. Let's find the missing links in your <strong>Digital Marketing</strong>.</p>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#4ade80]/10 flex items-center justify-center rounded-xl text-[#4ade80]"><Rocket /></div>
                 <div><p className="font-bold">Fast Scaling</p><p className="text-xs text-gray-500">Go from local to global in months.</p></div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#4ade80]/10 flex items-center justify-center rounded-xl text-[#4ade80]"><Zap /></div>
                 <div><p className="font-bold">Immediate ROI</p><p className="text-xs text-gray-500">Optimizing for cash flow from day one.</p></div>
               </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[40px]">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
               <input type="email" placeholder="Professional Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
               <input type="text" placeholder="Monthly Ad Spend" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
               <textarea placeholder="Your Growth Goals" rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none resize-none"></textarea>
               <button onClick={openContact} className="w-full py-5 bg-[#4ade80] text-black font-bold rounded-xl hover:bg-[#5ef095] transition-all">Request Growth Audit</button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;
