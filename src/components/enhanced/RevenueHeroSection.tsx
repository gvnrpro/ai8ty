
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, Zap, DollarSign } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import PremiumButton from './PremiumButton';

const RevenueHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

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

  const trustIndicators = [
    { icon: CheckCircle, text: "30-Day Money-Back Guarantee" },
    { icon: CheckCircle, text: "50+ GCC Businesses Trust Us" },
    { icon: CheckCircle, text: "24/7 Sales Machine Delivery" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-6 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={15} 
          color="#3B82F6" 
          className="opacity-20" 
          mode="network"
        />
        
        {/* Revenue-focused floating elements */}
        <motion.div 
          className="absolute top-[15%] right-[8%] w-16 h-16 md:w-24 md:h-24 border border-green-500/20 rounded-full flex items-center justify-center"
          style={{ y: y1 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <DollarSign size={20} className="text-green-500 md:w-8 md:h-8" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[30%] left-[8%] w-12 h-12 md:w-16 md:h-16 border border-neural/30 rounded-lg flex items-center justify-center"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Zap size={16} className="text-neural md:w-6 md:h-6" />
        </motion.div>
      </div>
      
      <motion.div 
        className="container max-w-6xl mx-auto z-10"
        style={{ y: y1 }}
      >
        {/* Revenue Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm font-space text-white/90 backdrop-blur-sm">
            <motion.div
              className="flex h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">Turn Your Website Into a 24/7 Sales Machine</span>
            <DollarSign size={16} className="text-green-500" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold leading-tight mb-4 md:mb-6">
            <motion.span 
              className="block mb-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Your Website Should
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Make You Money
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Value Proposition */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-space text-white/90 leading-relaxed mb-6 md:mb-8">
            If your site isn't generating qualified leads every day, you're losing money. 
            <br className="hidden md:block" />
            <span className="text-green-400 font-semibold">We build revenue systems that work while you sleep.</span>
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6 md:mb-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-xs md:text-sm text-white/70"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
              >
                <indicator.icon size={14} className="text-green-500 md:w-4 md:h-4" />
                <span>{indicator.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-md mx-auto">
            <PremiumButton
              variant="primary"
              size="lg"
              icon={Target}
              iconPosition="left"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
            >
              Book Strategy Call
            </PremiumButton>
            
            <PremiumButton
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={scrollToAudit}
              className="w-full sm:w-auto border-white/20 text-white hover:border-neural/30"
            >
              Free Website Audit
            </PremiumButton>
          </div>
          
          <motion.p 
            className="text-xs md:text-sm text-white/60 font-space mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            30-minute call. No sales pitch. Just honest feedback about what's not working.
          </motion.p>
        </motion.div>

        {/* Results Preview */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
            <div className="text-center mb-4">
              <span className="text-xs md:text-sm text-green-400 font-semibold uppercase tracking-wider">
                What You Get
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  &lt;2 sec
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Page Load Speed
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Lead Generation
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  30 Days
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 0.8, 0], y: [0, 10, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          delay: 2.5,
          repeatDelay: 1
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-12 border-2 border-neural/40 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-2 md:h-3 bg-neural rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default RevenueHeroSection;
