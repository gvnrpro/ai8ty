
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppCTA: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const whatsappLink = "https://wa.me/+971xxxxxxxx?text=I'm%20interested%20in%20AI8TY's%20services%20and%20would%20like%20to%20learn%20more.";
  
  return (
    <section 
      ref={ref} 
      className={cn(
        "py-16 px-6 bg-depth-2 border-y border-white/5",
        isArabic ? "rtl" : ""
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-syne mb-4">
              {isArabic 
                ? "ابدأ استشارة AI8TY الآن" 
                : "Start Your AI8TY Consultation Now"}
            </h3>
            <p className="text-ai8ty-grey">
              {isArabic
                ? "سريع. محلي. بدون ضغط. تحدث مع خبير حلول AI8TY عبر WhatsApp."
                : "Fast. Local. No pressure. Chat with an AI8TY solutions expert via WhatsApp."}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#25D366] transform transition-transform duration-300 group-hover:scale-105"></span>
              <span className="relative flex items-center gap-3 text-black font-medium px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                <span className="whitespace-nowrap">
                  {isArabic ? "تواصل عبر واتساب" : "Connect via WhatsApp"}
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
