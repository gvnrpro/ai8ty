
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const AI8TYCardHighlight: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showName, setShowName] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 15; // -15 to +15 degrees
    const rotateX = ((centerY - y) / centerY) * 10; // -10 to +10 degrees
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  
  useEffect(() => {
    if (!inView) return;
    
    // Reveal name after card appears
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 800);
    
    // Subtle animation when first in view
    const timer = setTimeout(() => {
      if (!isHovered && !prefersReducedMotion) {
        setRotation({ x: 3, y: -5 });
        setTimeout(() => {
          setRotation({ x: -3, y: 5 });
          setTimeout(() => {
            setRotation({ x: 0, y: 0 });
          }, 1000);
        }, 1000);
      }
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(nameTimer);
    }
  }, [inView, isHovered, prefersReducedMotion]);
  
  return (
    <section 
      id="ai8ty-card" 
      ref={ref}
      className="py-12 md:py-24 px-4 md:px-6 bg-ai8ty-black overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Card Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              ref={cardRef}
              className={cn(
                "w-full max-w-md mx-auto aspect-[16/10] rounded-xl relative",
                "transition-all duration-500 transform perspective-1000 will-change-transform",
                inView ? "opacity-100" : "opacity-0"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={
                prefersReducedMotion ? {} : {
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out',
                }
              }
              onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={resetRotation}
            >
              {/* Card layers */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ai8ty-violet/80 via-ai8ty-teal/50 to-ai8ty-violet/80 blur-md opacity-50 transform -translate-y-2 translate-x-2" />
              <div className="absolute inset-0 rounded-xl bg-ai8ty-black border border-ai8ty-grey/30" />
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ai8ty-violet/10 to-ai8ty-teal/10" />
                <div className="absolute top-6 left-6">
                  <img 
                    src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                    alt="AI8TY Logo" 
                    className="h-8 md:h-10 w-auto"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs text-ai8ty-grey mb-1">Creative Director</div>
                  <motion.div 
                    className="text-xl font-avant text-ai8ty-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={showName ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    Awwab Abdul
                  </motion.div>
                  <div className="text-xs text-ai8ty-teal">futureis@ai8ty.com</div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-ai8ty-black/50 to-transparent" />
                
                {/* Holographic effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-300",
                  isHovered ? "opacity-20" : ""
                )}>
                  <div className="absolute inset-0 bg-gradient-to-br from-ai8ty-violet via-ai8ty-teal to-white animate-pulse mix-blend-overlay" />
                </div>
                
                {/* NFC chip indicator */}
                <div className="absolute top-6 right-6 w-6 h-6">
                  <div className="w-full h-full rounded-full border border-ai8ty-teal/50 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-ai8ty-teal/70 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="heading text-3xl md:text-4xl mb-6">
              Not Just a Card. <br />
              <span className="text-ai8ty-teal">A Portal to Your Digital Identity.</span>
            </h2>
            
            <p className="subheading mb-8 leading-relaxed">
              The AI8TY Card is a smart, NFC-enabled business card that links to 
              your world—your portfolio, your pitch, your presence. A single tap 
              transforms a simple exchange into a multimedia experience.
            </p>
            
            <Button 
              variant="default"
              className="w-full sm:w-auto bg-ai8ty-teal hover:bg-ai8ty-teal/80 text-ai8ty-black font-medium px-6 py-6"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Preorder Yours
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AI8TYCardHighlight;
