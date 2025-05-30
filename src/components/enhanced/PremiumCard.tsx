
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'neural' | 'quantum' | 'intelligence' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  className
}) => {
  const baseClasses = "relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-500";
  
  const variants = {
    default: "bg-white/5 border-white/10 hover:border-white/20",
    neural: "bg-neural/5 border-neural/20 hover:border-neural/40 shadow-neural",
    quantum: "bg-quantum/5 border-quantum/20 hover:border-quantum/40 shadow-quantum",
    intelligence: "bg-intelligence/5 border-intelligence/20 hover:border-intelligence/40 shadow-intelligence",
    glass: "bg-white/10 border-white/20 hover:bg-white/15 backdrop-blur-2xl"
  };
  
  const sizes = {
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12"
  };

  return (
    <motion.div
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay for enhanced depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default PremiumCard;
