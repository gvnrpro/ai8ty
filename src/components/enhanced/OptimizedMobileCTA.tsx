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
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToAudit = () => {
    const auditSection = document.getElementById('website-audit');
    if (auditSection) {
      auditSection.scrollIntoView({
        behavior: 'smooth'
      });
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
  return <AnimatePresence>
      {isVisible && <motion.div className="fixed bottom-0 left-0 right-0 z-50 md:hidden" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} transition={{
      duration: 0.3,
      ease: "easeOut"
    }}>
          {/* Progress indicator */}
          <div className="h-1 bg-black/20 relative">
            <motion.div className="h-full bg-gradient-to-r from-green-400 to-blue-400" style={{
          width: `${scrollProgress * 100}%`
        }} transition={{
          duration: 0.1
        }} />
          </div>
          
          <div className="bg-gradient-to-r from-neural/95 to-quantum/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
            
          </div>
        </motion.div>}
    </AnimatePresence>;
};
export default OptimizedMobileCTA;