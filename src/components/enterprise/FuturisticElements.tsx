
import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticElementsProps {
  variant?: 'subtle' | 'minimal' | 'hidden';
  density?: number;
}

const FuturisticElements: React.FC<FuturisticElementsProps> = ({ 
  variant = 'subtle', 
  density = 3 
}) => {
  const generateElements = () => {
    const elements = [];
    for (let i = 0; i < density; i++) {
      elements.push(
        <motion.div
          key={i}
          className="absolute w-px h-16 bg-gradient-to-b from-blue-400/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
          }}
        />
      );
    }
    return elements;
  };

  const opacityClass = {
    subtle: 'opacity-20',
    minimal: 'opacity-10',
    hidden: 'opacity-5'
  }[variant];

  return (
    <div className={`absolute inset-0 pointer-events-none ${opacityClass}`}>
      {/* Scanning lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        animate={{ y: [0, window.innerHeight || 800] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear"
        }}
      />
      
      {/* Random vertical elements */}
      {generateElements()}
      
      {/* Corner elements */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-blue-400/30" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-blue-400/30" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-blue-400/30" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-blue-400/30" />
    </div>
  );
};

export default FuturisticElements;
