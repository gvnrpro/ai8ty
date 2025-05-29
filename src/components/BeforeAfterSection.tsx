
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, X, CheckCircle } from 'lucide-react';

const BeforeAfterSection: React.FC = () => {
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

  const beforeItems = [
    "Scattered marketing efforts across multiple platforms",
    "Manual follow-ups and lost leads",
    "Time wasted on repetitive admin tasks",
    "Unclear ROI from marketing spend",
    "Feeling overwhelmed and reactive"
  ];

  const afterItems = [
    "Integrated systems working 24/7",
    "Automated lead nurturing and conversion",
    "AI handling routine tasks automatically",
    "Clear metrics and predictable growth",
    "In control and focused on strategy"
  ];

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden bg-depth-1"
    >
      <div className="absolute inset-0 quantum-dots-bg opacity-5"></div>
      
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
            From Overwhelmed
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              to In Control
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed max-w-3xl mx-auto">
            See the transformation when you work with AI8TY
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
        >
          {/* Before */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-syne font-bold text-white/70 mb-4">Before AI8TY</h3>
              <div className="w-20 h-1 bg-red-500/50 mx-auto rounded"></div>
            </div>
            
            <div className="quantum-panel p-8 border-red-500/20">
              <h4 className="text-xl font-syne font-bold text-red-400 mb-6">Scattered Efforts, Manual Overload</h4>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <X size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="font-space text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Arrow */}
          <motion.div 
            className="hidden md:flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="bg-neural/20 rounded-full p-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={32} className="text-neural" />
            </motion.div>
          </motion.div>
          
          {/* After */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-syne font-bold text-white mb-4">After AI8TY</h3>
              <div className="w-20 h-1 bg-green-500/70 mx-auto rounded"></div>
            </div>
            
            <div className="quantum-panel p-8 border-green-500/20">
              <h4 className="text-xl font-syne font-bold text-green-400 mb-6">Integrated Systems, Automated Efficiency</h4>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="font-space text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="bg-depth-2/50 border border-neural/20 rounded-xl p-8 backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-xl font-space text-neural/90 leading-relaxed">
              🎯 <strong>The bottom line:</strong> You get your time back, your growth becomes predictable, 
              and you finally feel in control of your business operations.
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default BeforeAfterSection;
