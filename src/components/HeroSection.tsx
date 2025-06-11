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
      {/* Minimal animated background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={particleDensity} 
          color="#3B82F6" 
          className="opacity-20" 
          mode="network"
        />
      </div>
      <motion.div
        className={cn(
          "container max-w-4xl mx-auto z-10 transition-all duration-1000 text-center",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y1 }}
      >
        <motion.h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creative Agency for Visionary Brands
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          We craft bold brands, digital experiences, and campaigns that move people.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToServices}
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 font-medium">See Our Work</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
          <motion.button
            onClick={() => window.location.href = '#contact'}
            className="btn-secondary group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 font-medium">Start a Project</span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
      {/* Minimal scroll indicator */}
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

export default HeroSection;
