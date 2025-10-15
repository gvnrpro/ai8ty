import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';
  const routerNavigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);
    if (path === '/') {
      routerNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      routerNavigate(path);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: isArabic ? 'الحلول' : 'Solutions', path: '/solutions' },
    { label: isArabic ? 'الخدمات' : 'Services', path: '/services' },
    { label: isArabic ? 'اتصل بنا' : 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI8TY" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">AI8TY</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </motion.button>
            ))}
            
            {/* Language Switcher */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {isArabic ? 'EN' : 'عربي'}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button onClick={() => handleNavigation('/contact')}>
                {isArabic ? 'ابدأ الآن' : 'Get Started'}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-left text-sm font-medium transition-colors py-2 min-h-[44px] ${
                  isActive(item.path) ? 'text-foreground bg-muted/50' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px]"
            >
              {isArabic ? 'English' : 'العربية'}
            </button>
            <Button onClick={() => handleNavigation('/contact')} className="w-full min-h-[44px]">
              {isArabic ? 'ابدأ الآن' : 'Get Started'}
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
