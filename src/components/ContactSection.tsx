
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import GlitchText from './GlitchText';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <section 
      id="contact" 
      className={cn(
        "py-24 px-6 bg-ai8ty-black",
        isArabic ? "rtl" : ""
      )}
    >
      <div 
        ref={ref}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className={cn(
          "heading text-4xl md:text-5xl lg:text-6xl mb-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {isArabic 
            ? "ليس مجرد علامتك التجارية."
            : "It's not just your brand."}
          <br />
          <span className="text-sand">
            {isArabic 
              ? "إنها واجهتك مع المستقبل."
              : "It's your interface with the future."}
          </span>
        </h2>
        
        <p className={cn(
          "subheading text-xl mb-12 transition-all duration-700 delay-100",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {isArabic 
            ? "وهي مهمة جدًا لتركها للضوضاء."
            : "And it's too important to leave to noise."}
        </p>
        
        {/* Enhanced contact options */}
        <div className={cn(
          "space-y-8 mb-12 transition-all duration-700 delay-200",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div 
            className="relative inline-flex items-center text-lg md:text-xl font-space bg-depth-2 rounded-xl p-6 border border-white/10 hover:border-sand/30 transition-all group cursor-pointer"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <Mail className="text-sand mr-4" size={24} />
            <div className="text-left">
              <p className="text-white mb-1">
                {isArabic 
                  ? "دعنا نرى ما يمكن أن تبنيه AI8TY حولك — أسقط لنا رسالة حيث يكون المستقبل في"
                  : "Let's see what AI8TY could build around you — drop us a line where the future is at"}
              </p>
              <a 
                href="mailto:futureis@ai8ty.com" 
                className="relative z-10 transition-colors duration-300 text-sand hover:text-sand/80"
              >
                {emailHovered ? (
                  <GlitchText text="futureis@ai8ty.com" glitchIntensity={30} />
                ) : (
                  "futureis@ai8ty.com"
                )}
              </a>
            </div>
          </div>
          
          <div 
            className="relative inline-flex items-center text-lg md:text-xl font-space bg-depth-2 rounded-xl p-6 border border-white/10 hover:border-sand/30 transition-all group cursor-pointer"
            onMouseEnter={() => setPhoneHovered(true)}
            onMouseLeave={() => setPhoneHovered(false)}
          >
            <Phone className="text-sand mr-4" size={24} />
            <div className="text-left">
              <p className="text-white mb-1">
                {isArabic 
                  ? "يبدأ نظامك عند"
                  : "Your system begins at"}
              </p>
              <a 
                href="tel:+971509229009" 
                className="relative z-10 transition-colors duration-300 text-sand hover:text-sand/80"
              >
                {phoneHovered ? (
                  <GlitchText text="+971 50 922 9009" glitchIntensity={30} />
                ) : (
                  "+971 50 922 9009"
                )}
              </a>
              <p className="text-white mt-1">
                {isArabic 
                  ? "— سنأخذ الأمر من هناك."
                  : "— we'll take it from there."}
              </p>
            </div>
          </div>
        </div>
        
        <p className={cn(
          "subheading mb-12 text-lg transition-all duration-700 delay-300",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {isArabic 
            ? "لا نماذج إذا كنت لا تريدها. فقط أنظمة ووضوح ورسالة إلى المستقبل."
            : "No forms if you don't want them. Just systems, clarity, and a message to the future."}
        </p>
        
        <div className={cn(
          "flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button 
            className="btn-secondary flex items-center text-base"
            size="lg"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            {isArabic ? "تحدث مع AI8TY" : "Talk to AI8TY"}
          </Button>
          
          <Button 
            variant="outline"
            className="border-sand text-sand hover:bg-sand hover:text-ai8ty-black text-base"
            size="lg"
          >
            {isArabic ? "شاهد النموذج الأولي" : "Access the Prototype"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
