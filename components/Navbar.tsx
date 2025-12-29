
import React, { useState, useContext } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../App';

const AxioLogo = () => (
  <Link to="/" className="flex items-center gap-2 group cursor-pointer">
    <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
      axio<span className="text-[#4ade80]">.</span>
    </span>
    <svg width="28" height="28" viewBox="0 0 100 100" className="text-[#4ade80] animate-spin-slow md:w-[32px] md:h-[32px]">
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
    </svg>
  </Link>
);

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { openContact } = useContext(AppContext);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/40 backdrop-blur-xl py-4 md:py-6 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <AxioLogo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.hasSubmenu && setActiveSubmenu(item.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link 
                to={item.href}
                className={`flex items-center gap-1.5 text-[14px] font-semibold transition-all ${
                  location.pathname === item.href ? 'text-[#4ade80]' : 'text-gray-400 opacity-80 hover:opacity-100 hover:text-white'
                }`}
                onClick={(e) => item.hasSubmenu && e.preventDefault()}
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180 text-[#4ade80]' : ''}`} />
                )}
              </Link>

              {item.hasSubmenu && item.submenu && (
                <div className={`absolute top-full left-0 pt-4 w-56 transition-all duration-300 ${activeSubmenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.label}
                        to={sub.href} 
                        className="block px-6 py-3 text-[13px] text-gray-400 hover:text-[#4ade80] hover:bg-white/5 transition-colors"
                        onClick={() => setActiveSubmenu(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button onClick={openContact} className="bg-[#4ade80] hover:bg-[#5ef095] text-black px-8 py-3 rounded-2xl font-bold text-[14px] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(74,222,128,0.3)]">
            Consult Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white hover:text-[#4ade80] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#030303] z-[60] flex flex-col p-8 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-12">
            <AxioLogo />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <X size={32}/>
            </button>
          </div>
          
          <div className="flex flex-col gap-6 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col gap-4">
                <div 
                  className={`flex items-center justify-between text-2xl font-bold cursor-pointer ${location.pathname === item.href ? 'text-[#4ade80]' : 'text-white'}`}
                  onClick={() => {
                    if (item.hasSubmenu) {
                      setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
                    } else {
                      handleMobileLinkClick();
                    }
                  }}
                >
                  {item.hasSubmenu ? <span>{item.label}</span> : <Link to={item.href} onClick={handleMobileLinkClick}>{item.label}</Link>}
                  {item.hasSubmenu && <ChevronDown className={`transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180 text-[#4ade80]' : ''}`} />}
                </div>
                
                {item.hasSubmenu && item.submenu && activeSubmenu === item.label && (
                  <div className="flex flex-col gap-4 pl-6 animate-in slide-in-from-left-4 duration-300">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.label} 
                        to={sub.href} 
                        onClick={handleMobileLinkClick}
                        className="text-lg text-gray-400 font-medium hover:text-[#4ade80]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <button onClick={() => { setMobileMenuOpen(false); openContact(); }} className="w-full bg-[#4ade80] text-black py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(74,222,128,0.3)]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
