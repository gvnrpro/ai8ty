
import React, { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BrandAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  loop?: boolean;
  onComplete?: () => void;
}

const BrandAnimation: React.FC<BrandAnimationProps> = ({ 
  size = 'md', 
  loop = false,
  onComplete
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const controls = useAnimationControls();
  
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32"
  };
  
  useEffect(() => {
    // Create audio element for sound effect
    audioRef.current = new Audio('/ui-sound.mp3'); // This file would need to be added to public folder
    audioRef.current.volume = 0.2;
    
    // Start animation
    const startAnimation = async () => {
      // First animate the infinity parts
      await controls.start("animate");
      
      // Play sound
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          // Handle browsers that block autoplay
          console.log("Audio autoplay blocked by browser");
        }
      }
      
      // Then animate the glow
      await controls.start("glow");
      
      if (onComplete) {
        onComplete();
      }
      
      // If loop is true, reset and animate again
      if (loop) {
        controls.start("initial").then(() => startAnimation());
      }
    };
    
    startAnimation();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [loop, controls, onComplete]);
  
  const infinityVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.2 }
      }
    },
    glow: {
      filter: ["drop-shadow(0px 0px 0px #F1BE6C)", "drop-shadow(0px 0px 8px #F1BE6C)"],
      transition: {
        filter: { duration: 0.8, ease: "easeInOut" }
      }
    }
  };
  
  return (
    <div className={cn("relative", sizeClasses[size])}>
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial="initial"
        animate={controls}
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1BE6C" />
            <stop offset="100%" stopColor="#F8D89F" />
          </linearGradient>
        </defs>
        
        {/* Left loop of the infinity symbol */}
        <motion.path
          d="M30,50 C30,36 40,30 50,30 C60,30 65,37 65,50 C65,63 60,70 50,70 C40,70 30,64 30,50"
          stroke="url(#infinityGradient)"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          variants={infinityVariants}
        />
        
        {/* Right loop of the infinity symbol */}
        <motion.path
          d="M70,50 C70,36 60,30 50,30 C40,30 35,37 35,50 C35,63 40,70 50,70 C60,70 70,64 70,50"
          stroke="url(#infinityGradient)"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          variants={infinityVariants}
        />
        
        {/* Number 8 overlay */}
        <motion.text
          x="50"
          y="53"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-syne font-bold"
          fill="#F1BE6C"
          fontSize="28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          8
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default BrandAnimation;
