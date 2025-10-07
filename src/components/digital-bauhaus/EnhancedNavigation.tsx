import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const EnhancedNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: 'Solutions', path: '/solutions' },
      { label: 'Contact', path: '/contact' },
    ],
    ar: [
      { label: 'الرئيسية', path: '/' },
      { label: 'الخدمات', path: '/services' },
      { label: 'الحلول', path: '/solutions' },
      { label: 'اتصل بنا', path: '/contact' },
    ]
  };

  const items = navItems[language as keyof typeof navItems];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-cyber-blue/30' 
            : 'bg-transparent'
        }`}
      >
        {/* Cyber Grid Reveal on Scroll */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 cyber-grid opacity-10"
          />
        )}

        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => navigate('/')}
              className="text-2xl font-mono font-bold text-cyber-blue hover-depth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="terminal-text">AI8TY</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {items.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`font-mono text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyber-blue'
                      : 'text-foreground/70 hover:text-cyber-blue'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="h-0.5 bg-cyber-blue mt-1"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Language Toggle & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="p-2 text-foreground/70 hover:text-cyber-blue transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-cyber-blue text-background font-mono font-bold rounded cyber-glow hover-depth transition-all"
              >
                {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-cyber-blue"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="cyber-grid absolute inset-0 opacity-20" />
            
            <div className="relative h-full flex flex-col p-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cyber-blue"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex flex-col justify-center gap-8">
                {items.map((item, index) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-3xl font-mono font-bold text-left ${
                      location.pathname === item.path
                        ? 'text-cyber-blue'
                        : 'text-foreground/70'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="space-y-4">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-3 border-2 border-cyber-blue text-cyber-blue font-mono rounded flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
                
                <button
                  onClick={() => {
                    navigate('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-cyber-blue text-background font-mono font-bold rounded cyber-glow"
                >
                  {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
