import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Target, Layers, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ApproachMethodology: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Our Approach',
      title: 'How we think about AI implementation',
      description: 'Enterprise AI fails when vendors sell technology instead of solving problems. Our methodology starts with understanding your business, not showcasing AI features.',
      methodology: [
        {
          icon: Lightbulb,
          titleEn: 'Strategic Discovery',
          titleAr: 'الاكتشاف الاستراتيجي',
          descEn: 'We map your operational workflows, competitive pressures, and regulatory requirements. AI solutions emerge from business needs, not the other way around.',
          descAr: 'نقوم برسم خريطة لسير عملك التشغيلي والضغوط التنافسية والمتطلبات التنظيمية. تظهر حلول الذكاء الاصطناعي من احتياجات الأعمال، وليس العكس.'
        },
        {
          icon: Target,
          titleEn: 'Precision Architecture',
          titleAr: 'العمارة الدقيقة',
          descEn: 'Custom AI systems designed for your specific operations—whether financial compliance, healthcare diagnostics, or supply chain optimization.',
          descAr: 'أنظمة ذكاء اصطناعي مخصصة مصممة لعملياتك المحددة—سواء كانت الامتثال المالي أو التشخيص الصحي أو تحسين سلسلة التوريد.'
        },
        {
          icon: Layers,
          titleEn: 'Integration Engineering',
          titleAr: 'هندسة التكامل',
          descEn: 'AI that connects seamlessly with your existing systems. No rip-and-replace. No operational disruption. Just enhanced capabilities.',
          descAr: 'ذكاء اصطناعي يتصل بسلاسة مع أنظمتك الحالية. لا إزالة واستبدال. لا اضطراب تشغيلي. فقط قدرات محسنة.'
        },
        {
          icon: Settings,
          titleEn: 'Operational Excellence',
          titleAr: 'التميز التشغيلي',
          descEn: 'Ongoing optimization, performance monitoring, and continuous improvement. AI systems that evolve with your business.',
          descAr: 'التحسين المستمر ومراقبة الأداء والتحسين المستمر. أنظمة الذكاء الاصطناعي التي تتطور مع عملك.'
        }
      ]
    },
    ar: {
      subtitle: 'نهجنا',
      title: 'كيف نفكر في تنفيذ الذكاء الاصطناعي',
      description: 'يفشل الذكاء الاصطناعي للمؤسسات عندما يبيع الموردون التكنولوجيا بدلاً من حل المشكلات. تبدأ منهجيتنا بفهم عملك، وليس عرض ميزات الذكاء الاصطناعي.',
      methodology: []
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 ${isArabic ? 'rtl' : ''}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-green-400 font-medium mb-4 tracking-wider uppercase">
            {currentContent.subtitle}
          </p>
          
          <h2 className="text-display mb-6 container-apple-narrow">
            {currentContent.title}
          </h2>

          <p className="text-body-large container-apple-narrow">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.en.methodology.map((item, index) => (
            <motion.div
              key={index}
              className="card-apple p-8 hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-title mb-3">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="text-body leading-relaxed">
                    {isArabic ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-body-large text-muted-foreground container-apple-narrow">
            {isArabic 
              ? 'لا توجد حلول عامة. لا عروض توضيحية لامعة. فقط أنظمة ذكاء اصطناعي تعمل.'
              : 'No generic solutions. No flashy demos. Just AI systems that work.'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachMethodology;