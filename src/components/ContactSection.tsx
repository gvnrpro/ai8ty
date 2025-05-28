
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Mail, ArrowRight, Zap } from 'lucide-react';
import GlitchText from './GlitchText';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
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
  
  return (
    <section 
      id="contact" 
      className={cn(
        "neural-section relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai8ty-black via-depth-1 to-ai8ty-black"></div>
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <div 
        ref={ref}
        className="container mx-auto max-w-5xl text-center relative z-10 px-6"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 bg-depth-2/50 border border-neural/20 rounded-full px-4 py-2 text-sm font-space text-neural mb-8">
              <Zap size={16} className="animate-pulse" />
              <span>{isArabic ? "ابدأ التحول" : "Begin Transformation"}</span>
            </div>
          </motion.div>

          <motion.h2 
            className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8"
            variants={itemVariants}
          >
            {isArabic 
              ? "ليس مجرد علامتك التجارية."
              : "This isn't just your brand."}
            <br />
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              {isArabic 
                ? "إنها واجهتك مع المستقبل."
                : "It's your interface with the future."}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-space text-white/90 mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {isArabic 
              ? "وهي مهمة جدًا لتركها للضوضاء. دعنا نهندس نظامك للعصر الجديد."
              : "And it's too important to leave to chance. Let us engineer your system for the new era."}
          </motion.p>
          
          {/* Enhanced contact options */}
          <motion.div 
            className="space-y-6 mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="intelligence-card p-8 group cursor-pointer max-w-2xl mx-auto"
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neural/20 rounded-xl flex items-center justify-center">
                  <Mail className="text-neural" size={24} />
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-syne font-semibold text-lg text-white mb-2">
                    {isArabic 
                      ? "ابدأ محادثة استراتيجية"
                      : "Start a Strategic Conversation"}
                  </h3>
                  <p className="text-sm font-space text-white/70">
                    {isArabic 
                      ? "أرسل لنا رسالة حيث يكون المستقبل في"
                      : "Drop us a line where the future lives at"}
                  </p>
                </div>
              </div>
              <a 
                href="mailto:futureis@ai8ty.com" 
                className="text-xl font-space text-neural hover:text-neural-light transition-colors duration-300 block"
              >
                {emailHovered ? (
                  <GlitchText text="futureis@ai8ty.com" glitchIntensity={30} />
                ) : (
                  "futureis@ai8ty.com"
                )}
              </a>
            </motion.div>
            
            <motion.div 
              className="intelligence-card p-8 group cursor-pointer max-w-2xl mx-auto"
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-quantum/20 rounded-xl flex items-center justify-center">
                  <Phone className="text-quantum" size={24} />
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-syne font-semibold text-lg text-white mb-2">
                    {isArabic 
                      ? "مكالمة مباشرة للتحول"
                      : "Direct Transformation Call"}
                  </h3>
                  <p className="text-sm font-space text-white/70">
                    {isArabic 
                      ? "يبدأ نظامك عند"
                      : "Your system begins at"}
                  </p>
                </div>
              </div>
              <a 
                href="tel:+971509229009" 
                className="text-xl font-space text-quantum hover:text-quantum-light transition-colors duration-300 block"
              >
                {phoneHovered ? (
                  <GlitchText text="+971 50 922 9009" glitchIntensity={30} />
                ) : (
                  "+971 50 922 9009"
                )}
              </a>
              <p className="text-sm font-space text-white/70 mt-2">
                {isArabic 
                  ? "— سنأخذ الأمر من هناك."
                  : "— we engineer the rest."}
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="bg-depth-1/80 border border-intelligence/20 rounded-xl p-8 backdrop-blur-sm max-w-3xl mx-auto mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-intelligence/20 rounded-lg flex items-center justify-center">
                <MessageSquare size={16} className="text-intelligence" />
              </div>
              <h3 className="font-syne font-semibold text-intelligence">
                {isArabic ? "لماذا AI8TY؟" : "Why AI8TY?"}
              </h3>
            </div>
            <p className="font-space text-white/85 text-sm leading-relaxed">
              {isArabic 
                ? "لا نماذج إذا كنت لا تريدها. لا عروض مبيعات تقليدية. فقط أنظمة وحلول ووضوح ومحادثة مع المستقبل."
                : "No forms if you don't want them. No traditional sales pitches. Just systems, solutions, clarity, and a conversation about the future."}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary flex items-center justify-center text-base px-8 py-4 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'mailto:futureis@ai8ty.com'}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              <span className="font-medium">
                {isArabic ? "تحدث مع AI8TY" : "Talk to AI8TY"}
              </span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              className="btn-outline flex items-center justify-center text-base px-8 py-4 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const servicesSection = document.getElementById('modular-services-section');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="font-medium">
                {isArabic ? "استكشف الأنظمة" : "Explore Systems"}
              </span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
