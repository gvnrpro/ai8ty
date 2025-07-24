
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleCaseStudiesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Real Impact',
      title: 'Transforming how the Gulf region operates',
      description: 'See how forward-thinking organizations across the GCC are leveraging AI8TY to drive measurable outcomes.',
      cta: 'View Full Case Study'
    },
    ar: {
      subtitle: 'تأثير حقيقي',
      title: 'تحويل طريقة عمل منطقة الخليج',
      description: 'شاهد كيف تستفيد المنظمات ذات التفكير المستقبلي في دول مجلس التعاون من AI8TY لتحقيق نتائج قابلة للقياس.',
      cta: 'عرض دراسة الحالة الكاملة'
    }
  };

  const caseStudies = [
    {
      id: 1,
      clientEn: 'Leading UAE Bank',
      clientAr: 'بنك إماراتي رائد',
      industryEn: 'Financial Services',
      industryAr: 'الخدمات المالية',
      challengeEn: 'Risk assessment automation across 500+ daily transactions',
      challengeAr: 'أتمتة تقييم المخاطر عبر أكثر من 500 معاملة يومية',
      resultEn: '40% faster processing with 99.7% accuracy',
      resultAr: '40% أسرع في المعالجة مع دقة 99.7%',
      metrics: [
        { iconEn: TrendingUp, valueEn: '40%', labelEn: 'Faster Processing', valueAr: '40%', labelAr: 'معالجة أسرع' },
        { iconEn: Shield, valueEn: '99.7%', labelEn: 'Accuracy Rate', valueAr: '99.7%', labelAr: 'معدل الدقة' },
        { iconEn: Zap, valueEn: '$2.3M', labelEn: 'Annual Savings', valueAr: '2.3م$', labelAr: 'وفورات سنوية' }
      ],
      gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20'
    },
    {
      id: 2,
      clientEn: 'Major Healthcare Network',
      clientAr: 'شبكة رعاية صحية رئيسية',
      industryEn: 'Healthcare',
      industryAr: 'الرعاية الصحية',
      challengeEn: 'Patient flow optimization across 12 facilities',
      challengeAr: 'تحسين تدفق المرضى عبر 12 منشأة',
      resultEn: '25% reduction in wait times, improved patient satisfaction',
      resultAr: '25% تقليل في أوقات الانتظار، تحسين رضا المرضى',
      metrics: [
        { iconEn: TrendingUp, valueEn: '25%', labelEn: 'Reduced Wait Time', valueAr: '25%', labelAr: 'تقليل وقت الانتظار' },
        { iconEn: Shield, valueEn: '95%', labelEn: 'Patient Satisfaction', valueAr: '95%', labelAr: 'رضا المرضى' },
        { iconEn: Zap, valueEn: '15K', labelEn: 'Daily Patients', valueAr: '15 ألف', labelAr: 'مريض يوميًا' }
      ],
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-950)) 50%, hsl(var(--background)) 100%)'
      }}
    >
      {/* Apple-style ambient lighting */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
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

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.3),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Apple-style premium card */}
              <div className="card-apple hover-lift group relative overflow-hidden p-8">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                <div className="relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="glass-apple px-3 py-1 rounded-full">
                          <span className="text-caption text-blue-400">
                            {isArabic ? study.industryAr : study.industryEn}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-title-large mb-4 group-hover:text-white transition-colors duration-500">
                        {isArabic ? study.clientAr : study.clientEn}
                      </h3>
                      
                      <p className="text-body mb-6 group-hover:text-white/90 transition-colors duration-500">
                        <strong className="text-foreground group-hover:text-white transition-colors duration-500">
                          Challenge: 
                        </strong>
                        {isArabic ? study.challengeAr : study.challengeEn}
                      </p>
                      
                      <p className="text-body mb-8 group-hover:text-white/90 transition-colors duration-500">
                        <strong className="text-blue-400 group-hover:text-white transition-colors duration-500">
                          Result: 
                        </strong>
                        {isArabic ? study.resultAr : study.resultEn}
                      </p>
                      
                      <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:text-white transition-all duration-500"
                      >
                        <span className="text-caption">{currentContent.cta}</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
                      </button>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          className="glass-apple p-6 rounded-2xl group-hover:bg-white/10 transition-all duration-500"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.4 + (index * 0.3) + (metricIndex * 0.1) 
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                              <metric.iconEn size={20} className="text-blue-400 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <div>
                              <div className="text-title text-foreground group-hover:text-white transition-colors duration-500">
                                {isArabic ? metric.valueAr : metric.valueEn}
                              </div>
                              <div className="text-caption text-muted-foreground group-hover:text-white/80 transition-colors duration-500">
                                {isArabic ? metric.labelAr : metric.labelEn}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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

export default AppleCaseStudiesSection;
