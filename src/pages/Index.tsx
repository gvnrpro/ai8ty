
import React, { useState, useEffect, useRef } from 'react';
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

// New components
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
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
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
        description: language === 'en' ? "Intelligence by Design. Explore our services." :
                     language === 'ar' ? "الذكاء بالتصميم. استكشف خدماتنا." :
                     "L'intelligence par le design. Découvrez nos services.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
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
  );
};

export default Index;
