
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
      subtitle: 'What We Build',
      title: 'Intelligent tools and infrastructure for real-world impact',
      description: 'From AI-powered automation to accessible infrastructure, we create systems that bridge the gap between cutting-edge technology and practical solutions.',
      features: [
        {
          icon: Zap,
          title: 'Accessible to Non-Technical Teams',
          description: 'Tools designed for clarity over complexity, enabling everyone to harness advanced capabilities.'
        },
        {
          icon: Target,
          title: 'Built for Clarity Over Complexity',
          description: 'Clean, intuitive systems that focus on outcomes rather than overwhelming users with technical details.'
        },
        {
          icon: Globe,
          title: 'Tools People Can Actually Use',
          description: 'Practical applications that solve real problems for businesses, creators, and communities worldwide.'
        },
        {
          icon: Shield,
          title: 'Safety as a Foundational Principle',
          description: 'Every system built with security, privacy, and responsible AI practices at its core.'
        }
      ]
    },
    ar: {
      subtitle: 'ما نبنيه',
      title: 'أدوات ذكية وبنية تحتية للتأثير الحقيقي',
      description: 'من الأتمتة المدعومة بالذكاء الاصطناعي إلى البنية التحتية المتاحة، نحن ننشئ أنظمة تربط بين التكنولوجيا المتطورة والحلول العملية.',
      features: [
        {
          icon: Zap,
          title: 'في متناول الفرق غير التقنية',
          description: 'أدوات مصممة للوضوح بدلاً من التعقيد، مما يمكن الجميع من الاستفادة من القدرات المتقدمة.'
        },
        {
          icon: Target,
          title: 'مبني للوضوح بدلاً من التعقيد',
          description: 'أنظمة نظيفة وبديهية تركز على النتائج بدلاً من إرباك المستخدمين بالتفاصيل التقنية.'
        },
        {
          icon: Globe,
          title: 'أدوات يمكن للناس استخدامها فعلاً',
          description: 'تطبيقات عملية تحل المشاكل الحقيقية للشركات والمبدعين والمجتمعات في جميع أنحاء العالم.'
        },
        {
          icon: Shield,
          title: 'الأمان كمبدأ أساسي',
          description: 'كل نظام مبني مع الأمان والخصوصية وممارسات الذكاء الاصطناعي المسؤولة في جوهره.'
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
