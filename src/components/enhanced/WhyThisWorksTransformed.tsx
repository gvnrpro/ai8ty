
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, TrendingUp, Clock, CheckCircle, BarChart } from 'lucide-react';
import PremiumCard from './PremiumCard';

const WhyThisWorksTransformed: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const systemFeatures = [
    {
      icon: Zap,
      title: "Fast-loading tech",
      description: "Sites that load in under 2 seconds",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "Built-in automation",
      description: "Lead capture that works 24/7",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Localized SEO for UAE, KSA, Qatar",
      description: "Dominate your local market",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Real-time lead routing",
      description: "Never miss a potential customer",
      color: "text-purple-400"
    },
    {
      icon: BarChart,
      title: "Clear ROI tracking",
      description: "See exactly what's working",
      color: "text-red-400"
    }
  ];

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

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-2 via-blue-900/10 to-depth-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-10"></div>
      
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
            ⚙️ <span className="text-white">Why AI8TY's System Works</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              (When Others Don't)
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed mb-8">
              Most websites are built by designers. 
              <span className="text-blue-400 font-bold"> We're operators.</span>
            </p>
            
            <p className="text-lg md:text-xl font-space text-white/80 leading-relaxed">
              We build systems that sell — and we've tested this across GCC markets for years.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <PremiumCard variant="glass" className="p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon size={28} />
                  </div>
                  
                  <h3 className="text-white font-syne font-bold text-lg mb-3">
                    ✅ {feature.title}
                  </h3>
                  
                  <p className="text-white/80 font-space text-sm leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Operator vs Designer Comparison */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {/* Designers */}
          <PremiumCard variant="glass" className="p-8 border border-red-500/30 bg-red-500/5">
            <h3 className="text-2xl font-syne font-bold text-red-400 mb-6 text-center">
              🎨 How Designers Build
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-1">
                  <span className="text-red-400 text-sm">✗</span>
                </div>
                <p className="text-white/80 font-space">Focus on how it looks</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-1">
                  <span className="text-red-400 text-sm">✗</span>
                </div>
                <p className="text-white/80 font-space">Generic templates</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-1">
                  <span className="text-red-400 text-sm">✗</span>
                </div>
                <p className="text-white/80 font-space">No sales psychology</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-1">
                  <span className="text-red-400 text-sm">✗</span>
                </div>
                <p className="text-white/80 font-space">Slow loading times</p>
              </div>
            </div>
          </PremiumCard>

          {/* Operators */}
          <PremiumCard variant="glass" className="p-8 border border-green-500/30 bg-green-500/5">
            <h3 className="text-2xl font-syne font-bold text-green-400 mb-6 text-center">
              ⚙️ How Operators Build
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-white/80 font-space">Focus on what converts</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-white/80 font-space">Custom for your market</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-white/80 font-space">Built-in sales funnels</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-white/80 font-space">Lightning-fast performance</p>
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-space text-blue-400 leading-relaxed font-bold">
              "The difference? Our sites are built to sell, not just to look pretty."
            </p>
            <div className="mt-4">
              <span className="text-white/70 font-space text-lg">— AI8TY Revenue Team</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyThisWorksTransformed;
