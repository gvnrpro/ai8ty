
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const MobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  // Only show on mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-depth-2 border border-neural/30 rounded-xl p-4 backdrop-blur-md shadow-glow-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-space text-white font-medium mb-1">
                  Ready to save 10+ hours/week?
                </p>
                <p className="text-xs text-white/70">
                  Free audit • No commitment
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={scrollToContact}
                  className="btn-primary px-4 py-2 text-sm min-h-[40px]"
                  size="sm"
                >
                  <span>Get Started</span>
                  <ArrowRight size={14} className="ml-2" />
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
