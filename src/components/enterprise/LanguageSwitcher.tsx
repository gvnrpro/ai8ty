
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'عر', name: 'العربية' },
  ];

  return (
    <div className="relative">
      <motion.div 
        className="flex items-center gap-1 bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2"
        whileHover={{ scale: 1.02 }}
      >
        <Globe size={16} className="text-slate-400" />
        <div className="flex">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => setLanguage(lang.code as any)}
              className={`px-2 py-1 text-sm font-medium rounded transition-all ${
                language === lang.code
                  ? 'text-white bg-blue-600'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
