
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  companyEn: string;
  companyAr: string;
  quoteEn: string;
  quoteAr: string;
  avatarUrl: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    nameEn: "Ahmed Al Mansoori",
    nameAr: "أحمد المنصوري",
    titleEn: "Chief Technology Officer",
    titleAr: "المدير التنفيذي للتكنولوجيا",
    companyEn: "Emirates Digital Innovation Group",
    companyAr: "مجموعة الإمارات للابتكار الرقمي",
    quoteEn: "AI8TY transformed our fragmented systems into a unified platform that's increased our operational efficiency by 40%. They understand the UAE market and delivered exactly what we needed without unnecessary complexity.",
    quoteAr: "حولت AI8TY أنظمتنا المتفرقة إلى منصة موحدة زادت من كفاءة عملياتنا بنسبة 40%. إنهم يفهمون سوق الإمارات وقدموا بالضبط ما احتجنا إليه دون تعقيدات غير ضرورية.",
    avatarUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=200&q=80",
    location: "Dubai"
  },
  {
    id: "test-2",
    nameEn: "Layla Al Hashemi",
    nameAr: "ليلى الهاشمي",
    titleEn: "CEO",
    titleAr: "الرئيس التنفيذي",
    companyEn: "Future Retail Group",
    companyAr: "مجموعة تجارة المستقبل",
    quoteEn: "Working with AI8TY has been transformative for our retail operations. Their team designed a custom dashboard that gives us real-time visibility across all locations, helping us make faster, data-driven decisions. Their bilingual expertise was crucial for our market needs.",
    quoteAr: "العمل مع AI8TY كان تحويلياً لعمليات البيع بالتجزئة لدينا. صمم فريقهم لوحة تحكم مخصصة تمنحنا رؤية في الوقت الحقيقي عبر جميع المواقع، مما يساعدنا على اتخاذ قرارات أسرع مبنية على البيانات. كانت خبرتهم ثنائية اللغة حاسمة لاحتياجات السوق لدينا.",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    location: "Abu Dhabi"
  },
  {
    id: "test-3",
    nameEn: "Khalid Al Qasimi",
    nameAr: "خالد القاسمي",
    titleEn: "Managing Director",
    titleAr: "المدير الإداري",
    companyEn: "Emirates Property Development",
    companyAr: "تطوير العقارات الإماراتية",
    quoteEn: "The automation system AI8TY built for our property development firm has eliminated countless manual processes. Our team now focuses on strategic initiatives instead of repetitive tasks. Their understanding of both regional requirements and global best practices sets them apart.",
    quoteAr: "لقد قضى نظام الأتمتة الذي بنته AI8TY لشركة تطوير العقارات لدينا على العديد من العمليات اليدوية. يركز فريقنا الآن على المبادرات الاستراتيجية بدلاً من المهام المتكررة. فهمهم لكل من المتطلبات الإقليمية وأفضل الممارسات العالمية يميزهم عن غيرهم.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    location: "Sharjah"
  }
];

const BilingualTestimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  // Typewriter effect
  useEffect(() => {
    if (!inView) return;
    
    setIsTyping(true);
    setDisplayText('');
    
    const currentTestimonial = testimonials[activeIndex];
    const quoteText = isArabic ? currentTestimonial.quoteAr : currentTestimonial.quoteEn;
    let i = 0;
    
    // Speed up typing for mobile
    const typingSpeed = window.innerWidth < 768 ? 10 : 20;
    
    const typingInterval = setInterval(() => {
      if (i < quoteText.length) {
        setDisplayText(prev => prev + quoteText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [activeIndex, isArabic, inView]);
  
  // Auto-rotate testimonials - faster on mobile
  useEffect(() => {
    if (!inView) return;
    
    const rotateInterval = setInterval(() => {
      if (!isTyping) {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
    }, window.innerWidth < 768 ? 8000 : 10000); // Change every 8 seconds on mobile, 10 on desktop
    
    return () => clearInterval(rotateInterval);
  }, [inView, isTyping]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section ref={ref} className={cn("py-24 px-6 bg-ai8ty-black", isArabic ? "rtl" : "")}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {isArabic ? "الثقة من الشركات الإماراتية الرائدة" : "Trusted by Leading UAE Companies"}
          </motion.h2>
          <motion.p 
            className="subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isArabic ? "قصص نجاح حقيقية من شركات إماراتية تستخدم نظام AI8TY لتسريع النمو" : "Real success stories from UAE companies using the AI8TY system to accelerate growth"}
          </motion.p>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="bg-depth-2 rounded-xl border border-white/10 p-8 md:p-12 shadow-glow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div 
                  className="md:w-1/4 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-sand">
                      <img 
                        src={testimonials[activeIndex].avatarUrl} 
                        alt={isArabic ? testimonials[activeIndex].nameAr : testimonials[activeIndex].nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full border border-sand/30 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 bg-sand text-ai8ty-black text-xs px-2 py-1 rounded-full">
                      {testimonials[activeIndex].location}
                    </div>
                  </div>
                </motion.div>
                
                <div className="md:w-3/4">
                  <div className="mb-6 min-h-[120px]">
                    <div className="text-2xl font-syne text-sand mb-2">"</div>
                    <p className={cn(
                      "text-ai8ty-white text-lg leading-relaxed font-medium",
                      isArabic ? "font-arabic" : ""
                    )}>
                      {displayText}
                      {isTyping && <span className="ml-1 animate-pulse">|</span>}
                    </p>
                    <div className="text-2xl font-syne text-sand mt-2 text-right">"</div>
                  </div>
                  
                  <div className={cn("border-t border-white/10 pt-6", isArabic ? "text-right" : "")}>
                    <h4 className="font-syne text-lg text-ai8ty-white">
                      {isArabic ? testimonials[activeIndex].nameAr : testimonials[activeIndex].nameEn}
                    </h4>
                    <p className="text-sand">
                      {isArabic ? testimonials[activeIndex].titleAr : testimonials[activeIndex].titleEn}
                    </p>
                    <p className="text-ai8ty-grey text-sm">
                      {isArabic ? testimonials[activeIndex].companyAr : testimonials[activeIndex].companyEn}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-sand w-8" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilingualTestimonials;
