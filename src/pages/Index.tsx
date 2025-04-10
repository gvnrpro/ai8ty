
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
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Skip splash screen if reduced motion is preferred
    if (prefersReducedMotion) {
      setShowSplash(false);
    }
    
    // Set body overflow based on splash screen state
    document.body.style.overflow = showSplash ? 'hidden' : 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    
    // Show welcome toast after splash screen
    setTimeout(() => {
      toast({
        title: "Welcome to AI8TY",
        description: "Intelligence by Design. Explore our services.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-ai8ty-black text-ai8ty-white">
      {/* Splash Screen */}
      {showSplash && <IntroSplashScreen onComplete={handleSplashComplete} />}
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AI8TYCardHighlight />
        <WorkShowcase />
        <ClientWall />
        <ContactSection />
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default Index;
