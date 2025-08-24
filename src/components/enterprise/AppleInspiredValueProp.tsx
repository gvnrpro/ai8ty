
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
      subtitle: 'Our Services',
      title: 'Comprehensive AI Solutions for Your Business',
      description: 'We offer end-to-end AI consulting services to help you harness the power of artificial intelligence and transform your business operations.',
      features: [
        {
          icon: Shield,
          title: 'AI Strategy & Consulting',
          description: 'Expert guidance to develop and implement AI strategies that align with your business objectives and drive measurable results.'
        },
        {
          icon: Zap,
          title: 'Custom AI Development',
          description: 'Tailored AI solutions built specifically for your industry needs, from machine learning models to intelligent automation systems.'
        },
        {
          icon: Globe,
          title: 'Digital Transformation',
          description: 'Complete digital transformation services that modernize your operations and position you for future growth.'
        },
        {
          icon: Target,
          title: 'Implementation & Support',
          description: 'Full implementation support with ongoing maintenance to ensure your AI solutions deliver continuous value.'
        }
      ]
    },
    ar: {
      subtitle: 'خدماتنا',
      title: 'حلول ذكاء اصطناعي شاملة لأعمالك',
      description: 'نقدم خدمات استشارية شاملة للذكاء الاصطناعي لمساعدتك على الاستفادة من قوة الذكاء الاصطناعي وتحويل عمليات أعمالك.',
      features: [
        {
          icon: Shield,
          title: 'استراتيجية واستشارات الذكاء الاصطناعي',
          description: 'إرشادات خبيرة لتطوير وتنفيذ استراتيجيات الذكاء الاصطناعي التي تتماشى مع أهداف عملك وتحقق نتائج قابلة للقياس.'
        },
        {
          icon: Zap,
          title: 'تطوير ذكاء اصطناعي مخصص',
          description: 'حلول ذكاء اصطناعي مصممة خصيصاً لاحتياجات صناعتك، من نماذج التعلم الآلي إلى أنظمة الأتمتة الذكية.'
        },
        {
          icon: Globe,
          title: 'التحول الرقمي',
          description: 'خدمات تحول رقمي كاملة تحدث عملياتك وتضعك في موقع مناسب للنمو المستقبلي.'
        },
        {
          icon: Target,
          title: 'التنفيذ والدعم',
          description: 'دعم تنفيذ كامل مع صيانة مستمرة لضمان أن حلول الذكاء الاصطناعي الخاصة بك تقدم قيمة مستمرة.'
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
