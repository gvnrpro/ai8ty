
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Users, TrendingUp, Zap } from 'lucide-react';

const BuilderTrustSection: React.FC = () => {
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

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: isArabic ? "شركة معاد تصميمها" : "Brands Redesigned",
      description: isArabic ? "للعصر الرقمي" : "For the Digital Age"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: isArabic ? "متوسط نمو الرؤية" : "Avg. Visibility Growth",
      description: isArabic ? "في البحث التوليدي" : "In Generative Search"
    },
    {
      icon: Zap,
      value: "48h",
      label: isArabic ? "من الفكرة إلى النموذج" : "Concept to Prototype",
      description: isArabic ? "للشركات الذكية" : "For Smart Businesses"
    }
  ];

  const testimonials = [
    {
      quote: isArabic 
        ? "AI8TY لم يبنوا لنا موقعًا—بل بنوا لنا نظامًا لنبدو أذكياء في كل مكان."
        : "AI8TY didn't build us a website—they built us a system to look smart everywhere.",
      author: "Sarah Al-Mahmoud",
      role: isArabic ? "الرئيس التنفيذي، تك دبي" : "CEO, TechDubai",
      company: "TechDubai"
    },
    {
      quote: isArabic 
        ? "أخيرًا، شريك يفهم أن المستقبل ليس مجرد رقمي—بل ذكي."
        : "Finally, a partner who understands the future isn't just digital—it's intelligent.",
      author: "Omar Hassan",
      role: isArabic ? "مؤسس، فيوتشر كومرس" : "Founder, FutureCommerce",
      company: "FutureCommerce"
    }
  ];

  return (
    <section 
      ref={ref}
      className={cn(
        "py-24 px-6 bg-depth-2 relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 data-flow-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="heading text-4xl md:text-5xl mb-6">
            {isArabic 
              ? "مبني مع وللبناة."
              : "Built with and for builders."}
          </h2>
          
          <p className="subheading text-xl max-w-3xl mx-auto">
            {isArabic 
              ? "نحن نعمل مع المشغلين والمؤسسين والمبدعين والفرق المشغولة بشحن المستقبل— وليس تخمين طريقهم من خلال التصميم أو الأنظمة."
              : "We work with operators, founders, creators, and teams who are busy shipping the future— not guessing their way through design or systems."}
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="platform-card text-center p-8 group hover:border-sand/30"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-sand/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sand/30 transition-colors">
                <stat.icon size={24} className="text-sand" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-sand mb-2">
                {stat.value}
              </div>
              <div className="heading text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-ai8ty-grey">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="platform-card p-8 relative group hover:border-sand/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Quote className="absolute top-6 right-6 text-sand/30 group-hover:text-sand/50 transition-colors" size={24} />
              
              <blockquote className="text-lg leading-relaxed mb-6 text-white">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center">
                  <span className="text-sand font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-ai8ty-grey">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default BuilderTrustSection;
