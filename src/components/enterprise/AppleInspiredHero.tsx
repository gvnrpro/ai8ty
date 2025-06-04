
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleInspiredHero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const content = {
    en: {
      badge: 'AI8TY',
      headline: 'Operational AI Systems',
      subheadline: 'for GCC Business Leaders',
      description: 'Enterprise-grade AI infrastructure that transforms how regulated organizations operate across the Gulf region.',
      cta: 'Explore Solutions'
    },
    ar: {
      badge: 'AI8TY',
      headline: 'أنظمة الذكاء الاصطناعي التشغيلية',
      subheadline: 'لقادة الأعمال في دول مجلس التعاون',
      description: 'بنية تحتية للذكاء الاصطناعي على مستوى المؤسسات تحول طريقة عمل المنظمات المنظمة في منطقة الخليج.',
      cta: 'استكشف الحلول'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`min-h-screen relative flex items-center justify-center section-apple-large ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'radial-gradient(ellipse at center top, hsl(var(--gray-900)) 0%, hsl(var(--background)) 70%)'
      }}
    >
      {/* Apple-style subtle background elements */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y }}
      >
        <div className="absolute top-[20%] left-[10%] w-px h-24 bg-gradient-to-b from-blue-500/30 to-transparent" />
        <div className="absolute top-[40%] right-[15%] w-px h-32 bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute bottom-[30%] left-[20%] w-px h-20 bg-gradient-to-b from-green-500/25 to-transparent" />
      </motion.div>

      {/* Ultra-minimal grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <motion.div
        className="container-apple text-center z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Apple-style badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 glass-apple px-4 py-2 rounded-full text-caption font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {currentContent.badge}
          </span>
        </motion.div>

        {/* Apple-style headline treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-display-large mb-4">
            {currentContent.headline}
          </h1>
          <h2 className="text-title-large text-muted-foreground">
            {currentContent.subheadline}
          </h2>
        </motion.div>

        {/* Apple-style description */}
        <motion.p 
          className="text-body-large container-apple-narrow mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentContent.description}
        </motion.p>

        {/* Apple-style CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/solutions')}
            className="btn-apple-primary hover-lift group"
          >
            <span>{currentContent.cta}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 duration-200" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppleInspiredHero;
