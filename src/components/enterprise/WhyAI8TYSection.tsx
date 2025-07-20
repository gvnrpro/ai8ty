
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, 
  Brain, 
  Lightbulb, 
  Shield, 
  Zap, 
  ArrowUpRight
} from 'lucide-react';

const WhyAI8TYSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Why AI8TY',
      title: 'Built to bridge the gap between advanced AI labs and everyday builders',
      description: 'We believe that powerful technology should be accessible to everyone, not just the few. Our approach focuses on clarity, safety, and real-world impact.',
      features: [
        {
          icon: Users,
          title: 'Impact Beyond Technologists',
          description: 'Tools and systems designed to empower creators, businesses, and communities regardless of technical background.',
          highlight: 'For Everyone'
        },
        {
          icon: Brain,
          title: 'Accelerated AI Innovation Access',
          description: 'Bringing cutting-edge AI capabilities to market faster, with the safety and reliability you need.',
          highlight: 'Faster Access'
        },
        {
          icon: Lightbulb,
          title: 'Clarity Over Complexity',
          description: 'Every interface, every interaction designed to be intuitive. Technology should enhance, not complicate.',
          highlight: 'Simple & Clear'
        },
        {
          icon: Shield,
          title: 'Safety-First Approach',
          description: 'Built-in security, privacy protection, and ethical AI practices from the ground up.',
          highlight: 'Always Safe'
        },
        {
          icon: Zap,
          title: 'Real-World Results',
          description: 'Focused on practical applications that solve actual problems and deliver measurable outcomes.',
          highlight: 'Proven Impact'
        }
      ]
    },
    ar: {
      subtitle: 'لماذا AI8TY',
      title: 'مبني لسد الفجوة بين مختبرات الذكاء الاصطناعي المتقدمة والبناة اليوميين',
      description: 'نحن نؤمن أن التكنولوجيا القوية يجب أن تكون في متناول الجميع، وليس قلة قليلة فقط. نهجنا يركز على الوضوح والأمان والتأثير الحقيقي.',
      features: [
        {
          icon: Users,
          title: 'تأثير يتجاوز التقنيين',
          description: 'أدوات وأنظمة مصممة لتمكين المبدعين والشركات والمجتمعات بغض النظر عن الخلفية التقنية.',
          highlight: 'للجميع'
        },
        {
          icon: Brain,
          title: 'وصول مسرع لابتكار الذكاء الاصطناعي',
          description: 'جلب قدرات الذكاء الاصطناعي المتطورة إلى السوق بشكل أسرع، مع الأمان والموثوقية التي تحتاجها.',
          highlight: 'وصول أسرع'
        },
        {
          icon: Lightbulb,
          title: 'الوضوح بدلاً من التعقيد',
          description: 'كل واجهة، كل تفاعل مصمم ليكون بديهياً. التكنولوجيا يجب أن تعزز، وليس تعقد.',
          highlight: 'بسيط وواضح'
        },
        {
          icon: Shield,
          title: 'نهج الأمان أولاً',
          description: 'أمان مدمج، وحماية الخصوصية، وممارسات الذكاء الاصطناعي الأخلاقية من الأساس.',
          highlight: 'آمن دائماً'
        },
        {
          icon: Zap,
          title: 'نتائج حقيقية',
          description: 'مركز على التطبيقات العملية التي تحل المشاكل الفعلية وتحقق نتائج قابلة للقياس.',
          highlight: 'تأثير مثبت'
        }
      ]
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple bg-gradient-to-b from-gray-950/50 to-background ${isArabic ? 'rtl' : ''}`}
    >
      <div className="container-apple">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative card-apple hover-lift overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                {feature.highlight}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <feature.icon size={24} className="text-blue-500" />
                </div>

                {/* Content */}
                <h3 className="text-title mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-body leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAI8TYSection;
