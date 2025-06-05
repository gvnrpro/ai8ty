
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
      headline: 'AI that doesn\'t just compute.',
      subheadline: 'It transforms.',
      description: 'The only AI platform built specifically for GCC enterprises. Turn complex operations into competitive advantages with systems that understand your market, regulations, and ambitions.',
      cta: 'See What\'s Possible',
      secondaryCta: 'Schedule Strategic Briefing'
    },
    ar: {
      badge: 'تحويل منطقة الخليج',
      headline: 'ذكاء اصطناعي لا يحسب فقط.',
      subheadline: 'بل يحول.',
      description: 'منصة الذكاء الاصطناعي الوحيدة المبنية خصيصًا لمؤسسات دول مجلس التعاون. حول العمليات المعقدة إلى مزايا تنافسية مع أنظمة تفهم السوق واللوائح والطموحات الخاصة بك.',
      cta: 'شاهد ما هو ممكن',
      secondaryCta: 'جدولة إحاطة استراتيجية'
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
      {/* Apple-style cinematic background elements */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y }}
      >
        <div className="absolute top-[20%] left-[10%] w-px h-24 bg-gradient-to-b from-blue-500/30 to-transparent" />
        <div className="absolute top-[40%] right-[15%] w-px h-32 bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute bottom-[30%] left-[20%] w-px h-20 bg-gradient-to-b from-green-500/25 to-transparent" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-[25%] right-[20%] w-2 h-2 bg-blue-400/60 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
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
        {/* Apple-style premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 glass-apple px-4 py-2 rounded-full text-caption font-medium">
            <Sparkles size={14} className="text-blue-400" />
            {currentContent.badge}
          </span>
        </motion.div>

        {/* Apple-style cinematic headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-display-large mb-4">
            <span className="block">{currentContent.headline}</span>
            <span className="block apple-gradient-text">{currentContent.subheadline}</span>
          </h1>
        </motion.div>

        {/* Apple-style compelling description */}
        <motion.p 
          className="text-body-large container-apple-narrow mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentContent.description}
        </motion.p>

        {/* Apple-style dual CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/solutions')}
            className="btn-apple-premium hover-lift group"
          >
            <span>{currentContent.cta}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 duration-200" />
          </button>
          
          <button
            onClick={() => navigate('/contact')}
            className="btn-apple-secondary hover-lift group"
          >
            <span>{currentContent.secondaryCta}</span>
          </button>
        </motion.div>

        {/* Apple-style floating visual element */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 glass-apple rounded-3xl flex items-center justify-center mx-auto hover-scale">
              <img 
                src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                alt="AI8TY" 
                className="h-16 w-auto object-contain opacity-80" 
              />
            </div>
            
            {/* Ambient glow */}
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl mx-auto" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppleInspiredHero;
