
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronRight, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/i18n';
import BrandAnimation from './BrandAnimation';

const services = [
  { name: "Business Process Automation", link: "#" },
  { name: "CRM & Sales Integration", link: "#" },
  { name: "Analytics & Reporting", link: "#" },
  { name: "Digital Transformation", link: "#" },
  { name: "AI Implementation", link: "#" },
  { name: "Customer Experience Design", link: "#" }
];

const servicesAr = [
  { name: "أتمتة العمليات التجارية", link: "#" },
  { name: "تكامل إدارة علاقات العملاء والمبيعات", link: "#" },
  { name: "التحليلات وإعداد التقارير", link: "#" },
  { name: "التحول الرقمي", link: "#" },
  { name: "تنفيذ الذكاء الاصطناعي", link: "#" },
  { name: "تصميم تجربة العملاء", link: "#" }
];

const StrategicFooter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { language, setLanguage, isRTL } = useLanguage();
  
  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <footer ref={ref} className={cn("py-16 bg-depth-1", isRTL ? "rtl" : "")}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-white/10 pb-12 mb-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <BrandAnimation size="sm" loop={true} />
              <div className="font-syne text-2xl text-ai8ty-white">AI8TY</div>
            </div>
            
            <p className="text-ai8ty-grey mb-6">
              {t('footer.tagline', language)}
            </p>
            
            <div className="p-4 bg-depth-2 rounded-lg border border-white/5">
              <p className="text-sand font-syne">
                {isRTL ? ".P.S" : "P.S."}
              </p>
              <p className="text-ai8ty-white mb-4">
                {t('footer.ps', language)}
              </p>
              <a 
                href="#prototype-generator" 
                className="inline-flex items-center text-sand gap-1 group"
              >
                {t('footer.cta', language)}
                <ChevronRight 
                  size={16} 
                  className={cn(
                    "transform transition-transform duration-300",
                    isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  )} 
                />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="font-syne text-ai8ty-white mb-4">
                {t('footer.services', language)}
              </h3>
              <ul className="space-y-3">
                {(isRTL ? servicesAr : services).slice(0, 3).map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.link}
                      className="text-ai8ty-grey hover:text-sand transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-syne text-ai8ty-white mb-4">
                {isRTL ? "" : ""}
              </h3>
              <ul className="space-y-3">
                {(isRTL ? servicesAr : services).slice(3).map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.link}
                      className="text-ai8ty-grey hover:text-sand transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-syne text-ai8ty-white mb-4">
                {t('footer.connect', language)}
              </h3>
              
              <div className="space-y-3">
                <a 
                  href="mailto:futureis@ai8ty.com"
                  className="text-ai8ty-grey hover:text-sand transition-colors block"
                >
                  futureis@ai8ty.com
                </a>
                
                <a 
                  href="tel:+97100000000"
                  className="text-ai8ty-grey hover:text-sand transition-colors block"
                >
                  +971 00 000 0000
                </a>
                
                <button 
                  onClick={handleLanguageToggle}
                  className="flex items-center gap-2 text-ai8ty-grey hover:text-sand transition-colors mt-4"
                >
                  <Languages size={16} />
                  {isRTL ? "English" : "العربية"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-ai8ty-grey text-sm">
              © 2025 AI8TY. {t('footer.rights', language)}
            </p>
          </motion.div>
          
          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#"
              className="text-ai8ty-grey text-sm hover:text-sand transition-colors"
            >
              {t('footer.privacy', language)}
            </a>
            <a 
              href="#"
              className="text-ai8ty-grey text-sm hover:text-sand transition-colors"
            >
              {t('footer.terms', language)}
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default StrategicFooter;
