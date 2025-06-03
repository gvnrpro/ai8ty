
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// NEW ENTERPRISE COMPONENTS
import EnterpriseNavigation from '@/components/enterprise/EnterpriseNavigation';
import EnterpriseHeroSection from '@/components/enterprise/EnterpriseHeroSection';
import ValuePropositionSection from '@/components/enterprise/ValuePropositionSection';
import WhyAI8TYSection from '@/components/enterprise/WhyAI8TYSection';
import InnovationSection from '@/components/enterprise/InnovationSection';
import EnterpriseFooter from '@/components/enterprise/EnterpriseFooter';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setInitialLoadComplete(true);
    
    // Enterprise-grade performance optimization
    const optimizeForPerformance = () => {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        document.documentElement.style.setProperty('--motion-fast', '0.1s');
        document.documentElement.style.setProperty('--motion-medium', '0.2s');
        document.documentElement.style.setProperty('--motion-slow', '0.3s');
      } else {
        document.documentElement.style.setProperty('--motion-fast', '0.15s');
        document.documentElement.style.setProperty('--motion-medium', '0.3s');
        document.documentElement.style.setProperty('--motion-slow', '0.6s');
      }
    };
    
    optimizeForPerformance();
    window.addEventListener('resize', optimizeForPerformance);
    
    return () => {
      window.removeEventListener('resize', optimizeForPerformance);
    };
  }, [language, toast]);

  const getSeoDescription = () => {
    return "Operational AI Systems for GCC Business Leaders. Enterprise-grade AI infrastructure for financial, retail, healthcare, logistics, and public sector organizations in the UAE and Gulf region.";
  };

  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI8TY",
      "description": getSeoDescription(),
      "url": "https://ai8ty.com",
      "logo": "https://ai8ty.com/logo.png",
      "slogan": "Operational AI Systems for GCC Business Leaders",
      "foundingDate": "2023",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Enterprise Sales",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai"
      },
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
        "name": "Enterprise AI Systems",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Financial Institution AI Systems",
              "description": "Operational AI for banks and financial services in the GCC"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Healthcare Network Intelligence",
              "description": "Secure patient data intelligence and operational optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Public Sector AI Systems",
              "description": "Government intelligence systems and citizen service optimization"
            }
          }
        ]
      }
    };
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
        
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>

        <meta name="theme-color" content="#1e293b" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <div ref={mainRef} className="min-h-screen bg-slate-900">
        <EnterpriseNavigation />
        
        <main className="relative">
          {/* ENTERPRISE HERO */}
          <section id="hero-section">
            <EnterpriseHeroSection />
          </section>
          
          {/* VALUE PROPOSITION */}
          <section id="value-proposition">
            <ValuePropositionSection />
          </section>
          
          {/* INNOVATION SECTION */}
          <section id="innovation">
            <InnovationSection />
          </section>
          
          {/* WHY AI8TY */}
          <section id="why-ai8ty">
            <WhyAI8TYSection />
          </section>
        </main>
        
        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Index;
