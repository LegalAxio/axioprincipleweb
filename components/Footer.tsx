
import React, { useContext } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const AxioLogo = () => (
  <Link to="/" className="flex items-center gap-2 group cursor-pointer">
    <span className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
      axio<span className="text-[#4ade80]">.</span>
    </span>
    <svg width="32" height="32" viewBox="0 0 100 100" className="text-[#4ade80] animate-spin-slow">
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="46" y="20" width="8" height="20" rx="4"
          fill="currentColor"
          transform={`rotate(${deg} 50 50)`}
          className="opacity-80"
        />
      ))}
      <circle cx="50" cy="15" r="4" fill="currentColor" />
      <circle cx="85" cy="50" r="4" fill="currentColor" />
      <circle cx="50" cy="85" r="4" fill="currentColor" />
      <circle cx="15" cy="50" r="4" fill="currentColor" />
    </svg>
  </Link>
);

const Footer: React.FC = () => {
  const { openContact } = useContext(AppContext);

  return (
    <footer className="bg-[#030303] pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Section: Branding & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <AxioLogo />
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Expert <strong>Business Consulting</strong> and <strong>Reputation Defense</strong>. Protecting digital credibility and driving <strong>D2C Growth</strong> globally.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white">Get SEO & Growth Insights</h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
                <div className="relative w-full">
                  <input 
                    type="email" 
                    placeholder="Email e.g. sam@axio.com"
                    className="w-full bg-black/40 border border-[#1a4d2e] rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-[#4ade80] transition-colors placeholder:text-gray-700"
                  />
                </div>
                <button className="flex items-center gap-2 text-[#4ade80] font-bold hover:text-white transition-colors group whitespace-nowrap px-2">
                  Send 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#4ade80] font-bold text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & Insights</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#4ade80] font-bold text-sm uppercase tracking-wider">Services</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/services/orm" className="text-gray-400 hover:text-white transition-colors">ORM Defense</Link></li>
                <li><Link to="/services/marketing" className="text-gray-400 hover:text-white transition-colors">Performance Marketing</Link></li>
                <li><button onClick={openContact} className="text-gray-400 hover:text-white transition-colors text-left">Crisis Management</button></li>
                <li><button onClick={openContact} className="text-gray-400 hover:text-white transition-colors text-left">Targeted Defamation</button></li>
              </ul>
            </div>

            {/* Column 3: Expertise (SEO Pillars) */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#4ade80] font-bold text-sm uppercase tracking-wider">Expertise</h4>
              <ul className="flex flex-col gap-4">
                <li><span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">D2C Scaling</span></li>
                <li><span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">EdTech Solutions</span></li>
                <li><span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">PropTech Growth</span></li>
                <li><span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">CRM Engineering</span></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[#4ade80] font-bold text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+18005550199" className="flex items-center gap-3 text-gray-400 hover:text-[#4ade80] transition-colors group">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4ade80]/50">
                    <Phone size={14} className="text-[#4ade80]" />
                  </div>
                  <span className="text-xs">+1 (800) 555-0199</span>
                </a>
                <a href="mailto:intelligence@axioprinciple.com" className="flex items-center gap-3 text-gray-400 hover:text-[#4ade80] transition-colors group">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4ade80]/50">
                    <Mail size={14} className="text-[#4ade80]" />
                  </div>
                  <span className="text-xs">intelligence@axio.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
          <p>© 2024 Axio Principle. All rights reserved. Specialized in <strong>SEO</strong>, <strong>SEM</strong>, <strong>GEO</strong>, and <strong>Business Consulting</strong>.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-[#4ade80] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#4ade80] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
