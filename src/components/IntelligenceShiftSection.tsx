
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Search, MessageSquare, Lightbulb } from 'lucide-react';

const IntelligenceShiftSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Reduced threshold for mobile
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const shifts = [
    {
      icon: Search,
      title: isArabic ? "البحث التقليدي" : "Traditional Search",
      subtitle: isArabic ? "الكلمات المفتاحية والروابط" : "Keywords & Links",
      active: false
    },
    {
      icon: Brain,
      title: isArabic ? "البحث التوليدي" : "Generative Search",
      subtitle: isArabic ? "الإجابات المدعومة بالذكاء الاصطناعي" : "AI-Powered Answers",
      active: true
    },
    {
      icon: MessageSquare,
      title: isArabic ? "المحتوى الثابت" : "Static Content",
      subtitle: isArabic ? "الصفحات والمنشورات" : "Pages & Posts",
      active: false
    },
    {
      icon: Lightbulb,
      title: isArabic ? "الواجهات الذكية" : "AI Interfaces",
      subtitle: isArabic ? "المحادثات والتفاعل" : "Conversations & Interaction",
      active: true
    }
  ];

  return (
    <section 
      id="intelligence-shift"
      ref={ref}
      className={cn(
        "neural-section relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      <div className="absolute inset-0 quantum-dots-bg opacity-3"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-depth-2/50 border border-quantum/20 rounded-full px-4 py-2 text-sm font-space text-quantum mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Brain size={16} className="animate-pulse" />
            <span>{isArabic ? "تحول الذكاء" : "Intelligence Shift"}</span>
          </motion.div>
          
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            {isArabic 
              ? "لم تكن متأخرًا عن الركب."
              : "You weren't falling behind."}
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              {isArabic 
                ? "العالم تغير بوتيرة أسرع من المتوقع."
                : "The world shifted faster than anyone expected."}
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          variants={itemVariants}
        >
          <div className="space-y-8">
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-xl font-space text-white/90 leading-relaxed">
                {isArabic 
                  ? "لم يعد البحث كما كان. الانتباه ليس في مكانه المعتاد. والعملاء يطرحون أسئلة أذكى من أي وقت مضى."
                  : "Search isn't what it was. Attention isn't where it used to be. And customers are asking smarter questions than ever."}
              </p>
              
              <p className="text-lg font-space text-neural/90 leading-relaxed">
                {isArabic 
                  ? "نساعد الشركات المستقبلية على التكيف مع الأنظمة البيئية الأصلية للذكاء الاصطناعي— سواء كان بحث Google التوليدي، أو ملحقات ChatGPT، أو ما سيأتي بعد ذلك."
                  : "We help forward-thinking businesses adapt to AI-native ecosystems— whether it's Google's generative search, ChatGPT plugins, or whatever comes next."}
              </p>
              
              <motion.div
                className="bg-depth-1/50 border border-intelligence/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-intelligence/20 rounded-lg flex items-center justify-center">
                    <Lightbulb size={16} className="text-intelligence" />
                  </div>
                  <h3 className="font-syne font-semibold text-intelligence">
                    {isArabic ? "الرؤية الاستراتيجية" : "Strategic Insight"}
                  </h3>
                </div>
                <p className="text-sm font-space text-white/80">
                  {isArabic 
                    ? "مثلما بنت OpenAI واجهة ChatGPT، نحن نبني واجهتك مع المستقبل."
                    : "Like OpenAI built ChatGPT's interface, we build your interface with the future."}
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Transformation grid */}
            <div className="grid grid-cols-2 gap-4">
              {shifts.map((shift, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "intelligence-card p-6 text-center transition-all duration-500",
                    shift.active 
                      ? "border-neural/40 bg-neural/5 shadow-neural" 
                      : "border-white/10 bg-white/5"
                  )}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={cn(
                      "w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center",
                      shift.active ? "bg-neural/20" : "bg-white/10"
                    )}
                    animate={shift.active ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <shift.icon 
                      size={24} 
                      className={shift.active ? "text-neural" : "text-white/60"} 
                    />
                  </motion.div>
                  <h4 className={cn(
                    "font-syne font-semibold mb-2 text-sm",
                    shift.active ? "text-neural" : "text-white/80"
                  )}>
                    {shift.title}
                  </h4>
                  <p className="text-xs font-space text-white/60">
                    {shift.subtitle}
                  </p>
                  {shift.active && (
                    <motion.div
                      className="mt-3 w-full h-0.5 bg-gradient-to-r from-neural to-quantum rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Connection visualization */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              variants={itemVariants}
            >
              <svg className="w-full h-full opacity-30">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M 30 30 Q 70 30 70 70" 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                />
                <motion.path 
                  d="M 30 70 Q 70 70 70 30" 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 2 }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block bg-depth-1/80 border border-neural/20 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-syne font-bold text-xl mb-4 text-neural">
              {isArabic ? "هل أنت مستعد للتحول؟" : "Ready for transformation?"}
            </h3>
            <p className="font-space text-white/80 mb-6">
              {isArabic 
                ? "دعنا نبني نظامك للعصر الجديد من الذكاء الاصطناعي."
                : "Let us build your system for the new age of intelligence."}
            </p>
            <motion.button
              className="btn-neural px-6 py-3 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const servicesSection = document.getElementById('modular-services-section');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {isArabic ? "استكشف الحلول" : "Explore Solutions"}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default IntelligenceShiftSection;
