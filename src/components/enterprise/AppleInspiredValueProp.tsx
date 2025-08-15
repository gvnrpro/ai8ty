
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Globe, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleInspiredValueProp: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Strategic Architecture',
      title: 'AI infrastructure that integrates with your existing enterprise systems',
      description: 'We don\'t replace your tech stack—we make it intelligent. Strategic AI integration that enhances your current operations while building toward your competitive future.',
      features: [
        {
          icon: Shield,
          title: 'Enterprise Integration',
          description: 'Seamless connection with SAP, Oracle, Microsoft, and custom enterprise systems. Your data stays where it belongs.'
        },
        {
          icon: Zap,
          title: 'Operational Intelligence',
          description: 'Real-time insights that turn your operational data into strategic advantage. No reporting delays, no data silos.'
        },
        {
          icon: Globe,
          title: 'Gulf-Native Design',
          description: 'Built for GCC regulatory requirements, Arabic processing, and regional business practices from day one.'
        },
        {
          icon: Target,
          title: 'Competitive Results',
          description: 'Strategic implementations focused on market advantage, not just operational efficiency.'
        }
      ]
    },
    ar: {
      subtitle: 'مبني للتميز',
      title: 'ذكاء اصطناعي للمؤسسات يحول العمليات في منطقة الخليج',
      description: 'من المؤسسات المالية إلى شبكات الرعاية الصحية، نقدم أنظمة ذكاء اصطناعي تحقق نتائج قابلة للقياس مع الحفاظ على أعلى معايير الأمان والامتثال.',
      features: [
        {
          icon: Shield,
          title: 'الامتثال التنظيمي',
          description: 'عمليات نشر جاهزة لقانون حماية البيانات الإماراتي ووزارة الصحة ومجلس التعاون مع أطر أمان مدمجة.'
        },
        {
          icon: Zap,
          title: 'التميز التشغيلي',
          description: 'أنظمة ذكاء اصطناعي مصممة لتبسيط سير العمل المعقد وتعزيز صنع القرار.'
        },
        {
          icon: Globe,
          title: 'الخبرة الإقليمية',
          description: 'فهم عميق لديناميكيات السوق الخليجية والمتطلبات التنظيمية.'
        },
        {
          icon: Target,
          title: 'تأثير قابل للقياس',
          description: 'تطبيقات تركز على العائد على الاستثمار مع مقاييس أداء ونتائج واضحة.'
        }
      ]
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-950)) 100%)'
      }}
    >
      <div className="container-apple">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-blue-500 font-medium mb-4 tracking-wider uppercase">
            {currentContent.subtitle}
          </p>
          <h2 className="text-display mb-6 container-apple-narrow">
            {currentContent.title}
          </h2>
          <p className="text-body-large container-apple-narrow">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {currentContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="card-apple hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <div className="flex items-start gap-4">
                <div className="glass-apple p-3 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
                  <feature.icon size={24} className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-title mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleInspiredValueProp;
