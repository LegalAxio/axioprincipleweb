
import React, { useEffect, useState, useContext } from 'react';
import { Shield, Eye, Trash2, Search, BarChart3, Lock, CheckCircle2, Plus, Minus, MessageCircle, Star } from 'lucide-react';
import TrustedBrands from '../components/TrustedBrands';
import { AppContext } from '../App';

const FAQ_DATA = [
  { question: "How long does it take to see results in search engines?", answer: "Most clients see a measurable shift in search rankings and the suppression of negative content within 45 to 90 days, depending on the complexity of the digital footprint and the persistence of the Targeted Defamation." },
  { question: "Is content removal for Negative PR permanent?", answer: "Our legal and technical team works directly with platforms and search engines to ensure that removals are permanent and de-indexed correctly, utilizing advanced SEO and GEO techniques to maintain a clean record." },
  { question: "Do you handle personal or corporate reputations for D2C brands?", answer: "We handle both. Our systems are scalable for global D2C enterprises and specialized for high-net-worth individuals facing reputation threats." },
  { question: "How do you protect against digital Piracy and fake assets?", answer: "Confidentiality and active monitoring are our primary principles. We use AI-driven scraping to identify and remove pirated assets and unauthorized brand mentions instantly." }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 mb-2 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#4ade80] transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const OrmPage: React.FC = () => {
  const { openContact } = useContext(AppContext);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    { t: "Audit & Analysis", d: "Comprehensive analysis of your current online reputation across search engines." },
    { t: "Strategy Development", d: "Tailored defense against Targeted Defamation and digital Piracy based on your needs." },
    { t: "Implementation", d: "Execute the strategy with our proven methodologies and specialized technical tools." },
    { t: "Monitoring", d: "Continuous 24/7 monitoring and real-time response to emerging digital threats." },
    { t: "Reporting", d: "Transparent reporting with measurable KPIs and progress tracking via our dashboard." },
    { t: "Adaptation", d: "Refining strategy to reflect shifting dynamics in your specific industry vertical." }
  ];

  // Structured Data (JSON-LD) for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const plans = [
    { title: "Brand Protection & Control", price: "Custom", features: ["Content Suppression", "Crisis Shield", "Social Monitoring", "Piracy Defense"] },
    { title: "Reputation Growth", price: "Custom", features: ["Positive Asset Building", "SEO/SEM Strategy", "Trust Signals", "GEO Optimization"] },
    { title: "Crisis Management", price: "Emergency", features: ["Negative PR Cleanup", "Targeted Defamation Removal", "24/7 War Room"] },
    { title: "Custom Solutions", price: "Enterprise", features: ["D2C Growth Protocol", "Dedicated Specialist", "API Access", "Market Dominance"] }
  ];

  return (
    <div className="bg-[#030303]">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#4ade80]/10 blur-[120px] rounded-full -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content - Left Side */}
          <div className="max-w-4xl order-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#4ade80]">Reputation Defence</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-4 leading-[1] animate-in fade-in slide-in-from-bottom-8 duration-700">
              Reputation is <br /> <span className="text-[#4ade80]">Your Core Asset.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-700">
              Counter <strong>Targeted Defamation</strong> and neutralize <strong>Negative PR</strong> using advanced <strong>SEO</strong>, <strong>SEM</strong>, and <strong>GEO</strong> (Generative Engine Optimization).
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
  <button
    onClick={openContact}
    className="px-8 py-4 bg-[#4ade80] hover:bg-[#5ef095] text-black font-bold rounded-2xl shadow-[0_20px_40px_rgba(74,222,128,0.2)] transition-all transform hover:scale-105 animate-in fade-in slide-in-from-bottom-16 duration-700"
  >
    Get Free Audit
  </button>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScIFMm_GHjDZX52Yr0LGFSqAJJyNK2vtV1bLNcdU4TSxF2uNw/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-full sm:w-auto px-10 py-4 md:py-5 bg-transparent border border-[#4ade80]/30 hover:bg-[#4ade80]/5 text-[#4ade80] font-bold rounded-2xl md:rounded-[24px] transition-all active:scale-95">
      Retraction Form
    </button>
  </a>
</div>
          </div>

          {/* Graphic Content - Right Side */}
          <div className="relative w-full aspect-square max-w-sm md:max-w-md mx-auto order-2 animate-in fade-in zoom-in-95 duration-1000">
            <div className="absolute inset-0 bg-[#4ade80] rounded-full blur-[100px] opacity-10 animate-pulse" />
            <div className="relative h-full w-full border border-[#4ade80]/20 rounded-full flex items-center justify-center p-12">
               <Shield size={160} className="text-[#4ade80]/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <Star size={32} className="text-[#4ade80] mx-auto mb-4" />
                   <p className="text-xl md:text-2xl font-bold">100% Brand Control</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Brands Marquee */}
      <TrustedBrands />

      {/* Pricing Plans */}
      <section id="orm-plans" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Select Your Protection Tier</h2>
          <p className="text-gray-500">Countering <strong>Increasing CaC</strong> through brand trust and <strong>User Conversion</strong> excellence.</p>
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
                <button onClick={() => scrollToSection('orm-methodology')} className="w-full py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Importance of ORM */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">Why Online Reputation <br /> Cannot Be Ignored</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              In the digital age, your search results are your first impression. <strong>Negative PR</strong> leads to <strong>Increasing CaC</strong>, directly impacting your ROI. We specialize in protecting <strong>D2C</strong> brands from digital <strong>Piracy</strong> and narrative manipulation.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#4ade80] block mb-2">93%</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Consumers read reviews</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#4ade80] block mb-2">2.1s</span>
                <p className="text-xs text-gray-500 uppercase tracking-widest">To form a first impression</p>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-sm md:max-w-md mx-auto">
            <div className="absolute inset-0 bg-[#4ade80] rounded-full blur-[100px] opacity-10 animate-pulse" />
            <div className="relative h-full w-full border border-[#4ade80]/20 rounded-full flex items-center justify-center p-12">
               <Shield size={160} className="text-[#4ade80]/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <Star size={32} className="text-[#4ade80] mx-auto mb-4" />
                   <p className="text-xl md:text-2xl font-bold">100% Brand Control</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Why Choose Axio Principle?</h2>
          <p className="text-gray-500">The industry standard for reputation engineering and <strong>D2C</strong> growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Lock />, title: "Absolute Privacy", desc: "Your data is encrypted and handled with zero-trust protocols, protecting against Piracy." },
            { icon: <Search />, title: "AI Deep Scanning", desc: "We identify Targeted Defamation on the dark web before it impacts your User Conversion." },
            { icon: <BarChart3 />, title: "Measurable Impact", desc: "Real-time dashboards showing your Brand Trust Index (BTI) and SEO/GEO performance." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-[#0a0a0a] rounded-[32px] border border-white/5 hover:border-[#4ade80]/20 transition-all">
              <div className="w-14 h-14 bg-[#4ade80]/10 flex items-center justify-center rounded-2xl text-[#4ade80] mb-8">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready Box - Compacted */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">
  <div className="relative max-w-[1280px] mx-auto rounded-[48px] p-[3px] group">

    {/* Gradient border */}
    <div
      className="absolute inset-0 rounded-[48px] 
      bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#16a34a]
      opacity-80 group-hover:opacity-100
      blur-[2px] transition-all duration-500"
    />

    {/* Card */}
    <div className="relative rounded-[44px] bg-[#0b0f0d] text-center p-10 md:p-20 overflow-hidden">

      {/* Hover shine sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -left-1/2 top-0 w-1/2 h-full 
          bg-gradient-to-r from-transparent via-white/10 to-transparent 
          rotate-12 animate-[shine_1.2s_linear_once]" />
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
        Ready to protect your brand?
      </h2>

      <p className="text-white/65 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
        Take the first step towards a bulletproof digital reputation. Essential for{" "}
        <strong className="text-white">D2C</strong> scaling and{" "}
        <strong className="text-white">New Business Launch</strong> protection.
      </p>

      <button
        onClick={openContact}
        className="inline-flex items-center justify-center px-12 py-5 rounded-2xl
        bg-gradient-to-br from-[#4ade80] to-[#22c55e]
        text-black font-bold text-lg
        shadow-[0_20px_50px_rgba(34,197,94,0.45)]
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_30px_80px_rgba(34,197,94,0.65)]
        active:scale-95"
      >
        Start Now
      </button>
    </div>
  </div>
</section>


      {/* How it Works */}
     <section id="orm-methodology" className="py-24 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Online Reputation <span className="text-[#4ade80]">Works</span></h2>
          <p className="text-gray-500">A systematic approach to brand security.</p>
        </div>
        
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="text-[#4ade80] font-bold text-xs uppercase tracking-widest md:hidden">Step {i + 1}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.t}</h3>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{step.d}</p>
                </div>
                <div className="absolute left-[11px] md:left-1/2 w-6 h-6 -translate-x-1/2 bg-[#030303] border-2 border-[#4ade80] rounded-full z-10 shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                   <div className="absolute inset-0 m-auto w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                </div>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className="text-[#4ade80] text-lg font-bold uppercase tracking-[0.3em]">Step {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Form Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Request a Free <br /> Consultation</h2>
            <p className="text-gray-400 mb-12">Speak with a <strong>Digital Marketing</strong> and <strong>PR</strong> specialist today. Secure your brand's future.</p>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#4ade80]/10 flex items-center justify-center rounded-xl text-[#4ade80]"><Shield /></div>
                 <div><p className="font-bold">Immediate Privacy</p><p className="text-xs text-gray-500">Your inquiry is encrypted.</p></div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#4ade80]/10 flex items-center justify-center rounded-xl text-[#4ade80]"><MessageCircle /></div>
                 <div><p className="font-bold">24/7 Response</p><p className="text-xs text-gray-500">Our team is always on standby for Crisis Management.</p></div>
               </div>
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
                 <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
               </div>
               <input type="email" placeholder="Professional Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none" />
               <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none text-gray-400">
                 <option>Reputation Protection (ORM)</option>
                 <option>Reputation Growth (SEO/GEO)</option>
                 <option>Crisis Management (Targeted Defamation)</option>
                 <option>D2C Scaling & Marketing</option>
               </select>
               <textarea placeholder="Tell us about your situation" rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#4ade80] outline-none resize-none"></textarea>
               <button onClick={openContact} className="w-full py-5 bg-[#4ade80] text-black font-bold rounded-xl hover:bg-[#5ef095] transition-all">Submit Request</button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrmPage;
