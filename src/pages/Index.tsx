import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced components
import EnhancedHeroSection from '@/components/enhanced/EnhancedHeroSection';
import EnhancedServicesSection from '@/components/enhanced/EnhancedServicesSection';
import MobileCTASticky from '@/components/enhanced/MobileCTASticky';

// Existing components
import ProblemSection from '@/components/ProblemSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import SocialProofSection from '@/components/SocialProofSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import StrategicFooter from '@/components/StrategicFooter';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setInitialLoadComplete(true);
    
    const optimizeAnimations = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        document.documentElement.style.setProperty('--motion-fast', '0.15s');
        document.documentElement.style.setProperty('--motion-medium', '0.25s');
        document.documentElement.style.setProperty('--motion-slow', '0.4s');
      } else {
        document.documentElement.style.setProperty('--motion-fast', '0.3s');
        document.documentElement.style.setProperty('--motion-medium', '0.6s');
        document.documentElement.style.setProperty('--motion-slow', '0.9s');
      }
    };
    
    optimizeAnimations();
    window.addEventListener('resize', optimizeAnimations);
    
    setTimeout(() => {
      toast({
        title: "Welcome to AI8TY",
        description: "Smart solutions that work for you, handled by experts.",
        duration: 5000,
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "Stop wasting time on tasks that should be automated. AI8TY provides smart marketing systems, AI automation, and high-performance websites that work for you. Get your time back and grow smarter with solutions that actually deliver results.";
  };

  return (
    <>
      <Helmet>
        <title>AI8TY | You're Wasting Time. We'll Fix That. - Smart Business Solutions Dubai</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="business automation dubai, smart marketing systems, AI workflow automation, time-saving business solutions, digital marketing UAE, website development, business growth services" />
        
        <meta property="og:title" content="AI8TY | You're Wasting Time. We'll Fix That." />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-services.png" />
        <meta property="og:site_name" content="AI8TY" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI8TY | You're Wasting Time. We'll Fix That." />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-services.png" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI8TY",
            "description": getSeoDescription(),
            "url": "https://ai8ty.com",
            "logo": "https://ai8ty.com/logo.png",
            "sameAs": [
              "https://linkedin.com/company/ai8ty",
              "https://twitter.com/ai8ty"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressLocality": "Dubai"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 25.2048,
                "longitude": 55.2708
              },
              "geoRadius": "1000"
            }
          })}
        </script>
      </Helmet>

      <div ref={mainRef} className="min-h-screen bg-ai8ty-black">
        <TransitionLoader />
        <Navigation />
        
        <main className="relative">
          <EnhancedHeroSection />
          <ProblemSection />
          <HowWeHelpSection />
          <BeforeAfterSection />
          <EnhancedServicesSection />
          <SocialProofSection />
          <ProcessSection />
          <FAQSection />
          <FinalCTASection />
          
          <ContactSection />
          
          <AIReadinessQuiz />
          <WhatsAppCTA />
          <MobileCTASticky />
        </main>
        
        <StrategicFooter />
      </div>
    </>
  );
};

export default Index;
