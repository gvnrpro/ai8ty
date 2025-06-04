
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import FuturisticElements from './FuturisticElements';

const MinimalValueProposition: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Our Foundation',
      principles: [
        {
          title: "Precision",
          description: "Systematic validation of AI architectures"
        },
        {
          title: "Performance", 
          description: "Domain-adapted implementations"
        },
        {
          title: "Security",
          description: "Enterprise-grade governance protocols"
        }
      ]
    },
    ar: {
      title: 'أساسنا',
      principles: [
        {
          title: "الدقة",
          description: "التحقق المنهجي من بنية الذكاء الاصطناعي"
        },
        {
          title: "الأداء",
          description: "تطبيقات مكيفة للمجال"
        },
        {
          title: "الأمان",
          description: "بروتوكولات حوكمة على مستوى المؤسسات"
        }
      ]
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`py-24 px-4 md:px-6 relative ${isArabic ? 'rtl' : ''}`}
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
    >
      <FuturisticElements variant="hidden" density={2} />
      
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-slate-900 text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {currentContent.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {currentContent.principles.map((principle, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
            >
              {/* Minimal line divider */}
              <div className="w-16 h-px bg-slate-300 mx-auto mb-8 group-hover:bg-slate-600 transition-colors duration-500" />
              
              <h3 className="text-xl md:text-2xl font-light text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                {principle.title}
              </h3>
              
              <p className="text-slate-600 font-light leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MinimalValueProposition;
