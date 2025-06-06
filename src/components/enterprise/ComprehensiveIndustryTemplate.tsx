import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle, Calculator, Clock, Target, Zap, Star, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppleInspiredNavigation from './AppleInspiredNavigation';
import AppleInspiredFooter from './AppleInspiredFooter';
import { useLanguage } from '@/contexts/LanguageContext';
interface Challenge {
  title: string;
  description: string;
  impact: string;
  solution: string;
}
interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}
interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  quote: string;
  author: string;
  title: string;
}
interface ROIInput {
  label: string;
  defaultValue: number;
  multiplier: number;
}
interface ImplementationStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  outcomes: string[];
}
interface ComprehensiveIndustryTemplateProps {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
  heroDescription: string;
  challenges: Challenge[];
  capabilities: Capability[];
  caseStudy: CaseStudy;
  roiInputs: ROIInput[];
  implementationSteps: ImplementationStep[];
}
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const ComprehensiveIndustryTemplate: React.FC<ComprehensiveIndustryTemplateProps> = ({
  title,
  subtitle,
  metaTitle,
  metaDescription,
  primaryColor,
  gradientFrom,
  gradientTo,
  heroDescription,
  challenges,
  capabilities,
  caseStudy,
  roiInputs,
  implementationSteps
}) => {
  const navigate = useNavigate();
  const {
    language
  } = useLanguage();
  const isArabic = language === 'ar';
  const [roiValues, setROIValues] = useState(roiInputs.reduce((acc, input) => ({
    ...acc,
    [input.label]: input.defaultValue
  }), {} as Record<string, number>));
  const heroRef = useRef(null);
  const challengesRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const caseStudyRef = useRef(null);
  const roiRef = useRef(null);
  const implementationRef = useRef(null);
  const heroInView = useInView(heroRef, {
    once: true
  });
  const challengesInView = useInView(challengesRef, {
    once: true
  });
  const capabilitiesInView = useInView(capabilitiesRef, {
    once: true
  });
  const caseStudyInView = useInView(caseStudyRef, {
    once: true
  });
  const roiInView = useInView(roiRef, {
    once: true
  });
  const implementationInView = useInView(implementationRef, {
    once: true
  });
  const calculateROI = () => {
    return Object.entries(roiValues).reduce((total, [key, value]) => {
      const input = roiInputs.find(input => input.label === key);
      return total + Number(value) * (input?.multiplier || 0);
    }, 0);
  };

  // Enhanced Schema Data
  const industryName = title.replace('AI8TY for ', '');
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "@id": "https://ai8ty.com/#organization",
      "name": "AI8TY",
      "url": "https://ai8ty.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ai8ty.com/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png"
      },
      "description": "Operational AI systems for enterprise organizations in the GCC region",
      "areaServed": {
        "@type": "Place",
        "name": "Gulf Cooperation Council"
      }
    }, {
      "@type": "Service",
      "@id": `https://ai8ty.com/solutions/${title.toLowerCase().replace(/\s+/g, '-')}#service`,
      "name": title,
      "description": metaDescription,
      "provider": {
        "@id": "https://ai8ty.com/#organization"
      },
      "serviceType": "Artificial Intelligence Systems",
      "category": industryName,
      "areaServed": {
        "@type": "Place",
        "name": "Gulf Cooperation Council"
      }
    }, {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": caseStudy.author
      },
      "reviewBody": caseStudy.quote,
      "itemReviewed": {
        "@id": `https://ai8ty.com/solutions/${title.toLowerCase().replace(/\s+/g, '-')}#service`
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": `How does AI8TY help ${industryName} organizations?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": heroDescription
        }
      }, {
        "@type": "Question",
        "name": "What is the implementation timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Implementation typically takes ${implementationSteps.length} phases over 6-8 months, starting with assessment and ending with full optimization.`
        }
      }]
    }]
  };
  return <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${industryName} AI, GCC AI solutions, operational intelligence, ${industryName} automation, AI8TY`} />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ai8ty.com/solutions/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:image" content="https://ai8ty.com/og-image-solutions.png" />
        <meta property="og:site_name" content="AI8TY" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://ai8ty.com/og-image-solutions.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={`https://ai8ty.com/solutions/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className={`min-h-screen ${isArabic ? 'rtl' : ''}`}>
        <AppleInspiredNavigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section ref={heroRef} className="section-apple-large relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className={`absolute top-[15%] left-[8%] w-[35vw] h-[35vw] bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20 rounded-full blur-[120px]`} />
              <div className="absolute bottom-[15%] right-[8%] w-[28vw] h-[28vw] bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute inset-0 immersive-grid opacity-10" />
            </div>

            <motion.div className="container-apple text-center relative z-10" variants={containerVariants} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
              <motion.div variants={itemVariants} className="mb-8">
                <span className={`inline-flex items-center gap-2 glass-premium px-5 py-2.5 rounded-full text-caption font-medium hover-scale-subtle ${primaryColor}`}>
                  <Zap size={14} />
                  Operational Intelligence
                </span>
              </motion.div>

              <motion.h1 className="text-display mb-6" variants={itemVariants}>
                <span className="block">{title}</span>
                <span className={`block gradient-text ${gradientFrom} ${gradientTo}`}>{subtitle}</span>
              </motion.h1>
              
              <motion.p className="text-body-large container-apple-narrow mb-12 leading-relaxed" variants={itemVariants}>
                {heroDescription}
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6" variants={itemVariants}>
                <button onClick={() => navigate('/contact')} className="btn-premium group">
                  <span className="relative z-10">Schedule Strategic Briefing</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5 duration-200" />
                </button>
                
                <button onClick={() => roiRef.current?.scrollIntoView({
                behavior: 'smooth'
              })} className="btn-apple-secondary premium-border-card hover-lift">
                  Calculate ROI Impact
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Challenges Section */}
          <section ref={challengesRef} className="section-apple bg-gradient-to-br from-slate-900/50 to-slate-800/50">
            <motion.div className="container-apple" variants={containerVariants} initial="hidden" animate={challengesInView ? "visible" : "hidden"}>
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-title-large mb-6">Critical Challenges We Solve</h2>
                <p className="text-body-large container-apple-narrow">
                  Every industry faces unique operational challenges. Our AI systems are designed to address your specific pain points.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => <motion.div key={index} className="premium-card premium-border-card" variants={itemVariants}>
                    <h3 className="text-title mb-4 text-foreground">{challenge.title}</h3>
                    <p className="text-body text-muted-foreground mb-4">{challenge.description}</p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <h4 className="text-caption font-semibold text-red-400 mb-2">Current Impact</h4>
                        <p className="text-caption text-red-300">{challenge.impact}</p>
                      </div>
                      
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <h4 className="text-caption font-semibold text-green-400 mb-2">AI8TY Solution</h4>
                        <p className="text-caption text-green-300">{challenge.solution}</p>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </section>

          {/* Capabilities Section */}
          <section ref={capabilitiesRef} className="section-apple">
            <motion.div className="container-apple" variants={containerVariants} initial="hidden" animate={capabilitiesInView ? "visible" : "hidden"}>
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-title-large mb-6">AI Capabilities Built for Your Success</h2>
                <p className="text-body-large container-apple-narrow">
                  Comprehensive intelligence systems that transform every aspect of your operations.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return <motion.div key={index} className="premium-card hover-lift group" variants={itemVariants}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mb-6`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      
                      <h3 className="text-title mb-4 text-foreground group-hover:text-blue-400 transition-colors">
                        {capability.title}
                      </h3>
                      
                      <p className="text-body text-muted-foreground mb-6">
                        {capability.description}
                      </p>

                      <div className="space-y-2">
                        {capability.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle size={16} className={`${primaryColor} mt-0.5 flex-shrink-0`} />
                            <span className="text-caption text-muted-foreground">{benefit}</span>
                          </div>)}
                      </div>
                    </motion.div>;
              })}
              </div>
            </motion.div>
          </section>

          {/* Case Study Section */}
          <section ref={caseStudyRef} className="section-apple bg-gradient-to-br from-slate-900 to-slate-800">
            <motion.div className="container-apple" variants={containerVariants} initial="hidden" animate={caseStudyInView ? "visible" : "hidden"}>
              

              <div className="premium-card premium-border-card max-w-4xl mx-auto">
                <motion.div variants={itemVariants}>
                  <div className="mb-8">
                    <h3 className="text-title mb-2">{caseStudy.company}</h3>
                    <p className="text-body text-muted-foreground">{caseStudy.industry}</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-title-small mb-3 text-red-400">Challenge</h4>
                      <p className="text-body text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-title-small mb-3 text-blue-400">Solution</h4>
                      <p className="text-body text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => <div key={index} className="text-center">
                        <div className={`text-headline font-bold mb-2 gradient-text ${gradientFrom} ${gradientTo}`}>
                          {result.value}
                        </div>
                        <div className="text-caption font-medium text-foreground mb-1">
                          {result.label}
                        </div>
                        <div className="text-caption text-muted-foreground">
                          {result.description}
                        </div>
                      </div>)}
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-body text-muted-foreground mb-6">
                    "{caseStudy.quote}"
                  </blockquote>

                  <div className="text-caption text-muted-foreground">
                    <strong className="text-foreground">{caseStudy.author}</strong><br />
                    {caseStudy.title}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* ROI Calculator Section */}
          <section ref={roiRef} className="section-apple">
            <motion.div className="container-apple" variants={containerVariants} initial="hidden" animate={roiInView ? "visible" : "hidden"}>
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-title-large mb-6">Calculate Your ROI Impact</h2>
                <p className="text-body-large container-apple-narrow">
                  See the potential return on investment for your organization with our AI solutions.
                </p>
              </motion.div>

              <div className="premium-card premium-border-card max-w-2xl mx-auto">
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <Calculator size={24} className="text-white" />
                    </div>
                    <h3 className="text-title">Investment Calculator</h3>
                  </div>

                  <div className="space-y-6 mb-8">
                    {roiInputs.map((input, index) => <div key={index}>
                        <label className="block text-caption font-medium text-foreground mb-2">
                          {input.label}
                        </label>
                        <input type="number" value={roiValues[input.label]} onChange={e => setROIValues(prev => ({
                      ...prev,
                      [input.label]: Number(e.target.value)
                    }))} className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-foreground focus:border-blue-500 focus:outline-none transition-colors" />
                      </div>)}
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl text-center">
                    <div className="text-caption text-green-400 mb-2">Estimated Annual Value</div>
                    <div className="text-headline font-bold text-green-400">
                      ${calculateROI().toLocaleString()}
                    </div>
                    <div className="text-caption text-muted-foreground mt-2">
                      Based on industry benchmarks and optimization potential
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Implementation Steps Section */}
          <section ref={implementationRef} className="section-apple bg-gradient-to-br from-slate-900/50 to-slate-800/50">
            <motion.div className="container-apple" variants={containerVariants} initial="hidden" animate={implementationInView ? "visible" : "hidden"}>
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-title-large mb-6">Your Path to Transformation</h2>
                <p className="text-body-large container-apple-narrow">
                  A proven methodology that ensures successful AI implementation across your organization.
                </p>
              </motion.div>

              <div className="space-y-8">
                {implementationSteps.map((step, index) => <motion.div key={index} className="premium-card premium-border-card" variants={itemVariants}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-title text-foreground">{step.phase}: {step.title}</h3>
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-caption text-blue-400">
                            <Clock size={12} />
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-body text-muted-foreground mb-6">
                          {step.description}
                        </p>

                        <div>
                          <h4 className="text-caption font-semibold text-foreground mb-3">Key Outcomes</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.outcomes.map((outcome, outcomeIndex) => <div key={outcomeIndex} className="flex items-start gap-3">
                                <Target size={16} className={`${primaryColor} mt-0.5 flex-shrink-0`} />
                                <span className="text-caption text-muted-foreground">{outcome}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>

              <motion.div className="text-center mt-16" variants={itemVariants}>
                <button onClick={() => navigate('/contact')} className="btn-premium group">
                  <span className="relative z-10">Start Your Transformation</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5 duration-200" />
                </button>
              </motion.div>
            </motion.div>
          </section>
        </main>

        <AppleInspiredFooter />
      </div>
    </>;
};
export default ComprehensiveIndustryTemplate;