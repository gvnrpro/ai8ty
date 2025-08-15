import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import NavButton from '@/components/NavButton';
const AppleInspiredNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    language,
    setLanguage
  } = useLanguage();
  const isArabic = language === 'ar';

  // Memoized navigation data to prevent recreation on every render
  const navigation = useMemo(() => ({
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
  }), []);
  const currentNav = navigation[isArabic ? 'ar' : 'en'];

  // Memoized navigation items to prevent recreation
  const navigationItems = useMemo(() => [{
    path: '/',
    label: currentNav.overview
  }, {
    path: '/solutions',
    label: currentNav.solutions
  }, {
    path: '/contact',
    label: currentNav.contact
  }], [currentNav]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);
  useEffect(() => {
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true
    });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  // Body overflow management
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  // Handlers
  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);
  const handleLanguageToggle = useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  }, [language, setLanguage]);
  const handleCTAClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);
  const handleMobileNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);
  const handleMobileLanguageToggle = useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    setMobileMenuOpen(false);
  }, [language, setLanguage]);

  // Helper function to check active state
  const isActiveRoute = useCallback((path: string) => {
    return location.pathname === path || path === '/solutions' && location.pathname.startsWith('/solutions');
  }, [location.pathname]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };
  const navVariants = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  const ctaVariants = {
    hidden: {
      opacity: 0,
      x: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5
      }
    }
  };
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-apple-strong border-b border-white/10' : 'bg-transparent'} ${isArabic ? 'rtl' : ''}`} variants={navVariants} initial="hidden" animate="visible" role="navigation" aria-label="Main navigation">
      <div className="container-apple h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button onClick={handleLogoClick} className="flex items-center gap-3 hover-scale z-50 ml-3 md:ml-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg" whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} aria-label="Navigate to home page">
          <img src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" alt="AI8TY Logo" loading="eager" width="auto" height="28" className="h-7 w-auto object-contain ml-4 md:ml-6 transition-opacity duration-200 hover:opacity-80\n" />
        </motion.button>

        {/* Mobile Menu Button */}
        <button onClick={handleMobileMenuToggle} className="md:hidden glass-apple p-2 rounded-lg z-50 hover-scale focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
          <motion.div animate={{
          rotate: mobileMenuOpen ? 90 : 0
        }} transition={{
          duration: 0.2
        }}>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navigationItems.map((item, index) => <NavButton key={item.path} path={item.path} label={item.label} index={index} isActive={isActiveRoute(item.path)} variant="desktop" />)}
        </div>

        {/* Desktop Language & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handleLanguageToggle} className="
              flex items-center gap-2
              glass-apple rounded-lg hover-scale
              py-2 px-3
              min-w-[72px]
              justify-center
              text-sm font-medium
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              transition-all duration-200
            " aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}>
            <Globe size={16} aria-hidden="true" />
            <span>{language === 'en' ? 'EN' : 'عر'}</span>
          </button>

          <motion.button onClick={handleCTAClick} className="btn-apple-secondary hover-lift text-caption focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" variants={ctaVariants} initial="hidden" animate="visible">
            {currentNav.cta}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div id="mobile-menu" className="fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40 md:hidden" variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
              <div className="flex flex-col items-center justify-center h-full space-y-8 stagger-fade-in">
                <nav role="menu">
                  {navigationItems.map((item, index) => <div key={item.path} className="mb-6" role="none">
                      <NavButton path={item.path} label={item.label} index={index} isActive={isActiveRoute(item.path)} variant="mobile" onClick={handleMobileNavClick} />
                    </div>)}
                </nav>

                {/* Mobile Language Switcher */}
                <button onClick={handleMobileLanguageToggle} className="
                    flex items-center gap-2
                    glass-apple rounded-lg hover-scale
                    py-2 px-3
                    min-w-[72px]
                    justify-center
                    text-sm font-medium
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    transition-all duration-200
                  " aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}>
                  <Globe size={16} aria-hidden="true" />
                  <span>{language === 'en' ? 'EN' : 'عر'}</span>
                </button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
};
export default AppleInspiredNavigation;