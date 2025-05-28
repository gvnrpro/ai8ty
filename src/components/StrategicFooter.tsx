
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Twitter, Linkedin, Instagram, Github, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StrategicFooter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';
  
  const serviceLinks = [
    { 
      label: isArabic ? "خدمات التسويق الرقمي في دبي والإمارات" : "Digital Marketing Services Dubai & UAE", 
      href: "#modular-services-section" 
    },
    { 
      label: isArabic ? "تصميم المواقع والصفحات المقصودة (Webflow / Notion)" : "Website & Landing Page Design (Webflow / Notion)", 
      href: "#modular-services-section" 
    },
    { 
      label: isArabic ? "أتمتة إدارة علاقات العملاء، روبوتات الدردشة المدعومة بالذكاء الاصطناعي والأنظمة الداخلية" : "CRM Automation, AI Chatbots & Internal Systems", 
      href: "#modular-services-section" 
    },
    { 
      label: isArabic ? "المحتوى العربي-الإنجليزي والعلامة التجارية" : "Arabic-English Content & Branding", 
      href: "#modular-services-section" 
    },
  ];
  
  const quickLinks = [
    { label: isArabic ? "الخدمات" : "Services", href: "#modular-services-section" },
    { label: isArabic ? "الأعمال" : "Work", href: "#work-section" },
    { label: isArabic ? "عن الشركة" : "About", href: "#about-section" },
    { label: isArabic ? "اتصل بنا" : "Contact", href: "#contact" },
  ];
  
  const legal = [
    { label: isArabic ? "سياسة الخصوصية" : "Privacy Policy", href: "#" },
    { label: isArabic ? "الشروط والأحكام" : "Terms", href: "#" },
  ];
  
  const socials = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];

  const languages = [
    { code: 'en' as const, label: 'English' },
    { code: 'ar' as const, label: 'العربية' }
  ];
  
  return (
    <footer 
      ref={ref} 
      className={cn(
        "py-16 px-6 bg-depth-2 border-t border-ai8ty-grey/10 relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 tech-dots-bg opacity-3"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className={cn(
            "lg:col-span-2 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-10 w-auto mb-6"
            />
            
            <p className="subheading text-lg mb-6 max-w-md">
              {isArabic 
                ? "نحن نهندس الاستفادة القصوى. ليس مجرد تسليمات. AI8TY هي منصة تحول الأعمال للعلامات التجارية ذات الرؤية في الإمارات وخارجها."
                : "We engineer leverage. Not deliverables. AI8TY is the business transformation platform for visionary brands in the UAE and beyond."}
            </p>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-4 mb-6">
              <Globe size={18} className="text-sand" />
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "px-3 py-1 rounded-md text-sm transition-colors",
                      language === lang.code 
                        ? "bg-sand text-ai8ty-black" 
                        : "text-ai8ty-grey hover:text-sand"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* P.S. Line for recency effect */}
            <div className="bg-depth-1 border border-white/5 rounded-lg p-4 mt-8">
              <p className="text-sm text-sand">
                <strong>P.S.</strong> {isArabic 
                  ? "أنت حر دائمًا في التصفح أو الحفظ أو العودة لاحقًا — لكن النظام جاهز عندما تكون أنت كذلك."
                  : "You're free to scroll, save, or come back later — but the system's ready when you are."}
              </p>
            </div>
          </div>
          
          {/* Services Section */}
          <div className={cn(
            "transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <h3 className="heading text-lg mb-6">{isArabic ? "الخدمات" : "Services"}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-ai8ty-grey hover:text-sand transition-colors leading-relaxed block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <h3 className="heading text-lg mb-6">{isArabic ? "تواصل معنا" : "Connect"}</h3>
            
            <ul className="space-y-3 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-ai8ty-grey hover:text-sand transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-4 mb-6">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-ai8ty-grey hover:text-sand transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="space-y-2 text-sm text-ai8ty-grey">
              <div className="hover:text-sand transition-colors">
                <a href="mailto:futureis@ai8ty.com">futureis@ai8ty.com</a>
              </div>
              <div className="hover:text-sand transition-colors">
                <a href="tel:+971509229009">+971 50 922 9009</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={cn(
          "pt-8 border-t border-ai8ty-grey/10 flex flex-col md:flex-row items-center justify-between text-sm text-ai8ty-grey transition-all duration-700 delay-300",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <div className="mb-4 md:mb-0">
            {isArabic 
              ? "© 2025 AI8TY. نظام تشغيل تحول الأعمال."
              : "© 2025 AI8TY. Business Transformation OS."}
          </div>
          
          <div className="flex space-x-6">
            {legal.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="hover:text-sand transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <div className={cn(
          "text-center mt-12 p-6 bg-depth-1 rounded-xl border border-white/5 transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="subheading text-base mb-3">
            {isArabic 
              ? "شاهد ما يمكن أن تبنيه AI8TY فعلًا لعملك"
              : "See what AI8TY would actually build for your business"}
          </p>
          <a 
            href="#contact" 
            className="text-sand hover:text-sand/80 transition-colors text-sm font-medium"
          >
            {isArabic ? "→ ابدأ المحادثة" : "→ Start the conversation"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default StrategicFooter;
