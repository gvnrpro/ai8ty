
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, Globe, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Labs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'AI8TY Labs',
      subtitle: 'Democratizing AI through education, open access, and inclusive innovation',
      intro: 'AI8TY Labs is the nonprofit arm of AI8TY, committed to ensuring that the benefits of artificial intelligence reach as far and as wide as possible.',
      belief: 'We believe that AI\'s future should be something people help shape—not just something that happens to them.',
      focus: 'Our Focus Areas',
      areas: [
        {
          icon: BookOpen,
          title: 'Educational Resources',
          description: 'Creating comprehensive learning materials, tutorials, and courses that make AI concepts accessible to everyone, regardless of technical background.'
        },
        {
          icon: Globe,
          title: 'Public Infrastructure',
          description: 'Building and maintaining open-source tools and platforms that serve as the foundation for inclusive AI development.'
        },
        {
          icon: Users,
          title: 'Community Building',
          description: 'Fostering diverse communities of learners, builders, and innovators who collaborate on AI solutions for social good.'
        },
        {
          icon: Heart,
          title: 'Ethical AI Advocacy',
          description: 'Promoting responsible AI development practices and ensuring that AI systems are built with fairness and transparency.'
        }
      ],
      initiatives: 'Current Initiatives',
      initiativesList: [
        'Open AI Curriculum - Free educational content for schools and communities',
        'Community Grants Program - Funding for AI projects with social impact',
        'Accessibility Toolkit - Resources for building inclusive AI applications',
        'AI Ethics Workshop Series - Regular discussions on responsible AI development'
      ],
      getInvolved: 'Get Involved',
      involvement: 'Whether you\'re an educator, student, developer, or simply curious about AI, there are many ways to contribute to our mission of making AI more accessible and beneficial for all.',
      cta: 'Join Our Community'
    },
    ar: {
      title: 'مختبرات AI8TY',
      subtitle: 'إضفاء الطابع الديمقراطي على الذكاء الاصطناعي من خلال التعليم والوصول المفتوح والابتكار الشامل',
      intro: 'مختبرات AI8TY هي الذراع غير الربحي لـ AI8TY، الملتزم بضمان وصول فوائد الذكاء الاصطناعي إلى أبعد وأوسع نطاق ممكن.',
      belief: 'نحن نؤمن أن مستقبل الذكاء الاصطناعي يجب أن يكون شيئًا يساعد الناس في تشكيله—وليس مجرد شيء يحدث لهم.',
      focus: 'مجالات تركيزنا',
      areas: [
        {
          icon: BookOpen,
          title: 'الموارد التعليمية',
          description: 'إنشاء مواد تعليمية شاملة ودروس تعليمية ودورات تجعل مفاهيم الذكاء الاصطناعي في متناول الجميع، بغض النظر عن الخلفية التقنية.'
        },
        {
          icon: Globe,
          title: 'البنية التحتية العامة',
          description: 'بناء وصيانة أدوات ومنصات مفتوحة المصدر تعمل كأساس لتطوير الذكاء الاصطناعي الشامل.'
        },
        {
          icon: Users,
          title: 'بناء المجتمع',
          description: 'تعزيز مجتمعات متنوعة من المتعلمين والبناة والمبتكرين الذين يتعاونون في حلول الذكاء الاصطناعي للخير الاجتماعي.'
        },
        {
          icon: Heart,
          title: 'الدعوة للذكاء الاصطناعي الأخلاقي',
          description: 'تعزيز ممارسات تطوير الذكاء الاصطناعي المسؤولة وضمان بناء أنظمة الذكاء الاصطناعي بالعدالة والشفافية.'
        }
      ],
      initiatives: 'المبادرات الحالية',
      initiativesList: [
        'منهج الذكاء الاصطناعي المفتوح - محتوى تعليمي مجاني للمدارس والمجتمعات',
        'برنامج منح المجتمع - تمويل لمشاريع الذكاء الاصطناعي ذات التأثير الاجتماعي',
        'مجموعة أدوات إمكانية الوصول - موارد لبناء تطبيقات الذكاء الاصطناعي الشاملة',
        'سلسلة ورش أخلاقيات الذكاء الاصطناعي - مناقشات منتظمة حول تطوير الذكاء الاصطناعي المسؤول'
      ],
      getInvolved: 'شارك معنا',
      involvement: 'سواء كنت معلمًا أو طالبًا أو مطورًا أو ببساطة فضولي حول الذكاء الاصطناعي، هناك طرق عديدة للمساهمة في مهمتنا لجعل الذكاء الاصطناعي أكثر سهولة في الوصول ومفيدًا للجميع.',
      cta: 'انضم إلى مجتمعنا'
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>AI8TY Labs - Democratizing AI Through Education and Open Access</title>
        <meta name="description" content="AI8TY Labs is our nonprofit initiative focused on education, open access, and democratized infrastructure for the AI age. Making AI benefits accessible to all." />
      </Helmet>

      <div className={`min-h-screen ${isArabic ? 'rtl' : ''}`}>
        <AppleInspiredNavigation />
        
        <main ref={ref} className="pt-20">
          {/* Hero Section */}
          <motion.section 
            className="section-apple-large"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="container-apple text-center text-white">
              <motion.h1 
                className="text-display-large mb-6"
                variants={itemVariants}
              >
                {currentContent.title}
              </motion.h1>
              <motion.p 
                className="text-title mb-8 container-apple-narrow opacity-90"
                variants={itemVariants}
              >
                {currentContent.subtitle}
              </motion.p>
              <motion.p 
                className="text-body-large container-apple-narrow opacity-80 mb-8"
                variants={itemVariants}
              >
                {currentContent.intro}
              </motion.p>
              <motion.p 
                className="text-body-large font-medium container-apple-narrow"
                variants={itemVariants}
              >
                {currentContent.belief}
              </motion.p>
            </div>
          </motion.section>

          {/* Focus Areas */}
          <motion.section 
            className="section-apple-large bg-white"
            variants={itemVariants}
          >
            <div className="container-apple">
              <h2 className="text-display-medium text-center mb-16">{currentContent.focus}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {currentContent.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-2xl hover-lift"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <area.icon size={48} className="mb-6 text-purple-600" />
                    <h3 className="text-title font-semibold mb-4">{area.title}</h3>
                    <p className="text-body text-gray-700">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Current Initiatives */}
          <motion.section 
            className="section-apple-large bg-gradient-to-br from-purple-50 to-blue-50"
            variants={itemVariants}
          >
            <div className="container-apple">
              <h2 className="text-display-medium text-center mb-16">{currentContent.initiatives}</h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="grid gap-6">
                  {currentContent.initiativesList.map((initiative, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                        <p className="text-body text-gray-800">{initiative}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Get Involved */}
          <motion.section 
            className="section-apple-large bg-white"
            variants={itemVariants}
          >
            <div className="container-apple text-center">
              <h2 className="text-display-medium mb-8">{currentContent.getInvolved}</h2>
              <p className="text-body-large text-gray-700 container-apple-narrow mb-12">
                {currentContent.involvement}
              </p>
              
              <button
                onClick={() => navigate('/contact')}
                className="btn-premium group"
              >
                <span className="relative z-10">{currentContent.cta}</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-0.5 duration-200"
                />
              </button>
            </div>
          </motion.section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Labs;
