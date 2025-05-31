
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Zap, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';
import PremiumCard from './PremiumCard';

const IntelligenceShiftSection: React.FC = () => {
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

  const shiftPoints = [
    {
      before: "Manual data entry and spreadsheet management",
      after: "AI-powered automation handles all routine data work",
      icon: Brain
    },
    {
      before: "Spending hours chasing leads and following up",
      after: "Intelligent systems nurture leads 24/7 automatically",
      icon: Target
    },
    {
      before: "Guessing what marketing campaigns actually work",
      after: "Real-time analytics show exactly what drives revenue",
      icon: Zap
    },
    {
      before: "Team scattered across different tools and platforms",
      after: "Unified workspace where everyone has the same view",
      icon: Users
    }
  ];

  const intelligenceFeatures = [
    "Predictive lead scoring",
    "Automated follow-up sequences", 
    "Real-time performance dashboards",
    "Smart content recommendations",
    "Cross-platform data synchronization",
    "Intelligent task prioritization"
  ];

  return (
    <section 
      ref={ref}
      id="intelligence-shift"
      className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-depth-1 to-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 quantum-dots-bg opacity-10"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-syne font-bold mb-4 md:mb-6">
            ⚡ <span className="text-white">The</span>{' '}
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              Intelligence Shift
            </span>
          </h2>
          
          <p className="text-lg md:text-xl font-space text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            The businesses thriving in 2024 aren't working harder — they're working smarter. 
            Here's how the shift from manual to intelligent operations happens:
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {shiftPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard variant="glass" className="p-4 md:p-6">
                <div className="grid lg:grid-cols-3 gap-4 md:gap-6 items-center">
                  {/* Icon */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto lg:mx-0 mb-3 lg:mb-0 rounded-full bg-neural/20 border border-neural/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <point.icon size={24} className="text-neural md:w-8 md:h-8" />
                    </motion.div>
                  </div>

                  {/* Before */}
                  <div className="lg:col-span-1">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Before</span>
                      </div>
                      <p className="text-sm md:text-base text-white/80">
                        {point.before}
                      </p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="lg:col-span-1">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle size={12} className="text-green-400" />
                        <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">After</span>
                      </div>
                      <p className="text-sm md:text-base text-white/90">
                        {point.after}
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Intelligence Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={containerVariants}
        >
          {intelligenceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-4 md:p-6 text-center group hover:border-neural/30"
                hover={true}
              >
                <CheckCircle size={20} className="text-green-400 mx-auto mb-3" />
                <p className="font-space text-white/90 text-sm md:text-base">
                  {feature}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="text-4xl md:text-6xl">🚀</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-3 md:mb-4">
                  The Intelligence Advantage is Real
                </h3>
                <p className="text-base md:text-lg font-space text-white/90 leading-relaxed mb-4 md:mb-6">
                  While your competitors are still drowning in manual tasks, 
                  you'll be making strategic decisions with complete clarity and confidence.
                </p>
                <p className="text-sm md:text-base font-space text-neural/90 italic">
                  "This isn't about replacing human intelligence — it's about amplifying it."
                </p>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntelligenceShiftSection;
