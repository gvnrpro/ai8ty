
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax values for text and background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Dynamic particle properties
  const [particleDensity, setParticleDensity] = useState(30);
  
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setParticleDensity(15); // Reduce particle density
    }
    
    // Responsive particle density
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setParticleDensity(isMobile ? 15 : 30);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.2),
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <motion.section 
      id="hero-section" 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-24 px-4 overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Particle Background with pulsing effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={particleDensity} 
          color="#00F5D4" 
          className="opacity-30" 
        />
        
        {/* Digital pulse overlay */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-radial from-ai8ty-violet/10 to-transparent rounded-full"
              style={{
                left: `${50 + (i * 10)}%`,
                top: `${50 - (i * 5)}%`,
                width: '200vw',
                height: '200vh',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full grid grid-cols-6 grid-rows-6">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute h-px bg-ai8ty-teal/50 left-0 right-0"
                style={{ top: `${i * (100 / 6)}%` }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-px bg-ai8ty-teal/50 top-0 bottom-0"
                style={{ left: `${i * (100 / 6)}%` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <motion.div 
        className={cn(
          "container max-w-4xl mx-auto z-10 transition-all duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y1 }}
      >
        <div className="overflow-hidden">
          <motion.h1 
            className="heading text-4xl md:text-7xl mb-6 font-bold tracking-tight text-center"
          >
            <motion.span 
              className="block" 
              custom={0} 
              initial="hidden" 
              animate="visible" 
              variants={titleVariants}
            >
              Think.
            </motion.span>
            <motion.span 
              className="block" 
              custom={1} 
              initial="hidden" 
              animate="visible" 
              variants={titleVariants}
            >
              Create.
            </motion.span>
            <motion.span 
              className="block text-ai8ty-violet" 
              custom={2} 
              initial="hidden" 
              animate="visible" 
              variants={titleVariants}
            >
              Automate.
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.p 
          className="subheading text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          AI8TY is the creative-strategy consultancy for visionary brands. We fuse human design with AI 
          to solve today's problems and build tomorrow's systems.
        </motion.p>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5,
            ease: "easeOut" 
          }}
        >
          <Button 
            onClick={scrollToWork}
            className="btn-primary text-lg group relative overflow-hidden"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <ArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
              
              {/* Button glow effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-ai8ty-violet via-ai8ty-teal to-ai8ty-violet bg-[length:200%_100%]"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              
              <motion.span 
                className="absolute inset-0 opacity-0 bg-white/20"
                initial={{ width: 0, left: 0 }}
                whileHover={{ 
                  width: "150%", 
                  left: "-25%",
                  opacity: 0.2,
                  transition: { duration: 0.4 } 
                }}
              />
            </motion.button>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className={cn(
          "absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent z-0",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y2 }}
      />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          delay: 2,
          repeatDelay: 0.5
        }}
      >
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="28" height="48" rx="14" stroke="#C0C0C0" strokeWidth="2"/>
          <motion.circle 
            cx="15" 
            cy="15" 
            r="6" 
            fill="#00F5D4"
            animate={{ y: [0, 20, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
