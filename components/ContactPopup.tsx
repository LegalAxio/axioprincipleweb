
import React, { useEffect } from 'react';
import { X, Send, Phone, Mail, Building, User, MessageSquare, ChevronDown } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Form Container */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Visual Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 blur-[80px] -z-10" />
        
        <div className="flex justify-between items-center p-8 border-b border-white/5">
          <div>
            <h2 className="text-2xl font-bold mb-1">Get Started with Axio</h2>
            <p className="text-gray-500 text-sm">Fill out the form below and an expert will reach out within 2 hours.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#4ade80] transition-colors outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#4ade80] transition-colors outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Company Name</label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="text" placeholder="Acme Inc" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#4ade80] transition-colors outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Choose Strategy</label>
            <div className="relative">
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#4ade80] transition-colors outline-none appearance-none cursor-pointer text-gray-400">
                <option disabled selected>Select Protocol</option>
                <option>ORM Defense (Reputation)</option>
                <option>Performance Marketing (Growth)</option>
                <option>Crisis Shield Management</option>
                <option>D2C Launch Strategy</option>
                <option>SEO/GEO Category Engineering</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Tell us about your needs</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-600" size={18} />
              <textarea placeholder="How can we help you?" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#4ade80] transition-colors outline-none resize-none" />
            </div>
          </div>

          <button className="md:col-span-2 w-full bg-[#4ade80] hover:bg-[#5ef095] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_10px_30px_rgba(74,222,128,0.2)]">
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
