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
      subtitle: 'Gulf-First AI Capabilities',
      title: 'Built for the regulatory and cultural landscape of the GCC',
      description: 'Deep understanding of Gulf business operations, regulatory requirements, and Arabic language processing needs.'
    },
    ar: {
      subtitle: 'قدرات الذكاء الاصطناعي التي تركز على الخليج',
      title: 'مبنية للمشهد التنظيمي والثقافي لدول مجلس التعاون الخليجي',
      description: 'فهم عميق لعمليات الأعمال الخليجية والمتطلبات التنظيمية واحتياجات معالجة اللغة العربية.'
    }
  };

  const gulfAdvantages = [
    {
      icon: Shield,
      titleEn: 'Regulatory Understanding',
      titleAr: 'الفهم التنظيمي',
      descEn: 'Deep knowledge of GCC regulatory frameworks including DIFC, ADGM, QFC, and regional compliance requirements',
      descAr: 'معرفة عميقة بالأطر التنظيمية لدول مجلس التعاون الخليجي بما في ذلك مركز دبي المالي العالمي وأبوظبي ومركز قطر المالي ومتطلبات الامتثال الإقليمية',
      features: [
        'GCC Regulatory Awareness',
        'Data Protection Understanding',
        'Financial Compliance Knowledge',
        'Industry-Specific Requirements'
      ]
    },
    {
      icon: Globe,
      titleEn: 'Arabic AI Processing',
      titleAr: 'معالجة الذكاء الاصطناعي العربية',
      descEn: 'Advanced natural language processing for Arabic with Gulf dialect recognition',
      descAr: 'معالجة متقدمة للغة الطبيعية للعربية مع التعرف على اللهجات الخليجية',
      features: [
        'Gulf Arabic Dialect Models',
        'Cultural Context Understanding',
        'Bilingual Document Processing',
        'Voice Recognition (Arabic/English)'
      ]
    },
    {
      icon: Building,
      titleEn: 'Gulf Market Intelligence',
      titleAr: 'ذكاء السوق الخليجي',
      descEn: 'Deep understanding of GCC business practices, cultural nuances, and market dynamics',
      descAr: 'فهم عميق لممارسات الأعمال الخليجية والفروق الثقافية وديناميكيات السوق',
      features: [
        'Family Business Integration',
        'Sharia-Compliant AI Solutions',
        'Cross-Border GCC Operations',
        'Local Partnership Networks'
      ]
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
              
              <p className="text-body mb-6">
                {isArabic ? advantage.descAr : advantage.descEn}
              </p>

              <div className="space-y-2">
                {advantage.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-caption text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GulfSpecificPositioning;
