
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// NEW ACCESSIBLE AI COMPONENTS
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredHero from '@/components/enterprise/AppleInspiredHero';
import NewHomepageSections from '@/components/enterprise/NewHomepageSections';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Index = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setInitialLoadComplete(true);
    
    // Performance optimization
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
    return "AI8TY makes advanced digital capabilities—AI, automation, infrastructure—accessible to ambitious businesses, creators, and communities. Building systems for a more intelligent, more accessible future.";
  };

  return (
    <>
      <Helmet>
        <title>Building Systems for a More Intelligent, Accessible Future | AI8TY</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content="accessible AI, AI tools, intelligent automation, AI infrastructure, democratized AI, AI for creators, AI for businesses, AI8TY" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        <meta property="og:title" content="Building Systems for a More Intelligent, Accessible Future | AI8TY" />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com" />
        <meta property="og:image" content="https://ai8ty.com/og-image-accessible-ai.png" />
        <meta property="og:site_name" content="AI8TY - Accessible AI Systems" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Building Systems for a More Intelligent, Accessible Future" />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-accessible-ai.png" />

        <link rel="canonical" href="https://ai8ty.com" />
        
        <meta name="theme-color" content="#0f172a" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI8TY",
            "url": "https://ai8ty.com",
            "description": "AI8TY makes advanced digital capabilities—AI, automation, infrastructure—accessible to ambitious businesses, creators, and communities.",
            "inLanguage": ["en", "ar"],
            "publisher": {
              "@type": "Organization",
              "name": "AI8TY",
              "url": "https://ai8ty.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ai8ty.com/ai8tyview.jpg"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ai8ty/",
                "https://twitter.com/ai8ty"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "email": "hello@ai8ty.com",
                "contactType": "customer support"
              }]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ai8ty.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>

      <div ref={mainRef} className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="relative">
          {/* ACCESSIBLE AI HERO */}
          <section id="hero-section">
            <AppleInspiredHero />
          </section>
          
          {/* NEW HOMEPAGE SECTIONS */}
          <section id="main-sections">
            <NewHomepageSections />
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Index;
