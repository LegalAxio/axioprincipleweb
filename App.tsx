
import React, { useState, createContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import MarketingServices from './components/MarketingServices';
import WhoWeAre from './components/WhoWeAre';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

// Lazy load pages for performance (Code Splitting)
const OrmPage = lazy(() => import('./pages/OrmPage'));
const MarketingPage = lazy(() => import('./pages/MarketingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Simple context to handle the global popup
interface AppContextType {
  openContact: () => void;
}
export const AppContext = createContext<AppContextType>({ openContact: () => {} });

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-[#030303] z-[100] flex items-center justify-center">
    <div className="flex flex-col items-center gap-6">
      <div className="w-16 h-16 border-t-2 border-[#4ade80] border-solid rounded-full animate-spin"></div>
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#4ade80] font-bold animate-pulse">Initializing Axio</span>
    </div>
  </div>
);

const HomePage: React.FC = () => (
  <div className="animate-in fade-in duration-700">
    <Hero />
    <Stats />
    <TrustedBrands />
    <Services />
    <MarketingServices />
    <WhoWeAre />
    <Team />
    <Reviews />
  </div>
);

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openContact = () => setIsPopupOpen(true);
  const closeContact = () => setIsPopupOpen(false);

  return (
    <AppContext.Provider value={{ openContact }}>
      <Router>
        <div className="relative min-h-screen bg-[#030303] text-white selection:bg-[#4ade80] selection:text-black">
          <Navbar />
          
          <main>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services/orm" element={<OrmPage />} />
                <Route path="/services/marketing" element={<MarketingPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />

          {/* Global Popup */}
          <ContactPopup isOpen={isPopupOpen} onClose={closeContact} />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
