
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveArchitecture from './InteractiveArchitecture';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';

const InnovationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      badge: 'What We\'re Working On',
      title: 'Future-Forward AI Systems',
      subtitle: 'At AI8TY, we continuously explore new operational AI applications tailored for the Gulf\'s evolving regulatory, financial, and infrastructure environments.',
      currentlyInBeta: 'Currently in private beta:',
      cta: 'Join Briefing List',
      available: 'Available to select clients via private pilot programs.',
      systems: [
        'AI frameworks for sovereign wealth fund portfolio risk mapping',
        'Predictive utility load optimization models for national infrastructure',
        'Multi-market real estate absorption forecasting engines',
        'Automated FX & cross-border settlement anomaly detection',
        'Emergency services demand prediction models for municipal agencies'
      ]
    },
    ar: {
      badge: 'ما نعمل عليه',
      title: 'أنظمة الذكاء الاصطناعي المستقبلية',
      subtitle: 'في AI8TY، نستكشف باستمرار تطبيقات جديدة للذكاء الاصطناعي التشغيلي المصممة خصيصاً للبيئات التنظيمية والمالية والبنية التحتية المتطورة في الخليج.',
      currentlyInBeta: 'حالياً في النسخة التجريبية الخاصة:',
      cta: 'انضم لقائمة الإحاطة',
      available: 'متاح لعملاء مختارين عبر برامج تجريبية خاصة.',
      systems: [
        'أطر عمل الذكاء الاصطناعي لرسم خرائط مخاطر محافظ صناديق الثروة السيادية',
        'نماذج تحسين الأحمال المرافقية التنبؤية للبنية التحتية الوطنية',
        'محركات التنبؤ بامتصاص العقارات متعددة الأسواق',
        'كشف الشذوذ الآلي في الصرف الأجنبي والتسوية عبر الحدود',
        'نماذج التنبؤ بالطلب على خدمات الطوارئ للوكالات البلدية'
      ]
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={`py-16 md:py-24 px-4 md:px-6 bg-slate-800 relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Badge */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium text-blue-400 backdrop-blur-sm mb-6">
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {currentContent.badge}
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {currentContent.title}
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Interactive Architecture Diagram */}
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16"
        >
          <InteractiveArchitecture isArabic={isArabic} />
        </motion.div>

        {/* Beta Systems Grid */}
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8 text-center">
            {currentContent.currentlyInBeta}
          </h3>
          
          <div className="grid gap-4 md:gap-6">
            {currentContent.systems.map((system, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 md:p-6 hover:border-blue-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center mt-1">
                    {index === 0 && <Shield size={20} className="text-blue-400" />}
                    {index === 1 && <Zap size={20} className="text-blue-400" />}
                    {index === 2 && <Cpu size={20} className="text-blue-400" />}
                    {index === 3 && <Shield size={20} className="text-blue-400" />}
                    {index === 4 && <Zap size={20} className="text-blue-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                      {system}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Availability Notice */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8">
            {currentContent.available}
          </p>
          
          <motion.button
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-sm transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{currentContent.cta}</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InnovationSection;
