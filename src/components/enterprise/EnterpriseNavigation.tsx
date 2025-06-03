
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const EnterpriseNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
            alt="AI8TY Logo" 
            className="h-8 w-auto"
          />
          <span className="text-white font-semibold text-lg">
            AI8TY
          </span>
        </motion.button>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/')}
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => navigate('/solutions')}
            className={`text-sm font-medium transition-colors ${
              location.pathname.startsWith('/solutions') 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Solutions
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/solutions')}
          className="hidden md:block bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-sm border border-slate-600 hover:border-slate-500 transition-all"
        >
          Request Briefing
        </button>
      </div>
    </motion.nav>
  );
};

export default EnterpriseNavigation;
