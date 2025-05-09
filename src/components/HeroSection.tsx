
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
  
  // Parallax values for text and background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  // Dynamic particle properties
  const [particleDensity, setParticleDensity] = useState(30);
  const [words] = useState(['Transform.', 'Design.', 'Scale.', 'Automate.']);
  const [currentWord, setCurrentWord] = useState(0);
  
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
    
    // Word rotation timer
    let wordInterval: ReturnType<typeof setInterval>;
    if (!prefersReducedMotion) {
      wordInterval = setInterval(() => {
        setCurrentWord(prev => (prev + 1) % words.length);
      }, 3000);
    }
    
    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [words.length]);

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="hero-section" 
      ref={sectionRef}
      className="min-h-[100vh] relative flex flex-col justify-center items-center py-24 px-4 overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Particle Background with gold accents */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={particleDensity} 
          color="#F1BE6C" 
          className="opacity-30" 
          mode="fluid"
        />
        
        {/* Digital pulse overlay */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-radial from-sand/5 to-transparent rounded-full"
              style={{
                left: `${50 + (i * 10)}%`,
                top: `${50 - (i * 5)}%`,
                width: '200vw',
                height: '200vh',
                x: '-50%',
                y: '-50%',
                scale,
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
        
        {/* Spatial grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full grid grid-cols-6 grid-rows-6">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute h-px bg-sand/50 left-0 right-0"
                style={{ top: `${i * (100 / 6)}%` }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute w-px bg-sand/50 top-0 bottom-0"
                style={{ left: `${i * (100 / 6)}%` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Brutal stack layers for depth */}
      <motion.div 
        className="absolute top-[5%] right-[5%] w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-full"
        style={{ y: y3 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 border border-sand/10 rounded-xl"
        style={{ y: y2 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -360],
        }}
        transition={{ 
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className={cn(
          "container max-w-4xl mx-auto z-10 transition-all duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ y: y1 }}
      >
        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.div
            className="inline-flex items-center gap-2 bg-depth-2 border border-white/10 rounded-full px-4 py-2 text-sm font-space text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="flex h-2 w-2 rounded-full bg-sand"></span>
            <span>Business Transformation Platform</span>
          </motion.div>
        </div>

        <div className="overflow-hidden mb-2">
          <motion.h1 
            ref={headingRef}
            className="heading text-4xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 font-bold tracking-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="block">Think.</span>
            <span className="block">Create.</span>
            <motion.div className="inline-block h-[1em] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentWord}
                  className="absolute inline-block text-sand"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.h1>
        </div>
        
        <motion.p 
          className="subheading text-lg md:text-xl text-center md:text-left max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          AI8TY is the business transformation platform for visionary brands. 
          We engineer systems that scale your business through AI-powered automation and design.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <Button 
            onClick={scrollToWork}
            className="btn-secondary text-base group relative overflow-hidden"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Explore Our Platform</span>
              <ArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
              
              {/* Button hover effect */}
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
          
          <Button
            className="btn-outline text-base group relative overflow-hidden"
            variant="outline"
          >
            <span className="relative z-10">Book a Demo</span>
            <ArrowUpRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
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
          <rect x="1" y="1" width="28" height="48" rx="14" stroke="#F1BE6C" strokeOpacity="0.5" strokeWidth="1"/>
          <motion.circle 
            cx="15" 
            cy="15" 
            r="6" 
            fill="#F1BE6C"
            fillOpacity="0.7"
            animate={{ y: [0, 20, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </svg>
      </motion.div>
      
      {/* "OS for business" visual element */}
      <motion.div
        className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-24 h-px bg-sand/50"></div>
        <p className="text-xs uppercase tracking-widest font-space text-sand">OS for Business</p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
