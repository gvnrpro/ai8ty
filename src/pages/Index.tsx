import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// APPLE-INSPIRED COMPONENTS
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredHero from '@/components/enterprise/AppleInspiredHero';
import AppleInspiredValueProp from '@/components/enterprise/AppleInspiredValueProp';
import InnovationSection from '@/components/enterprise/InnovationSection';
import WhyAI8TYSection from '@/components/enterprise/WhyAI8TYSection';
import AppleCaseStudiesSection from '@/components/enterprise/AppleCaseStudiesSection';
import AppleTestimonialsSection from '@/components/enterprise/AppleTestimonialsSection';
import ApplePremiumContactSection from '@/components/enterprise/ApplePremiumContactSection';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setInitialLoadComplete(true);
    
    // Apple-style performance optimization
    const optimizeForPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isMobile || isReducedMotion) {
        document.documentElement.style.setProperty('--duration-150', '50ms');
        document.documentElement.style.setProperty('--duration-200', '100ms');
        document.documentElement.style.setProperty('--duration-300', '150ms');
      }
    };
    
    optimizeForPerformance();
    window.addEventListener('resize', optimizeForPerformance);
    
    return () => {
      window.removeEventListener('resize', optimizeForPerformance);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "Enterprise-grade AI infrastructure for financial, retail, healthcare, logistics, and public sector organizations in the UAE and Gulf region.";
  };

  return (
    <>
      <Helmet>
        <title>Operational AI Systems for GCC Business Leaders | AI8TY</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="enterprise AI systems, GCC AI solutions, UAE AI infrastructure, operational AI, financial AI, healthcare AI, manufacturing AI, AI8TY" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        <meta property="og:title" content="Operational AI Systems for GCC Business Leaders | AI8TY" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-enterprise.png" />
        <meta property="og:site_name" content="AI8TY Enterprise Systems" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Operational AI Systems for GCC Business Leaders" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-enterprise.png" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        <meta name="theme-color" content="#0f172a" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div ref={mainRef} className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="relative">
          {/* APPLE-INSPIRED HERO */}
          <section id="hero-section">
            <AppleInspiredHero />
          </section>
          
          {/* APPLE-INSPIRED VALUE PROPOSITION */}
          <section id="value-proposition">
            <AppleInspiredValueProp />
          </section>
          
          {/* INNOVATION SECTION */}
          <section id="innovation">
            <InnovationSection />
          </section>
          
          {/* CASE STUDIES */}
          <section id="case-studies">
            <AppleCaseStudiesSection />
          </section>
          
          {/* WHY AI8TY */}
          <section id="why-ai8ty">
            <WhyAI8TYSection />
          </section>
          
          {/* TESTIMONIALS */}
          <section id="testimonials">
            <AppleTestimonialsSection />
          </section>
          
          {/* PREMIUM CONTACT */}
          <section id="contact">
            <ApplePremiumContactSection />
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Index;
