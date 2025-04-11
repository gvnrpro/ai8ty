import React, { useState, useEffect } from 'react';
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
import TeamCarousel from '@/components/TeamCarousel';
import BlogHighlights from '@/components/BlogHighlights';
import MeetTheTeamSection from '@/components/MeetTheTeamSection';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setShowSplash(false);
      setInitialLoadComplete(true);
    }
    
    document.body.style.overflow = showSplash ? 'hidden' : 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
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
    <div className="min-h-screen bg-ai8ty-black text-ai8ty-white">
      <TransitionLoader initialLoad={!showSplash && !initialLoadComplete} />
      
      {showSplash && <IntroSplashScreen onComplete={handleSplashComplete} />}
      
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjects />
        <AI8TYCardHighlight />
        <MeetTheTeamSection />
        <WorkShowcase />
        <BlogHighlights />
        <ClientWall />
        <ContactSection />
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default Index;
