
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  // WhatsApp business link
  const whatsappLink = "https://wa.me/971500000000?text=I'm%20interested%20in%20learning%20more%20about%20AI8TY's%20business%20transformation%20services";
  
  return (
    <section 
      ref={ref}
      id="whatsapp-cta"
      className={cn(
        "py-24 px-6 bg-ai8ty-black relative overflow-hidden",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 tech-dots-bg opacity-10"></div>
      
      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-depth-2 rounded-2xl p-8 md:p-12 border border-white/10 shadow-glow-md">
          <div className="text-center mb-8">
            <h2 className="heading text-3xl md:text-4xl mb-4">
              {isArabic 
                ? "ابدأ استشارة AI8TY الآن"
                : "Start Your AI8TY Consultation Now"}
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              {isArabic 
                ? "تواصل معنا مباشرة عبر واتساب للحصول على استشارة سريعة ومخصصة لاحتياجات عملك"
                : "Connect with us directly through WhatsApp for a quick, personalized consultation for your business needs"}
            </p>
          </div>
          
          <div className="flex justify-center">
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#22c55e] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0825 11.9946 0.075C5.4375 0.075 0.0964286 5.415 0.09 11.9725C0.0882143 14.1 0.63 16.1775 1.66071 18.0225L0 24L6.10714 22.3725C7.88571 23.3175 9.92143 23.8125 12 23.8125H12.0054C18.5625 23.8125 23.9036 18.4725 23.91 11.9175C23.9143 8.7525 22.65 5.8325 20.4054 3.5875ZM11.9946 21.8175C10.2054 21.8175 8.45357 21.3375 6.92143 20.43L6.56786 20.2275L2.84357 21.195L3.82714 17.565L3.60214 17.1975C2.61429 15.615 2.08393 13.8225 2.08393 11.9725C2.09036 6.5175 6.54 2.07 11.9946 2.07C14.6411 2.0775 17.1321 3.1275 19.0071 5.0025C20.8821 6.8775 21.9214 9.3675 21.9214 12.015C21.915 17.4675 17.4654 21.8175 11.9946 21.8175Z" fill="white"/>
                <path d="M17.8312 14.4825C17.5455 14.3387 16.0384 13.5975 15.777 13.5038C15.5155 13.41 15.3241 13.365 15.1348 13.6507C14.9455 13.9387 14.3598 14.6288 14.1955 14.82C14.0312 15.0137 13.8691 15.0375 13.5834 14.8912C13.2978 14.745 12.3334 14.43 11.1891 13.4175C10.3034 12.6225 9.70553 11.6475 9.54125 11.3625C9.37696 11.0775 9.52553 10.92 9.66696 10.7775C9.79553 10.65 9.95196 10.4475 10.0934 10.2825C10.2348 10.1175 10.2798 9.9975 10.3741 9.8062C10.467 9.615 10.4241 9.45 10.3527 9.3037C10.2798 9.1575 9.68553 7.65 9.45267 7.08C9.22553 6.525 8.99481 6.6 8.8212 6.6C8.65691 6.5925 8.46553 6.5925 8.27625 6.5925C8.08696 6.5925 7.78125 6.6637 7.51982 6.9487C7.2584 7.2337 6.46696 7.9762 6.46696 9.4812C6.46696 10.9862 7.54338 12.4387 7.6848 12.63C7.8241 12.8212 9.69982 15.645 12.5077 16.9913C13.2277 17.3063 13.7877 17.4938 14.2191 17.6363C14.9327 17.8687 15.5834 17.8375 16.0977 17.7637C16.6691 17.685 17.9034 17.025 18.1362 16.3613C18.3691 15.6975 18.3691 15.1275 18.2962 15.0137C18.2234 14.9 18.0341 14.8262 17.7484 14.685L17.8312 14.4825Z" fill="white"/>
              </svg>
              {isArabic ? "تحدث معنا على واتساب" : "Chat With Us on WhatsApp"}
            </motion.a>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-ai8ty-grey">
              {isArabic ? "سريع. محلي. بدون ضغط." : "Fast. Local. No pressure."}
            </p>
          </div>
        </div>
        
        {/* Subtle ornamental elements */}
        <motion.div 
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-sand/10 opacity-20"
          animate={{ 
            rotate: 360,
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 45, 
            ease: "linear", 
            repeat: Infinity 
          }}
        />
        
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-white/5 opacity-10"
          animate={{ 
            rotate: -360,
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        />
      </motion.div>
    </section>
  );
};

export default WhatsAppCTA;
