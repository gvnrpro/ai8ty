
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyAI8TYSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Why Choose AI8TY',
      title: 'Your Trusted AI Partner in the Gulf Region',
      description: 'With deep understanding of Gulf markets and proven expertise in AI implementation, we deliver solutions that drive real business value and sustainable growth.',
      benefits: [
        'Growing portfolio of Gulf enterprise implementations',
        'Deep expertise in Gulf market dynamics and cultural requirements',
        'End-to-end support from strategy through deployment',
        'Modern AI technologies adapted to regional business needs',
        'Founded and led by Awwab Abdul, Gulf AI specialist'
      ],
      cta: 'Start Your AI Journey'
    },
    ar: {
      subtitle: 'لماذا AI8TY',
      title: 'شريكك الموثوق للذكاء الاصطناعي في منطقة الخليج',
      description: 'بفهم عميق لأسواق الخليج وخبرة مثبتة في تنفيذ الذكاء الاصطناعي، نقدم حلولاً تحقق قيمة تجارية حقيقية ونمواً مستداماً.',
      benefits: [
        'محفظة متنامية من مشاريع المؤسسات الخليجية',
        'خبرة عميقة في ديناميكيات السوق الخليجي والمتطلبات الثقافية',
        'دعم شامل من الاستراتيجية حتى التنفيذ',
        'تقنيات ذكاء اصطناعي حديثة مكيفة لاحتياجات المنطقة',
        'تأسست وتدار من قبل عواب عبد، متخصص الذكاء الاصطناعي الخليجي'
      ],
      cta: 'ابدأ رحلة الذكاء الاصطناعي'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'radial-gradient(ellipse at center, hsl(var(--gray-900)) 0%, hsl(var(--background)) 100%)'
      }}
    >
      <div className="container-apple">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-caption text-blue-500 font-medium mb-4 tracking-wider uppercase">
              {currentContent.subtitle}
            </p>
            <h2 className="text-display mb-6">
              {currentContent.title}
            </h2>
            <p className="text-body-large mb-10">
              {currentContent.description}
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {currentContent.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <CheckCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-body">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-apple-primary hover-lift group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>{currentContent.cta}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 duration-200" />
            </motion.button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Apple-style floating visualization */}
            <div className="relative">
              {/* Main card */}
              <div className="card-apple p-8 hover-scale">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 glass-apple rounded-2xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                      alt="AI8TY" 
                      className="h-10 w-auto object-contain opacity-80" 
                    />
                  </div>
                  <h3 className="text-title mb-3">GCC-Native AI Systems</h3>
                  <p className="text-body text-muted-foreground">
                    Engineered for regional excellence
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 glass-apple rounded-xl p-4"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 glass-apple rounded-2xl p-6"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI8TYSection;
