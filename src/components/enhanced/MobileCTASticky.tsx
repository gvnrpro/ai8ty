
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Clock } from 'lucide-react';
import PremiumButton from './PremiumButton';

const MobileCTASticky: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 30% of viewport
      if (scrollPosition > windowHeight * 0.3 && !isDismissed) {
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
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-2xl shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-neural" />
                  <p className="text-sm font-space text-white font-semibold">
                    Ready to save 10+ hours/week?
                  </p>
                </div>
                <p className="text-xs text-white/70 font-space">
                  Free audit • No commitment • 30-min call
                </p>
              </div>
              <div className="flex items-center gap-2">
                <PremiumButton
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                  onClick={scrollToContact}
                >
                  Get Started
                </PremiumButton>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
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

export default MobileCTASticky;
