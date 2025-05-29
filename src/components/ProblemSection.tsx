
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, AlertCircle, Zap } from 'lucide-react';

const ProblemSection: React.FC = () => {
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

  const frustrations = [
    {
      icon: Clock,
      title: "Drowning in Manual Tasks",
      description: "You're spending hours on repetitive work that should be automated."
    },
    {
      icon: AlertCircle,
      title: "Marketing That Doesn't Work",
      description: "You've tried agencies and tools, but nothing delivers real results."
    },
    {
      icon: Zap,
      title: "Tech That's Too Complicated",
      description: "AI promises are everywhere, but no one explains how it actually helps your business."
    }
  ];

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden bg-depth-1"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
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
            Got a Million Things To Do –
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              But Only 24 Hours in a Day?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed max-w-3xl mx-auto">
            We get it. You're juggling growth, operations, and everything in between. 
            Meanwhile, the "solutions" you've tried just add more complexity to your plate.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {frustrations.map((frustration, index) => (
            <motion.div
              key={index}
              className="quantum-panel p-8 group text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-neural/20 rounded-xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <frustration.icon size={32} className="text-neural" />
              </motion.div>
              
              <h3 className="strategic-title text-xl mb-4 group-hover:text-neural transition-colors">
                {frustration.title}
              </h3>
              
              <p className="font-space text-white/85 leading-relaxed">
                {frustration.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="bg-depth-2/50 border border-neural/20 rounded-xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-xl font-space text-neural/90 leading-relaxed">
              💡 <strong>Here's the thing:</strong> AI8TY handles the tech so you get results. 
              No learning curves, no complexity — just time back in your day and growth you can measure.
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default ProblemSection;
