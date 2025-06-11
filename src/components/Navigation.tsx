import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero-section" className="font-bold text-lg tracking-wider text-white">Creative<span className="text-neural">Agency</span></a>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative px-2 py-1 text-white/80 hover:text-neural transition-colors font-medium focus:outline-none"
            >
              <span>{link.label}</span>
              <motion.span
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-neural origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                whileHover={{ scaleX: 1 }}
              />
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-4 py-6 flex flex-col gap-6"
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 text-lg font-medium text-left"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
