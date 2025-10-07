import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ThreeBackground } from './ThreeBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const TerminalHero: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    en: {
      prefix: '> Initializing AI Transformation Protocol...',
      headline: 'Transform Your Enterprise\nWith Intelligent AI Solutions',
      subheadline: 'Gulf-Focused | Data-Driven | Results-Oriented',
      description: 'We architect custom AI systems that amplify your competitive advantage. Founded by Awwab Abdul, AI specialist with deep Gulf market expertise.',
      cta1: 'Start Transformation',
      cta2: 'Explore Capabilities',
      status: '[ SYSTEM READY ]'
    },
    ar: {
      prefix: '> جاري تهيئة بروتوكول التحول بالذكاء الاصطناعي...',
      headline: 'حوّل مؤسستك\nبحلول ذكاء اصطناعي متقدمة',
      subheadline: 'متخصصون في الخليج | مدعوم بالبيانات | موجه نحو النتائج',
      description: 'نصمم أنظمة ذكاء اصطناعي مخصصة تعزز ميزتك التنافسية. تأسست بواسطة عواب عبد، متخصص الذكاء الاصطناعي ذو خبرة عميقة في سوق الخليج.',
      cta1: 'ابدأ التحول',
      cta2: 'استكشف الإمكانيات',
      status: '[ النظام جاهز ]'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Three.js Background */}
      <ThreeBackground variant="combined" particleVariant="cyber" />
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Scanning Line */}
      <div className="absolute inset-0 scan-line" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-8">
          {/* Terminal Prefix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="terminal-prompt text-sm md:text-base"
          >
            {t.prefix}
          </motion.div>

          {/* Main Headline with Terminal Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-display-large font-bold whitespace-pre-line">
              <TypeAnimation
                sequence={[
                  500,
                  t.headline,
                ]}
                wrapper="span"
                speed={50}
                className="text-cyber bg-clip-text"
                cursor={false}
              />
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-title-large text-neural font-mono"
          >
            {t.subheadline}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-body-large max-w-3xl"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <button
              onClick={() => navigate('/contact')}
              className="group relative px-8 py-4 bg-cyber-blue text-background font-mono font-bold rounded-lg overflow-hidden hover-depth transition-all duration-300"
            >
              <span className="relative z-10">{t.cta1}</span>
              <div className="absolute inset-0 bg-neural-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-mono font-bold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300 cyber-glow"
            >
              {t.cta2}
            </button>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-3 terminal-text text-sm">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-glow" />
              {t.status}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyber-blue opacity-50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neural-purple opacity-50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyber-green opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyber-blue opacity-50" />
    </section>
  );
};
