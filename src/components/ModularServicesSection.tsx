
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Palette, Zap, Settings, Rocket, CheckCircle } from 'lucide-react';

const ModularServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Optimized for mobile
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const services = [
    {
      icon: Search,
      title: isArabic ? "تحسين الذكاء الاصطناعي التوليدي (GEO)" : "Generative AI Optimization (GEO)",
      subtitle: isArabic ? "اكتشف داخل الأنظمة الذكية" : "Be Discovered Inside AI Systems",
      description: isArabic 
        ? "نهندس بنيتك ولغتك للاكتشاف داخل نماذج اللغة الكبيرة، والبحث المعزز بالذكاء الاصطناعي، والواجهات متعددة الوسائط. مثلما تحسن Google للبحث، نحن نحسن للذكاء الاصطناعي."
        : "We engineer your structure and language for discoverability inside LLMs, AI-enhanced search, and multi-modal interfaces. Like Google optimizes for search, we optimize for AI.",
      color: "neural",
      outcomes: [
        isArabic ? "ظهور في إجابات ChatGPT" : "Appear in ChatGPT responses",
        isArabic ? "تحسين للبحث التوليدي" : "Optimized for generative search",
        isArabic ? "مرجع لنماذج الذكاء الاصطناعي" : "AI model reference authority"
      ]
    },
    {
      icon: Palette,
      title: isArabic ? "أنظمة الهوية الذكية" : "Intelligent Identity Systems",
      subtitle: isArabic ? "هوية قابلة للتكيف مع الذكاء الاصطناعي" : "AI-Adaptive Brand Identity",
      description: isArabic 
        ? "وضوح قابل للتوسيع. نبني علامات تجارية قابلة للتكيف وجاهزة للذكاء الاصطناعي— الرسائل والتسمية والشعار ومجموعات التصميم— التي تعمل عبر الأدوات والفرق والتقنيات."
        : "Clarity that scales infinitely. We build adaptive, AI-ready brands—messaging, naming, logo, design systems—that function across tools, teams, and emerging tech.",
      color: "quantum",
      outcomes: [
        isArabic ? "هوية متسقة عبر جميع القنوات" : "Consistent identity across all channels",
        isArabic ? "أنظمة تصميم قابلة للتطوير" : "Scalable design systems",
        isArabic ? "جاهز للتقنيات الناشئة" : "Future-tech ready"
      ]
    },
    {
      icon: Zap,
      title: isArabic ? "تصميم التجربة المتقدم" : "Advanced Experience Design",
      subtitle: isArabic ? "واجهات تفاعلية وذكية" : "Interactive Intelligence Interfaces",
      description: isArabic 
        ? "سينمائي وتفاعلي ومتجاوب. نصمم واجهات أمامية تبدو حية: مواقع وتطبيقات وتجارب رقمية مبنية للسرعة والوضوح والذاكرة."
        : "Cinematic, interactive, and intelligent. We design frontends that feel alive: sites, apps, and digital experiences built for speed, clarity, and memorability.",
      color: "intelligence",
      outcomes: [
        isArabic ? "تجارب تفاعلية متقدمة" : "Advanced interactive experiences",
        isArabic ? "أداء محسن للسرعة" : "Performance-optimized for speed",
        isArabic ? "تصميم متجاوب بالكامل" : "Fully responsive design"
      ]
    },
    {
      icon: Settings,
      title: isArabic ? "أتمتة العمليات الذكية" : "Intelligent Operations Automation",
      subtitle: isArabic ? "مضاعفة القوة التشغيلية" : "10x Your Operational Power",
      description: isArabic 
        ? "افعل أقل. حقق أكثر. سير عمل معززة بالذكاء الاصطناعي، ورحلات العملاء، والأدوات المخصصة التي تجعل مؤسس واحد يشعر وكأنه فريق كامل."
        : "Do less. Achieve exponentially more. AI-enhanced workflows, customer journeys, and custom tools that make one founder feel like a full team.",
      color: "sand",
      outcomes: [
        isArabic ? "أتمتة 80% من المهام المتكررة" : "Automate 80% of repetitive tasks",
        isArabic ? "رحلات عملاء ذكية" : "Intelligent customer journeys",
        isArabic ? "أدوات مخصصة للفريق" : "Custom team productivity tools"
      ]
    },
    {
      icon: Rocket,
      title: isArabic ? "استراتيجية الإطلاق التحويلية" : "Transformative Launch Strategy",
      subtitle: isArabic ? "الدخول بثقة والبقاء" : "Enter With Confidence, Stay Forever",
      description: isArabic 
        ? "العمل غير المرئي الذي يجعل الإطلاقات تنجح. نصنع كتيبات الدخول إلى السوق، والعروض التقديمية، والقنائل، والتموضع الرقمي لمساعدتك على الدخول بثقة والبقاء."
        : "The invisible work that makes launches legendary. We craft go-to-market playbooks, presentations, funnels, and digital positioning to help you enter with confidence and dominate.",
      color: "neural",
      outcomes: [
        isArabic ? "خطة دخول السوق المحكمة" : "Bulletproof market entry plan",
        isArabic ? "قنائل تحويل محسنة" : "Optimized conversion funnels",
        isArabic ? "تموضع تنافسي قوي" : "Dominant competitive positioning"
      ]
    }
  ];

  const handleShowIntegration = () => {
    const transformationSection = document.getElementById('business-transformation');
    if (transformationSection) {
      transformationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "border-neural/30 hover:border-neural/60 bg-neural/5 hover:bg-neural/10",
      quantum: "border-quantum/30 hover:border-quantum/60 bg-quantum/5 hover:bg-quantum/10",
      intelligence: "border-intelligence/30 hover:border-intelligence/60 bg-intelligence/5 hover:bg-intelligence/10",
      sand: "border-sand/30 hover:border-sand/60 bg-sand/5 hover:bg-sand/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural",
      quantum: "bg-quantum/20 text-quantum",
      intelligence: "bg-intelligence/20 text-intelligence",
      sand: "bg-sand/20 text-sand"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  return (
    <section 
      id="modular-services-section"
      ref={ref}
      className={cn(
        "neural-section relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      <div className="absolute inset-0 quantum-dots-bg opacity-3"></div>
      
      <motion.div
        className="container mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-depth-2/50 border border-intelligence/20 rounded-full px-4 py-2 text-sm font-space text-intelligence mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Settings size={16} className="animate-pulse" />
            <span>{isArabic ? "الأنظمة المتقدمة" : "Advanced Systems"}</span>
          </motion.div>
          
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            {isArabic 
              ? "أساس أذكى للعلامات التجارية الحديثة."
              : "A smarter foundation for modern brands."}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.p 
              className="text-xl md:text-2xl font-space text-white/90"
              variants={itemVariants}
            >
              {isArabic 
                ? "نحن نبني أنظمة—وليس مجرد مواقع ويب."
                : "We build systems—not just websites."}
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl font-space text-neural/80"
              variants={itemVariants}
            >
              {isArabic 
                ? "إشارات—وليس مجرد محتوى. حضور—وليس مجرد ملفات شخصية."
                : "Signals—not just content. Presence—not just profiles."}
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-8 mb-20"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={cn(
                "quantum-panel p-8 lg:p-12 group cursor-pointer transition-all duration-500",
                getColorClasses(service.color)
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div 
                      className={cn(
                        "w-16 h-16 rounded-xl flex items-center justify-center transition-colors flex-shrink-0",
                        getIconColorClasses(service.color)
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon size={28} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="strategic-title text-xl md:text-2xl mb-2 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className={cn(
                        "text-sm md:text-base font-medium mb-4",
                        service.color === 'neural' && "text-neural",
                        service.color === 'quantum' && "text-quantum", 
                        service.color === 'intelligence' && "text-intelligence",
                        service.color === 'sand' && "text-sand"
                      )}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-space text-white/85 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-depth-1/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="font-syne font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                      {isArabic ? "النتائج المضمونة" : "Guaranteed Outcomes"}
                    </h4>
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <motion.li 
                          key={outcomeIndex}
                          className="flex items-center gap-3 text-sm font-space text-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ 
                            delay: (index * 0.1) + (outcomeIndex * 0.05),
                            duration: 0.5 
                          }}
                        >
                          <CheckCircle size={16} className={cn(
                            service.color === 'neural' && "text-neural",
                            service.color === 'quantum' && "text-quantum", 
                            service.color === 'intelligence' && "text-intelligence",
                            service.color === 'sand' && "text-sand"
                          )} />
                          <span>{outcome}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover indicator */}
              <motion.div
                className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span className={cn(
                  "text-sm font-medium",
                  service.color === 'neural' && "text-neural",
                  service.color === 'quantum' && "text-quantum", 
                  service.color === 'intelligence' && "text-intelligence",
                  service.color === 'sand' && "text-sand"
                )}>
                  {isArabic ? "استكشف هذا النظام" : "Explore This System"}
                </span>
                <ArrowRight size={16} className={cn(
                  service.color === 'neural' && "text-neural",
                  service.color === 'quantum' && "text-quantum", 
                  service.color === 'intelligence' && "text-intelligence",
                  service.color === 'sand' && "text-sand"
                )} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block bg-depth-1/80 border border-neural/20 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-syne font-bold text-xl mb-4 text-neural">
              {isArabic ? "كيف تتماسك هذه الأنظمة؟" : "How do these systems work together?"}
            </h3>
            <p className="font-space text-white/80 mb-6">
              {isArabic 
                ? "شاهد التحول الكامل لعملك من الحالة الحالية إلى نظام تشغيل مدعوم بالذكاء الاصطناعي."
                : "See the complete transformation of your business from current state to AI-powered operating system."}
            </p>
          </motion.div>
          
          <Button 
            onClick={handleShowIntegration}
            className="btn-primary text-base group relative overflow-hidden px-8 py-4"
            size="lg"
          >
            <span className="relative z-10 font-medium">
              {isArabic ? "→ اعرض التحول الكامل" : "→ Show me the complete transformation"}
            </span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default ModularServicesSection;
