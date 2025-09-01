
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
      subtitle: 'Strategic Results',
      title: 'AI implementations that actually moved the needle',
      description: 'Real enterprises. Real challenges. Real results. See how strategic AI architecture creates measurable competitive advantages.',
      cta: 'Request Implementation Details'
    },
    ar: {
      subtitle: 'نتائج استراتيجية',
      title: 'تطبيقات ذكاء اصطناعي حققت تأثيراً فعلياً',
      description: 'مؤسسات حقيقية. تحديات حقيقية. نتائج حقيقية. شاهد كيف تخلق الهندسة المعمارية الاستراتيجية للذكاء الاصطناعي مزايا تنافسية قابلة للقياس.',
      cta: 'طلب تفاصيل التنفيذ'
    }
  };

  const caseStudies = [
    {
      id: 1,
      clientEn: 'DIFC Investment Bank',
      clientAr: 'بنك استثماري في مركز دبي المالي العالمي',
      industryEn: 'Cross-Border Investment Banking',
      industryAr: 'الخدمات المصرفية الاستثمارية العابرة للحدود',
      challengeEn: 'Real-time risk assessment across UAE Central Bank, SAMA, and QCB regulations while processing $2.3B in transactions monthly',
      challengeAr: 'تقييم المخاطر في الوقت الفعلي عبر لوائح البنك المركزي الإماراتي ومؤسسة النقد العربي السعودي وبنك قطر المركزي أثناء معالجة 2.3 مليار دولار في المعاملات شهرياً',
      resultEn: 'Zero regulatory penalties in 24 months. 67% reduction in compliance overhead. Risk detection improved by 89%.',
      resultAr: 'صفر عقوبات تنظيمية في 24 شهراً. انخفاض 67% في أعباء الامتثال. تحسن اكتشاف المخاطر بنسبة 89%.',
      metrics: [
        { iconEn: Shield, valueEn: '$0', labelEn: 'Regulatory Penalties', valueAr: '$0', labelAr: 'العقوبات التنظيمية' },
        { iconEn: TrendingUp, valueEn: '67%', labelEn: 'Cost Reduction', valueAr: '67%', labelAr: 'تقليل التكاليف' },
        { iconEn: Zap, valueEn: '$2.3B', labelEn: 'Monthly Processing', valueAr: '$2.3 مليار', labelAr: 'معالجة شهرية' }
      ],
      gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20'
    },
    {
      id: 2,
      clientEn: 'Saudi Manufacturing Conglomerate',
      clientAr: 'تكتل تصنيعي سعودي',
      industryEn: 'Smart Manufacturing & Vision 2030',
      industryAr: 'التصنيع الذكي ورؤية 2030',
      challengeEn: 'Predictive maintenance across 47 facilities with legacy systems causing $4.2M annual downtime costs',
      challengeAr: 'الصيانة التنبؤية عبر 47 منشأة مع أنظمة قديمة تسبب تكاليف توقف سنوية بقيمة 4.2 مليون دولار',
      resultEn: 'Unplanned downtime reduced by 78%. $3.2M annual savings. Production efficiency increased 34%.',
      resultAr: 'انخفاض التوقف غير المخطط له بنسبة 78%. وفورات سنوية 3.2 مليون دولار. زيادة كفاءة الإنتاج 34%.',
      metrics: [
        { iconEn: TrendingUp, valueEn: '78%', labelEn: 'Downtime Reduction', valueAr: '78%', labelAr: 'تقليل وقت التوقف' },
        { iconEn: Shield, valueEn: '$3.2M', labelEn: 'Annual Savings', valueAr: '$3.2 مليون', labelAr: 'وفورات سنوية' },
        { iconEn: Zap, valueEn: '34%', labelEn: 'Efficiency Gain', valueAr: '34%', labelAr: 'زيادة الكفاءة' }
      ],
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
    },
    {
      id: 3,
      clientEn: 'Qatar Airways Digital Division',
      clientAr: 'القسم الرقمي للخطوط الجوية القطرية',
      industryEn: 'Aviation & Logistics Intelligence',
      industryAr: 'ذكاء الطيران واللوجستيات',
      challengeEn: 'Real-time passenger experience optimization across 160+ destinations with complex multi-language requirements',
      challengeAr: 'تحسين تجربة الركاب في الوقت الفعلي عبر أكثر من 160 وجهة مع متطلبات معقدة متعددة اللغات',
      resultEn: 'Customer satisfaction up 43%. Operational costs reduced 29%. Revenue per passenger increased $67.',
      resultAr: 'زيادة رضا العملاء 43%. انخفاض التكاليف التشغيلية 29%. زيادة الإيرادات لكل راكب 67 دولار.',
      metrics: [
        { iconEn: TrendingUp, valueEn: '43%', labelEn: 'Satisfaction Increase', valueAr: '43%', labelAr: 'زيادة الرضا' },
        { iconEn: Shield, valueEn: '29%', labelEn: 'Cost Reduction', valueAr: '29%', labelAr: 'تقليل التكاليف' },
        { iconEn: Zap, valueEn: '+$67', labelEn: 'Revenue per PAX', valueAr: '+$67', labelAr: 'إيرادات لكل راكب' }
      ],
      gradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20'
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
