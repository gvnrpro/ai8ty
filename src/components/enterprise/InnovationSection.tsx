
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const InnovationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const innovations = [
    'AI frameworks for sovereign wealth fund portfolio risk mapping',
    'Predictive utility load optimization models for national infrastructure',
    'Multi-market real estate absorption forecasting engines',
    'Automated FX & cross-border settlement anomaly detection',
    'Emergency services demand prediction models for municipal agencies'
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-slate-800"
    >
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-3 bg-blue-600/10 border border-blue-600/20 rounded-full px-6 py-3 text-sm font-medium text-blue-400 backdrop-blur-sm mb-8">
            <Zap size={16} />
            <span>Innovation Pipeline</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            What We're Working On
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At AI8TY, we continuously explore new operational AI applications tailored for the Gulf's evolving regulatory, financial, and infrastructure environments.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Currently in private beta:
          </h3>
          
          <div className="space-y-4">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-700 rounded-sm hover:border-slate-600 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-slate-300 text-lg">{innovation}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-slate-400 mb-8">
            Available to select clients via private pilot programs.
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300 hover:border-slate-500">
            <span>Join Briefing List</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InnovationSection;
