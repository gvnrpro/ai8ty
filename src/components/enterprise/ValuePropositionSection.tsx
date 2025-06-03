
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const principles = [
    {
      icon: Target,
      title: "Foundational Model Rigor",
      description: "Systematic validation and optimization of core AI architectures"
    },
    {
      icon: Zap,
      title: "Domain-Adapted Performance",
      description: "Specialized implementations tailored to sector-specific requirements"
    },
    {
      icon: Shield,
      title: "Institutional-Grade Security",
      description: "Enterprise-level governance, compliance, and risk management protocols"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-slate-50"
    >
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Guiding Principles
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 bg-white border border-slate-200 rounded-sm hover:border-slate-300 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-sm flex items-center justify-center">
                <principle.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {principle.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ValuePropositionSection;
