import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star } from 'lucide-react';

const AiConsultingUAE = () => {
  const { language } = useLanguage();

  const seoKeywords = "AI consulting UAE, enterprise AI Dubai, DIFC AI compliance, UAE AI solutions, artificial intelligence consultants Gulf, AI8TY UAE";

  const competitiveAdvantages = [
    {
      icon: CheckCircle,
      title: "DIFC Compliance Expertise",
      description: "Native Arabic processing with full regulatory compliance for UAE financial sector"
    },
    {
      icon: TrendingUp,
      title: "Proven Gulf Track Record",
      description: "3 weeks to 2 days processing time reduction for UAE banks. Real results, not promises."
    },
    {
      icon: Users,
      title: "Enterprise-Grade Architecture",
      description: "Built by ex-McKinsey architects and former Aramco engineers who understand Gulf business"
    },
    {
      icon: Zap,
      title: "Operational from Day One",
      description: "No 6-month implementations. Our systems integrate with existing SAP and Oracle infrastructure"
    }
  ];

  const uaeSpecificResults = [
    {
      client: "Major DIFC Bank",
      metric: "Compliance Processing",
      before: "3 weeks",
      after: "2 days",
      improvement: "92% faster"
    },
    {
      client: "UAE Healthcare Network",
      metric: "Patient Processing",
      before: "Manual reviews",
      after: "AI-powered triage",
      improvement: "28% better outcomes"
    },
    {
      client: "Saudi Manufacturing Giant",
      metric: "Supply Chain Efficiency",
      before: "Reactive planning",
      after: "Predictive intelligence",
      improvement: "34% efficiency gain"
    }
  ];

  const whyNotSkanella = [
    {
      point: "Gulf-Native Solutions",
      us: "Built specifically for DIFC, ADGM, and Gulf regulations from day one",
      them: "Generic consulting adapted for local market"
    },
    {
      point: "Arabic Language Processing",
      us: "Native Arabic AI models with cultural understanding",
      them: "English-first solutions with basic translation"
    },
    {
      point: "Enterprise Integration",
      us: "Seamless integration with existing Gulf enterprise systems",
      them: "Requires extensive infrastructure changes"
    },
    {
      point: "Implementation Speed",
      us: "Operational systems in weeks, not months",
      them: "6-12 month implementation timelines"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Consulting UAE | Enterprise AI Solutions Dubai | AI8TY</title>
        <meta name="description" content="Leading AI consulting services in UAE. DIFC compliance, Arabic AI processing, enterprise integration. Proven results: banks, healthcare, manufacturing. Contact AI8TY." />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://ai8ty.com/ai-consulting-uae" />
        
        <meta property="og:title" content="AI Consulting UAE | Enterprise AI Solutions Dubai | AI8TY" />
        <meta property="og:description" content="Leading AI consulting services in UAE. DIFC compliance, Arabic AI processing, enterprise integration. Proven results across banking, healthcare, manufacturing sectors." />
        <meta property="og:url" content="https://ai8ty.com/ai-consulting-uae" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "AI8TY UAE AI Consulting",
            "description": "Enterprise AI consulting services for UAE businesses. DIFC compliance, Arabic processing, Gulf-specific solutions.",
            "areaServed": ["UAE", "Dubai", "Abu Dhabi", "DIFC", "ADGM"],
            "serviceType": "AI Consulting",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressLocality": "Dubai"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <AppleInspiredNavigation />
        
        {/* Hero Section - UAE-Specific */}
        <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-blue-950 to-black">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-display-large text-white mb-6">
              AI Consulting UAE That Actually Works
            </h1>
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto">
              DIFC banks don't have time for AI theater. UAE hospitals can't afford systems that break. 
              We build AI that handles Gulf reality—Arabic compliance, cultural nuances, enterprise integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-apple-premium group">
                Get Your UAE AI Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-apple-secondary">
                See UAE Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* Why AI8TY Leads UAE Market */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-display text-white mb-6">
                Why UAE Enterprises Choose AI8TY
              </h2>
              <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
                Not another generic consulting firm. Built by Gulf veterans for Gulf challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="premium-card text-center">
                  <advantage.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-title text-white mb-3">{advantage.title}</h3>
                  <p className="text-body text-gray-400">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UAE-Specific Results */}
        <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-display text-white mb-6">
                Real UAE Results
              </h2>
              <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
                Not vanity metrics. Actual enterprise transformations in the Gulf.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {uaeSpecificResults.map((result, index) => (
                <div key={index} className="premium-border-card p-8 text-center">
                  <h3 className="text-title text-white mb-4">{result.client}</h3>
                  <div className="mb-6">
                    <p className="text-body text-gray-400 mb-2">{result.metric}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-red-400">Before: {result.before}</span>
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                      <span className="text-green-400">After: {result.after}</span>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    {result.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Comparison */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-display text-white mb-6">
                AI8TY vs. Other UAE AI Consultants
              </h2>
              <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
                Why Gulf enterprises switch to us from generic consulting firms.
              </p>
            </div>
            
            <div className="space-y-8">
              {whyNotSkanella.map((comparison, index) => (
                <div key={index} className="premium-card">
                  <h3 className="text-title text-white mb-6">{comparison.point}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-body font-semibold text-green-400 mb-2">AI8TY Approach</h4>
                      <p className="text-body text-gray-300">{comparison.us}</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="text-body font-semibold text-red-400 mb-2">Generic Consultants</h4>
                      <p className="text-body text-gray-400">{comparison.them}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UAE-Specific CTA */}
        <section className="py-24 px-6 bg-gradient-to-b from-blue-950 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-white mb-6">
              Ready to Lead Your UAE Market?
            </h2>
            <p className="text-body-large text-blue-100 mb-8">
              Limited partnerships available for Q1 2025. We only work with serious enterprises 
              ready to build competitive AI advantages, not proof-of-concepts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="btn-apple-premium group">
                Schedule Strategic Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-apple-secondary">
                Download UAE AI Readiness Guide
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-body text-gray-300">DIFC Certified</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-body text-gray-300">Gulf Compliant</p>
              </div>
              <div>
                <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-body text-gray-300">Enterprise Ready</p>
              </div>
            </div>
          </div>
        </section>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default AiConsultingUAE;