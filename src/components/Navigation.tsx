
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const { language, setLanguage, isRTL } = useLanguage();
  
  // Handle scroll position for sticky navigation with blur
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

  // Updated navigation links matching current sections
  const navLinks = [
    { name: isRTL ? "الرئيسية" : "Home", path: "#hero-section" },
    { name: isRTL ? "التحول الذكي" : "Intelligence Shift", path: "#intelligence-shift" },
    { name: isRTL ? "نظام التشغيل" : "Business OS", path: "#business-transformation" },
    { name: isRTL ? "الخدمات" : "Services", path: "#modular-services-section" },
    { name: isRTL ? "شراكة" : "Partnership", path: "#builder-trust" },
    { name: isRTL ? "تواصل" : "Contact", path: "#contact" }
  ];

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-6",
        scrollPosition > 20 || isOpen 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-neural/20" 
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#hero-section" 
            className="relative z-20 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:brightness-110"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.a 
                    href={link.path} 
                    className="font-space text-sm text-white/70 hover:text-neural transition-all duration-300 relative group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neural to-quantum"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
            
            {/* Enhanced Language Selector */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button 
                className="flex items-center text-white/70 hover:text-neural transition-all duration-300 bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/20 hover:border-neural/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Globe size={18} className="mr-2" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ArrowRight size={14} className="ml-2 rotate-90 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
              
              <motion.div 
                className="absolute top-full right-0 mt-3 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[140px] shadow-neural"
                initial={{ y: -10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <ul className="py-2">
                  {languages.map((lang, index) => (
                    <li key={lang.code}>
                      <motion.button
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          "w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-neural/10",
                          language === lang.code 
                            ? "text-neural bg-neural/5 border-l-2 border-neural" 
                            : "text-white/70 hover:text-neural"
                        )}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {lang.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center md:hidden">
            <motion.button 
              className="relative z-20 text-white/70 hover:text-neural mr-4 bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/20"
              onClick={() => {
                const currentIndex = languages.findIndex(l => l.code === language);
                const nextIndex = (currentIndex + 1) % languages.length;
                setLanguage(languages[nextIndex].code);
              }}
              aria-label="Change language"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Globe size={20} />
            </motion.button>
            
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-20 text-white/70 hover:text-neural bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/20"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-10 bg-black/95 backdrop-blur-xl"
                initial={{ opacity: 0, y: isRTL ? "-100%" : "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isRTL ? "-100%" : "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="container h-full mx-auto flex flex-col justify-center items-center relative">
                  {/* Background pattern */}
                  <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
                  
                  <motion.ul 
                    className="flex flex-col space-y-8 items-center relative z-10"
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                      }
                    }}
                  >
                    {navLinks.map((link, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          open: { y: 0, opacity: 1 },
                          closed: { y: 50, opacity: 0 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <motion.a 
                          href={link.path} 
                          className="font-syne text-3xl text-white hover:text-neural transition-all duration-300 relative group"
                          onClick={handleLinkClick}
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="relative z-10">{link.name}</span>
                          <motion.div
                            className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-neural to-quantum"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  {/* Mobile CTA */}
                  <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <motion.a
                      href="#contact"
                      className="btn-primary inline-flex items-center gap-2 text-sm"
                      onClick={handleLinkClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{isRTL ? "ابدأ التحول" : "Start Transformation"}</span>
                      <ArrowRight size={16} />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
