
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, DollarSign, Clock } from 'lucide-react';
import PremiumButton from './PremiumButton';

const EnhancedMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);
      
      // Show CTA after scrolling 25% and before 90%
      if (progress > 0.25 && progress < 0.9 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to turn my website into a 24/7 sales machine. Can we schedule a revenue strategy call?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
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
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-neural/90 to-quantum/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} className="text-green-400" />
                  <p className="text-sm font-space text-white font-semibold">
                    Turn Your Site Into a Sales Machine
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70 font-space">
                  <Clock size={12} />
                  <span>Free strategy call • No commitment</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <PremiumButton
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                  onClick={scrollToContact}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2"
                >
                  Book Call
                </PremiumButton>
                
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                >
                  💬
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                style={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedMobileCTA;
