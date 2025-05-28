
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const IntelligenceShiftSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={cn(
        "py-24 px-6 bg-depth-1 relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Background texture */}
      <div className="absolute inset-0 tech-dots-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="heading text-4xl md:text-5xl lg:text-6xl mb-8">
            {isArabic 
              ? "لم تكن متأخرًا."
              : "You weren't falling behind."}
            <br />
            <span className="text-sand">
              {isArabic 
                ? "العالم تغير أسرع مما توقعت."
                : "The world just changed faster than expected."}
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={itemVariants}
        >
          <div className="space-y-6">
            <p className="subheading text-lg leading-relaxed">
              {isArabic 
                ? "البحث ليس كما كان. الانتباه ليس حيث اعتاد أن يكون. والعملاء يطرحون أسئلة أذكى من أي وقت مضى."
                : "Search isn't what it was. Attention isn't where it used to be. And customers are asking smarter questions than ever."}
            </p>
            
            <p className="subheading text-lg leading-relaxed">
              {isArabic 
                ? "تساعد AI8TY الشركات المتطلعة للمستقبل على التكيف مع النظم البيئية المحلية للذكاء الاصطناعي— سواء كان بحث Google التوليدي، أو إضافات ChatGPT، أو ما يأتي بعد ذلك."
                : "AI8TY helps forward-thinking businesses adapt to AI-native ecosystems— whether it's Google's generative search, ChatGPT plugins, or what comes next."}
            </p>
          </div>
          
          <div className="relative">
            {/* Visual representation of the shift */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="platform-card p-6 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-ai8ty-grey/20 rounded-lg mx-auto mb-3"></div>
                <p className="text-sm text-ai8ty-grey">
                  {isArabic ? "البحث التقليدي" : "Traditional Search"}
                </p>
              </motion.div>
              
              <motion.div 
                className="platform-card p-6 text-center border-sand/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-sand/20 rounded-lg mx-auto mb-3 animate-pulse"></div>
                <p className="text-sm text-sand">
                  {isArabic ? "البحث التوليدي" : "Generative Search"}
                </p>
              </motion.div>
              
              <motion.div 
                className="platform-card p-6 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-ai8ty-grey/20 rounded-lg mx-auto mb-3"></div>
                <p className="text-sm text-ai8ty-grey">
                  {isArabic ? "المحتوى الثابت" : "Static Content"}
                </p>
              </motion.div>
              
              <motion.div 
                className="platform-card p-6 text-center border-sand/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-sand/20 rounded-lg mx-auto mb-3 animate-pulse"></div>
                <p className="text-sm text-sand">
                  {isArabic ? "الواجهات الذكية" : "AI Interfaces"}
                </p>
              </motion.div>
            </div>
            
            {/* Connection lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              variants={itemVariants}
            >
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F1BE6C" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F1BE6C" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 25 25 Q 75 25 75 75" 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path 
                  d="M 25 75 Q 75 75 75 25" 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Subtle transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default IntelligenceShiftSection;
