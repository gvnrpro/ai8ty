
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Palette, Zap, Settings, Rocket } from 'lucide-react';

const ModularServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      subtitle: isArabic ? "خدمات التسويق الرقمي في دبي والإمارات" : "Digital Marketing Services in Dubai & UAE",
      description: isArabic 
        ? "ساعد علامتك التجارية على الظهور في عالم يعتمد على الذكاء الاصطناعي أولاً. نحن نحسن هيكلك ولغتك للاكتشاف داخل نماذج اللغة الكبيرة، والبحث المعزز بالذكاء الاصطناعي، والواجهات متعددة الوسائط."
        : "Help your brand show up in an AI-first world. We optimize your structure and language for discoverability inside LLMs, AI-enhanced search, and multi-modal interfaces.",
      color: "sand"
    },
    {
      icon: Palette,
      title: isArabic ? "أنظمة الهوية" : "Identity Systems",
      subtitle: isArabic ? "تصميم المواقع والصفحات المقصودة (Webflow / Notion)" : "Website & Landing Page Design (Webflow / Notion)",
      description: isArabic 
        ? "وضوح قابل للتوسيع. نحن نبني علامات تجارية قابلة للتكيف وجاهزة للذكاء الاصطناعي—الرسائل والتسمية والشعار ومجموعات التصميم—التي تعمل عبر الأدوات والفرق والتقنيات."
        : "Clarity that scales. We build adaptable, AI-ready brands—messaging, naming, logo, design kits—that function across tools, teams, and tech.",
      color: "violet"
    },
    {
      icon: Zap,
      title: isArabic ? "تصميم التجربة" : "Experience Design",
      subtitle: isArabic ? "تجارب رقمية تفاعلية ومتجاوبة" : "Cinematic, Interactive & Responsive Experiences",
      description: isArabic 
        ? "سينمائي وتفاعلي ومتجاوب. نحن نصمم واجهات أمامية تبدو حية: مواقع وتطبيقات وتجارب رقمية مبنية للسرعة والوضوح والذاكرة."
        : "Cinematic, interactive, and responsive. We design frontends that feel alive: sites, apps, and digital experiences built for speed, clarity, and memory.",
      color: "teal"
    },
    {
      icon: Settings,
      title: isArabic ? "أتمتة العمليات" : "Operational Automation",
      subtitle: isArabic ? "أتمتة إدارة علاقات العملاء، روبوتات الدردشة المدعومة بالذكاء الاصطناعي والأنظمة الداخلية" : "CRM Automation, AI Chatbots & Internal Systems",
      description: isArabic 
        ? "افعل أقل. سلم أكثر. سير عمل معززة بالذكاء الاصطناعي، ورحلات العملاء، والأدوات المخصصة التي تجعل مؤسس واحد يشعر وكأنه فريق كامل."
        : "Do less. Deliver more. AI-enhanced workflows, customer journeys, and custom tools that make one founder feel like a full team.",
      color: "grey"
    },
    {
      icon: Rocket,
      title: isArabic ? "استراتيجية الإطلاق" : "Launch Strategy",
      subtitle: isArabic ? "المحتوى العربي-الإنجليزي والعلامة التجارية" : "Arabic-English Content & Branding",
      description: isArabic 
        ? "العمل غير المرئي الذي يجعل الإطلاقات تعمل. نحن نصنع كتيبات الذهاب إلى السوق، والعروض التقديمية، والقنائل، والتموضع الرقمي لمساعدتك على الدخول بثقة والبقاء."
        : "The invisible work that makes launches work. We craft go-to-market playbooks, decks, funnels, and digital positioning to help you enter with confidence and stick.",
      color: "sand"
    }
  ];

  const handleShowIntegration = () => {
    const prototypeSection = document.getElementById('prototype-generator');
    if (prototypeSection) {
      prototypeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="modular-services-section"
      ref={ref}
      className={cn(
        "py-24 px-6 bg-ai8ty-black relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Background neural pattern */}
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
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
              ? "أساس أذكى للعلامات التجارية الحديثة"
              : "A smarter foundation for modern brands."}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <motion.p 
              className="subheading text-xl"
              variants={itemVariants}
            >
              {isArabic 
                ? "نحن نبني أنظمة—وليس مجرد مواقع ويب."
                : "We build systems—not just websites."}
            </motion.p>
            <motion.p 
              className="subheading text-xl"
              variants={itemVariants}
            >
              {isArabic 
                ? "إشارات—وليس مجرد محتوى."
                : "Signals—not just content."}
            </motion.p>
            <motion.p 
              className="subheading text-xl"
              variants={itemVariants}
            >
              {isArabic 
                ? "حضور—وليس مجرد ملفات شخصية."
                : "Presence—not just profiles."}
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="interactive-panel p-8 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                  service.color === 'sand' && "bg-sand/20 text-sand",
                  service.color === 'violet' && "bg-ai8ty-violet/20 text-ai8ty-violet",
                  service.color === 'teal' && "bg-ai8ty-teal/20 text-ai8ty-teal",
                  service.color === 'grey' && "bg-white/10 text-white"
                )}>
                  <service.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="heading text-xl mb-2 group-hover:text-sand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sand/80 mb-3 font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="subheading leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover indicator */}
              <motion.div
                className="mt-6 flex items-center gap-2 text-sand opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span className="text-sm font-medium">
                  {isArabic ? "تعرف على المزيد" : "Learn more"}
                </span>
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button 
            onClick={handleShowIntegration}
            className="btn-secondary text-base group relative overflow-hidden"
            size="lg"
          >
            <span className="relative z-10">
              {isArabic ? "→ اعرض لي كيف يتماسك هذا" : "→ Show me how this comes together"}
            </span>
            <ArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-depth-1 to-transparent"></div>
    </section>
  );
};

export default ModularServicesSection;
