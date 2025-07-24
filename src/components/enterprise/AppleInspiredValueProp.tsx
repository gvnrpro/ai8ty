
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
      subtitle: 'Built for Excellence',
      title: 'Enterprise AI that transforms operations across the Gulf region',
      description: 'From financial institutions to healthcare networks, we deliver AI systems that drive measurable results while maintaining the highest standards of security and compliance.',
      features: [
        {
          icon: Shield,
          title: 'Regulatory Compliance',
          description: 'UAE PDPL, MOHAP, and GCC-ready deployments with built-in security frameworks.'
        },
        {
          icon: Zap,
          title: 'Operational Excellence',
          description: 'AI systems designed to streamline complex workflows and enhance decision-making.'
        },
        {
          icon: Globe,
          title: 'Regional Expertise',
          description: 'Deep understanding of Gulf market dynamics and regulatory requirements.'
        },
        {
          icon: Target,
          title: 'Measurable Impact',
          description: 'ROI-focused implementations with clear performance metrics and outcomes.'
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
