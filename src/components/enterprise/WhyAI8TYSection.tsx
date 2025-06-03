
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhyAI8TYSection: React.FC = () => {
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

  const attributes = ['Precision', 'Performance', 'Security'];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-slate-900"
    >
      <motion.div
        className="container mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16"
          variants={itemVariants}
        >
          Why AI8TY
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {attributes.map((attribute, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {attribute}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyAI8TYSection;
