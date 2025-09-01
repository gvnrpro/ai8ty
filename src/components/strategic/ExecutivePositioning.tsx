import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Trophy, Users, Briefcase, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExecutivePositioning: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Executive Leadership',
      title: 'Meet the architects of Gulf AI transformation',
      description: 'Led by industry veterans who\'ve deployed $50M+ in enterprise AI systems across MENA markets.',
      cta: 'Schedule Executive Briefing'
    },
    ar: {
      subtitle: 'القيادة التنفيذية',
      title: 'تعرف على مهندسي تحول الذكاء الاصطناعي في الخليج',
      description: 'بقيادة خبراء الصناعة الذين نشروا أكثر من 50 مليون دولار في أنظمة الذكاء الاصطناعي المؤسسية عبر أسواق الشرق الأوسط وشمال أفريقيا.',
      cta: 'جدولة إحاطة تنفيذية'
    }
  };

  const executiveAchievements = [
    {
      icon: Trophy,
      titleEn: 'Regional AI Innovation Award 2024',
      titleAr: 'جائزة الابتكار الإقليمية للذكاء الاصطناعي 2024',
      sourceEn: 'Gulf Technology Summit',
      sourceAr: 'قمة تكنولوجيا الخليج'
    },
    {
      icon: Crown,
      titleEn: 'Top 40 Under 40 Tech Leaders - MENA',
      titleAr: 'أفضل 40 قائد تقني تحت سن 40 - الشرق الأوسط وشمال أفريقيا',
      sourceEn: 'Forbes Middle East',
      sourceAr: 'فوربس الشرق الأوسط'
    },
    {
      icon: Users,
      titleEn: 'Advisory Board Member',
      titleAr: 'عضو مجلس استشاري',
      sourceEn: 'UAE AI & Blockchain Council',
      sourceAr: 'مجلس الإمارات للذكاء الاصطناعي والبلوك تشين'
    },
    {
      icon: Briefcase,
      titleEn: 'Strategic AI Consultant',
      titleAr: 'مستشار ذكاء اصطناعي استراتيجي',
      sourceEn: 'DIFC Authority',
      sourceAr: 'سلطة مركز دبي المالي العالمي'
    },
    {
      icon: Award,
      titleEn: 'Distinguished Speaker',
      titleAr: 'متحدث متميز',
      sourceEn: 'World Government Summit 2024',
      sourceAr: 'القمة العالمية للحكومات 2024'
    },
    {
      icon: Globe,
      titleEn: 'Certified AI Ethics Leader',
      titleAr: 'قائد معتمد في أخلاقيات الذكاء الاصطناعي',
      sourceEn: 'MIT Professional Education',
      sourceAr: 'التعليم المهني من معهد ماساتشوستس للتكنولوجيا'
    }
  ];

  const executiveMetrics = [
    {
      valueEn: '$50M+',
      valueAr: '50 مليون دولار+',
      labelEn: 'AI Systems Deployed',
      labelAr: 'أنظمة ذكاء اصطناعي منشورة'
    },
    {
      valueEn: '12',
      valueAr: '12',
      labelEn: 'Fortune 500 Clients',
      labelAr: 'عميل من قائمة فورتشن 500'
    },
    {
      valueEn: '89%',
      valueAr: '89%',
      labelEn: 'Project Success Rate',
      labelAr: 'معدل نجاح المشاريع'
    },
    {
      valueEn: '6 Countries',
      valueAr: '6 دول',
      labelEn: 'Regional Presence',
      labelAr: 'التواجد الإقليمي'
    }
  ];

  const upcomingEngagements = [
    {
      event: 'GITEX Global 2025 - AI Leadership Panel',
      date: 'Oct 2025',
      location: 'Dubai',
      type: 'Keynote Speaker'
    },
    {
      event: 'Saudi AI Summit',
      date: 'Nov 2025',
      location: 'Riyadh',
      type: 'Strategic AI Workshop'
    },
    {
      event: 'Qatar Financial AI Conference',
      date: 'Dec 2025',
      location: 'Doha',
      type: 'Panel Discussion'
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Executive Profile */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Card */}
            <div className="card-apple p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30">
                  <img 
                    src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                    alt="Awwab Abdul" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-title-large mb-2">Awwab Abdul</h3>
                  <p className="text-body text-blue-400 mb-2">Founder & CEO</p>
                  <p className="text-caption text-muted-foreground">12+ years enterprise AI leadership</p>
                </div>
              </div>

              {/* Executive Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {executiveMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="glass-apple p-4 rounded-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="text-title text-blue-400 mb-1">
                      {isArabic ? metric.valueAr : metric.valueEn}
                    </div>
                    <div className="text-caption text-muted-foreground">
                      {isArabic ? metric.labelAr : metric.labelEn}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full btn-apple-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {currentContent.cta}
              </motion.button>
            </div>
          </motion.div>

          {/* Achievements & Engagements */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Achievements */}
            <div className="card-apple p-8">
              <h4 className="text-title mb-6">Recognition & Leadership</h4>
              <div className="space-y-4">
                {executiveAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 glass-apple rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <achievement.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-body font-medium mb-1">
                        {isArabic ? achievement.titleAr : achievement.titleEn}
                      </h5>
                      <p className="text-caption text-muted-foreground">
                        {isArabic ? achievement.sourceAr : achievement.sourceEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Upcoming Engagements */}
            <div className="card-apple p-8">
              <h4 className="text-title mb-6">Upcoming Speaking Engagements</h4>
              <div className="space-y-4">
                {upcomingEngagements.map((engagement, index) => (
                  <motion.div
                    key={index}
                    className="p-4 glass-apple rounded-xl border-l-2 border-blue-500/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-body font-medium">{engagement.event}</h5>
                      <span className="text-caption text-blue-400">{engagement.date}</span>
                    </div>
                    <p className="text-caption text-muted-foreground mb-1">{engagement.location}</p>
                    <span className="text-caption bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      {engagement.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutivePositioning;