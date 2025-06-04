
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MinimalFooter: React.FC = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      privacy: 'Privacy',
      terms: 'Terms',
      security: 'Security',
      rights: '© 2025 AI8TY. All rights reserved.'
    },
    ar: {
      privacy: 'الخصوصية',
      terms: 'الشروط', 
      security: 'الأمان',
      rights: '© 2025 AI8TY. جميع الحقوق محفوظة.'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <footer className={`bg-slate-900 border-t border-slate-800/50 py-12 px-6 ${isArabic ? 'rtl' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center gap-3 mb-8 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY" 
              className="h-10 w-auto object-contain opacity-80" 
            />
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-400 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[currentContent.privacy, currentContent.terms, currentContent.security].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-white transition-colors duration-300 relative group"
                whileHover={{ y: -1 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-px bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <span className="text-slate-500">{currentContent.rights}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
