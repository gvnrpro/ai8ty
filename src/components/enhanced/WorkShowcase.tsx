
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Users, DollarSign, ArrowRight } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const WorkShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const caseStudies = [
    {
      title: "Austin Tech Startup",
      industry: "SaaS Development",
      location: "Austin, TX",
      challenge: "Manual user onboarding across multiple tools",
      solution: "AI-powered onboarding automation with intelligent routing",
      results: [
        { metric: "15 hours", label: "Saved per week" },
        { metric: "340%", label: "User activation improvement" },
        { metric: "$2.3M", label: "Additional ARR tracked" }
      ],
      testimonial: "AI8TY gave us our weekends back. Everything just works now."
    },
    {
      title: "Toronto Design Agency",
      industry: "Creative Services", 
      location: "Toronto, CA",
      challenge: "Client project management took 3 weeks",
      solution: "Automated workflow system with client collaboration portal",
      results: [
        { metric: "3 days", label: "New project setup time" },
        { metric: "92%", label: "Client satisfaction score" },
        { metric: "25 hours", label: "Saved monthly per project" }
      ],
      testimonial: "Our clients are amazed by how smooth everything is. We look like industry leaders now."
    },
    {
      title: "Berlin E-commerce Collective",
      industry: "Online Retail",
      location: "Berlin, DE", 
      challenge: "Inventory management chaos across platforms",
      solution: "Unified inventory system with AI-powered demand predictions",
      results: [
        { metric: "40%", label: "Inventory optimization" },
        { metric: "€850K", label: "Cost savings annually" },
        { metric: "99.8%", label: "System uptime" }
      ],
      testimonial: "We went from spreadsheet hell to having full visibility. Game changer."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="work-showcase"
      className="py-16 md:py-24 px-4 md:px-6 bg-depth-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-syne font-bold mb-4 md:mb-6">
            📈 <span className="text-white">Real Results from</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Real Global Builders
            </span>
          </h2>
          
          <p className="text-lg md:text-xl font-space text-white/90 max-w-3xl mx-auto leading-relaxed">
            These aren't theoretical case studies. These are actual businesses 
            that transformed their operations with AI8TY systems.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-6 md:p-8 group hover:border-green-500/30"
                hover={true}
              >
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-space text-green-400 font-semibold">
                        {study.location}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-4">{study.industry}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Challenge</span>
                        <p className="text-sm text-white/80 mt-1">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Solution</span>
                        <p className="text-sm text-white/80 mt-1">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-syne font-bold text-white mb-4">Results</h4>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 md:p-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1.0 + (index * 0.1) + (resultIndex * 0.1), duration: 0.5 }}
                        >
                          <div className="text-xl md:text-2xl font-bold text-green-400 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs md:text-sm text-white/80">
                            {result.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="lg:col-span-1">
                    <div className="bg-neural/5 border border-neural/20 rounded-lg p-4 md:p-6 h-full flex flex-col justify-center">
                      <div className="text-3xl md:text-4xl mb-4">💬</div>
                      <blockquote className="text-sm md:text-base font-space text-white/90 italic leading-relaxed mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-xs text-white/60">
                        — {study.title} Leadership Team
                      </div>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="font-space text-white/90 mb-6 text-sm md:text-base">
              Join 50+ builders and creators who have transformed their workflows with AI8TY.
            </p>
            <PremiumButton
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Start Your Transformation
            </PremiumButton>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkShowcase;
