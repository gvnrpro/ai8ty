
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Zap, Shield, Globe, Users, Target } from 'lucide-react';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'About AI8TY',
      subtitle: 'Building bridges between advanced AI and everyday builders',
      intro: 'AI8TY exists between the world\'s leading AI enterprises and the people using their systems to power a new era of work, learning, and creativity.',
      mission: 'Our Mission',
      missionText: 'AI8TY was founded on the belief that advanced intelligence should serve more people—not just through breakthroughs, but through usability. Our mission is to design and deploy systems that accelerate access, automation, and innovation across industries and communities.',
      structure: 'Our Structure',
      structureIntro: 'We operate as a dual-structure organization:',
      ai8tyInc: {
        title: 'AI8TY Inc.',
        description: 'Our for-profit arm that builds intelligent tools and solutions for modern teams and businesses.'
      },
      ai8tyLabs: {
        title: 'AI8TY Labs',
        description: 'Our nonprofit initiative focused on education, open access, and democratized infrastructure for the AI age.'
      },
      goal: 'Our goal is simple: reduce the friction between great ideas and great outcomes.',
      focus: 'We focus on:',
      principles: [
        'Clarity over complexity',
        'Tools people can actually use',
        'Impact that reaches beyond technologists',
        'Safety as a foundational principle, not an afterthought'
      ],
      values: 'Our Values',
      valuesList: [
        {
          icon: Heart,
          title: 'Human-Centered',
          description: 'Technology should amplify human potential, not replace it'
        },
        {
          icon: Zap,
          title: 'Accessible Power',
          description: 'Advanced capabilities made simple and approachable'
        },
        {
          icon: Shield,
          title: 'Safe by Design',
          description: 'Building with safety and transparency from the ground up'
        },
        {
          icon: Globe,
          title: 'Inclusive Innovation',
          description: 'AI that serves diverse communities and use cases'
        },
        {
          icon: Users,
          title: 'Community-Driven',
          description: 'Developed with and for the people who use it'
        },
        {
          icon: Target,
          title: 'Impact-Focused',
          description: 'Measuring success by real-world outcomes'
        }
      ]
    },
    ar: {
      title: 'حول AI8TY',
      subtitle: 'بناء جسور بين الذكاء الاصطناعي المتقدم والبناة اليوميين',
      intro: 'AI8TY موجودة بين شركات الذكاء الاصطناعي الرائدة في العالم والأشخاص الذين يستخدمون أنظمتها لتشغيل عصر جديد من العمل والتعلم والإبداع.',
      mission: 'مهمتنا',
      missionText: 'تأسست AI8TY على الاعتقاد بأن الذكاء المتقدم يجب أن يخدم المزيد من الناس—ليس فقط من خلال الاختراقات، ولكن من خلال سهولة الاستخدام. مهمتنا هي تصميم ونشر أنظمة تسرع الوصول والأتمتة والابتكار عبر الصناعات والمجتمعات.',
      structure: 'هيكلنا',
      structureIntro: 'نعمل كمنظمة ذات هيكل مزدوج:',
      ai8tyInc: {
        title: 'AI8TY Inc.',
        description: 'ذراعنا الربحي الذي يبني أدوات وحلول ذكية للفرق والشركات الحديثة.'
      },
      ai8tyLabs: {
        title: 'AI8TY Labs',
        description: 'مبادرتنا غير الربحية المركزة على التعليم والوصول المفتوح والبنية التحتية الديمقراطية لعصر الذكاء الاصطناعي.'
      },
      goal: 'هدفنا بسيط: تقليل الاحتكاك بين الأفكار العظيمة والنتائج العظيمة.',
      focus: 'نركز على:',
      principles: [
        'الوضوح على التعقيد',
        'أدوات يمكن للناس استخدامها فعلاً',
        'تأثير يصل إلى ما وراء التقنيين',
        'الأمان كمبدأ أساسي، وليس فكرة لاحقة'
      ],
      values: 'قيمنا',
      valuesList: [
        {
          icon: Heart,
          title: 'محوره الإنسان',
          description: 'يجب أن تضخم التكنولوجيا الإمكانات البشرية، وليس استبدالها'
        },
        {
          icon: Zap,
          title: 'القوة المتاحة',
          description: 'قدرات متقدمة مبسطة وقابلة للوصول'
        },
        {
          icon: Shield,
          title: 'آمن بالتصميم',
          description: 'البناء مع الأمان والشفافية من الأساس'
        },
        {
          icon: Globe,
          title: 'الابتكار الشامل',
          description: 'ذكاء اصطناعي يخدم مجتمعات وحالات استخدام متنوعة'
        },
        {
          icon: Users,
          title: 'مدفوع بالمجتمع',
          description: 'تم تطويره مع وللأشخاص الذين يستخدمونه'
        },
        {
          icon: Target,
          title: 'مركز على التأثير',
          description: 'قياس النجاح بالنتائج في العالم الحقيقي'
        }
      ]
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
        <title>About AI8TY - Building Accessible AI for Everyone</title>
        <meta name="description" content="AI8TY exists between leading AI enterprises and everyday builders, making advanced intelligence accessible through usable systems and inclusive innovation." />
      </Helmet>

      <div className={`min-h-screen ${isArabic ? 'rtl' : ''}`}>
        <AppleInspiredNavigation />
        
        <main ref={ref} className="pt-20">
          {/* Hero Section */}
          <motion.section 
            className="section-apple-large"
            style={{
              background: 'radial-gradient(ellipse at center top, hsl(var(--gray-900)) 0%, hsl(var(--background)) 70%)'
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="container-apple text-center">
              <motion.h1 
                className="text-display-large text-white mb-6"
                variants={itemVariants}
              >
                {currentContent.title}
              </motion.h1>
              <motion.p 
                className="text-title text-gray-300 mb-8 container-apple-narrow"
                variants={itemVariants}
              >
                {currentContent.subtitle}
              </motion.p>
              <motion.p 
                className="text-body-large text-gray-400 container-apple-narrow"
                variants={itemVariants}
              >
                {currentContent.intro}
              </motion.p>
            </div>
          </motion.section>

          {/* Mission Section */}
          <motion.section 
            className="section-apple-large bg-white"
            variants={itemVariants}
          >
            <div className="container-apple">
              <h2 className="text-display-medium text-center mb-12">{currentContent.mission}</h2>
              <div className="container-apple-narrow">
                <p className="text-body-large text-gray-700 mb-8">{currentContent.missionText}</p>
                
                <h3 className="text-title font-semibold mb-6">{currentContent.focus}</h3>
                <div className="grid gap-4">
                  {currentContent.principles.map((principle, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <p className="text-body text-gray-700">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Structure Section */}
          <motion.section 
            className="section-apple-large bg-gray-50"
            variants={itemVariants}
          >
            <div className="container-apple">
              <h2 className="text-display-medium text-center mb-12">{currentContent.structure}</h2>
              <p className="text-body-large text-gray-700 text-center mb-16 container-apple-narrow">
                {currentContent.structureIntro}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-title font-bold mb-4 text-blue-600">{currentContent.ai8tyInc.title}</h3>
                  <p className="text-body text-gray-700">{currentContent.ai8tyInc.description}</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-title font-bold mb-4 text-purple-600">{currentContent.ai8tyLabs.title}</h3>
                  <p className="text-body text-gray-700">{currentContent.ai8tyLabs.description}</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-body-large font-medium text-gray-800">{currentContent.goal}</p>
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            className="section-apple-large bg-white"
            variants={itemVariants}
          >
            <div className="container-apple">
              <h2 className="text-display-medium text-center mb-16">{currentContent.values}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentContent.valuesList.map((value, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <value.icon size={48} className="mx-auto mb-6 text-blue-500" />
                    <h3 className="text-title font-semibold mb-4">{value.title}</h3>
                    <p className="text-body text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default About;
