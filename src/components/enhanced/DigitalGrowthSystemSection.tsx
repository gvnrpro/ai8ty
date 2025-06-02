
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, TrendingUp, Smartphone, Bot, Search } from 'lucide-react';
import PremiumCard from './PremiumCard';

const DigitalGrowthSystemSection: React.FC = () => {
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

  const services = [
    {
      icon: Zap,
      title: "Conversion-Optimized Website",
      description: "Speed-first, mobile-first, SEO-ready websites that turn visitors into leads",
      features: ["<2s load times", "Mobile conversion focus", "A/B tested layouts", "Lead capture systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "Automated Lead Systems",
      description: "CRM integrations, WhatsApp, lead scoring, triggers that work 24/7",
      features: ["WhatsApp integration", "Lead scoring", "Auto-follow up", "CRM sync"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "Search Visibility & Authority SEO",
      description: "Localized, AI-ready, schema-structured, GenAI-targeted optimization",
      features: ["GCC market focus", "AI search ready", "Schema markup", "Authority building"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-ai8ty-black to-depth-1 relative overflow-hidden"
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
            <span className="text-white">What We Deliver:</span>
            <br />
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              Your Digital Growth System
            </span>
          </h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl font-space text-white/90 mb-8">
              A single, integrated stack to attract, convert, and close clients.
            </p>
            <p className="text-lg font-space text-neural/80">
              Not just a website. A complete revenue-generating system.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-8 h-full text-center group hover:border-neural/30"
                hover={true}
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={36} className="text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-syne font-bold text-white mb-4 group-hover:text-neural transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-space text-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.0 + (index * 0.1) + (featureIndex * 0.05), duration: 0.5 }}
                    >
                      <Target size={16} className="text-neural flex-shrink-0" />
                      <span className="text-white/90 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingUp size={32} className="text-neural" />
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white">
                Complete Integration
              </h3>
            </div>
            <p className="text-xl font-space text-white leading-relaxed">
              Everything works together seamlessly. Your website attracts visitors, converts them into leads, 
              and automatically nurtures them until they're ready to buy.{' '}
              <span className="text-neural font-bold">This is how modern businesses grow.</span>
            </p>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DigitalGrowthSystemSection;
