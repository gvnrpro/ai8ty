import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle, Clock, DollarSign, Users, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const AdvancedLeadQualification: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const { toast } = useToast();
  const isArabic = language === 'ar';
  
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [qualification, setQualification] = useState<'high' | 'medium' | 'low' | null>(null);

  const content = {
    en: {
      subtitle: 'Strategic Assessment',
      title: 'Discover your AI transformation readiness',
      description: 'Complete our strategic assessment to receive a customized AI roadmap and priority consultation scheduling.',
      cta: 'Start Assessment'
    },
    ar: {
      subtitle: 'تقييم استراتيجي',
      title: 'اكتشف جاهزيتك لتحويل الذكاء الاصطناعي',
      description: 'أكمل تقييمنا الاستراتيجي لتلقي خارطة طريق مخصصة للذكاء الاصطناعي وجدولة استشارة ذات أولوية.',
      cta: 'ابدأ التقييم'
    }
  };

  const assessmentQuestions = [
    {
      id: 'company_size',
      titleEn: 'What is your organization size?',
      titleAr: 'ما هو حجم مؤسستك؟',
      type: 'select',
      options: [
        { value: 'enterprise', labelEn: '1000+ employees', labelAr: '1000+ موظف', score: 10 },
        { value: 'large', labelEn: '500-999 employees', labelAr: '500-999 موظف', score: 8 },
        { value: 'medium', labelEn: '100-499 employees', labelAr: '100-499 موظف', score: 6 },
        { value: 'small', labelEn: '50-99 employees', labelAr: '50-99 موظف', score: 3 },
        { value: 'startup', labelEn: '<50 employees', labelAr: '<50 موظف', score: 1 }
      ]
    },
    {
      id: 'ai_budget',
      titleEn: 'What is your AI transformation budget range?',
      titleAr: 'ما هو نطاق ميزانية تحويل الذكاء الاصطناعي؟',
      type: 'select',
      options: [
        { value: 'high', labelEn: '$1M+ annually', labelAr: '1 مليون دولار+ سنوياً', score: 10 },
        { value: 'medium_high', labelEn: '$500K-$1M annually', labelAr: '500 ألف-1 مليون دولار سنوياً', score: 8 },
        { value: 'medium', labelEn: '$100K-$500K annually', labelAr: '100-500 ألف دولار سنوياً', score: 6 },
        { value: 'low', labelEn: '$50K-$100K annually', labelAr: '50-100 ألف دولار سنوياً', score: 3 },
        { value: 'minimal', labelEn: '<$50K annually', labelAr: '<50 ألف دولار سنوياً', score: 1 }
      ]
    },
    {
      id: 'urgency',
      titleEn: 'What is your implementation timeline?',
      titleAr: 'ما هو الجدول الزمني للتنفيذ؟',
      type: 'select',
      options: [
        { value: 'immediate', labelEn: 'Start within 30 days', labelAr: 'البدء خلال 30 يوماً', score: 10 },
        { value: 'urgent', labelEn: '1-3 months', labelAr: '1-3 أشهر', score: 8 },
        { value: 'planned', labelEn: '3-6 months', labelAr: '3-6 أشهر', score: 6 },
        { value: 'future', labelEn: '6+ months', labelAr: '6+ أشهر', score: 3 },
        { value: 'exploring', labelEn: 'Just exploring', labelAr: 'مجرد استكشاف', score: 1 }
      ]
    },
    {
      id: 'decision_maker',
      titleEn: 'What is your role in the decision-making process?',
      titleAr: 'ما هو دورك في عملية صنع القرار؟',
      type: 'select',
      options: [
        { value: 'decision_maker', labelEn: 'Final decision maker', labelAr: 'صانع القرار النهائي', score: 10 },
        { value: 'influencer', labelEn: 'Strong influence on decision', labelAr: 'تأثير قوي على القرار', score: 8 },
        { value: 'recommender', labelEn: 'Can recommend solutions', labelAr: 'يمكن أن أوصي بالحلول', score: 6 },
        { value: 'researcher', labelEn: 'Researching for others', labelAr: 'أبحث للآخرين', score: 3 },
        { value: 'student', labelEn: 'Student/Academic research', labelAr: 'طالب/بحث أكاديمي', score: 1 }
      ]
    },
    {
      id: 'industry',
      titleEn: 'Which industry best describes your organization?',
      titleAr: 'أي صناعة تصف مؤسستك بشكل أفضل؟',
      type: 'select',
      options: [
        { value: 'banking', labelEn: 'Banking & Financial Services', labelAr: 'الخدمات المصرفية والمالية', score: 10 },
        { value: 'healthcare', labelEn: 'Healthcare & Life Sciences', labelAr: 'الرعاية الصحية وعلوم الحياة', score: 9 },
        { value: 'manufacturing', labelEn: 'Manufacturing & Industrial', labelAr: 'التصنيع والصناعة', score: 8 },
        { value: 'retail', labelEn: 'Retail & E-commerce', labelAr: 'التجزئة والتجارة الإلكترونية', score: 7 },
        { value: 'government', labelEn: 'Government & Public Sector', labelAr: 'الحكومة والقطاع العام', score: 8 },
        { value: 'other', labelEn: 'Other', labelAr: 'أخرى', score: 5 }
      ]
    }
  ];

  const urgencyLevels = {
    high: {
      icon: AlertCircle,
      titleEn: 'High Priority Consultation',
      titleAr: 'استشارة عالية الأولوية',
      descEn: 'Executive briefing within 48 hours',
      descAr: 'إحاطة تنفيذية خلال 48 ساعة',
      color: 'text-red-400',
      bg: 'from-red-500/20 to-orange-500/20'
    },
    medium: {
      icon: Clock,
      titleEn: 'Strategic Planning Session',
      titleAr: 'جلسة تخطيط استراتيجي',
      descEn: 'Detailed consultation within 1 week',
      descAr: 'استشارة مفصلة خلال أسبوع واحد',
      color: 'text-yellow-400',
      bg: 'from-yellow-500/20 to-orange-500/20'
    },
    low: {
      icon: CheckCircle,
      titleEn: 'Information Package',
      titleAr: 'حزمة معلومات',
      descEn: 'Customized resources and follow-up',
      descAr: 'موارد مخصصة ومتابعة',
      color: 'text-green-400',
      bg: 'from-green-500/20 to-blue-500/20'
    }
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setResponses(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate qualification score
      const totalScore = assessmentQuestions.reduce((score, question) => {
        const questionAnswer = responses[question.id] || (questionId === question.id ? answer : '');
        const option = question.options.find(opt => opt.value === questionAnswer);
        return score + (option?.score || 0);
      }, 0);

      let qual: 'high' | 'medium' | 'low';
      if (totalScore >= 35) qual = 'high';
      else if (totalScore >= 20) qual = 'medium';
      else qual = 'low';
      
      setQualification(qual);
      
      toast({
        title: "Assessment Complete",
        description: `Your qualification level: ${qual.toUpperCase()}. We'll contact you soon with next steps.`,
      });
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setResponses({});
    setQualification(null);
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];
  const currentQuestion = assessmentQuestions[currentStep];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[15%] left-[5%] w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[25%] right-[10%] w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
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

        {qualification ? (
          /* Results */
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`card-apple p-8 text-center bg-gradient-to-br ${urgencyLevels[qualification].bg}`}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                {React.createElement(urgencyLevels[qualification].icon, { 
                  size: 40, 
                  className: urgencyLevels[qualification].color 
                })}
              </div>
              
              <h3 className="text-title-large mb-4">
                {isArabic ? urgencyLevels[qualification].titleAr : urgencyLevels[qualification].titleEn}
              </h3>
              
              <p className="text-body mb-8">
                {isArabic ? urgencyLevels[qualification].descAr : urgencyLevels[qualification].descEn}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-apple-premium">
                  Schedule Consultation
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={resetAssessment}
                  className="btn-apple-outline"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Assessment Questions */
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-caption text-muted-foreground mb-2">
                <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
                <span>{Math.round(((currentStep + 1) / assessmentQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="card-apple p-8">
              <h3 className="text-title-large mb-8 text-center">
                {isArabic ? currentQuestion.titleAr : currentQuestion.titleEn}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className="w-full p-4 glass-apple rounded-xl text-left hover:bg-white/10 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-body">
                        {isArabic ? option.labelAr : option.labelEn}
                      </span>
                      <ArrowRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <div className="mt-6 text-center">
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AdvancedLeadQualification;