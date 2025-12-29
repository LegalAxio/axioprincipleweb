
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Target } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#030303] pt-40 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Let's <br /><span className="text-[#4ade80]">Connect.</span></h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-sm">
              Ready to secure your brand or accelerate your growth? Our experts are standing by globally.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.1)]"><Mail /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email us</h4>
                  <p className="text-gray-500 mb-2">General inquiries & support</p>
                  <a href="mailto:intelligence@axioprinciple.com" className="text-[#4ade80] font-bold hover:underline">intelligence@axio.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.1)]"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call us</h4>
                  <p className="text-gray-500 mb-2">Speak directly with a strategist</p>
                  <a href="tel:+18005550199" className="text-[#4ade80] font-bold hover:underline">+1 (800) 555-0199</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.1)]"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                  <p className="text-gray-500">
                    One World Trade Center, 85th Floor <br />
                    New York, NY 10007
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/5 blur-[100px]" />
              
              <h2 className="text-3xl font-bold mb-10">Start a Project</h2>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Name</label>
                    <input type="text" placeholder="John Wick" className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-[#4ade80] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Company</label>
                    <input type="text" placeholder="Continental Inc." className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-[#4ade80] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Choose Strategy</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-[#4ade80] transition-colors text-gray-400 appearance-none cursor-pointer">
                      <option disabled selected>Select Your Protocol</option>
                      <option>ORM Defense (Reputation Cleanup)</option>
                      <option>Positive Brand Building (SEO/GEO)</option>
                      <option>Performance Marketing (D2C Scaling)</option>
                      <option>Crisis Management (Targeted Defamation)</option>
                      <option>Cloud Infrastructure Growth</option>
                      <option>Fractional CMO Strategy</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                       <ArrowRight className="rotate-90 text-[#4ade80]" size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your challenges..." className="w-full bg-white/5 border-b border-white/10 py-4 outline-none focus:border-[#4ade80] transition-colors resize-none" />
                </div>

                <button className="w-full bg-[#4ade80] hover:bg-[#5ef095] text-black font-bold py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-[0_15px_30px_rgba(74,222,128,0.15)]">
                  Send Message 
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
