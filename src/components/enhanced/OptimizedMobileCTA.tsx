
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MessageCircle, Calendar, Phone } from 'lucide-react';

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
      
      // Show CTA after scrolling 20% and before 90%
      if (progress > 0.2 && progress < 0.9 && !isDismissed) {
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

  const scrollToAudit = () => {
    const auditSection = document.getElementById('website-audit');
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to turn my website into a 24/7 sales machine. Can we schedule a strategy call?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+971509229009', '_self');
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
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Progress indicator */}
          <div className="h-1 bg-black/20 relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-400"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <div className="bg-gradient-to-r from-neural/95 to-quantum/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
            <div className="px-4 py-3">
              {/* Main CTA Section */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      Turn Your Site Into a Revenue Machine
                    </h3>
                  </div>
                  <p className="text-white/80 text-xs leading-tight">
                    Free strategy call • 30-day guarantee • GCC focused
                  </p>
                </div>
                
                <button
                  onClick={handleDismiss}
                  className="tap-target p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={scrollToContact}
                  className="mobile-cta-primary flex flex-col items-center justify-center py-3 px-2 text-xs"
                >
                  <Calendar size={16} className="mb-1" />
                  <span className="font-semibold">Book Call</span>
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="mobile-cta-whatsapp flex flex-col items-center justify-center py-3 px-2 text-xs"
                >
                  <MessageCircle size={16} className="mb-1" />
                  <span className="font-semibold">WhatsApp</span>
                </button>
                
                <button
                  onClick={scrollToAudit}
                  className="mobile-cta-secondary flex flex-col items-center justify-center py-3 px-2 text-xs"
                >
                  <ArrowRight size={16} className="mb-1" />
                  <span className="font-semibold">Free Audit</span>
                </button>
              </div>

              {/* Quick Call Option */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center gap-2 py-2 text-white/80 hover:text-white transition-colors text-xs"
                >
                  <Phone size={14} />
                  <span>Call Now: +971 50 922 9009</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptimizedMobileCTA;
