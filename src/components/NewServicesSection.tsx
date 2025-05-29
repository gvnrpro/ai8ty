
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Bot, Search, Globe, Calendar, CheckCircle } from 'lucide-react';

const NewServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const services = [
    {
      icon: Bot,
      title: "AI Workflow Automation",
      description: "Custom-built AI agents to automate your internal operations, lead generation, and more.",
      benefits: [
        "Save 10+ hours/week",
        "Replace repetitive manual work", 
        "No tech skills needed"
      ],
      color: "neural"
    },
    {
      icon: Search,
      title: "AI Search Optimization (Beyond SEO)",
      description: "We future-proof your visibility by optimizing your digital presence for tools like ChatGPT, Perplexity, and Google SGE.",
      benefits: [
        "Structured data + LLM optimization",
        "Entity alignment and semantic search readiness",
        "Context-aware content for AI assistants"
      ],
      quote: "We make sure your business shows up when AI answers your customers' questions.",
      color: "quantum"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Lightning-fast, mobile-first websites that convert attention into action.",
      benefits: [
        "UX-first, conversion-optimized",
        "CMS or custom builds (Webflow, Shopify, etc.)",
        "Integrated with automation and SEO best practices"
      ],
      color: "intelligence"
    },
    {
      icon: Calendar,
      title: "Event Strategy & Execution",
      description: "High-impact launches, branded events, and digital activations that drive awareness and engagement.",
      benefits: [
        "Virtual & in-person events",
        "Brand storytelling & viral experiences",
        "Full funnel execution"
      ],
      color: "sand"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "border-neural/30 hover:border-neural/60 bg-neural/5 hover:bg-neural/10",
      quantum: "border-quantum/30 hover:border-quantum/60 bg-quantum/5 hover:bg-quantum/10",
      intelligence: "border-intelligence/30 hover:border-intelligence/60 bg-intelligence/5 hover:bg-intelligence/10",
      sand: "border-sand/30 hover:border-sand/60 bg-sand/5 hover:bg-sand/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural",
      quantum: "bg-quantum/20 text-quantum",
      intelligence: "bg-intelligence/20 text-intelligence",
      sand: "bg-sand/20 text-sand"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      <div className="absolute inset-0 quantum-dots-bg opacity-3"></div>
      
      <motion.div
        className="container mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            All-in-One Growth Solutions,
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              Built for Founders Who Move Fast
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-neural/80 max-w-3xl mx-auto">
            We bring deep strategy, bleeding-edge tools — and we execute everything for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={cn(
                "quantum-panel p-8 group cursor-pointer transition-all duration-500",
                getColorClasses(service.color)
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center transition-colors flex-shrink-0",
                    getIconColorClasses(service.color)
                  )}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="strategic-title text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-space text-white/85 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Benefits */}
              <ul className="space-y-3 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <motion.li 
                    key={benefitIndex}
                    className="flex items-center gap-3 text-sm font-space text-white/80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ 
                      delay: (index * 0.1) + (benefitIndex * 0.05),
                      duration: 0.5 
                    }}
                  >
                    <CheckCircle size={16} className={cn(
                      service.color === 'neural' && "text-neural",
                      service.color === 'quantum' && "text-quantum", 
                      service.color === 'intelligence' && "text-intelligence",
                      service.color === 'sand' && "text-sand"
                    )} />
                    <span>✅ {benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Quote if exists */}
              {service.quote && (
                <motion.div
                  className="bg-depth-1/50 border border-white/10 rounded-lg p-4 mt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm font-space text-neural/90 italic">
                    💬 "{service.quote}"
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default NewServicesSection;
