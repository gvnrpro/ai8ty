import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const TerminalHero: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    en: {
      headline: 'Transform Your Enterprise With Intelligent AI',
      subheadline: 'Custom AI solutions that deliver measurable results for Gulf businesses',
      description: 'We architect enterprise AI systems that amplify your competitive advantage. Founded by Awwab Abdul, AI specialist with deep Gulf market expertise.',
      cta1: 'Get Started',
      cta2: 'Explore Solutions'
    },
    ar: {
      headline: 'حوّل مؤسستك بالذكاء الاصطناعي المتقدم',
      subheadline: 'حلول ذكاء اصطناعي مخصصة تقدم نتائج قابلة للقياس لأعمال الخليج',
      description: 'نصمم أنظمة ذكاء اصطناعي مؤسسية تعزز ميزتك التنافسية. تأسست بواسطة عواب عبد، متخصص الذكاء الاصطناعي ذو خبرة عميقة في سوق الخليج.',
      cta1: 'ابدأ الآن',
      cta2: 'استكشف الحلول'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight px-2"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light px-4"
          >
            {t.subheadline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto px-4"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8 px-4"
          >
            <button
              onClick={() => navigate('/contact')}
              className="group px-6 md:px-8 py-3 md:py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <span>{t.cta1}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => navigate('/services')}
              className="px-6 md:px-8 py-3 md:py-4 border border-border text-foreground rounded-full font-medium hover:bg-muted/50 transition-all duration-300 text-sm md:text-base"
            >
              {t.cta2}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
