import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const AppleTestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const {
    language
  } = useLanguage();
  const isArabic = language === 'ar';
  const content = {
    en: {
      subtitle: 'What Actually Happened',
      title: 'When AI finally works',
      description: 'Leaders who stopped believing vendor promises and demanded systems that deliver results.'
    },
    ar: {
      subtitle: 'التحقق الاستراتيجي',
      title: 'ما يحدث عندما تختار المؤسسات ذكاءً اصطناعياً مصمماً خصيصاً',
      description: 'القادة الذين رفضوا الحلول العامة واستثمروا في بنية تحتية للذكاء الاصطناعي مصممة خصيصاً لواقعهم التشغيلي.'
    }
  };
  const testimonials = [{
    id: 1,
    quoteEn: "Eighteen months. Twelve vendors. Zero solutions. Everyone promised Arabic compliance. Nobody delivered. AI8TY built what works. Three months early.",
    quoteAr: "ثمانية عشر شهراً. اثنا عشر مورداً. صفر حلول. الجميع وعد بالامتثال العربي. لم يسلم أحد. بنت AI8TY ما يعمل. قبل ثلاثة أشهر.",
    nameEn: "Sarah Al-Mansouri",
    nameAr: "سارة المنصوري",
    titleEn: "CTO",
    titleAr: "مدير التكنولوجيا",
    companyEn: "Regional Bank",
    companyAr: "بنك إقليمي",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=400&h=400&fit=crop&crop=face"
  }, {
    id: 2,
    quoteEn: "Ten times faster diagnostics. Arabic medical terms. Perfect accuracy. My competitors are still demoing solutions that don't work.",
    quoteAr: "تشخيصات أسرع بعشر مرات. مصطلحات طبية عربية. دقة مثالية. منافسي لا يزالون يعرضون حلولاً لا تعمل.",
    nameEn: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    titleEn: "Head of Operations",
    titleAr: "رئيس العمليات",
    companyEn: "Healthcare Network",
    companyAr: "شبكة صحية",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }, {
    id: 3,
    quoteEn: "They understand Gulf business. Real culture. Real operations. Built AI that works with how we actually do things. Rare.",
    quoteAr: "يفهمون أعمال الخليج. ثقافة حقيقية. عمليات حقيقية. بنوا ذكاءً اصطناعياً يعمل مع كيفية قيامنا بالأشياء فعلياً. نادر.",
    nameEn: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    titleEn: "COO",
    titleAr: "مدير العمليات",
    companyEn: "Manufacturing Group",
    companyAr: "مجموعة تصنيع",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }];
  const currentContent = content[isArabic ? 'ar' : 'en'];
  
  return (
    <section className={`section-apple bg-gradient-to-b from-slate-950 to-slate-900 ${isArabic ? 'rtl' : ''}`}>
      <motion.div
        ref={ref}
        className="container-apple"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <motion.p className="text-caption text-blue-400 mb-4 font-medium">
            {currentContent.subtitle}
          </motion.p>
          <motion.h2 className="text-display mb-6">
            {currentContent.title}
          </motion.h2>
          <motion.p className="text-body-large max-w-3xl mx-auto">
            {currentContent.description}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="premium-card group"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-blue-400/60" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-body mb-8 leading-relaxed">
                "{isArabic ? testimonial.quoteAr : testimonial.quoteEn}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={isArabic ? testimonial.nameAr : testimonial.nameEn}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="text-title text-white font-medium">
                    {isArabic ? testimonial.nameAr : testimonial.nameEn}
                  </h4>
                  <p className="text-caption">
                    {isArabic ? testimonial.titleAr : testimonial.titleEn}
                  </p>
                  <p className="text-caption text-white/50">
                    {isArabic ? testimonial.companyAr : testimonial.companyEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default AppleTestimonialsSection;