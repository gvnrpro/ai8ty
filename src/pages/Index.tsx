
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
import ProblemSection from '@/components/ProblemSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import SocialProofSection from '@/components/SocialProofSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import StrategicFooter from '@/components/StrategicFooter';
import MobileCTA from '@/components/MobileCTA';

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
        <meta name="twitter:image" content="https://ai8ty.com/twitter-card-services.png" />
        <meta name="twitter:site" content="@ai8ty" />
        
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="ai-content-classification" content="business-automation, smart-marketing, time-management, UAE-business" />
        
        <link rel="canonical" href="https://ai8ty.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI8TY",
            "description": "Smart business solutions that save time and drive growth",
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
              "Smart Marketing Systems",
              "AI Workflow Automation", 
              "High-Performance Website Development",
              "Brand & Creative Services",
              "Business Process Optimization"
            ]
          })}
        </script>
      </Helmet>
    
      <div className="min-h-screen bg-ai8ty-black text-ai8ty-white overflow-x-hidden">
        <TransitionLoader initialLoad={!initialLoadComplete} />
        
        <Navigation />
        
        <main ref={mainRef} className="relative z-10">
          {/* Hero Section */}
          <NewHeroSection />
          
          {/* Problem Acknowledgement Section */}
          <ProblemSection />
          
          {/* How We Help Section */}
          <HowWeHelpSection />
          
          {/* Before/After Section */}
          <BeforeAfterSection />
          
          {/* Services Overview Section */}
          <ServicesOverviewSection />
          
          {/* Social Proof Section */}
          <SocialProofSection />
          
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
        
        {/* Mobile Sticky CTA */}
        <MobileCTA />
      </div>
    </>
  );
};

export default Index;
