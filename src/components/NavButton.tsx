
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const buttonVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1 },
  }),
};

type NavButtonProps = {
  label: string;
  path: string;
  onClick?: () => void;
  isActive?: boolean;
  index?: number;
  variant?: 'desktop' | 'mobile';
};

const NavButton: React.FC<NavButtonProps> = ({
  label,
  path,
  onClick,
  isActive = false,
  index = 0,
  variant = 'desktop',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const sharedClasses = 'transition-colors duration-200 hover-scale-subtle apple-focus rounded-md';
  const desktopClasses = `
    ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
    px-3 py-2 min-h-[44px] flex items-center justify-center
  `;
  const mobileClasses = `
    ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
    px-4 py-3 min-h-[56px] min-w-[200px] flex items-center justify-center text-lg
  `;

  return (
    <motion.button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`relative ${sharedClasses} ${
        variant === 'desktop' ? desktopClasses : mobileClasses
      }`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      custom={index}
      aria-label={label}
      role="menuitem"
      tabIndex={0}
    >
      {label}

      {isActive && variant === 'desktop' && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-px bg-neural"
          layoutId="activeTab"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default NavButton;
