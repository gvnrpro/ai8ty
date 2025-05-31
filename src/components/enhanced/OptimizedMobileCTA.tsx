
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MessageCircle, Calendar } from 'lucide-react';
import PremiumButton from './PremiumButton';

const OptimizedMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);
      
      // Show CTA after scrolling 25% and before 88%
      if (progress > 0.25 && progress < 0.88 && !isDismissed) {
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
    const message = encodeURIComponent("I want to turn my website into a 24/7 sales machine. Can we schedule a strategy call?");
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
          <div className="bg-gradient-to-r from-neural/95 to-quantum/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1 bg-white/20 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                style={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-sm font-space text-white font-semibold">
                      Turn Your Site Into a Sales Machine
                    </p>
                  </div>
                  <p className="text-xs text-white/70 font-space">
                    Free strategy call • 30-day guarantee
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <PremiumButton
                    variant="primary"
                    size="sm"
                    icon={Calendar}
                    onClick={scrollToContact}
                    className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-2 min-w-[80px]"
                  >
                    Book Call
                  </PremiumButton>
                  
                  <button
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] hover:bg-[#22c55e] text-white p-2 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </button>
                  
                  <button
                    onClick={handleDismiss}
                    className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10 min-w-[40px] min-h-[40px] flex items-center justify-center"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptimizedMobileCTA;
