import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  path: string;
  label: string;
  index?: number;
  isActive: boolean;
  variant: 'desktop' | 'mobile';
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  path,
  label,
  index = 0,
  isActive,
  variant,
  onClick
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    onClick?.();
  };

  if (variant === 'desktop') {
    return (
      <motion.button
        onClick={handleClick}
        className={`
          text-sm font-medium transition-all duration-300 ease-out
          hover-scale focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          px-3 py-2 rounded-lg
          ${isActive 
            ? 'text-white bg-white/10' 
            : 'text-white/70 hover:text-white hover:bg-white/5'
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.1 + index * 0.1, duration: 0.5 }
        }}
        role="menuitem"
      >
        {label}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`
        text-2xl font-light transition-all duration-300 ease-out
        hover-scale focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        px-4 py-3 rounded-lg w-full text-center
        ${isActive 
          ? 'text-white bg-white/10' 
          : 'text-white/80 hover:text-white hover:bg-white/5'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { delay: 0.1 + index * 0.1, duration: 0.5 }
      }}
      role="menuitem"
    >
      {label}
    </motion.button>
  );
};

export default NavButton;