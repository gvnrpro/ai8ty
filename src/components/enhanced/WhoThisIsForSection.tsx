
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, MapPin, CreditCard, Clock, Target, X } from 'lucide-react';
import PremiumCard from './PremiumCard';

const WhoThisIsForSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const perfectForCriteria = [
    {
      icon: Building,
      title: "Small to Mid-Size Business in UAE or GCC",
      description: "Annual revenue AED 500K - AED 50M. Growing team. Serious about scale."
    },
    {
      icon: CreditCard,
      title: "Tired of Paying for Clicks with No Sales",
      description: "You're spending on ads, SEO, or marketing but not seeing real ROI. Time to fix the funnel."
    },
    {
      icon: Clock,
      title: "Don't Have Time to Deal with Tech",
      description: "You run a business, not a web agency. You want results, not another project to manage."
    },
    {
      icon: Target,
      title: "Want Leads — Not Just Another Pretty Site",
      description: "Your website should be your #1 sales rep. If it's not making money, it's costing money."
    }
  ];

  const notForCriteria = [
    "DIY builders who want to 'learn as they go'",
    "Businesses looking for the cheapest option",
    "Companies that need results 'yesterday' (quality takes time)",
    "Organizations that don't value ROI tracking"
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
            🎯 <span className="text-white">This Is</span>{' '}
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Perfect For You If:
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 max-w-3xl mx-auto">
            We're selective about who we work with. Here's who gets the best results:
          </p>
        </motion.div>

        {/* Perfect For Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {perfectForCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-6 h-full group hover:border-green-500/30"
                hover={true}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <criteria.icon size={24} className="text-green-400" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-syne font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      ✅ {criteria.title}
                    </h3>
                    <p className="font-space text-white/80 text-sm leading-relaxed">
                      {criteria.description}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Not Perfect For Section */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <PremiumCard variant="glass" className="p-8 border border-red-500/20">
            <h3 className="text-2xl font-syne font-bold text-white mb-6 text-center">
              ❌ This Probably Isn't For You If:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {notForCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 1.0 + (index * 0.1), duration: 0.5 }}
                >
                  <X size={20} className="text-red-400 mt-1 flex-shrink-0" />
                  <p className="font-space text-white/80 text-sm">
                    {criteria}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <p className="text-yellow-400 text-sm text-center">
                💡 Still not sure? Book a call anyway. We'll tell you honestly if we're a good fit.
              </p>
            </motion.div>
          </PremiumCard>
        </motion.div>

        {/* Final Clarity Statement */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-space text-neural/90 leading-relaxed">
              We'd rather work with 10 serious businesses than 100 tire-kickers. 
              Quality partnerships create quality results.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoThisIsForSection;
