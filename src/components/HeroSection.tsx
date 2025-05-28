
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Enhanced parallax values for smoother mobile experience
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  // Dynamic particle properties
  const [particleDensity, setParticleDensity] = useState(25);
  
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setParticleDensity(10);
    }
    
    // Responsive particle density
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setParticleDensity(isMobile ? 12 : 25);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
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

  return (
    <motion.section 
      id="hero-section" 
      ref={sectionRef}
      className="min-h-[100vh] relative flex flex-col justify-center items-center py-24 px-4 overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Particle Background with intelligence theme */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={particleDensity} 
          color="#F1BE6C" 
          className="opacity-25" 
          mode="neural"
        />
        
        {/* Neural network overlay */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-radial from-sand/3 to-transparent rounded-full"
              style={{
                left: `${45 + (i * 15)}%`,
                top: `${45 + (i * 10)}%`,
                width: '180vw',
                height: '180vh',
                x: '-50%',
                y: '-50%',
                scale,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>
        
        {/* Minimal grid for intelligence aesthetic */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute h-px bg-sand/30 left-0 right-0"
                style={{ top: `${i * (100 / 8)}%` }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.3 }}
                transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-px bg-sand/30 top-0 bottom-0"
                style={{ left: `${i * (100 / 8)}%` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.3 }}
                transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating elements for intelligence theme */}
      <motion.div 
        className="absolute top-[8%] right-[8%] w-32 h-32 md:w-48 md:h-48 border border-white/3 rounded-full"
        style={{ y: y3 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[12%] w-16 h-16 md:w-24 md:h-24 border border-sand/8 rounded-lg"
        style={{ y: y2 }}
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, -360],
        }}
        transition={{ 
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className={cn(
          "container max-w-5xl mx-auto z-10 transition-all duration-800",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y1 }}
      >
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.div
            className="inline-flex items-center gap-2 bg-depth-2 border border-white/10 rounded-full px-5 py-2.5 text-sm font-space text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="flex h-2 w-2 rounded-full bg-sand animate-pulse"></span>
            <span>Intelligence-First Business OS</span>
          </motion.div>
        </div>

        <div className="overflow-hidden mb-3">
          <motion.h1 
            ref={headingRef}
            className="heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 font-bold tracking-tight text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="block">Design for the</span>
            <span className="block text-sand">Intelligence Age.</span>
          </motion.h1>
        </div>
        
        <motion.p 
          className="subheading text-xl md:text-2xl text-center max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          AI8TY helps brands evolve for a world shaped by artificial intelligence—
          <br className="hidden md:block" />
          through scalable design systems, generative search visibility, and operational clarity.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <Button 
            onClick={scrollToServices}
            className="btn-secondary text-base group relative overflow-hidden"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">→ Let's begin</span>
              <ArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
            </motion.button>
          </Button>
          
          <Button
            className="btn-outline text-base group relative overflow-hidden"
            variant="outline"
          >
            <span className="relative z-10">Show me the system</span>
            <ArrowUpRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced fade overlay */}
      <motion.div 
        className={cn(
          "absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-ai8ty-black to-transparent z-0",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y2 }}
      />
      
      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 0.6, 0], y: [0, 8, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          delay: 1.8,
          repeatDelay: 0.5
        }}
      >
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="#F1BE6C" strokeOpacity="0.4" strokeWidth="1"/>
          <motion.circle 
            cx="12" 
            cy="12" 
            r="4" 
            fill="#F1BE6C"
            fillOpacity="0.6"
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </svg>
      </motion.div>
      
      {/* Intelligence OS branding */}
      <motion.div
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-20 h-px bg-sand/40"></div>
        <p className="text-xs uppercase tracking-widest font-space text-sand">Intelligence OS</p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
