
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      badge: 'Transforming the Gulf Region',
      headline: "AI that doesn't just compute.",
      subheadline: 'It transforms.',
      description:
        'The only AI platform built specifically for GCC enterprises. Turn complex operations into competitive advantages with systems that understand your market, regulations, and ambitions.',
      cta: "See What's Possible",
      secondaryCta: 'Schedule Strategic Briefing',
      scrollDown: 'Scroll down',
    },
    ar: {
      badge: 'تحويل منطقة الخليج',
      headline: 'ذكاء اصطناعي لا يحسب فقط.',
      subheadline: 'بل يحول.',
      description:
        'منصة الذكاء الاصطناعي الوحيدة المبنية خصيصًا لمؤسسات دول مجلس التعاون. حول العمليات المعقدة إلى مزايا تنافسية مع أنظمة تفهم السوق واللوائح والطموحات الخاصة بك.',
      cta: 'شاهد ما هو ممكن',
      secondaryCta: 'جدولة إحاطة استراتيجية',
      scrollDown: 'مرر للأسفل',
    },
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  // Animation variants for cinematic staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen relative flex items-center justify-center section-apple-large ${
        isArabic ? 'rtl' : ''
      }`}
      style={{
        background:
          'radial-gradient(ellipse at center top, hsl(var(--gray-900)) 0%, hsl(var(--background)) 70%)',
      }}
    >
      {/* Background & floating elements */}
      <motion.div className="absolute inset-0 opacity-40 pointer-events-none" style={{ y }}>
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 immersive-grid opacity-20" />
        <div className="absolute top-[20%] left-[10%] w-px h-[35vh] bg-gradient-to-b from-blue-500/30 to-transparent" />
        <div className="absolute top-[40%] right-[15%] w-px h-[25vh] bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute bottom-[30%] left-[20%] w-px h-[20vh] bg-gradient-to-b from-emerald-500/25 to-transparent" />

        {/* Floating animated dots */}
        <motion.div
          className="absolute top-[25%] right-[20%] w-2 h-2 bg-blue-400/60 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full"
          animate={{ y: [0, 15, 0], x: [0, -8, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-[60%] right-[30%] w-1 h-1 bg-emerald-400/40 rounded-full"
          animate={{ y: [0, 10, 0], x: [0, -5, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="container-apple text-center z-10"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 glass-premium px-5 py-2.5 rounded-full text-caption font-medium hover-scale-subtle">
            <Sparkles size={14} className="text-blue-400" />
            {currentContent.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-display-large mb-4">
            <span className="block">{currentContent.headline}</span>
            <span className="block gradient-text">{currentContent.subheadline}</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-body-large container-apple-narrow mb-12 leading-relaxed"
          variants={itemVariants}
        >
          {currentContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={itemVariants}
        >
          <button onClick={() => navigate('/solutions')} className="btn-premium group">
            <span className="relative z-10">{currentContent.cta}</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-0.5 duration-200"
            />
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="btn-apple-secondary premium-border-card hover-lift group"
          >
            <span>{currentContent.secondaryCta}</span>
          </button>
        </motion.div>

        {/* Floating visual */}
        <motion.div className="mt-24 relative" variants={itemVariants}>
          <div className="relative inline-block premium-3d-card">
            <div className="w-36 h-36 glass-premium rounded-3xl flex items-center justify-center mx-auto">
              <img
                src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png"
                alt="AI8TY"
                className="h-20 w-auto object-contain opacity-80"
              />
            </div>

            <div className="absolute inset-0 w-36 h-36 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl mx-auto" />

            <motion.div
              className="absolute w-4 h-1 bg-blue-400/20 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
                rotate: 0,
                transformOrigin: '80px 0px',
              }}
            />

            <motion.div
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
              animate={{
                x: [0, 80, 0, -80, 0],
                y: [0, 80, 0, -80, 0],
                opacity: [0.8, 0.2, 0.8, 0.2, 0.8],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 cursor-pointer select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label={currentContent.scrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center items-start p-1">
          <motion.span
            className="block w-2 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-sm text-blue-400">{currentContent.scrollDown}</span>
      </motion.div>
    </section>
  );
};

export default AppleInspiredHero;
