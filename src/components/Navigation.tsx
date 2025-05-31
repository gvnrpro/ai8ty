
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I'm interested in AI8TY's revenue systems. Can we discuss how you can help my business?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
    closeMenu();
  };

  const navItems = [
    { label: "Revenue System", id: "hero-section" },
    { label: "About", id: "about-section" },
    { label: "Our Work", id: "work-showcase" },
    { label: "Services", id: "enhanced-services" },
    { label: "Free Audit", id: "website-audit" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-ai8ty-black/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('hero-section')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-8 w-auto"
            />
            <span className="hidden sm:block text-white font-syne font-bold text-lg group-hover:text-neural transition-colors">
              AI8TY
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 hover:text-white transition-colors font-space text-sm relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neural transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="mobile-cta-whatsapp px-4 py-2 text-sm"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-cta-primary px-4 py-2 text-sm"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="tap-target p-2 text-white hover:text-neural transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </button>
            
            <button
              onClick={toggleMenu}
              className="tap-target p-2 text-white hover:text-neural transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-ai8ty-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Navigation Items */}
              <div className="space-y-6 text-center mb-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="mobile-nav-item w-full text-white text-xl font-syne font-semibold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="space-y-4 w-full max-w-sm px-6">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mobile-cta-primary w-full"
                >
                  Book Strategy Call
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="mobile-cta-whatsapp w-full"
                >
                  WhatsApp Us Now
                </button>
                
                <button
                  onClick={() => handleNavClick('website-audit')}
                  className="mobile-cta-secondary w-full"
                >
                  Get Free Audit
                </button>
              </div>

              {/* Contact Info */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="tel:+971509229009"
                  className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors tap-target"
                >
                  <Phone size={16} />
                  <span className="text-sm">+971 50 922 9009</span>
                </a>
                <p className="text-white/50 text-xs mt-2">
                  Dubai, UAE • Serving the GCC
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
