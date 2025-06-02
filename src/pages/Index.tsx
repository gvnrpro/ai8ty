
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import TransitionLoader from '@/components/TransitionLoader';
import AIReadinessQuiz from '@/components/AIReadinessQuiz';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// NEW MASTER REBUILD COMPONENTS - Conversion-First Structure
import RevenueHeroSection from '@/components/enhanced/RevenueHeroSection';
import ClarityProblemSection from '@/components/enhanced/ClarityProblemSection';
import DigitalGrowthSystemSection from '@/components/enhanced/DigitalGrowthSystemSection';
import GCCProofSection from '@/components/enhanced/GCCProofSection';
import IndustrySelectorSection from '@/components/enhanced/IndustrySelectorSection';
import TransformedGuaranteeSection from '@/components/enhanced/TransformedGuaranteeSection';
import TransformedAuditSection from '@/components/enhanced/TransformedAuditSection';

// Supporting sections that enhance the conversion flow
import TransformedWhatsAppFunnel from '@/components/enhanced/TransformedWhatsAppFunnel';
import LimitedSpotsSection from '@/components/enhanced/LimitedSpotsSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import StrategicFooter from '@/components/StrategicFooter';
import OptimizedMobileCTA from '@/components/enhanced/OptimizedMobileCTA';
import StickyWhatsAppCTA from '@/components/enhanced/StickyWhatsAppCTA';
import SitemapGenerator from '@/components/enhanced/SitemapGenerator';

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
    
    // High-performance optimizations for flagship site
    const optimizeForPerformance = () => {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Aggressive mobile optimization
        document.documentElement.style.setProperty('--motion-fast', '0.1s');
        document.documentElement.style.setProperty('--motion-medium', '0.2s');
        document.documentElement.style.setProperty('--motion-slow', '0.3s');
        document.documentElement.style.setProperty('--particle-density', '6');
      } else {
        // Desktop performance optimization
        document.documentElement.style.setProperty('--motion-fast', '0.15s');
        document.documentElement.style.setProperty('--motion-medium', '0.3s');
        document.documentElement.style.setProperty('--motion-slow', '0.6s');
        document.documentElement.style.setProperty('--particle-density', '12');
      }
    };
    
    optimizeForPerformance();
    window.addEventListener('resize', optimizeForPerformance);
    
    // Elite welcome message
    const showEliteWelcomeMessage = () => {
      const isMobile = window.innerWidth < 768;
      toast({
        title: isMobile ? "Elite Digital Growth Engineering 🏆" : "Welcome to Elite Digital Growth Engineering",
        description: isMobile 
          ? "Your website should be your strongest sales asset. Tap to discover how!" 
          : "Discover how AI8TY transforms websites into high-performance sales assets for GCC businesses.",
        duration: isMobile ? 4000 : 6000,
      });
    };

    setTimeout(showEliteWelcomeMessage, 1000);

    // Advanced performance tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'AI8TY Elite Digital Growth Engineering - GCC Leader',
        page_location: window.location.href,
        custom_map: {
          'flagship_experience': true,
          'conversion_optimized': true,
          'gcc_focused': true
        }
      });
    }
    
    return () => {
      window.removeEventListener('resize', optimizeForPerformance);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "👉 Your Website Should Be Your Strongest Sales Asset. We design, optimize, and automate high-performance websites for GCC businesses that want results — not excuses. Elite digital growth engineering with 30-day results guarantee. Response within 24h | GCC-Based | Results Guaranteed.";
  };

  const getAdvancedStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI8TY",
      "description": getSeoDescription(),
      "url": "https://ai8ty.com",
      "logo": "https://ai8ty.com/logo.png",
      "slogan": "Your Website Should Be Your Strongest Sales Asset",
      "foundingDate": "2023",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971509229009",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Arabic"],
        "areaServed": ["AE", "SA", "QA", "KW", "BH", "OM"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai"
      },
      "sameAs": [
        "https://linkedin.com/company/ai8ty",
        "https://twitter.com/ai8ty"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "geoRadius": "2000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Growth Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion-Optimized Website",
              "description": "Speed-first, mobile-first, SEO-ready websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automated Lead Systems",
              "description": "CRM integrations, WhatsApp, lead scoring, triggers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Visibility & Authority SEO",
              "description": "Localized, AI-ready, schema-structured optimization"
            }
          }
        ]
      }
    };
  };

  return (
    <>
      <Helmet>
        <title>👉 Your Website Should Be Your Strongest Sales Asset | AI8TY Elite Digital Growth Engineering</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="website design dubai, lead generation UAE, SEO services GCC, conversion rate optimization UAE, high performance websites UAE, fast loading websites mobile, AI optimized content structure, digital growth engineering, elite website development, GCC business growth, website strongest sales asset" />
        
        {/* Advanced mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Enhanced social sharing */}
        <meta property="og:title" content="👉 Your Website Should Be Your Strongest Sales Asset | AI8TY" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-elite-digital-growth.png" />
        <meta property="og:site_name" content="AI8TY Elite Digital Growth Engineering" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="👉 Your Website Should Be Your Strongest Sales Asset" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-elite-digital-growth.png" />
        <meta name="twitter:creator" content="@ai8ty" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        {/* Performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="preload" href="/ai8tyview.jpg" as="image" />
        
        {/* Advanced structured data */}
        <script type="application/ld+json">
          {JSON.stringify(getAdvancedStructuredData())}
        </script>

        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Core Web Vitals optimization hints */}
        <link rel="preload" as="script" href="/src/main.tsx" />
      </Helmet>

      <div ref={mainRef} className="min-h-screen bg-ai8ty-black">
        <TransitionLoader />
        <Navigation />
        
        <main className="relative">
          {/* 🚀 NEW CONVERSION-FIRST STRUCTURE */}
          
          {/* HERO: Your Website Should Be Your Strongest Sales Asset */}
          <section id="hero-section">
            <RevenueHeroSection />
          </section>
          
          {/* PROBLEM: Clarity. Conversion. Consistency. Most Sites Deliver None. */}
          <section id="clarity-problem">
            <ClarityProblemSection />
          </section>
          
          {/* SOLUTION: What We Deliver: Your Digital Growth System */}
          <section id="digital-growth-system">
            <DigitalGrowthSystemSection />
          </section>
          
          {/* CASE PROOF: GCC Brands Trust AI8TY To Deliver Growth That Performs */}
          <section id="gcc-proof">
            <GCCProofSection />
          </section>
          
          {/* INDUSTRY SELECTOR: Solutions Tailored for Your Industry */}
          <section id="industry-selector">
            <IndustrySelectorSection />
          </section>
          
          {/* GUARANTEE: If You Don't Get Qualified Leads in 30 Days — You Don't Pay */}
          <section id="guarantee">
            <TransformedGuaranteeSection />
          </section>
          
          {/* LEAD GENERATION: Free Website Audit/Roast */}
          <section id="website-audit">
            <TransformedAuditSection />
          </section>
          
          {/* URGENCY & SOCIAL PROOF */}
          <section id="limited-spots">
            <LimitedSpotsSection />
          </section>
          
          {/* WHATSAPP FUNNEL */}
          <section id="whatsapp-funnel">
            <TransformedWhatsAppFunnel />
          </section>
          
          {/* PROCESS & FAQ */}
          <section id="process">
            <ProcessSection />
          </section>
          
          <section id="faq">
            <FAQSection />
          </section>
          
          {/* FINAL CONTACT */}
          <section id="contact">
            <ContactSection />
          </section>
          
          {/* SUPPORT ELEMENTS */}
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
