
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import PremiumButton from './PremiumButton';

const EnhancedHeroSection: React.FC = () => {
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

  const trustIndicators = [
    { icon: CheckCircle, text: "10+ Hours Saved Weekly" },
    { icon: CheckCircle, text: "No Tech Knowledge Required" },
    { icon: CheckCircle, text: "Results in 30 Days" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={20} 
          color="#3B82F6" 
          className="opacity-30" 
          mode="network"
        />
        
        {/* Floating neural elements */}
        <motion.div 
          className="absolute top-[10%] right-[5%] w-24 h-24 md:w-32 md:h-32 border border-neural/20 rounded-full"
          style={{ y: y1 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-[25%] left-[8%] w-16 h-16 md:w-20 md:h-20 border border-quantum/30 rounded-lg"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, -180, -360],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div 
        className="container max-w-6xl mx-auto z-10"
        style={{ y: y1 }}
      >
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-space text-white/90 backdrop-blur-sm">
            <motion.div
              className="flex h-2 w-2 rounded-full bg-neural"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">Save 10+ Hours Every Week</span>
            <Zap size={16} className="text-neural" />
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-syne font-bold leading-none mb-4">
            <motion.span 
              className="block mb-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              You're Wasting Time.
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              We'll Fix That.
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Value Proposition */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed mb-8">
            AI8TY gives you time back and makes growth easier with smart systems that do the work for you. 
            <br className="hidden md:block" />
            You don't need to manage the tech — we handle everything.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-sm text-white/70"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
              >
                <indicator.icon size={16} className="text-neural" />
                <span>{indicator.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <PremiumButton
            variant="primary"
            size="lg"
            icon={Target}
            iconPosition="left"
            onClick={scrollToContact}
            className="mb-4"
          >
            Save 10+ Hours/Week (Free Audit)
          </PremiumButton>
          
          <motion.p 
            className="text-sm text-white/60 font-space"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            30-minute call. No sales pitch. Just clarity on your biggest time-wasters.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 0.8, 0], y: [0, 10, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          delay: 2.5,
          repeatDelay: 1
        }}
      >
        <div className="w-6 h-12 border-2 border-neural/40 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-neural rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
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

export default EnhancedHeroSection;
