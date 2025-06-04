
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedLanguageSwitcher from './EnhancedLanguageSwitcher';
import { Menu, X } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    en: {
      overview: 'Overview',
      solutions: 'Solutions', 
      contact: 'Contact',
      cta: 'Schedule Briefing'
    },
    ar: {
      overview: 'نظرة عامة',
      solutions: 'الحلول',
      contact: 'اتصل بنا',
      cta: 'جدولة إحاطة'
    }
  };

  const currentNav = navigation[isArabic ? 'ar' : 'en'];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-transparent'
      } ${isArabic ? 'rtl' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between">
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
            className="h-7 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300" 
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 z-50 hover:bg-white/10 rounded transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: currentNav.overview },
            { path: '/solutions', label: currentNav.solutions },
            { path: '/contact', label: currentNav.contact }
          ].map((item, index) => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`relative text-sm font-light transition-colors duration-300 group ${
                location.pathname === item.path || 
                (item.path === '/solutions' && location.pathname.startsWith('/solutions'))
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
              whileHover={{ y: -1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Desktop Language Switcher & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <EnhancedLanguageSwitcher />
          
          <motion.button
            onClick={() => navigate('/contact')}
            className="relative px-6 py-2 text-sm font-light text-white border border-slate-600 hover:border-slate-400 transition-all duration-300 overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10">{currentNav.cta}</span>
            <motion.div
              className="absolute inset-0 bg-slate-800 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
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
              {[
                { path: '/', label: currentNav.overview },
                { path: '/solutions', label: currentNav.solutions },
                { path: '/contact', label: currentNav.contact }
              ].map((item, index) => (
                <motion.button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-light transition-colors duration-300 ${
                    location.pathname === item.path || 
                    (item.path === '/solutions' && location.pathname.startsWith('/solutions'))
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="pt-8">
                <EnhancedLanguageSwitcher />
              </div>

              <motion.button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="px-8 py-4 text-lg font-light text-white border border-slate-600 hover:border-slate-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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

export default EnhancedNavigation;
