
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { t } from '@/utils/i18n';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const { language, setLanguage, isRTL } = useLanguage();
  
  // Handle scroll position for transparent/solid background
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when nav link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // Languages to display in selector
  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' }
  ];

  // Navigation links with translated labels
  const navLinks = [
    { name: t('nav.home', language), path: '#' },
    { name: t('nav.about', language), path: '#about-section' },
    { name: t('nav.services', language), path: '#services-section' },
    { name: t('nav.ai8tyCard', language), path: '#ai8ty-card' },
    { name: t('nav.work', language), path: '#work-section' },
    { name: t('nav.contact', language), path: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6",
        scrollPosition > 50 || isOpen ? "bg-ai8ty-black/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <a href="#" className="relative z-20">
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="font-satoshi text-sm text-ai8ty-grey hover:text-ai8ty-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Selector (Desktop) */}
            <div className="relative group ml-4">
              <button className="flex items-center text-ai8ty-grey hover:text-ai8ty-white transition-colors">
                <Globe size={18} className="mr-2" />
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 bg-ai8ty-black/90 backdrop-blur-md border border-ai8ty-grey/20 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
                <ul className="py-2">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          "w-full text-left px-4 py-2 text-sm transition-colors",
                          language === lang.code ? "text-ai8ty-teal" : "text-ai8ty-grey hover:text-ai8ty-white"
                        )}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Language Selector (Mobile) */}
            <button 
              className="relative z-20 text-ai8ty-grey hover:text-ai8ty-white mr-4"
              onClick={() => {
                // Cycle through languages
                const currentIndex = languages.findIndex(l => l.code === language);
                const nextIndex = (currentIndex + 1) % languages.length;
                setLanguage(languages[nextIndex].code);
              }}
              aria-label="Change language"
            >
              <Globe size={20} />
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-20 text-ai8ty-grey hover:text-ai8ty-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-10 bg-ai8ty-black"
                initial={{ opacity: 0, x: isRTL ? "-100%" : "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? "-100%" : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="container h-full mx-auto flex flex-col justify-center items-center">
                  <ul className="flex flex-col space-y-8 items-center">
                    {navLinks.map((link, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <a 
                          href={link.path} 
                          className="font-avant text-2xl text-ai8ty-white hover:text-ai8ty-teal transition-colors"
                          onClick={handleLinkClick}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
