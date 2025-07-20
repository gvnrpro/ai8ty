
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Users, Target, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const NewHomepageSections: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      whatWeBuild: {
        title: 'What We Build',
        subtitle: 'Intelligent tools and infrastructure for real-world impact',
        description: 'We create AI systems that are powerful yet approachable, designed to amplify human capability rather than replace it.',
        features: [
          {
            icon: Brain,
            title: 'Intelligent Automation',
            description: 'Systems that learn from your workflow and optimize operations automatically'
          },
          {
            icon: Zap,
            title: 'Accessible Infrastructure',
            description: 'Enterprise-grade AI tools that anyone can deploy and manage'
          },
          {
            icon: Shield,
            title: 'Safe by Design',
            description: 'Built-in safety measures and transparent operation for peace of mind'
          }
        ]
      },
      whoWeBuildFor: {
        title: 'Who We Build For',
        subtitle: 'Builders, teams, and industries on the edge of possibility',
        description: 'From solo creators to growing teams to established organizations—we serve anyone ready to harness AI for meaningful progress.',
        audiences: [
          {
            icon: Users,
            title: 'Creative Teams',
            description: 'Designers, writers, and makers pushing creative boundaries'
          },
          {
            icon: Target,
            title: 'Growing Businesses',
            description: 'Companies ready to scale with intelligent automation'
          },
          {
            icon: Globe,
            title: 'Communities',
            description: 'Organizations building for social impact and accessibility'
          }
        ]
      },
      whyItMatters: {
        title: 'Why It Matters',
        subtitle: 'Making the next era of technology simpler, safer, and more inclusive',
        description: 'The future of AI shouldn\'t be limited to tech giants. We\'re democratizing access to advanced capabilities, ensuring that breakthrough technology serves everyone.',
        principles: [
          'Clarity over complexity',
          'Tools people can actually use',
          'Impact that reaches beyond technologists',
          'Safety as a foundational principle'
        ]
      }
    },
    ar: {
      whatWeBuild: {
        title: 'ما نبنيه',
        subtitle: 'أدوات ذكية وبنية تحتية للتأثير في العالم الحقيقي',
        description: 'نقوم بإنشاء أنظمة ذكاء اصطناعي قوية ولكن قابلة للوصول، مصممة لتعزيز القدرة البشرية بدلاً من استبدالها.',
        features: [
          {
            icon: Brain,
            title: 'الأتمتة الذكية',
            description: 'أنظمة تتعلم من سير عملك وتحسن العمليات تلقائياً'
          },
          {
            icon: Zap,
            title: 'بنية تحتية قابلة للوصول',
            description: 'أدوات ذكاء اصطناعي على مستوى المؤسسات يمكن لأي شخص نشرها وإدارتها'
          },
          {
            icon: Shield,
            title: 'آمن بالتصميم',
            description: 'تدابير أمان مدمجة وتشغيل شفاف لراحة البال'
          }
        ]
      },
      whoWeBuildFor: {
        title: 'لمن نبني',
        subtitle: 'البناة والفرق والصناعات على حافة الإمكانية',
        description: 'من المبدعين المنفردين إلى الفرق النامية إلى المنظمات الراسخة—نخدم أي شخص مستعد لتسخير الذكاء الاصطناعي للتقدم المعنوي.',
        audiences: [
          {
            icon: Users,
            title: 'الفرق الإبداعية',
            description: 'المصممون والكتاب والصناع الذين يدفعون الحدود الإبداعية'
          },
          {
            icon: Target,
            title: 'الشركات النامية',
            description: 'الشركات المستعدة للتوسع مع الأتمتة الذكية'
          },
          {
            icon: Globe,
            title: 'المجتمعات',
            description: 'المنظمات التي تبني للتأثير الاجتماعي وإمكانية الوصول'
          }
        ]
      },
      whyItMatters: {
        title: 'لماذا يهم',
        subtitle: 'جعل عصر التكنولوجيا القادم أبسط وأكثر أماناً وشمولية',
        description: 'لا ينبغي أن يقتصر مستقبل الذكاء الاصطناعي على عمالقة التكنولوجيا. نحن نقوم بإضفاء الطابع الديمقراطي على الوصول إلى القدرات المتقدمة، مما يضمن أن التكنولوجيا الرائدة تخدم الجميع.',
        principles: [
          'الوضوح على التعقيد',
          'أدوات يمكن للناس استخدامها فعلاً',
          'تأثير يصل إلى ما وراء التقنيين',
          'الأمان كمبدأ أساسي'
        ]
      }
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.div
      ref={ref}
      className={`py-20 ${isArabic ? 'rtl' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* What We Build */}
      <motion.section 
        className="section-apple-large bg-gradient-to-br from-slate-50 to-white"
        variants={sectionVariants}
      >
        <div className="container-apple">
          <div className="text-center mb-16">
            <h2 className="text-display-medium mb-6">{currentContent.whatWeBuild.title}</h2>
            <p className="text-title text-gray-600 mb-8">{currentContent.whatWeBuild.subtitle}</p>
            <p className="text-body-large text-gray-700 container-apple-narrow">
              {currentContent.whatWeBuild.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.whatWeBuild.features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-premium p-8 rounded-2xl hover-lift text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon size={48} className="mx-auto mb-6 text-blue-500" />
                <h3 className="text-title font-semibold mb-4">{feature.title}</h3>
                <p className="text-body text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Build For */}
      <motion.section 
        className="section-apple-large"
        variants={sectionVariants}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--gray-50)) 0%, white 70%)'
        }}
      >
        <div className="container-apple">
          <div className="text-center mb-16">
            <h2 className="text-display-medium mb-6">{currentContent.whoWeBuildFor.title}</h2>
            <p className="text-title text-gray-600 mb-8">{currentContent.whoWeBuildFor.subtitle}</p>
            <p className="text-body-large text-gray-700 container-apple-narrow">
              {currentContent.whoWeBuildFor.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.whoWeBuildFor.audiences.map((audience, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-lift text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <audience.icon size={48} className="mx-auto mb-6 text-purple-500" />
                <h3 className="text-title font-semibold mb-4">{audience.title}</h3>
                <p className="text-body text-gray-600">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why It Matters */}
      <motion.section 
        className="section-apple-large bg-gradient-to-br from-blue-50 to-purple-50"
        variants={sectionVariants}
      >
        <div className="container-apple">
          <div className="text-center mb-16">
            <h2 className="text-display-medium mb-6">{currentContent.whyItMatters.title}</h2>
            <p className="text-title text-gray-600 mb-8">{currentContent.whyItMatters.subtitle}</p>
            <p className="text-body-large text-gray-700 container-apple-narrow mb-12">
              {currentContent.whyItMatters.description}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {currentContent.whyItMatters.principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white/70 p-6 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <p className="text-body font-medium text-gray-800">{principle}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/about')}
                className="btn-premium group"
              >
                <span className="relative z-10">Learn More About Our Mission</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-0.5 duration-200"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default NewHomepageSections;
