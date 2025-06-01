import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced revenue-focused components
import TransformedHeroSection from '@/components/enhanced/TransformedHeroSection';
import TransformedAuditSection from '@/components/enhanced/TransformedAuditSection';
import TransformedGuaranteeSection from '@/components/enhanced/TransformedGuaranteeSection';
import TransformedWhatsAppFunnel from '@/components/enhanced/TransformedWhatsAppFunnel';
import WhyThisWorksTransformed from '@/components/enhanced/WhyThisWorksTransformed';
import StickyWhatsAppCTA from '@/components/enhanced/StickyWhatsAppCTA';

// Existing components that still work well
import ProblemSection from '@/components/ProblemSection';
import EnhancedServicesSection from '@/components/enhanced/EnhancedServicesSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import StrategicFooter from '@/components/StrategicFooter';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setInitialLoadComplete(true);
    
    // Mobile-specific optimizations
    const optimizeForMobile = () => {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Faster animations for mobile
        document.documentElement.style.setProperty('--motion-fast', '0.1s');
        document.documentElement.style.setProperty('--motion-medium', '0.2s');
        document.documentElement.style.setProperty('--motion-slow', '0.3s');
        
        // Reduce particle density on mobile for performance
        document.documentElement.style.setProperty('--particle-density', '8');
        
        // Optimize scroll behavior
        document.documentElement.style.setProperty('scroll-behavior', 'smooth');
      } else {
        document.documentElement.style.setProperty('--motion-fast', '0.15s');
        document.documentElement.style.setProperty('--motion-medium', '0.3s');
        document.documentElement.style.setProperty('--motion-slow', '0.6s');
        document.documentElement.style.setProperty('--particle-density', '15');
      }
    };
    
    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);
    
    // Mobile-optimized welcome message
    const showWelcomeMessage = () => {
      const isMobile = window.innerWidth < 768;
      toast({
        title: isMobile ? "Revenue System Ready 📱" : "Revenue System Ready",
        description: isMobile 
          ? "Turn your website into a 24/7 sales machine. Tap to explore!" 
          : "Discover how AI8TY can turn your website into a 24/7 sales machine.",
        duration: isMobile ? 4000 : 5000,
      });
    };

    setTimeout(showWelcomeMessage, 1000);

    // Performance tracking with safe checks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'AI8TY Revenue System - Mobile Optimized',
        page_location: window.location.href,
        custom_map: {
          'mobile_optimized': window.innerWidth < 768
        }
      });
    }
    
    return () => {
      window.removeEventListener('resize', optimizeForMobile);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "We Turn Your Website Into a 24/7 Sales Machine — Or You Don't Pay. Done-for-you websites, automation, and SEO engineered for leads, speed, and growth. If it doesn't make you money in 30 days, it's free. AED 7,500 site generates AED 75,000 in leads = 10x ROI.";
  };

  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI8TY",
      "description": getSeoDescription(),
      "url": "https://ai8ty.com",
      "logo": "https://ai8ty.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971509229009",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Arabic"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai"
      },
      "sameAs": [
        "https://linkedin.com/company/ai8ty",
        "https://twitter.com/ai8ty"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Mobile-Optimized Website Revenue System",
        "description": "24/7 sales machine websites with <2s load times and 30-day money-back guarantee",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock"
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
    };
  };

  return (
    <>
      <Helmet>
        <title>We Turn Your Website Into a 24/7 Sales Machine — Or You Don't Pay | AI8TY Dubai</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="24/7 sales machine website dubai, revenue generating websites GCC, done for you websites UAE, website automation dubai, lead generation websites saudi arabia, ROI tracking websites qatar, GCC website conversion optimization" />
        
        {/* Mobile-specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        
        <meta property="og:title" content="We Turn Your Website Into a 24/7 Sales Machine — Or You Don't Pay" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-mobile-revenue-system.png" />
        <meta property="og:site_name" content="AI8TY" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="We Turn Your Website Into a 24/7 Sales Machine — Or You Don't Pay" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-mobile-revenue-system.png" />
        <meta name="twitter:creator" content="@ai8ty" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        {/* Performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Enhanced structured data for mobile revenue system */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>

        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div ref={mainRef} className="min-h-screen bg-ai8ty-black">
        <TransitionLoader />
        <Navigation />
        
        <main className="relative">
          {/* Transformed Hero Section */}
          <section id="hero-section">
            <TransformedHeroSection />
          </section>
          
          {/* Core Content Sections */}
          <ProblemSection />
          
          <section id="intelligence-shift">
            <IntelligenceShiftSection />
          </section>
          
          <section id="about-section">
            <AboutSection />
          </section>
          
          <section id="work-showcase">
            <WorkShowcase />
          </section>
          
          {/* Why This Works - Transformed */}
          <WhyThisWorksTransformed />
          
          {/* Transformed Lead Generation */}
          <section id="website-audit">
            <TransformedAuditSection />
          </section>
          
          {/* Services */}
          <section id="enhanced-services">
            <EnhancedServicesSection />
          </section>
          
          {/* Social Proof & Results */}
          <EnhancedResultsSection />
          
          {/* Transformed Trust & Guarantee */}
          <TransformedGuaranteeSection />
          <WhoThisIsForSection />
          
          {/* Urgency & Conversion */}
          <LimitedSpotsSection />
          <TransformedWhatsAppFunnel />
          
          {/* Process & FAQ */}
          <ProcessSection />
          <FAQSection />
          
          {/* Contact */}
          <section id="contact">
            <ContactSection />
          </section>
          
          {/* Support Elements */}
          <AIReadinessQuiz />
          <WhatsAppCTA />
          <OptimizedMobileCTA />
          <StickyWhatsAppCTA />
        </main>
        
        <StrategicFooter />
        <SitemapGenerator />
      </div>
    </>
  );
};

export default Index;
