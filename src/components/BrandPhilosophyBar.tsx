
import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface BrandPhilosophyBarProps {
  className?: string;
}

const BrandPhilosophyBar: React.FC<BrandPhilosophyBarProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Slow down the scroll effect for better visibility
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const { language } = useLanguage();
  
  const philosophies = {
    en: [
      "We engineer leverage. Not deliverables.",
      "Growth is a system. Not a service.",
      "Design. Intelligence. Scale.",
      "The business of tomorrow is built today.",
      "Simplify. Unify. Amplify."
    ],
    ar: [
      "نهندس القوة. لا مجرد تسليمات.",
      "النمو هو نظام. وليس خدمة.",
      "تصميم. ذكاء. مقياس.",
      "أعمال الغد تُبنى اليوم.",
      "تبسيط. توحيد. تضخيم."
    ],
    fr: [
      "Nous concevons le levier. Pas des livrables.",
      "La croissance est un système. Pas un service.",
      "Design. Intelligence. Échelle.",
      "L'entreprise de demain se construit aujourd'hui.",
      "Simplifier. Unifier. Amplifier."
    ]
  };
  
  const currentPhilosophies = philosophies[language as keyof typeof philosophies] || philosophies.en;
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative py-6 bg-depth-2 border-y border-white/10 overflow-hidden",
        className
      )}
    >
      <motion.div 
        className="flex items-center whitespace-nowrap"
        style={{ x }}
      >
        {/* Double the content for infinite scroll effect */}
        {[...currentPhilosophies, ...currentPhilosophies].map((philosophy, index) => (
          <div 
            key={index}
            className="mx-12 text-xl md:text-2xl font-syne text-sand inline-flex items-center"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-default"
            >
              {philosophy}
            </motion.span>
            <span className="mx-6 h-1 w-1 bg-sand rounded-full opacity-50"></span>
          </div>
        ))}
      </motion.div>
      
      {/* Mobile-optimized overlay gradients to show scroll continuation */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-depth-2 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-depth-2 to-transparent"></div>
      
      {/* ScreenReader info */}
      <span className="sr-only">
        {currentPhilosophies.join('. ')}
      </span>
    </div>
  );
};

export default BrandPhilosophyBar;
