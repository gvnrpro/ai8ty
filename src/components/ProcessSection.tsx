
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Phone, FileText, Rocket, TrendingUp } from 'lucide-react';

const ProcessSection: React.FC = () => {
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

  const steps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "We identify your bottlenecks, goals, and automation opportunities.",
      color: "neural"
    },
    {
      icon: FileText,
      title: "Custom Growth Blueprint",
      description: "We plan across automation, SEO, design, and marketing — tailored to your business.",
      color: "quantum"
    },
    {
      icon: Rocket,
      title: "Full Implementation",
      description: "We build, launch, and manage the systems for you.",
      color: "intelligence"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Optimization",
      description: "We track results, iterate, and improve performance over time.",
      color: "sand"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural border-neural/30",
      quantum: "bg-quantum/20 text-quantum border-quantum/30",
      intelligence: "bg-intelligence/20 text-intelligence border-intelligence/30",
      sand: "bg-sand/20 text-sand border-sand/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden bg-depth-1"
    >
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            Our Process:
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              Done-for-You Growth with Zero Guesswork
            </span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neural via-quantum to-intelligence transform -translate-x-1/2"></div>
          
          <motion.div 
            className="space-y-16 lg:space-y-24"
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative flex flex-col lg:flex-row items-center gap-8",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
                variants={itemVariants}
              >
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className={cn(
                      "w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-sm",
                      getColorClasses(step.color)
                    )}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon size={32} />
                  </motion.div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neural rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <motion.div
                  className={cn(
                    "flex-1 text-center lg:text-left",
                    index % 2 === 1 ? "lg:text-right" : ""
                  )}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-depth-2/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                    <h3 className="strategic-title text-xl md:text-2xl mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg font-space text-white/85 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Spacer for desktop layout */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default ProcessSection;
