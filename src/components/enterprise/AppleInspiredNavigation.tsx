
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const AppleInspiredNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? 'glass-apple-strong border-b border-white/10' 
          : 'bg-transparent'
      } ${isArabic ? 'rtl' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-apple h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 hover-scale z-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
            alt="AI8TY Logo" 
            className="h-7 w-auto object-contain transition-opacity duration-200 hover:opacity-80" 
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden glass-apple p-2 rounded-lg z-50 hover-scale"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
              className={`relative text-caption transition-colors duration-200 hover-lift ${
                location.pathname === item.path || 
                (item.path === '/solutions' && location.pathname.startsWith('/solutions'))
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
              {(location.pathname === item.path || 
                (item.path === '/solutions' && location.pathname.startsWith('/solutions'))) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-blue-500"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Desktop Language & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 glass-apple px-3 py-1.5 rounded-lg hover-scale"
          >
            <Globe size={14} />
            <span className="text-caption font-medium">
              {language === 'en' ? 'EN' : 'عر'}
            </span>
          </button>
          
          <motion.button
            onClick={() => navigate('/contact')}
            className="btn-apple-secondary hover-lift text-caption"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentNav.cta}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 glass-apple-strong z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 stagger-fade-in">
              {[
                { path: '/', label: currentNav.overview },
                { path: '/solutions', label: currentNav.solutions },
                { path: '/contact', label: currentNav.contact }
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-title transition-colors duration-200 hover-scale ${
                    location.pathname === item.path || 
                    (item.path === '/solutions' && location.pathname.startsWith('/solutions'))
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-8 flex flex-col items-center gap-4">
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="flex items-center gap-2 glass-apple px-4 py-2 rounded-xl"
                >
                  <Globe size={16} />
                  <span className="text-body font-medium">
                    {language === 'en' ? 'العربية' : 'English'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    navigate('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="btn-apple-primary"
                >
                  {currentNav.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default AppleInspiredNavigation;
