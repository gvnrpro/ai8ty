
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ApplePremiumContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const content = {
    en: {
      subtitle: 'Ready to Transform?',
      title: 'Let\'s architect your AI future together',
      description: 'Schedule a strategic briefing with our AI transformation experts. We\'ll map your current operations and design a custom AI roadmap for your organization.',
      cta: 'Schedule Strategic Briefing'
    },
    ar: {
      subtitle: 'هل أنت مستعد للتحول؟',
      title: 'دعنا نصمم مستقبل الذكاء الاصطناعي معًا',
      description: 'حدد موعدًا لإحاطة استراتيجية مع خبراء تحويل الذكاء الاصطناعي لدينا. سنقوم برسم خريطة عملياتك الحالية وتصميم خارطة طريق مخصصة للذكاء الاصطناعي لمؤسستك.',
      cta: 'جدولة إحاطة استراتيجية'
    }
  };

  const contactOptions = [
    {
      icon: Calendar,
      titleEn: 'Strategic Briefing',
      titleAr: 'إحاطة استراتيجية',
      descEn: '90-minute session to map your AI transformation roadmap',
      descAr: 'جلسة مدتها 90 دقيقة لرسم خارطة طريق تحويل الذكاء الاصطناعي',
      actionEn: 'Book Session',
      actionAr: 'احجز جلسة',
      gradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      icon: MessageSquare,
      titleEn: 'Direct Consultation',
      titleAr: 'استشارة مباشرة',
      descEn: 'Immediate discussion about your specific AI requirements',
      descAr: 'مناقشة فورية حول متطلبات الذكاء الاصطناعي المحددة الخاصة بك',
      actionEn: 'Start Chat',
      actionAr: 'ابدأ محادثة',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Phone,
      titleEn: 'Executive Call',
      titleAr: 'مكالمة تنفيذية',
      descEn: 'Speak directly with our AI transformation leadership team',
      descAr: 'تحدث مباشرة مع فريق قيادة تحويل الذكاء الاصطناعي لدينا',
      actionEn: 'Schedule Call',
      actionAr: 'جدول مكالمة',
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      labelEn: 'Email',
      labelAr: 'البريد الإلكتروني',
      value: 'enterprise@ai8ty.com'
    },
    {
      icon: Phone,
      labelEn: 'Phone',
      labelAr: 'الهاتف',
      value: '+971 4 XXX XXXX'
    },
    {
      icon: MapPin,
      labelEn: 'Location',
      labelAr: 'الموقع',
      valueEn: 'Dubai, UAE',
      valueAr: 'دبي، الإمارات العربية المتحدة'
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
      {/* Apple-style premium background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-caption text-blue-500 font-medium mb-4 tracking-wider uppercase">
              {currentContent.subtitle}
            </p>
            <h2 className="text-display mb-6">
              {currentContent.title}
            </h2>
            <p className="text-body-large mb-10">
              {currentContent.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1) 
                  }}
                >
                  <div className="w-10 h-10 glass-apple rounded-xl flex items-center justify-center">
                    <info.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-caption text-muted-foreground">
                      {isArabic ? info.labelAr : info.labelEn}
                    </div>
                    <div className="text-body font-medium">
                      {info.valueEn && info.valueAr ? (isArabic ? info.valueAr : info.valueEn) : info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-apple-premium hover-lift group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>{currentContent.cta}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 duration-200" />
            </motion.button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.15) 
                }}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                onClick={() => navigate('/contact')}
              >
                {/* Apple-style premium contact card */}
                <div className="card-apple hover-lift group-hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  <div className="relative z-10 p-2">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-16 h-16 glass-apple rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <option.icon size={28} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-title mb-2 group-hover:text-white transition-colors duration-300">
                          {isArabic ? option.titleAr : option.titleEn}
                        </h3>
                        <p className="text-body leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                          {isArabic ? option.descAr : option.descEn}
                        </p>
                        
                        {/* Action */}
                        <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-white transition-all duration-300">
                          <span className="text-caption">
                            {isArabic ? option.actionAr : option.actionEn}
                          </span>
                          <ArrowRight 
                            size={16} 
                            className={`transition-transform duration-300 ${
                              hoveredOption === index ? 'translate-x-1' : ''
                            }`} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplePremiumContactSection;
