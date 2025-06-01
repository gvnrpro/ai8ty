
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'quantum';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  className,
  disabled = false,
  loading = false,
  ...rest
}) => {
  const baseClasses = "relative overflow-hidden font-space font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neural/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-neural text-white hover:bg-neural-dark shadow-neural group",
    secondary: "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-xl",
    ghost: "text-neural hover:bg-neural/10 border border-neural/30 hover:border-neural",
    quantum: "bg-gradient-to-r from-quantum to-quantum-light text-white hover:from-quantum-dark hover:to-quantum shadow-quantum"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
    xl: "px-10 py-5 text-xl min-h-[60px]"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...rest}
    >
      {/* Glow effect for primary variant */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neural/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
      
      <span className="relative z-10 flex items-center justify-center gap-3">
        {Icon && iconPosition === 'left' && (
          <motion.div
            animate={loading ? { rotate: 360 } : {}}
            transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 22} />
          </motion.div>
        )}
        
        <span>{children}</span>
        
        {Icon && iconPosition === 'right' && (
          <motion.div
            className="transition-transform group-hover:translate-x-1"
            animate={loading ? { rotate: 360 } : {}}
            transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 22} />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
};

export default PremiumButton;
