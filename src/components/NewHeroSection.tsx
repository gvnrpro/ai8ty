
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Target } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

const NewHeroSection: React.FC = () => {
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

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-[100vh] relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={20} 
          color="#3B82F6" 
          className="opacity-30" 
          mode="network"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neural/5 via-transparent to-quantum/5"></div>
      </div>
      
      <motion.div 
        className={cn(
          "container max-w-6xl mx-auto z-10 transition-all duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-space text-white/90 backdrop-blur-sm mb-8">
            <Clock size={16} className="text-neural" />
            <span className="font-medium">Time Is Your Most Valuable Asset</span>
          </div>
        </motion.div>

        <motion.h1 
          className="strategic-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 text-center leading-none"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
        </motion.h1>
        
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
        </motion.div>
        
        {/* Main CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="btn-primary group relative overflow-hidden px-8 py-4 text-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Target className="mr-3 relative z-10" size={20} />
            <span className="relative z-10">See How We Can Simplify Your Workload (Free Audit)</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
          
          <motion.p 
            className="text-sm text-white/60 mt-4 font-space"
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

export default NewHeroSection;
