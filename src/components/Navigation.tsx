
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { name: 'Home', path: '#' },
  { name: 'About', path: '#about-section' },
  { name: 'Services', path: '#services-section' },
  { name: 'AI8TY Card', path: '#ai8ty-card' },
  { name: 'Work', path: '#work-section' },
  { name: 'Contact', path: '#contact' }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
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
          <ul className="hidden md:flex space-x-8">
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20 md:hidden text-ai8ty-grey hover:text-ai8ty-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-10 bg-ai8ty-black"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
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
