import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced revenue-focused components
import RevenueHeroSection from '@/components/enhanced/RevenueHeroSection';
import WebsiteAuditSection from '@/components/enhanced/WebsiteAuditSection';
import WhyThisWorksSection from '@/components/enhanced/WhyThisWorksSection';
import BoldGuaranteeSection from '@/components/enhanced/BoldGuaranteeSection';
import LimitedSpotsSection from '@/components/enhanced/LimitedSpotsSection';
import WhoThisIsForSection from '@/components/enhanced/WhoThisIsForSection';
import WhatsAppFunnelSection from '@/components/enhanced/WhatsAppFunnelSection';
import EnhancedResultsSection from '@/components/enhanced/EnhancedResultsSection';
import EnhancedMobileCTA from '@/components/enhanced/EnhancedMobileCTA';
import SitemapGenerator from '@/components/enhanced/SitemapGenerator';

// Existing components that still work well
import ProblemSection from '@/components/ProblemSection';
import EnhancedServicesSection from '@/components/enhanced/EnhancedServicesSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
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
    
    // Revenue-focused welcome message
    setTimeout(() => {
      toast({
        title: "Revenue System Ready",
        description: "Discover how AI8TY can turn your website into a 24/7 sales machine.",
        duration: 5000,
      });
    }, 1000);

    // Add Google Analytics and conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'AI8TY Revenue System',
        page_location: window.location.href
      });
    }
    
    return () => {
      window.removeEventListener('resize', optimizeAnimations);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "Turn your website into a 24/7 sales machine with AI8TY's revenue-focused web systems. Done-for-you websites, automation, and SEO engineered for leads, speed, and growth. If it doesn't make you money in 30 days, it's free. Trusted by GCC businesses.";
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
        "name": "Website Revenue System",
        "description": "24/7 sales machine websites with 30-day money-back guarantee",
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
        <title>AI8TY | Turn Your Website Into a 24/7 Sales Machine - Dubai Revenue Systems</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="website revenue system dubai, 24/7 sales machine, business automation UAE, lead generation websites, conversion optimization GCC, AI8TY dubai, website that makes money, sales funnel websites" />
        
        <meta property="og:title" content="AI8TY | Turn Your Website Into a 24/7 Sales Machine" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-revenue-system.png" />
        <meta property="og:site_name" content="AI8TY" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI8TY | Turn Your Website Into a 24/7 Sales Machine" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-revenue-system.png" />
        <meta name="twitter:creator" content="@ai8ty" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        {/* Enhanced structured data for revenue system */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>

        {/* Additional schema for service offerings */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Revenue System",
            "description": "Convert your website into a 24/7 sales machine with automated lead generation and conversion optimization",
            "provider": {
              "@type": "Organization",
              "name": "AI8TY"
            },
            "areaServed": ["UAE", "Dubai", "Abu Dhabi", "Saudi Arabia", "Qatar", "Kuwait"],
            "offers": {
              "@type": "Offer",
              "name": "30-Day Money-Back Guarantee",
              "description": "If you don't get qualified leads within 30 days, you don't pay"
            }
          })}
        </script>

        {/* Performance and conversion tracking */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div ref={mainRef} className="min-h-screen bg-ai8ty-black">
        <TransitionLoader />
        <Navigation />
        
        <main className="relative">
          {/* Revenue-focused sections in strategic order */}
          <RevenueHeroSection />
          <ProblemSection />
          <WhyThisWorksSection />
          <WebsiteAuditSection />
          <EnhancedServicesSection />
          <EnhancedResultsSection />
          <BoldGuaranteeSection />
          <WhoThisIsForSection />
          <LimitedSpotsSection />
          <WhatsAppFunnelSection />
          <ProcessSection />
          <FAQSection />
          
          <ContactSection />
          
          <AIReadinessQuiz />
          <WhatsAppCTA />
          <EnhancedMobileCTA />
        </main>
        
        <StrategicFooter />
        <SitemapGenerator />
      </div>
    </>
  );
};

export default Index;
