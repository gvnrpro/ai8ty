
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const EnhancedLanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'عر', name: 'العربية' },
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe size={16} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-light">
          {languages.find(lang => lang.code === language)?.label}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-slate-800/95 border border-slate-700 rounded backdrop-blur-sm overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${
                  language === lang.code
                    ? 'text-white bg-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-750'
                }`}
                whileHover={{ x: 2 }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-light">{lang.label}</span>
                  <span className="text-xs text-slate-400">{lang.name}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default EnhancedLanguageSwitcher;
