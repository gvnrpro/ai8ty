import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, TrendingUp, Globe2, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AIMovementVision: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'The AI Transformation',
      title: 'Intelligence is reshaping how business works',
      vision: 'AI is no longer a future technology—it\'s the operating system of modern enterprise. Organizations worldwide are discovering that artificial intelligence augments human judgment, not replaces it.',
      founder: 'Founded by Awwab Abdul, AI8TY exists at this intersection—where global AI innovation meets Gulf business reality. We build systems that work, not demos that impress.',
      aspects: [
        {
          icon: Brain,
          titleEn: 'Augmentation Over Automation',
          titleAr: 'من الأتمتة إلى التعزيز',
          descEn: 'AI that enhances human judgment. Every implementation drives measurable outcomes.',
          descAr: 'أنظمة الذكاء الاصطناعي التي تعزز اتخاذ القرارات البشرية، ولا تحل محلها. كل تنفيذ يركز على نتائج الأعمال القابلة للقياس.'
        },
        {
          icon: Globe2,
          titleEn: 'Global Tech, Regional Reality',
          titleAr: 'التكنولوجيا العالمية، الفهم الإقليمي',
          descEn: 'Advanced AI built for GCC regulatory, cultural, and operational requirements.',
          descAr: 'قدرات الذكاء الاصطناعي المتقدمة المصممة للمتطلبات التنظيمية والثقافية والتشغيلية الفريدة لدول مجلس التعاون الخليجي.'
        },
        {
          icon: TrendingUp,
          titleEn: 'Strategy First',
          titleAr: 'التنفيذ الاستراتيجي',
          descEn: 'Business strategy drives technology. We map AI capabilities to competitive advantage.',
          descAr: 'يبدأ تحول الذكاء الاصطناعي باستراتيجية الأعمال، وليس اختيار التكنولوجيا. نقوم بربط قدرات الذكاء بميزتك التنافسية.'
        }
      ]
    },
    ar: {
      subtitle: 'تحول الذكاء الاصطناعي',
      title: 'الذكاء يعيد تشكيل طريقة عمل الأعمال',
      vision: 'الذكاء الاصطناعي لم يعد تقنية مستقبلية—إنه نظام التشغيل للمؤسسات الحديثة. المؤسسات تكتشف أن الذكاء الاصطناعي يعزز الحكم البشري، ولا يستبدله.',
      founder: 'تأسست من قبل عواب عبد، AI8TY تتواجد عند هذا التقاطع—حيث يلتقي الابتكار العالمي للذكاء الاصطناعي بواقع الأعمال الخليجية. نحن نبني أنظمة تعمل، وليس عروضاً توضيحية تثير الإعجاب.',
      aspects: []
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[10%] right-[15%] w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s' }} />
      </div>

      <div className="container-apple relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <p className="text-caption text-blue-400 font-medium tracking-wider uppercase">
              {currentContent.subtitle}
            </p>
          </div>
          
          <h2 className="text-display mb-8 container-apple-narrow">
            {currentContent.title}
          </h2>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="container-apple-narrow mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-body-large leading-relaxed mb-8 text-center">
            {currentContent.vision}
          </p>
          
          <p className="text-body leading-relaxed text-center text-muted-foreground">
            {currentContent.founder}
          </p>
        </motion.div>

        {/* Three Core Aspects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.en.aspects.map((aspect, index) => (
            <motion.div
              key={index}
              className="card-apple p-8 hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <aspect.icon className="w-7 h-7 text-blue-400" />
              </div>

              <h3 className="text-title mb-4">
                {isArabic ? aspect.titleAr : aspect.titleEn}
              </h3>

              <p className="text-body leading-relaxed">
                {isArabic ? aspect.descAr : aspect.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMovementVision;
