
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AI8TYCardHighlight from '@/components/AI8TYCardHighlight';
import WorkShowcase from '@/components/WorkShowcase';
import ClientWall from '@/components/ClientWall';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import FeaturedProjects from '@/components/FeaturedProjects';
import BlogHighlights from '@/components/BlogHighlights';
import MeetTheTeamSection from '@/components/MeetTheTeamSection';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Components
import BusinessTransformationModule from '@/components/BusinessTransformationModule';
import ServiceExplorer from '@/components/ServiceExplorer';
import PrototypeGenerator from '@/components/PrototypeGenerator';
import BilingualTestimonials from '@/components/BilingualTestimonials';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import BrandPhilosophyBar from '@/components/BrandPhilosophyBar';
import StrategicFooter from '@/components/StrategicFooter';

// New sections for intelligence-first design
import IntelligenceShiftSection from '@/components/IntelligenceShiftSection';
import ModularServicesSection from '@/components/ModularServicesSection';
import BuilderTrustSection from '@/components/BuilderTrustSection';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Skip splash screen - go directly to main content
    setInitialLoadComplete(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
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
        description: language === 'en' ? "Design for the Intelligence Age. Your business OS for AI-powered growth." :
                     language === 'ar' ? "التصميم لعصر الذكاء. نظام تشغيل أعمالك للنمو المدعوم بالذكاء الاصطناعي." :
                     "Design pour l'ère de l'intelligence. Votre OS d'entreprise pour une croissance alimentée par l'IA.",
        duration: 5000,
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [language, toast]);

  // Enhanced SEO description for intelligence-first positioning
  const getSeoDescription = () => {
    if (language === 'ar') {
      return "AI8TY - التصميم لعصر الذكاء الاصطناعي. نساعد العلامات التجارية في الإمارات على التطور لعالم مدعوم بالذكاء الاصطناعي من خلال أنظمة التصميم القابلة للتطوير، والرؤية التوليدية للبحث، والوضوح التشغيلي.";
    }
    return "AI8TY - Design for the Intelligence Age. We help UAE brands evolve for an AI-shaped world through scalable design systems, generative search visibility, and operational clarity. Digital Marketing Services Dubai, Website Design UAE, CRM Automation, AI Chatbots, Arabic-English Content.";
  };

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? "AI8TY | التصميم لعصر الذكاء - دبي والإمارات" 
            : "AI8TY | Design for the Intelligence Age - Dubai & UAE"}
        </title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="digital marketing services dubai uae, website design webflow notion, CRM automation ai chatbots internal systems, arabic english content branding, generative AI optimization, business transformation dubai, AI-powered growth systems, scalable design systems dubai" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content={language === 'ar' ? "AI8TY | التصميم لعصر الذكاء" : "AI8TY | Design for the Intelligence Age"} />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-intelligence.png" />
        <meta property="og:site_name" content="AI8TY" />

        {/* Enhanced Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ar' ? "AI8TY | التصميم لعصر الذكاء" : "AI8TY | Design for the Intelligence Age"} />
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
            "description": "Design for the Intelligence Age - Business transformation through AI-powered systems",
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
              "Digital Marketing Services Dubai UAE",
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
          <HeroSection />
          
          {/* Brand Philosophy Bar - After Hero */}
          <BrandPhilosophyBar />
          
          {/* New Intelligence Shift Section */}
          <IntelligenceShiftSection />
          
          <div className="relative">
            {/* Spatial depth marker - creates connection between sections */}
            <div className="absolute left-0 ml-4 md:ml-8 lg:ml-12 h-full w-px bg-gradient-to-b from-transparent via-sand/30 to-transparent opacity-30"></div>
            
            <AboutSection />
            
            {/* Business Transformation Module */}
            <BusinessTransformationModule />
            
            {/* New Modular Services Section with SEO-optimized headings */}
            <ModularServicesSection />
            
            {/* Enhanced Services Explorer */}
            <ServiceExplorer />
            
            <FeaturedProjects />
            <AI8TYCardHighlight />
            
            {/* Enhanced Bilingual Testimonials */}
            <BilingualTestimonials />
            
            {/* New Builder Trust Section */}
            <BuilderTrustSection />
            
            <MeetTheTeamSection />
            <WorkShowcase />
            
            {/* Prototype Generator */}
            <PrototypeGenerator />
            
            <BlogHighlights />
            
            {/* Enhanced WhatsApp CTA with new contact info */}
            <WhatsAppCTA />
            
            <ClientWall />
            <ContactSection />
          </div>
        </main>
        
        {/* Strategic Footer with P.S. line */}
        <StrategicFooter />
      </div>
    </>
  );
};

export default Index;
