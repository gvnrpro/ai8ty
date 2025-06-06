
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Play, Calculator, Users, TrendingUp, Shield, Zap, Star, Quote, ArrowRight, Globe, Clock } from 'lucide-react';
import AppleInspiredNavigation from './AppleInspiredNavigation';
import AppleInspiredFooter from './AppleInspiredFooter';

interface Challenge {
  title: string;
  description: string;
  impact: string;
  solution: string;
}

interface Capability {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
}

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Metric[];
  quote: string;
  author: string;
  title: string;
}

interface ComprehensiveIndustryTemplateProps {
  // Meta & SEO
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  
  // Visual Design
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
  
  // Content
  heroDescription: string;
  challenges: Challenge[];
  capabilities: Capability[];
  caseStudy: CaseStudy;
  
  // ROI Calculator
  roiInputs: {
    label: string;
    defaultValue: number;
    multiplier: number;
  }[];
  
  // Implementation Journey
  implementationSteps: {
    phase: string;
    title: string;
    description: string;
    duration: string;
    outcomes: string[];
  }[];
}

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
  const [roiValues, setRoiValues] = useState(roiInputs.reduce((acc, input) => ({ ...acc, [input.label]: input.defaultValue }), {}));
  
  const heroRef = useRef(null);
  const challengesRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const caseStudyRef = useRef(null);
  const roiRef = useRef(null);
  const implementationRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const challengesInView = useInView(challengesRef, { once: true, amount: 0.2 });
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, amount: 0.2 });
  const caseStudyInView = useInView(caseStudyRef, { once: true, amount: 0.2 });
  const roiInView = useInView(roiRef, { once: true, amount: 0.2 });
  const implementationInView = useInView(implementationRef, { once: true, amount: 0.2 });

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const calculateROI = () => {
    return roiInputs.reduce((total, input) => {
      return total + (roiValues[input.label] * input.multiplier);
    }, 0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="relative">
          {/* CINEMATIC HERO SECTION */}
          <section 
            ref={heroRef}
            className="min-h-screen relative flex items-center justify-center section-apple-large overflow-hidden"
            style={{ 
              background: `radial-gradient(ellipse at center top, ${gradientFrom} 0%, hsl(var(--background)) 70%)`
            }}
          >
            {/* Ambient Elements */}
            <motion.div 
              className="absolute inset-0 opacity-40"
              style={{ y: heroY }}
            >
              <div className={`absolute top-[20%] left-[10%] w-96 h-96 ${primaryColor}/10 rounded-full blur-3xl`} />
              <div className={`absolute bottom-[30%] right-[15%] w-80 h-80 ${primaryColor}/8 rounded-full blur-3xl`} />
              <div className="absolute top-[40%] right-[20%] w-px h-32 bg-gradient-to-b from-blue-500/30 to-transparent" />
            </motion.div>

            <motion.div
              className="container-apple text-center z-10"
              style={{ opacity: heroOpacity }}
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <span className={`inline-flex items-center gap-2 glass-apple px-4 py-2 rounded-full text-caption font-medium`}>
                  <Star size={14} className={`${primaryColor}`} />
                  Enterprise AI for {title.split(' ')[2] || 'Business'}
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-display-large mb-6"
              >
                <span className="block">{title}</span>
                <span className={`block bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                  {subtitle}
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-body-large container-apple-narrow mb-12 leading-relaxed"
              >
                {heroDescription}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
              >
                <button className="btn-apple-premium hover-lift group">
                  <span>See Implementation Details</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 duration-200" />
                </button>
                
                <button className="btn-apple-secondary hover-lift group flex items-center gap-2">
                  <Play size={16} />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              {/* Floating Metrics */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {caseStudy.results.slice(0, 3).map((metric, index) => (
                  <div key={index} className="glass-apple rounded-2xl p-6 hover-lift">
                    <div className={`text-3xl font-bold ${primaryColor} mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-caption text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* CHALLENGES & SOLUTIONS */}
          <section ref={challengesRef} className="section-apple">
            <div className="container-apple">
              <motion.div
                className="text-center mb-20"
                variants={containerVariants}
                initial="hidden"
                animate={challengesInView ? "visible" : "hidden"}
              >
                <motion.h2 variants={itemVariants} className="text-display mb-6">
                  Challenges that keep executives awake at night
                </motion.h2>
                <motion.p variants={itemVariants} className="text-body-large container-apple-narrow">
                  Every industry faces unique operational complexities. Here's how AI8TY transforms your biggest challenges into competitive advantages.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={challengesInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="premium-card p-8 group"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 ${primaryColor}/20 rounded-xl flex items-center justify-center`}>
                        <TrendingUp size={24} className={primaryColor} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-title mb-3">{challenge.title}</h3>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield size={16} className="text-red-400" />
                        <span className="text-caption font-medium text-red-400">Business Impact</span>
                      </div>
                      <p className="text-body text-muted-foreground mb-4">{challenge.impact}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={16} className="text-green-400" />
                        <span className="text-caption font-medium text-green-400">AI8TY Solution</span>
                      </div>
                      <p className="text-body">{challenge.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AI CAPABILITIES SHOWCASE */}
          <section ref={capabilitiesRef} className="section-apple bg-gradient-to-b from-background to-gray-950">
            <div className="container-apple">
              <motion.div
                className="text-center mb-20"
                variants={containerVariants}
                initial="hidden"
                animate={capabilitiesInView ? "visible" : "hidden"}
              >
                <motion.h2 variants={itemVariants} className="text-display mb-6">
                  AI capabilities designed for your success
                </motion.h2>
                <motion.p variants={itemVariants} className="text-body-large container-apple-narrow">
                  Purpose-built AI systems that understand your industry's nuances and deliver measurable results from day one.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={capabilitiesInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="card-apple hover-lift group"
                  >
                    <div className={`w-16 h-16 ${primaryColor}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:${primaryColor}/30 transition-colors duration-300`}>
                      <capability.icon size={28} className={primaryColor} />
                    </div>
                    
                    <h3 className="text-title mb-4">{capability.title}</h3>
                    <p className="text-body leading-relaxed mb-6">{capability.description}</p>
                    
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-400" />
                          <span className="text-caption">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDY SHOWCASE */}
          <section ref={caseStudyRef} className="section-apple">
            <div className="container-apple">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={caseStudyInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-display mb-6">Real transformation, measurable results</h2>
                  <p className="text-body-large container-apple-narrow">
                    See how {caseStudy.company} transformed their operations with AI8TY's bespoke solutions.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="premium-card p-12 mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-title-large mb-4">{caseStudy.company}</h3>
                        <p className="text-caption text-muted-foreground mb-4">{caseStudy.industry}</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-title mb-3 text-red-400">The Challenge</h4>
                          <p className="text-body leading-relaxed">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-title mb-3 text-green-400">Our Solution</h4>
                          <p className="text-body leading-relaxed">{caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="text-center">
                            <div className={`text-4xl font-bold ${primaryColor} mb-2`}>
                              {result.value}
                            </div>
                            <div className="text-caption font-medium mb-1">{result.label}</div>
                            <div className="text-caption text-muted-foreground text-xs">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="glass-apple p-6 rounded-xl">
                        <Quote size={20} className={`${primaryColor} mb-4`} />
                        <blockquote className="text-body leading-relaxed mb-4">
                          "{caseStudy.quote}"
                        </blockquote>
                        <div>
                          <div className="font-medium">{caseStudy.author}</div>
                          <div className="text-caption text-muted-foreground">{caseStudy.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* INTERACTIVE ROI CALCULATOR */}
          <section ref={roiRef} className="section-apple bg-gradient-to-b from-gray-950 to-background">
            <div className="container-apple">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={roiInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-display mb-6">Calculate your potential ROI</h2>
                  <p className="text-body-large container-apple-narrow">
                    See the projected impact of AI8TY's solutions on your business metrics.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      {roiInputs.map((input, index) => (
                        <div key={index} className="glass-apple p-6 rounded-xl">
                          <label className="block text-body font-medium mb-3">{input.label}</label>
                          <input
                            type="number"
                            value={roiValues[input.label]}
                            onChange={(e) => setRoiValues(prev => ({ ...prev, [input.label]: parseInt(e.target.value) || 0 }))}
                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="premium-card p-8">
                      <div className="text-center mb-8">
                        <Calculator size={32} className={`${primaryColor} mx-auto mb-4`} />
                        <h3 className="text-title-large mb-2">Projected Annual ROI</h3>
                        <div className={`text-6xl font-bold ${primaryColor}`}>
                          ${calculateROI().toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-body">Time to Break-even</span>
                          <span className="font-medium">3-6 months</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-body">5-Year Value</span>
                          <span className="font-medium">${(calculateROI() * 5).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-body">ROI Multiple</span>
                          <span className="font-medium text-green-400">8.5x</span>
                        </div>
                      </div>
                      
                      <button className="w-full btn-apple-premium mt-6">
                        Schedule ROI Deep Dive
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* IMPLEMENTATION JOURNEY */}
          <section ref={implementationRef} className="section-apple">
            <div className="container-apple">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={implementationInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-display mb-6">Your transformation journey</h2>
                  <p className="text-body-large container-apple-narrow">
                    A proven methodology that ensures successful AI implementation and maximum business impact.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {implementationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                      className="premium-card p-8 group"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 ${primaryColor} rounded-xl flex items-center justify-center text-white font-bold`}>
                              {index + 1}
                            </div>
                            <div>
                              <div className="text-caption text-muted-foreground">{step.phase}</div>
                              <h3 className="text-title">{step.title}</h3>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-caption text-muted-foreground">
                            <Clock size={14} />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-body leading-relaxed">{step.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-body font-medium mb-3">Key Outcomes</h4>
                          <div className="space-y-2">
                            {step.outcomes.map((outcome, oIndex) => (
                              <div key={oIndex} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-400" />
                                <span className="text-caption">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* PREMIUM CONTACT SECTION */}
          <section className="section-apple bg-gradient-to-b from-background to-gray-950">
            <div className="container-apple">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-display mb-6">Ready to transform your operations?</h2>
                <p className="text-body-large container-apple-narrow mb-12">
                  Join the ranks of forward-thinking organizations that have already transformed their operations with AI8TY.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                  <button className="btn-apple-premium hover-lift">
                    Schedule Strategic Consultation
                  </button>
                  <button className="btn-apple-secondary hover-lift">
                    Download Industry Report
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-8 text-caption text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Globe size={14} />
                    <span>GCC Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>Expert Team</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Back Navigation */}
          <section className="py-8">
            <div className="container-apple">
              <button
                onClick={() => navigate('/solutions')}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                <ArrowLeft size={16} />
                Back to Solutions Overview
              </button>
            </div>
          </section>
        </main>

        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default ComprehensiveIndustryTemplate;
