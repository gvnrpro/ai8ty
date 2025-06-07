import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(path);
  };

  const sharedClasses = 'transition-colors duration-200 hover-scale';
  const desktopClass = isActive
    ? 'text-foreground'
    : 'text-muted-foreground hover:text-foreground';
  const mobileClass = isActive
    ? 'text-foreground'
    : 'text-muted-foreground hover:text-foreground';

  return (
    <motion.button
      onClick={handleClick}
      className={`relative ${
        variant === 'desktop' ? 'text-caption' : 'text-title'
      } ${sharedClasses} ${
        variant === 'desktop' ? desktopClass : mobileClass
      }`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      custom={index}
      aria-label={label}
      role="menuitem"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {label}

      {isActive && variant === 'desktop' && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-px bg-blue-500"
          layoutId="activeTab"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default NavButton;
