
import React, { useEffect } from 'react';
import { Shield, Target, Users, Globe, Zap, Award, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import Team from '../components/Team';

const AboutPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#030303]">
      {/* Hero Section - Axio Principle Identity */}
      <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4ade80]/5 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 mb-8">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#4ade80]">The Axio Principle</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] text-white">
          Beyond Protection.<br />
          <span className="text-[#4ade80]">Pure Evolution.</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Axio Principle is a high-intelligence firm specializing in the intersection of digital reputation defense and aggressive brand scaling.
        </p>
      </section>

      {/* What We Do - Dual Focus */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">What We Do</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We operate at the highest level of digital complexity. Our firm provides a dual-engine approach to business success:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                <Shield className="text-[#4ade80] flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Digital Defense (ORM)</h4>
                  <p className="text-gray-500 text-sm">Neutralizing defamation, suppressing negative PR, and engineering search engine narratives for high-profile entities.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                <Target className="text-[#4ade80] flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Growth Engineering</h4>
                  <p className="text-gray-500 text-sm">Building category-dominant D2C brands through performance marketing, CRM optimization, and scale-ready infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[48px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover opacity-60" 
              alt="High Tech Defense" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />)}
              </div>
              <p className="text-white font-bold text-2xl">Adaptive Intelligence in Real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-[#0a0a0a] rounded-[48px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/10 blur-3xl rounded-full" />
            <Shield className="text-[#4ade80] mb-8" size={48} />
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To provide individuals and enterprises with an unbreakable digital shield, ensuring their reputation reflects their true excellence, regardless of the digital noise.
            </p>
          </div>
          <div className="p-12 bg-[#0a0a0a] rounded-[48px] border border-white/5 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4ade80]/10 blur-3xl rounded-full" />
            <Target className="text-[#4ade80] mb-8" size={48} />
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              A world where growth is fundamental and digital credibility is a verified asset, protected by intelligence and driven by radical transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Tale of Clients - Stories of Success */}
      <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Tale of <span className="text-[#4ade80]">Clients</span></h2>
            <p className="text-gray-500">The human impact of Axio Principle strategies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 relative">
              <Star className="text-[#4ade80] mb-6" size={24} />
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "When a coordinated smear campaign threatened our IPO, Axio didn't just suppress the noise—they built a fortress of positive data that silenced the skeptics permanently."
              </p>
              <div>
                <h5 className="font-bold text-white">James C.</h5>
                <p className="text-xs text-gray-500 uppercase tracking-widest">FinTech Founder</p>
              </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 relative">
              <Star className="text-[#4ade80] mb-6" size={24} />
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "We were stuck at $50k MRR for years. Axio's Growth Protocol identified the leakage in our CRM and optimized our CAC. We hit $250k MRR in four months."
              </p>
              <div>
                <h5 className="font-bold text-white">Sarah T.</h5>
                <p className="text-xs text-gray-500 uppercase tracking-widest">D2C Beauty Brand CEO</p>
              </div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 relative">
              <Star className="text-[#4ade80] mb-6" size={24} />
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "Public figures are targets. Axio Principle provides a level of executive privacy and reputation control that is simply unmatched in the digital market."
              </p>
              <div>
                <h5 className="font-bold text-white">Elena R.</h5>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Executive Risk Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">Case Studies</h2>
          <p className="text-gray-500 mt-4 italic">Measured Performance. Proven Results.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* ORM Case Study */}
          <div className="group relative overflow-hidden rounded-[40px] bg-[#0a0a0a] border border-white/5 p-10 transition-all hover:border-[#4ade80]/30 shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-[#4ade80]/10 rounded-2xl text-[#4ade80]">
                <Shield size={32} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ade80]">Reputation Defense</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Fortune 500 Executive <br /> Defamation Suppression</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Successfully suppressed 12 coordinated defamatory articles from the first two pages of Google search results for a high-profile financial executive.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="text-3xl font-bold text-[#4ade80]">94%</span>
                <p className="text-xs text-gray-500 uppercase mt-2">Suppression Rate</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#4ade80]">60 Days</span>
                <p className="text-xs text-gray-500 uppercase mt-2">Execution Time</p>
              </div>
            </div>
          </div>

          {/* Marketing Case Study */}
          <div className="group relative overflow-hidden rounded-[40px] bg-[#0a0a0a] border border-white/5 p-10 transition-all hover:border-[#4ade80]/30 shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-[#4ade80]/10 rounded-2xl text-[#4ade80]">
                <Zap size={32} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ade80]">Growth Engineering</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">D2C Home Decor Brand <br /> Aggressive Scale-up</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Implemented the D2C Growth Protocol to optimize user conversion funnels and performance ads, resulting in a dramatic increase in profitable scale.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="text-3xl font-bold text-[#4ade80]">310%</span>
                <p className="text-xs text-gray-500 uppercase mt-2">Revenue Growth</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#4ade80]">4.2x</span>
                <p className="text-xs text-gray-500 uppercase mt-2">Consistent ROAS</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#4ade80]/20 to-transparent p-12 md:p-24 rounded-[64px] border border-[#4ade80]/10 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 blur-[100px] -z-10 animate-pulse" />
          <h2 className="text-4xl md:text-7xl font-bold mb-10">Start Your Evolution.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you need a digital shield or a growth engine, Axio Principle is ready to deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-6 bg-[#4ade80] text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_15px_30px_rgba(74,222,128,0.2)]">
              Request Free Audit
            </button>
            <button className="px-12 py-6 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
