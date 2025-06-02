
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, TrendingDown, DollarSign, Users, AlertTriangle } from 'lucide-react';
import PremiumCard from './PremiumCard';

const ClarityProblemSection: React.FC = () => {
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

  const problemPoints = [
    {
      icon: TrendingDown,
      title: "No search visibility",
      description: "Your ideal clients can't find you when they're ready to buy",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Traffic without conversion",
      description: "Visitors browse and leave without taking action",
      color: "text-orange-500"
    },
    {
      icon: DollarSign,
      title: "High ad spend, low returns",
      description: "Pouring money into ads that don't generate quality leads",
      color: "text-yellow-500"
    },
    {
      icon: AlertTriangle,
      title: "Manual follow-up and missed leads",
      description: "Hot prospects slip through the cracks due to slow response",
      color: "text-red-600"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-2 to-ai8ty-black relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
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
            <span className="text-white">Clarity. Conversion. Consistency.</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Most Sites Deliver None.
            </span>
          </h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl font-space text-white/90 mb-8">
              Your website should be generating leads while you sleep. Instead, it's just sitting there, looking pretty, doing nothing.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {problemPoints.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-6 h-full group hover:border-red-500/30 border-red-500/10"
                hover={true}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} className="text-red-400" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-syne font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      ❌ {problem.title}
                    </h3>
                    <p className="font-space text-white/80 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="glass" className="p-8 max-w-4xl mx-auto border-2 border-red-500/20 bg-red-500/5">
            <div className="flex items-center justify-center gap-4 mb-6">
              <AlertTriangle size={32} className="text-red-400" />
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white">
                The Hard Truth
              </h3>
              <AlertTriangle size={32} className="text-red-400" />
            </div>
            <p className="text-xl md:text-2xl font-space text-white leading-relaxed">
              <span className="text-red-400 font-bold">If your site isn't producing leads, it's costing you money.</span>
              <br className="hidden md:block" />
              Every day without optimization is revenue walking out the door.
            </p>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClarityProblemSection;
