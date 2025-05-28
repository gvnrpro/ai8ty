
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Keep only the new streamlined components
import IntelligenceShiftSection from '@/components/IntelligenceShiftSection';
import ModularServicesSection from '@/components/ModularServicesSection';
import BuilderTrustSection from '@/components/BuilderTrustSection';
import BusinessTransformationModule from '@/components/BusinessTransformationModule';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import BrandPhilosophyBar from '@/components/BrandPhilosophyBar';
import StrategicFooter from '@/components/StrategicFooter';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Skip splash screen - go directly to main content
    setInitialLoadComplete(true);
    
    // Optimize scroll animations for mobile with faster timing
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
    
    // Welcome toast for direct landing
    setTimeout(() => {
      toast({
        title: language === 'en' ? "Welcome to AI8TY" : 
               language === 'ar' ? "مرحبًا بك في AI8TY" : 
               "Bienvenue chez AI8TY",
        description: language === 'en' ? "Engineer your business for the Intelligence Age. Your AI-powered transformation begins here." :
                     language === 'ar' ? "هندس أعمالك لعصر الذكاء. يبدأ تحولك المدعوم بالذكاء الاصطناعي هنا." :
                     "Concevez votre entreprise pour l'ère de l'intelligence. Votre transformation alimentée par l'IA commence ici.",
        duration: 5000,
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [language, toast]);

  // Enhanced SEO description for intelligence-first positioning
  const getSeoDescription = () => {
    if (language === 'ar') {
      return "AI8TY - هندس أعمالك لعصر الذكاء الاصطناعي. نساعد العلامات التجارية في الإمارات على التطور لعالم مدعوم بالذكاء الاصطناعي من خلال أنظمة التصميم القابلة للتطوير، والرؤية التوليدية للبحث، والوضوح التشغيلي.";
    }
    return "AI8TY - Engineer your business for the Intelligence Age. We help UAE brands evolve for an AI-shaped world through scalable design systems, generative search visibility, and operational clarity. Digital Marketing Services Dubai, Website Design UAE, CRM Automation, AI Chatbots, Arabic-English Content.";
  };

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? "AI8TY | هندس أعمالك لعصر الذكاء - دبي والإمارات" 
            : "AI8TY | Engineer Your Business for the Intelligence Age - Dubai & UAE"}
        </title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="AI transformation dubai uae, business intelligence systems, digital marketing services dubai, website design webflow notion, CRM automation ai chatbots, arabic english content branding, generative AI optimization, business transformation dubai, AI-powered growth systems, scalable design systems dubai" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content={language === 'ar' ? "AI8TY | هندس أعمالك لعصر الذكاء" : "AI8TY | Engineer Your Business for the Intelligence Age"} />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-intelligence.png" />
        <meta property="og:site_name" content="AI8TY" />

        {/* Enhanced Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ar' ? "AI8TY | هندس أعمالك لعصر الذكاء" : "AI8TY | Engineer Your Business for the Intelligence Age"} />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/twitter-card-intelligence.png" />
        <meta name="twitter:site" content="@ai8ty" />
        
        {/* Enhanced region-specific and AI indexing metadata */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* AI/LLM indexing optimization */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="ai-content-classification" content="business-services, design-systems, AI-optimization, UAE-market" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ai8ty.com" />
        
        {/* Enhanced structured data for better AI discovery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI8TY",
            "description": "Engineer your business for the Intelligence Age - Business transformation through AI-powered systems",
            "url": "https://ai8ty.com",
            "logo": "https://ai8ty.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-50-922-9009",
              "contactType": "sales",
              "email": "futureis@ai8ty.com",
              "areaServed": "AE",
              "availableLanguage": ["en", "ar"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai"
            },
            "sameAs": [
              "https://linkedin.com/company/ai8ty",
              "https://twitter.com/ai8ty"
            ],
            "service": [
              "AI Transformation Dubai UAE",
              "Business Intelligence Systems",
              "Website Landing Page Design Webflow Notion",
              "CRM Automation AI Chatbots Internal Systems",
              "Arabic English Content Branding"
            ]
          })}
        </script>
      </Helmet>
    
      <div className="min-h-screen bg-ai8ty-black text-ai8ty-white overflow-x-hidden">
        <TransitionLoader initialLoad={!initialLoadComplete} />
        
        <Navigation />
        
        <main ref={mainRef} className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Brand Philosophy Bar */}
          <BrandPhilosophyBar />
          
          {/* Intelligence Shift Section */}
          <IntelligenceShiftSection />
          
          {/* Operating System Before/After Comparison */}
          <BusinessTransformationModule />
          
          {/* New Modular Services Section */}
          <ModularServicesSection />
          
          {/* Builder Trust Section */}
          <BuilderTrustSection />
          
          {/* WhatsApp CTA */}
          <WhatsAppCTA />
          
          {/* Final Contact Section */}
          <ContactSection />
        </main>
        
        {/* Strategic Footer */}
        <StrategicFooter />
        
        {/* AI Readiness Quiz Widget */}
        <AIReadinessQuiz />
      </div>
    </>
  );
};

export default Index;
