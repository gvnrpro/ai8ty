
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Target, Users, Zap, Globe, Shield } from 'lucide-react';
import PremiumCard from './PremiumCard';

const AboutSection: React.FC = () => {
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

  const coreValues = [
    {
      icon: Brain,
      title: "Intelligence-First",
      description: "Every system we build leverages AI to reduce manual work and increase precision."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by one metric: how much time and money we save our clients."
    },
    {
      icon: Users,
      title: "GCC-Native",
      description: "Built for the Middle East market with deep understanding of local business culture."
    }
  ];

  const stats = [
    { number: "500+", label: "Hours Saved Weekly", description: "Across our client base" },
    { number: "50+", label: "GCC Businesses", description: "Trust AI8TY systems" },
    { number: "24/7", label: "System Uptime", description: "Always working for you" }
  ];

  return (
    <section 
      ref={ref}
      id="about-section"
      className="py-16 md:py-24 px-4 md:px-6 bg-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
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
            🧠 <span className="text-white">Why</span>{' '}
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              AI8TY Exists
            </span>
          </h2>
          
          <p className="text-lg md:text-xl font-space text-white/90 max-w-3xl mx-auto leading-relaxed">
            We started AI8TY because we were tired of seeing smart business owners 
            waste hours on tasks that technology should handle automatically.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <PremiumCard variant="glass" className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-4">
                  The Problem We Solve
                </h3>
                <p className="font-space text-white/80 mb-4 text-sm md:text-base leading-relaxed">
                  Every day, we watched brilliant entrepreneurs in Dubai, Riyadh, and Doha 
                  spending 60% of their time on administrative work instead of growing their business.
                </p>
                <p className="font-space text-white/80 text-sm md:text-base leading-relaxed">
                  That's not just inefficient — it's heartbreaking. These are the minds that should 
                  be shaping the future of the GCC economy.
                </p>
              </div>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 md:p-4 bg-neural/10 rounded-lg border border-neural/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-neural mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/60">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={containerVariants}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-4 md:p-6 h-full text-center group hover:border-neural/30"
                hover={true}
              >
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-neural/20 border border-neural/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={24} className="text-neural md:w-7 md:h-7" />
                </motion.div>
                
                <h3 className="text-lg md:text-xl font-syne font-bold text-white mb-2 md:mb-3 group-hover:text-neural transition-colors">
                  {value.title}
                </h3>
                
                <p className="font-space text-white/80 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Promise */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="text-4xl md:text-6xl">🤝</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-3 md:mb-4">
                  Our Promise to the GCC
                </h3>
                <p className="text-base md:text-lg font-space text-white/90 leading-relaxed">
                  We're not just building technology — we're building the infrastructure 
                  that will power the next generation of Middle Eastern businesses. 
                  Every system we create makes our region more competitive globally.
                </p>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
