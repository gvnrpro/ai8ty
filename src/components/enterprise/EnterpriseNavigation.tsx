
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const EnterpriseNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    en: {
      overview: 'Overview',
      solutions: 'Solutions',
      contact: 'Contact',
      cta: 'Request Briefing'
    },
    ar: {
      overview: 'نظرة عامة',
      solutions: 'الحلول',
      contact: 'اتصل بنا',
      cta: 'طلب إحاطة'
    }
  };

  const currentNav = navigation[isArabic ? 'ar' : 'en'];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800' 
          : 'bg-transparent'
      } ${isArabic ? 'rtl' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group z-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
            alt="AI8TY Logo" 
            className="h-8 w-auto"
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/')}
            className={`text-sm font-medium transition-colors touch-manipulation ${
              location.pathname === '/' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {currentNav.overview}
          </button>
          <button
            onClick={() => navigate('/solutions')}
            className={`text-sm font-medium transition-colors touch-manipulation ${
              location.pathname.startsWith('/solutions') 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {currentNav.solutions}
          </button>
          <button
            onClick={() => navigate('/contact')}
            className={`text-sm font-medium transition-colors touch-manipulation ${
              location.pathname === '/contact' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {currentNav.contact}
          </button>
        </div>

        {/* Desktop Language Switcher & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <motion.button
            onClick={() => navigate('/contact')}
            className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-sm border border-slate-600 hover:border-slate-500 transition-all touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentNav.cta}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <motion.button
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-medium transition-colors touch-manipulation ${
                  location.pathname === '/' 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentNav.overview}
              </motion.button>
              
              <motion.button
                onClick={() => {
                  navigate('/solutions');
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-medium transition-colors touch-manipulation ${
                  location.pathname.startsWith('/solutions') 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentNav.solutions}
              </motion.button>
              
              <motion.button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-medium transition-colors touch-manipulation ${
                  location.pathname === '/contact' 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentNav.contact}
              </motion.button>

              <div className="pt-8">
                <LanguageSwitcher />
              </div>

              <motion.button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-sm transition-all touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentNav.cta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default EnterpriseNavigation;
