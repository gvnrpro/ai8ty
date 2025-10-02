import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Globe, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GulfSpecificPositioning: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Built for the Gulf',
      title: 'GCC regulatory and cultural reality',
      description: 'Gulf operations. Regional requirements. Arabic processing.'
    },
    ar: {
      subtitle: 'مبنية للخليج',
      title: 'واقع دول مجلس التعاون الخليجي التنظيمي والثقافي',
      description: 'عمليات خليجية. متطلبات إقليمية. معالجة عربية.'
    }
  };

  const gulfAdvantages = [
    {
      icon: Shield,
      titleEn: 'Regulatory Reality',
      titleAr: 'الفهم التنظيمي',
      descEn: 'DIFC, ADGM, QFC frameworks. Regional compliance built in.',
      descAr: 'معرفة عميقة بالأطر التنظيمية لدول مجلس التعاون الخليجي بما في ذلك مركز دبي المالي العالمي وأبوظبي ومركز قطر المالي ومتطلبات الامتثال الإقليمية'
    },
    {
      icon: Globe,
      titleEn: 'Arabic AI',
      titleAr: 'معالجة الذكاء الاصطناعي العربية',
      descEn: 'Gulf dialect recognition. Cultural context. Bilingual processing.',
      descAr: 'معالجة متقدمة للغة الطبيعية للعربية مع التعرف على اللهجات الخليجية'
    },
    {
      icon: Building,
      titleEn: 'Market Intelligence',
      titleAr: 'ذكاء السوق الخليجي',
      descEn: 'GCC business practices. Cultural nuances. Sharia compliance.',
      descAr: 'فهم عميق لممارسات الأعمال الخليجية والفروق الثقافية وديناميكيات السوق'
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--gray-950)) 0%, hsl(var(--background)) 50%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] right-[5%] w-80 h-80 bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-green-500 font-medium mb-4 tracking-wider uppercase">
            {currentContent.subtitle}
          </p>
          <h2 className="text-display mb-6 container-apple-narrow">
            {currentContent.title}
          </h2>
          <p className="text-body-large container-apple-narrow">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Gulf Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {gulfAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="card-apple hover-lift group p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <advantage.icon size={28} className="text-green-400" />
              </div>
              
              <h3 className="text-title mb-4">
                {isArabic ? advantage.titleAr : advantage.titleEn}
              </h3>
              
              <p className="text-body">
                {isArabic ? advantage.descAr : advantage.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GulfSpecificPositioning;
