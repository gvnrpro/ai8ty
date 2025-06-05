
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Zap, Shield, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InnovationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Innovation at Scale',
      title: 'AI that transforms how the Gulf region operates',
      description: 'From Dubai\'s financial district to Riyadh\'s Vision 2030 initiatives, our AI systems are powering the next generation of Gulf enterprises.',
      features: [
        {
          icon: Brain,
          title: 'Intelligent Automation',
          description: 'AI systems that learn, adapt, and evolve with your business operations.'
        },
        {
          icon: Zap,
          title: 'Real-time Insights',
          description: 'Instant decision support across all critical business functions.'
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-level security with full regulatory compliance across the GCC.'
        },
        {
          icon: Target,
          title: 'Precision Results',
          description: 'Measurable outcomes with clear ROI tracking and performance metrics.'
        }
      ]
    },
    ar: {
      subtitle: 'الابتكار على نطاق واسع',
      title: 'ذكاء اصطناعي يحول طريقة عمل منطقة الخليج',
      description: 'من الحي المالي في دبي إلى مبادرات رؤية 2030 في الرياض، تقوم أنظمة الذكاء الاصطناعي لدينا بتشغيل الجيل القادم من مؤسسات الخليج.',
      features: [
        {
          icon: Brain,
          title: 'الأتمتة الذكية',
          description: 'أنظمة ذكاء اصطناعي تتعلم وتتكيف وتتطور مع عمليات عملك.'
        },
        {
          icon: Zap,
          title: 'رؤى في الوقت الفعلي',
          description: 'دعم قرار فوري عبر جميع وظائف الأعمال الحرجة.'
        },
        {
          icon: Shield,
          title: 'أمان المؤسسات',
          description: 'أمان على مستوى البنوك مع امتثال تنظيمي كامل عبر دول مجلس التعاون.'
        },
        {
          icon: Target,
          title: 'نتائج دقيقة',
          description: 'نتائج قابلة للقياس مع تتبع واضح للعائد على الاستثمار ومقاييس الأداء.'
        }
      ]
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--gray-950)) 0%, hsl(var(--background)) 50%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Apple-style ambient lighting */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] right-[10%] w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
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

        {/* Apple-style floating cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.15),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Apple-style floating card */}
              <div className="card-apple hover-lift group-hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-start gap-6">
                  {/* Icon container with Apple-style treatment */}
                  <div className="relative">
                    <div className="w-16 h-16 glass-apple rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                      <feature.icon size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-title mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
