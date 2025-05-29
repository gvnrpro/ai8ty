
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, Rocket, Shield } from 'lucide-react';

const HowWeHelpSection: React.FC = () => {
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

  const solutions = [
    {
      icon: Zap,
      title: "Marketing That Actually Works",
      problem: "Tired of campaigns that drain your budget with no results?",
      solution: "We build smart marketing systems that find your customers and convert them automatically.",
      benefit: "So you can focus on your business while leads flow in consistently.",
      color: "neural"
    },
    {
      icon: Target,
      title: "Effortless Automation",
      problem: "Drowning in repetitive tasks and manual follow-ups?",
      solution: "We create custom AI workflows that handle the busy work for you.",
      benefit: "So you can reclaim 10+ hours per week for high-value activities.",
      color: "quantum"
    },
    {
      icon: Rocket,
      title: "Websites That Convert",
      problem: "Is your website just sitting there looking pretty but not making sales?",
      solution: "We build fast, mobile-first sites designed to turn visitors into customers.",
      benefit: "So every visitor becomes a potential revenue opportunity.",
      color: "intelligence"
    },
    {
      icon: Shield,
      title: "A Brand That Connects",
      problem: "Struggling to stand out in a crowded market?",
      solution: "We craft compelling brand stories and visuals that resonate with your audience.",
      benefit: "So customers choose you over the competition, every time.",
      color: "sand"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "border-neural/30 hover:border-neural/60 bg-neural/5",
      quantum: "border-quantum/30 hover:border-quantum/60 bg-quantum/5",
      intelligence: "border-intelligence/30 hover:border-intelligence/60 bg-intelligence/5",
      sand: "border-sand/30 hover:border-sand/60 bg-sand/5"
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
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      
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
            Your Shortcut to Smarter Growth.
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              Here's How:
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`quantum-panel p-8 group cursor-pointer transition-all duration-500 ${getColorClasses(solution.color)}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${getIconColorClasses(solution.color)}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <solution.icon size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="strategic-title text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">
                    {solution.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-space text-white/70 text-sm uppercase tracking-wider mb-2">The Problem</p>
                  <p className="font-space text-white/85 leading-relaxed">{solution.problem}</p>
                </div>
                
                <div>
                  <p className="font-space text-white/70 text-sm uppercase tracking-wider mb-2">Our Solution</p>
                  <p className="font-space text-white/85 leading-relaxed">{solution.solution}</p>
                </div>
                
                <div className="bg-depth-1/50 border border-white/10 rounded-lg p-4">
                  <p className="font-space text-neural/90 leading-relaxed">
                    ✨ <strong>The Result:</strong> {solution.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default HowWeHelpSection;
