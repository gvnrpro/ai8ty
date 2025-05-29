
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Zap } from 'lucide-react';
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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
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

  const benefits = [
    "Automate tasks with AI",
    "Rank higher with SEO + AI Search Optimization", 
    "Build faster sites, run smarter campaigns",
    "Unlock end-to-end growth with expert support"
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-[100vh] relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Neural Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={20} 
          color="#3B82F6" 
          className="opacity-30" 
          mode="network"
        />
        
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-radial from-neural/5 to-transparent rounded-full"
              style={{
                left: `${40 + (i * 20)}%`,
                top: `${40 + (i * 15)}%`,
                width: '200vw',
                height: '200vh',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 8 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full neural-grid-bg"></div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-[10%] right-[5%] w-24 h-24 md:w-32 md:h-32 border border-neural/20 rounded-full"
        style={{ y: y2 }}
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
        >
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-space text-white/90 backdrop-blur-sm mb-8">
            <motion.div
              className="flex h-2 w-2 rounded-full bg-neural"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">AI-Powered Digital Services</span>
            <Zap size={16} className="text-neural" />
          </div>
        </motion.div>

        <motion.h1 
          className="strategic-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 text-center leading-none"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span 
            className="block mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            AI-Powered Digital Services
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            That Cut Costs, Boost Output & Unlock Scale
          </motion.span>
        </motion.h1>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-8 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed">
            We build custom AI agents, conversion-optimized websites, and digital strategies 
            that do the work of full teams — for a fraction of the cost.
          </p>
        </motion.div>
        
        {/* Benefits List */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <Check className="text-neural flex-shrink-0" size={20} />
                <span className="text-white/90 font-space">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Main CTA */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="btn-primary group relative overflow-hidden px-8 py-4 text-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">👉 Book Your Free Growth Strategy Call</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
          
          <motion.p 
            className="text-sm text-white/60 mt-4 font-space"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Takes 30 seconds. No sales pitch. Just actionable insight.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced fade overlay */}
      <motion.div 
        className={cn(
          "absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-ai8ty-black via-ai8ty-black/80 to-transparent z-0",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y2 }}
      />
      
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
