
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Settings, Globe, Brain, Rocket, CheckCircle } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Users,
      text: "A full-service growth team (for the cost of 1 hire)",
      color: "neural"
    },
    {
      icon: Settings,
      text: "Custom AI workflows tailored to your stack",
      color: "quantum"
    },
    {
      icon: Globe,
      text: "A website built to perform — not just impress",
      color: "intelligence"
    },
    {
      icon: Brain,
      text: "AI Search Optimization for the new search era",
      color: "sand"
    },
    {
      icon: Rocket,
      text: "Events, content, and marketing execution",
      color: "neural"
    },
    {
      icon: CheckCircle,
      text: "Strategy, reporting, and results baked in",
      color: "quantum"
    }
  ];

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
      className="neural-section relative overflow-hidden bg-depth-1"
    >
      {/* Background elements */}
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            What You Get
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              When You Work With Us
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="quantum-panel p-6 group hover:border-neural/30"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                    getIconColorClasses(benefit.color)
                  )}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon size={24} />
                </motion.div>
                <div className="flex-1">
                  <p className="font-space text-white/90 leading-relaxed">
                    🎯 {benefit.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block bg-depth-2/80 border border-neural/20 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg group relative overflow-hidden px-8 py-4"
              size="lg"
            >
              <span className="relative z-10 font-medium">
                👉 Book Your Free Growth Strategy Call
              </span>
              <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
            </Button>
            
            <p className="text-sm text-white/60 mt-4 font-space">
              No sales pressure. No bloat. Just growth.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default WhatYouGetSection;
