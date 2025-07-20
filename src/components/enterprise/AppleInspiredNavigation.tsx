
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import NavButton from '@/components/NavButton';

const AppleInspiredNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navigation = {
    en: {
      about: 'About',
      whatWeBuild: 'What We Build',
      labs: 'Labs',
      insights: 'Insights',
      explore: 'Explore',
      cta: 'Try AI8TY',
    },
    ar: {
      about: 'حول',
      whatWeBuild: 'ما نبنيه',
      labs: 'المختبرات',
      insights: 'رؤى',
      explore: 'استكشف',
      cta: 'جرب AI8TY',
    },
  };
  const currentNav = navigation[isArabic ? 'ar' : 'en'];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-neural text-white px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-apple-strong border-b border-white/10' : 'bg-transparent'
        } ${isArabic ? 'rtl' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-apple h-16 flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover-scale z-50 p-2 rounded-lg apple-focus"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="AI8TY Home"
          >
            <img
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png"
              alt="AI8TY Logo"
              className="h-7 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
            />
          </motion.button>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-apple p-3 rounded-lg z-50 hover-scale min-w-[48px] min-h-[48px] flex items-center justify-center apple-focus"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {[
              { path: '/about', label: currentNav.about },
              { path: '/what-we-build', label: currentNav.whatWeBuild },
              { path: '/labs', label: currentNav.labs },
              { path: '/insights', label: currentNav.insights },
              { path: '/explore', label: currentNav.explore },
            ].map((item, index) => (
              <NavButton
                key={item.path}
                path={item.path}
                label={item.label}
                index={index}
                isActive={location.pathname === item.path}
                variant="desktop"
              />
            ))}
          </div>

          {/* Desktop Language & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="
                flex items-center gap-2
                glass-apple rounded-lg hover-scale-subtle apple-focus
                py-3 px-4
                min-w-[80px] min-h-[48px]
                justify-center
                text-sm font-medium
              "
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              <Globe size={16} aria-hidden="true" />
              <span>{language === 'en' ? 'EN' : 'عر'}</span>
            </button>

            <motion.button
              onClick={() => navigate('/explore')}
              className="btn-premium hover-lift text-caption min-h-[48px] px-6"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              aria-label="Try AI8TY platform"
            >
              {currentNav.cta}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 stagger-fade-in px-4">
                {[
                  { path: '/about', label: currentNav.about },
                  { path: '/what-we-build', label: currentNav.whatWeBuild },
                  { path: '/labs', label: currentNav.labs },
                  { path: '/insights', label: currentNav.insights },
                  { path: '/explore', label: currentNav.explore },
                ].map((item, index) => (
                  <NavButton
                    key={item.path}
                    path={item.path}
                    label={item.label}
                    index={index}
                    isActive={location.pathname === item.path}
                    variant="mobile"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}

                {/* Mobile Language Switcher Button - Enhanced touch target */}
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'ar' : 'en');
                    setMobileMenuOpen(false);
                  }}
                  className="
                    flex items-center gap-2
                    glass-apple rounded-lg hover-scale-subtle apple-focus
                    py-4 px-6
                    min-w-[120px] min-h-[56px]
                    justify-center
                    text-base font-medium
                  "
                  aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
                  role="menuitem"
                >
                  <Globe size={18} aria-hidden="true" />
                  <span>{language === 'en' ? 'EN' : 'عر'}</span>
                </button>

                {/* Mobile CTA */}
                <motion.button
                  onClick={() => {
                    navigate('/explore');
                    setMobileMenuOpen(false);
                  }}
                  className="btn-premium text-lg min-h-[56px] px-8 mt-4"
                  role="menuitem"
                  aria-label="Try AI8TY platform"
                >
                  {currentNav.cta}
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default AppleInspiredNavigation;
