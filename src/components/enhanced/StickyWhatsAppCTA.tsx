
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

const StickyWhatsAppCTA: React.FC = () => {
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

      // Show after scrolling 10% and before 95%
      if (progress > 0.1 && progress < 0.95 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to know exactly why my site isn't converting. Can you give me 3 things to fix today?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+971509229009', '_self');
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

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
          {/* Progress bar */}
          <div className="h-1 bg-black/20 relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <div className="bg-gradient-to-r from-[#25D366]/95 to-emerald-600/95 backdrop-blur-xl border-t-2 border-white/20 shadow-2xl">
            <div className="px-4 py-3">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h3 className="text-white font-bold text-sm leading-tight">
                      Why isn't your site making money?
                    </h3>
                  </div>
                  <p className="text-white/90 text-xs leading-tight">
                    Get 3 things to fix today • Free roast • GCC experts
                  </p>
                </div>
                
                <button 
                  onClick={handleDismiss}
                  className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Main CTA */}
              <div className="flex gap-2 mb-3">
                <motion.button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Roast</span>
                </motion.button>
                
                <motion.button
                  onClick={handleCall}
                  className="bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={16} />
                </motion.button>
              </div>

              {/* Trust indicator */}
              <p className="text-white/80 text-xs text-center">
                💬 Real person, not a bot • Response in &lt;2 hours
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyWhatsAppCTA;
