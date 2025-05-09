
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/i18n';

interface Service {
  id: string;
  title: string;
  seoTitle: string;
  description: string;
  outcome: string;
  imageUrl: string;
  mockupUrl?: string;
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    seoTitle: 'Digital Marketing Services in Dubai & UAE',
    description: 'Results-focused digital marketing strategies tailored for the UAE market. Full-funnel approach from awareness to retention.',
    outcome: 'Generate predictable leads and measurable revenue growth while optimizing your CAC for regional markets.',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    seoTitle: 'Website & Landing Page Design (Webflow / Notion)',
    description: 'Premium website and landing page design using Webflow and Notion integration for seamless content management.',
    outcome: 'Convert more visitors with high-performance sites that load faster, look better, and drive more action than your competitors.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crm-automation',
    title: 'CRM & System Automation',
    seoTitle: 'CRM Automation, AI Chatbots & Internal Systems',
    description: 'End-to-end workflow automation that eliminates manual touchpoints and reduces operational friction for UAE businesses.',
    outcome: 'Reduce operational costs by up to 40% while scaling capacity without adding headcount. Make data-driven decisions with real-time insights.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bilingual-content',
    title: 'Arabic-English Content',
    seoTitle: 'Arabic-English Content & Branding',
    description: 'Native Arabic-English content creation and branding services for UAE businesses targeting regional and international audiences.',
    outcome: 'Connect authentically with both local and global audiences through culturally-relevant branding that resonates across languages.',
    imageUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-strategy',
    title: 'AI Implementation',
    seoTitle: 'AI Strategy & Implementation for UAE Businesses',
    description: 'Strategic implementation of AI tools and workflows to enhance your business capabilities and competitive advantage.',
    outcome: 'Leverage artificial intelligence to automate repetitive tasks, gain predictive insights, and unlock new growth opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Design',
    seoTitle: 'Customer Experience Design for UAE Enterprises',
    description: 'End-to-end customer journey optimization from acquisition to advocacy, designed for UAE market preferences.',
    outcome: 'Create frictionless customer experiences that increase satisfaction, loyalty and lifetime value while reducing support costs.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    mockupUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
  }
];

const ServiceExplorer: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [activeService, setActiveService] = useState<string | null>(null);
  const { language } = useLanguage();
  
  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="service-explorer" ref={ref} className="py-24 px-6 bg-depth-1">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {language === 'ar' ? "نظام خدمات متكامل" : "The AI8TY Operating System"}
          </motion.h2>
          <motion.p 
            className="subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === 'ar' 
              ? "اكتشف كيف تعمل خدماتنا المتكاملة على تحويل الأعمال الإماراتية إلى أنظمة نمو موحدة" 
              : "Discover our integrated platform of services that transform UAE businesses into unified growth systems"}
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={cn(
                "platform-card group cursor-pointer overflow-hidden",
                activeService === service.id ? "col-span-1 md:col-span-2 lg:col-span-3 h-auto" : "h-64"
              )}
              variants={item}
              onClick={() => handleServiceClick(service.id)}
              transition={{ duration: 0.4 }}
              layout
            >
              {activeService === service.id ? (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-syne text-ai8ty-white">{service.title}</h3>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setActiveService(null);
                        }}
                        className="p-2 rounded-full bg-depth-3 hover:bg-depth-2 transition-colors"
                        aria-label="Close service details"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <p className="text-sand text-sm">{service.seoTitle}</p>
                    <p className="text-ai8ty-grey">{service.description}</p>
                    
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm uppercase tracking-wider text-ai8ty-grey mb-2">Business Outcome</h4>
                      <p className="text-ai8ty-white">{service.outcome}</p>
                    </div>
                    
                    <button className="btn btn-secondary mt-4 inline-flex items-center gap-2">
                      <span>See how we do it</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
                      <img 
                        src={service.mockupUrl || service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full relative flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent" />
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl font-syne text-ai8ty-white mb-2 group-hover:text-sand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ai8ty-grey text-sm opacity-80 line-clamp-2 group-hover:text-ai8ty-white transition-colors">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex justify-end mt-4">
                    <ChevronRight 
                      size={20} 
                      className="text-ai8ty-grey group-hover:text-sand transform group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceExplorer;
