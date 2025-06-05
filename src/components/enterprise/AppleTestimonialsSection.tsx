
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AppleTestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Trusted by Leaders',
      title: 'What GCC executives are saying about AI8TY',
      description: 'From Fortune 500 to fast-growing enterprises, leaders across the Gulf region trust AI8TY to deliver transformative results.'
    },
    ar: {
      subtitle: 'موثوق من القادة',
      title: 'ما يقوله المديرون التنفيذيون في دول مجلس التعاون عن AI8TY',
      description: 'من شركات فورتشن 500 إلى المؤسسات سريعة النمو، يثق القادة في منطقة الخليج في AI8TY لتحقيق نتائج تحويلية.'
    }
  };

  const testimonials = [
    {
      id: 1,
      quoteEn: "AI8TY didn't just implement AI for us—they transformed how we think about operational excellence. The results speak for themselves: 40% faster processing and unprecedented accuracy.",
      quoteAr: "AI8TY لم تقم فقط بتطبيق الذكاء الاصطناعي لنا - بل حولت طريقة تفكيرنا حول التميز التشغيلي. النتائج تتحدث عن نفسها: 40% أسرع في المعالجة ودقة لم يسبق لها مثيل.",
      nameEn: "Sarah Al-Mansouri",
      nameAr: "سارة المنصوري",
      titleEn: "Chief Technology Officer",
      titleAr: "المدير التنفيذي للتكنولوجيا",
      companyEn: "Leading UAE Bank",
      companyAr: "بنك إماراتي رائد",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      quoteEn: "The cultural sensitivity and regulatory compliance built into AI8TY's systems gave us confidence from day one. They understand the Gulf market like no other AI provider.",
      quoteAr: "الحساسية الثقافية والامتثال التنظيمي المدمج في أنظمة AI8TY أعطانا الثقة من اليوم الأول. إنهم يفهمون السوق الخليجية مثل أي مزود ذكاء اصطناعي آخر.",
      nameEn: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      titleEn: "Head of Digital Innovation",
      titleAr: "رئيس الابتكار الرقمي",
      companyEn: "Major Healthcare Network",
      companyAr: "شبكة رعاية صحية رئيسية",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      quoteEn: "AI8TY's approach to AI implementation is refreshingly strategic. They focus on business outcomes, not just technology deployment. That's exactly what we needed.",
      quoteAr: "نهج AI8TY في تطبيق الذكاء الاصطناعي استراتيجي بشكل منعش. إنهم يركزون على نتائج الأعمال، وليس فقط نشر التكنولوجيا. هذا بالضبط ما نحتاجه.",
      nameEn: "Fatima Al-Zahra",
      nameAr: "فاطمة الزهراء",
      titleEn: "Chief Operating Officer",
      titleAr: "المدير التنفيذي للعمليات",
      companyEn: "Regional Manufacturing Group",
      companyAr: "مجموعة تصنيع إقليمية",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'radial-gradient(ellipse at center, hsl(var(--gray-900)) 0%, hsl(var(--background)) 100%)'
      }}
    >
      {/* Apple-style ambient elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.2),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Apple-style testimonial card */}
              <div className="card-apple hover-lift group-hover:scale-[1.02] transition-all duration-500 h-full">
                {/* Quote icon */}
                <div className="w-12 h-12 glass-apple rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Quote size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                
                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-body leading-relaxed mb-8 group-hover:text-blue-50 transition-colors duration-300">
                  "{isArabic ? testimonial.quoteAr : testimonial.quoteEn}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden glass-apple">
                    <img 
                      src={testimonial.avatar} 
                      alt={isArabic ? testimonial.nameAr : testimonial.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-white transition-colors duration-300">
                      {isArabic ? testimonial.nameAr : testimonial.nameEn}
                    </div>
                    <div className="text-caption text-muted-foreground group-hover:text-blue-200 transition-colors duration-300">
                      {isArabic ? testimonial.titleAr : testimonial.titleEn}
                    </div>
                    <div className="text-caption text-muted-foreground/80 group-hover:text-blue-200/80 transition-colors duration-300">
                      {isArabic ? testimonial.companyAr : testimonial.companyEn}
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

export default AppleTestimonialsSection;
