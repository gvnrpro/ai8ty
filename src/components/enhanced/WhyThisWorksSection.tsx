
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, Globe, BarChart3, Shield, Users } from 'lucide-react';
import PremiumCard from './PremiumCard';

const WhyThisWorksSection: React.FC = () => {
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

  const systemFeatures = [
    {
      icon: Zap,
      title: "Fast-Loading Tech",
      description: "Sites load in under 2 seconds. Every millisecond = more conversions."
    },
    {
      icon: Target,
      title: "Built-In Automation",
      description: "Lead capture, follow-up, and nurturing runs automatically 24/7."
    },
    {
      icon: Globe,
      title: "Localized SEO for UAE, KSA, Qatar",
      description: "Optimized for GCC search behavior and Arabic-English markets."
    },
    {
      icon: Users,
      title: "Real-Time Lead Routing",
      description: "Hot leads go directly to your WhatsApp or CRM instantly."
    },
    {
      icon: BarChart3,
      title: "Clear ROI Tracking",
      description: "See exactly which leads came from where and their value."
    },
    {
      icon: Shield,
      title: "Tested System",
      description: "Proven across 50+ GCC businesses. We know what works here."
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      
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
            ⚙️ <span className="text-white">Why AI8TY's System Works</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              (When Others Don't)
            </span>
          </h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl font-space text-white/90 mb-8">
              Most websites are built by designers. We're operators.
            </p>
            <p className="text-lg font-space text-neural/80">
              We build systems that sell — and we've tested this across GCC markets for years.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-6 h-full text-center group hover:border-neural/30"
                hover={true}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-neural/20 to-quantum/20 border border-neural/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={28} className="text-neural" />
                </motion.div>
                
                <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-neural transition-colors">
                  ✅ {feature.title}
                </h3>
                
                <p className="font-space text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💬</div>
              <div className="flex-1">
                <p className="text-lg md:text-xl font-space text-white leading-relaxed italic">
                  "We don't just build websites. We build revenue systems that work while you sleep. 
                  Every feature is tested for one thing: making you more money."
                </p>
                <div className="mt-4 text-right">
                  <span className="text-neural font-semibold">— AI8TY Operations Team</span>
                </div>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyThisWorksSection;
