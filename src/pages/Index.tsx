
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import IntroSplashScreen from '@/components/IntroSplashScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AI8TYCardHighlight from '@/components/AI8TYCardHighlight';
import WorkShowcase from '@/components/WorkShowcase';
import ClientWall from '@/components/ClientWall';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';
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
import BrandAnimation from '@/components/BrandAnimation';
import StrategicFooter from '@/components/StrategicFooter';
import BrandPhilosophyBar from '@/components/BrandPhilosophyBar';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setShowSplash(false);
      setInitialLoadComplete(true);
    }
    
    document.body.style.overflow = showSplash ? 'hidden' : 'auto';
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Optimize scroll animations for mobile
    const optimizeAnimations = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        document.documentElement.style.setProperty('--motion-fast', '0.2s');
        document.documentElement.style.setProperty('--motion-medium', '0.4s');
        document.documentElement.style.setProperty('--motion-slow', '0.6s');
      } else {
        document.documentElement.style.setProperty('--motion-fast', '0.3s');
        document.documentElement.style.setProperty('--motion-medium', '0.6s');
        document.documentElement.style.setProperty('--motion-slow', '0.9s');
      }
    };
    
    optimizeAnimations();
    window.addEventListener('resize', optimizeAnimations);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setInitialLoadComplete(true);
    
    setTimeout(() => {
      toast({
        title: language === 'en' ? "Welcome to AI8TY" : 
               language === 'ar' ? "مرحبًا بك في AI8TY" : 
               "Bienvenue chez AI8TY",
        description: language === 'en' ? "The Business Transformation OS for UAE enterprises. Explore our services." :
                     language === 'ar' ? "نظام تحول الأعمال لشركات الإمارات. استكشف خدماتنا." :
                     "Le système d'exploitation de transformation d'entreprise pour les entreprises des EAU. Explorez nos services.",
        duration: 5000,
      });
    }, 1500);
  };

  // SEO description variations based on language
  const getSeoDescription = () => {
    if (language === 'ar') {
      return "شركة تحول الأعمال الرائدة في الإمارات - نجمع بين الأتمتة والاستراتيجية والتصميم وإدارة علاقات العملاء والذكاء الاصطناعي وتسويق الأداء تحت سقف واحد";
    }
    return "UAE's premier business transformation firm - combining automation, strategy, design, CRM, AI, and performance marketing under one roof. Scalable growth systems for Dubai & UAE businesses.";
  };

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? "AI8TY | نظام تشغيل الأعمال الاستراتيجي في دبي والإمارات" 
            : "AI8TY | Strategic Business OS for Dubai & UAE Companies"}
        </title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="digital marketing services dubai, website design uae, landing page design dubai, CRM automation uae, business transformation dubai, ai chatbots uae, arabic english content dubai, webflow design dubai, notion integration uae" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={language === 'ar' ? "AI8TY | نظام تشغيل الأعمال الاستراتيجي" : "AI8TY | Strategic Business OS"} />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ar' ? "AI8TY | نظام تشغيل الأعمال الاستراتيجي" : "AI8TY | Strategic Business OS"} />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/twitter-card.png" />
        
        {/* Region-specific metadata */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ai8ty.com" />
      </Helmet>
    
      <div className="min-h-screen bg-ai8ty-black text-ai8ty-white overflow-x-hidden">
        <TransitionLoader initialLoad={!showSplash && !initialLoadComplete} />
        
        {showSplash && <IntroSplashScreen onComplete={handleSplashComplete} />}
        
        <Navigation />
        
        <main ref={mainRef} className="relative z-10">
          <HeroSection />
          
          {/* Brand Philosophy Bar - After Hero */}
          <BrandPhilosophyBar />
          
          <div className="relative">
            {/* Spatial depth marker - creates a visual connection between sections */}
            <div className="absolute left-0 ml-4 md:ml-8 lg:ml-12 h-full w-px bg-gradient-to-b from-transparent via-sand/30 to-transparent opacity-30"></div>
            
            <AboutSection />
            
            {/* Business Transformation Module - Show the before/after experience */}
            <BusinessTransformationModule />
            
            {/* Enhanced Services Explorer */}
            <ServiceExplorer />
            
            <FeaturedProjects />
            <AI8TYCardHighlight />
            
            {/* Bilingual Testimonials - Before the team section for trust-building */}
            <BilingualTestimonials />
            
            <MeetTheTeamSection />
            <WorkShowcase />
            
            {/* Prototype Generator */}
            <PrototypeGenerator />
            
            <BlogHighlights />
            
            {/* WhatsApp CTA - Right before final contact section */}
            <WhatsAppCTA />
            
            <ClientWall />
            <ContactSection />
          </div>
        </main>
        
        {/* Replace standard footer with Strategic Footer */}
        <StrategicFooter />
      </div>
    </>
  );
};

export default Index;
