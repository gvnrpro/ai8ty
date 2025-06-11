import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Mail, ArrowRight, Zap } from 'lucide-react';
import GlitchText from './GlitchText';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  return (
    <section 
      id="contact" 
      className={cn(
        "neural-section relative overflow-hidden min-h-[60vh] flex flex-col justify-center items-center py-24 px-6",
        isArabic ? "rtl" : ""
      )}
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai8ty-black via-depth-1 to-ai8ty-black"></div>
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      <div className="container mx-auto max-w-3xl text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            Let’s Make Something Unforgettable
          </h2>
          <p className="text-xl md:text-2xl font-space text-white/80 mb-10">
            Tell us about your brand, project, or idea. We’ll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-4 font-bold flex items-center gap-3 shadow-lg"
              onClick={() => window.open('mailto:hello@ai8ty.com', '_blank')}
            >
              Email Us <Mail size={20} />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-4 font-bold flex items-center gap-3"
              onClick={() => window.open('https://cal.com/ai8ty', '_blank')}
            >
              Book a Call <Phone size={20} />
            </Button>
          </div>
          <div className="text-white/60 text-base font-space">
            Or DM us on <a href="https://instagram.com/ai8ty" className="underline hover:text-neural transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
