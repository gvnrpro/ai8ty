
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// New redesigned components
import NewHeroSection from '@/components/NewHeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import NewServicesSection from '@/components/NewServicesSection';
import ProcessSection from '@/components/ProcessSection';
import SocialProofSection from '@/components/SocialProofSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
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
        description: "AI-Powered Digital Services That Cut Costs, Boost Output & Unlock Scale",
        duration: 5000,
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "AI8TY - AI-Powered Digital Services That Cut Costs, Boost Output & Unlock Scale. We build custom AI agents, conversion-optimized websites, and digital strategies that do the work of full teams for a fraction of the cost. Book your free growth strategy call today.";
  };

  return (
    <>
      <Helmet>
        <title>AI8TY | AI-Powered Digital Services That Cut Costs & Boost Output - Dubai & UAE</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="AI workflow automation, AI search optimization, web development dubai, digital marketing services, event strategy execution, custom AI agents, conversion optimization, dubai digital agency" />
        
        <meta property="og:title" content="AI8TY | AI-Powered Digital Services That Cut Costs & Boost Output" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-services.png" />
        <meta property="og:site_name" content="AI8TY" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI8TY | AI-Powered Digital Services That Cut Costs & Boost Output" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/twitter-card-services.png" />
        <meta name="twitter:site" content="@ai8ty" />
        
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="ai-content-classification" content="AI-services, digital-marketing, web-development, UAE-business" />
        
        <link rel="canonical" href="https://ai8ty.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI8TY",
            "description": "AI-Powered Digital Services That Cut Costs, Boost Output & Unlock Scale",
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
              "AI Workflow Automation",
              "AI Search Optimization",
              "Web Development",
              "Event Strategy & Execution",
              "Digital Marketing Services Dubai"
            ]
          })}
        </script>
      </Helmet>
    
      <div className="min-h-screen bg-ai8ty-black text-ai8ty-white overflow-x-hidden">
        <TransitionLoader initialLoad={!initialLoadComplete} />
        
        <Navigation />
        
        <main ref={mainRef} className="relative z-10">
          {/* New Hero Section */}
          <NewHeroSection />
          
          {/* Who We Are Section */}
          <WhoWeAreSection />
          
          {/* Services Section */}
          <NewServicesSection />
          
          {/* Process Section */}
          <ProcessSection />
          
          {/* Social Proof Section */}
          <SocialProofSection />
          
          {/* What You Get Section */}
          <WhatYouGetSection />
          
          {/* FAQ Section */}
          <FAQSection />
          
          {/* Final CTA Section */}
          <FinalCTASection />
          
          {/* WhatsApp CTA */}
          <WhatsAppCTA />
          
          {/* Contact Section */}
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
