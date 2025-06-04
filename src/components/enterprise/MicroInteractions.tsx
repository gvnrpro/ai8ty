
import React from 'react';
import { motion } from 'framer-motion';

interface MicroInteractionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'minimal';
  className?: string;
}

export const MicroInteractionButton: React.FC<MicroInteractionButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  const variants = {
    primary: 'border-slate-600 hover:border-slate-400 text-white',
    secondary: 'border-slate-300 hover:border-slate-600 text-slate-900',
    minimal: 'border-transparent hover:border-slate-600 text-slate-600 hover:text-slate-900'
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative inline-flex items-center gap-3 px-6 py-3 border transition-all duration-300 overflow-hidden group ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 font-light">{children}</span>
      
      {/* Subtle fill animation */}
      <motion.div
        className="absolute inset-0 bg-slate-800/10 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: '200%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

interface HoverRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
}

export const HoverReveal: React.FC<HoverRevealProps> = ({
  children,
  revealContent,
  className = ''
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden group ${className}`}
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: { y: -10, opacity: 0.7 }
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          hover: { y: 0, opacity: 1 }
        }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {revealContent}
      </motion.div>
    </motion.div>
  );
};

export const ProgressiveReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
