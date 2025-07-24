
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Phone, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Mobile-optimized parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  
  // Dynamic particle properties for mobile
  const [particleDensity, setParticleDensity] = useState(20);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setParticleDensity(8);
    }
    
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setParticleDensity(isMobile ? 10 : 20);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('modular-services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTransformation = () => {
    const transformationSection = document.getElementById('business-transformation');
    if (transformationSection) {
      transformationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="hero-section" 
      ref={sectionRef}
      className="min-h-[100vh] relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden section-divider"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Neural Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={particleDensity} 
          color="#3B82F6" 
          className="opacity-30" 
          mode="network"
        />
        
        {/* Intelligence field overlay */}
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
                scale,
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
        
        {/* Neural grid pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full neural-grid-bg"></div>
        </div>
      </div>
      
      {/* Floating neural elements */}
      <motion.div 
        className="absolute top-[10%] right-[5%] w-24 h-24 md:w-32 md:h-32 border border-neural/20 rounded-full"
        style={{ y: y3 }}
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
        style={{ y: y2 }}
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
            <span className="font-medium">Intelligence-First Business OS</span>
            <Zap size={16} className="text-neural" />
          </div>
        </motion.div>

        <motion.h1 
          ref={headingRef}
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
            Engineer Your Business
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            For the Intelligence Age.
          </motion.span>
        </motion.h1>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed mb-4">
            We architect scalable systems that make your business discoverable, 
            <br className="hidden md:block" />
            memorable, and dominant in an AI-driven marketplace.
          </p>
          <p className="subheading text-neural/80">
            Just as OpenAI revolutionized intelligence interfaces, we revolutionize yours.
          </p>
        </motion.div>
        
        {/* Enhanced Dual CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToTransformation}
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Play className="mr-3 relative z-10" size={18} />
            <span className="relative z-10 font-medium">Request Demo</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
          
          <motion.button
            onClick={() => window.location.href = 'tel:+971509229009'}
            className="btn-secondary group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="mr-3 relative z-10" size={18} />
            <span className="relative z-10 font-medium">Contact Sales</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
        </motion.div>
        
        {/* Trust indicators with animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-sm font-space text-white/60 mb-6">
            Trusted by visionary companies across the UAE & MENA
          </p>
          <motion.div 
            className="flex justify-center items-center gap-8 opacity-40"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div 
                key={i}
                className="w-16 h-8 bg-white/10 rounded backdrop-blur-sm"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
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
      
      {/* Improved scroll indicator */}
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
      
      {/* Strategic positioning */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:flex items-center gap-4 opacity-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-neural to-quantum"></div>
        <p className="text-xs uppercase tracking-wider font-space text-neural">
          Business OS v2024
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
