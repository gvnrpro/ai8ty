
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import TechBackground from './TechBackground';
import AnimatedMetrics from './AnimatedMetrics';

const EnterpriseHeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

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

  const handleExploreSolutions = () => {
    navigate('/solutions');
  };

  // Enhanced scrolling ticker industries
  const industries = isArabic ? [
    'المؤسسات المالية',
    'شبكات الرعاية الصحية',
    'مجموعات الاستثمار العقاري',
    'سلطات الطيران',
    'مكاتب الثروات الخاصة',
    'كيانات القطاع العام',
    'مقدمو الخدمات اللوجستية',
    'تجمعات التجزئة'
  ] : [
    'Financial Institutions',
    'Healthcare Networks', 
    'Real Estate Investment Groups',
    'Aviation Authorities',
    'Private Wealth Offices',
    'Public Sector Entities',
    'Logistics Providers',
    'Retail Conglomerates'
  ];

  const content = {
    en: {
      title: 'Operational AI Systems for',
      highlight: 'GCC Business Leaders',
      subtitle: 'Enterprise-grade AI infrastructure for financial, retail, healthcare, logistics, and public sector organizations in the UAE and Gulf region.',
      cta: 'Explore Solutions',
      aboutTitle: 'About AI8TY',
      aboutDescription: 'Operational AI frameworks for regulated, high-complexity GCC industries. Solutions designed to improve decision-making, reduce operational risk, and strengthen business resilience.',
      finalCta: 'See What We Build'
    },
    ar: {
      title: 'أنظمة الذكاء الاصطناعي التشغيلية لـ',
      highlight: 'قادة الأعمال في دول مجلس التعاون',
      subtitle: 'بنية تحتية للذكاء الاصطناعي على مستوى المؤسسات للمنظمات المالية والتجارية والصحية واللوجستية والقطاع العام في دولة الإمارات ومنطقة الخليج.',
      cta: 'استكشف الحلول',
      aboutTitle: 'حول AI8TY',
      aboutDescription: 'أطر عمل الذكاء الاصطناعي التشغيلية للصناعات المنظمة عالية التعقيد في دول مجلس التعاون. حلول مصممة لتحسين صنع القرار وتقليل المخاطر التشغيلية وتعزيز مرونة الأعمال.',
      finalCta: 'شاهد ما نبنيه'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`min-h-screen relative flex flex-col justify-center items-center py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${isArabic ? 'rtl' : ''}`}
    >
      {/* Enhanced Tech Background */}
      <TechBackground density={40} color="#3B82F6" className="opacity-20" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-white leading-tight"
          variants={itemVariants}
        >
          {currentContent.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
            {currentContent.highlight}
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          {currentContent.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16"
        >
          <motion.button
            onClick={handleExploreSolutions}
            className="group inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-sm transition-all duration-300 hover:border-slate-500 touch-manipulation"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{currentContent.cta}</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Enhanced Scrolling Industry Ticker */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 md:mb-16 overflow-hidden"
        >
          <div className="relative h-12 md:h-16 flex items-center">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -100 * industries.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <span key={index} className="text-slate-400 text-base md:text-lg mx-6 md:mx-8 font-medium">
                  {industry} •
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div 
          variants={itemVariants}
          className="mb-12 md:mb-16"
        >
          <AnimatedMetrics isArabic={isArabic} />
        </motion.div>

        {/* Enhanced About AI8TY Section */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-12 md:mb-16 px-4"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
            {currentContent.aboutTitle}
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            {currentContent.aboutDescription}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
            {[
              {
                title: isArabic ? 'البنية التحتية لذكاء المؤسسات' : 'Enterprise AI Infrastructure',
                titleAr: 'البنية التحتية لذكاء المؤسسات',
                desc: isArabic ? 'أنظمة الذكاء الاصطناعي القابلة للتوسع والآمنة للمنظمات المعقدة' : 'Scalable, secure AI systems for complex organizations',
                descAr: 'أنظمة الذكاء الاصطناعي القابلة للتوسع والآمنة للمنظمات المعقدة'
              },
              {
                title: isArabic ? 'عمليات النشر المتوافقة مع المنظمين' : 'Regulator-Aligned Deployments',
                titleAr: 'عمليات النشر المتوافقة مع المنظمين',
                desc: isArabic ? 'حلول جاهزة للامتثال لقانون حماية البيانات الإماراتي ووزارة الصحة ومجلس التعاون' : 'UAE PDPL, MOHAP, and GCC compliance-ready solutions',
                descAr: 'حلول جاهزة للامتثال لقانون حماية البيانات الإماراتي ووزارة الصحة ومجلس التعاون'
              },
              {
                title: isArabic ? 'أنظمة خاصة بالقطاع' : 'Sector-Specific Systems',
                titleAr: 'أنظمة خاصة بالقطاع',
                desc: isArabic ? 'ذكاء اصطناعي مصمم خصيصاً للصناعة للتميز التشغيلي' : 'Industry-tailored AI for operational excellence',
                descAr: 'ذكاء اصطناعي مصمم خصيصاً للصناعة للتميز التشغيلي'
              },
              {
                title: isArabic ? 'تحسينات قابلة للقياس' : 'Measurable Improvements',
                titleAr: 'تحسينات قابلة للقياس',
                desc: isArabic ? 'تطبيقات تركز على العائد على الاستثمار مع نتائج واضحة' : 'ROI-focused implementations with clear outcomes',
                descAr: 'تطبيقات تركز على العائد على الاستثمار مع نتائج واضحة'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 p-4 md:p-6 rounded-sm border border-slate-700 hover:border-slate-600 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
        >
          <motion.button
            onClick={handleExploreSolutions}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-sm transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{currentContent.finalCta}</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnterpriseHeroSection;
