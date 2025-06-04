
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleInspiredFooter: React.FC = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security',
      rights: '© 2025 AI8TY. All rights reserved.'
    },
    ar: {
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة', 
      security: 'الأمان',
      rights: '© 2025 AI8TY. جميع الحقوق محفوظة.'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <footer className={`glass-apple border-t border-white/10 py-8 ${isArabic ? 'rtl' : ''}`}>
      <div className="container-apple">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY" 
              className="h-8 w-auto object-contain opacity-80" 
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 text-caption"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[currentContent.privacy, currentContent.terms, currentContent.security].map((item, index) => (
              <motion.button
                key={item}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover-lift"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.button>
            ))}
            <span className="text-muted-foreground/60 font-light">
              {currentContent.rights}
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default AppleInspiredFooter;
