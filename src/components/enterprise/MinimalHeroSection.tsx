
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedMetrics from './AnimatedMetrics';

const MinimalHeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const content = {
    en: {
      title: 'Operational AI Systems',
      subtitle: 'for GCC Business Leaders',
      description: 'Enterprise-grade AI infrastructure for regulated organizations across the Gulf region.',
      cta: 'Explore Solutions'
    },
    ar: {
      title: 'أنظمة الذكاء الاصطناعي التشغيلية',
      subtitle: 'لقادة الأعمال في دول مجلس التعاون',
      description: 'بنية تحتية للذكاء الاصطناعي على مستوى المؤسسات للمنظمات المنظمة في منطقة الخليج.',
      cta: 'استكشف الحلول'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`min-h-screen relative flex items-center justify-center px-4 md:px-6 ${isArabic ? 'rtl' : ''}`}
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    >
      {/* Subtle animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-blue-400 to-transparent" />
        <div className="absolute top-40 right-16 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent" />
        <div className="absolute bottom-32 left-1/4 w-1 h-40 bg-gradient-to-b from-green-400 to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        className="container mx-auto max-w-5xl text-center z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Minimal title treatment */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
            {currentContent.title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mb-8">
            {currentContent.subtitle}
          </h2>
        </motion.div>

        {/* Minimal description */}
        <motion.p 
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentContent.description}
        </motion.p>

        {/* Minimal CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.button
            onClick={() => navigate('/solutions')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-white border border-slate-600 hover:border-slate-400 transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 font-light text-lg">{currentContent.cta}</span>
            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 duration-300" />
            
            {/* Subtle fill animation */}
            <motion.div
              className="absolute inset-0 bg-slate-800 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Minimal metrics */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatedMetrics isArabic={isArabic} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MinimalHeroSection;
