
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Target, MapPin } from 'lucide-react';
import PremiumCard from './PremiumCard';

const GCCProofSection: React.FC = () => {
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

  const caseResults = [
    {
      industry: "Retail",
      flag: "🇦🇪",
      result: "3× Leads in 6 Weeks",
      description: "E-commerce fashion brand saw 300% increase in qualified leads through mobile optimization and conversion funnels",
      metric: "300%",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Legal",
      flag: "🇸🇦",
      result: "5× Time Saved via Automation",
      description: "Law firm automated client intake and consultation booking, freeing up 20+ hours per week for billable work",
      metric: "5×",
      icon: Clock,
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "Hospitality",
      flag: "🇦🇪",
      result: "+42% Direct Bookings in 30 Days",
      description: "Dubai hotel reduced OTA dependency with optimized booking flow and local SEO strategy",
      metric: "+42%",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-1 to-depth-2 relative overflow-hidden"
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
            🏆 <span className="text-white">GCC Brands Trust AI8TY</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              To Deliver Growth That Performs
            </span>
          </h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl font-space text-white/90 mb-8">
              Real businesses. Real results. Real ROI.
            </p>
            <p className="text-lg font-space text-neural/80">
              These aren't vanity metrics — they're revenue-impacting results that matter to your bottom line.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {caseResults.map((caseItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-8 h-full text-center group hover:border-neural/30"
                hover={true}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-3xl">{caseItem.flag}</span>
                  <h3 className="text-xl font-syne font-bold text-white">
                    {caseItem.industry}
                  </h3>
                </div>

                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-r ${caseItem.color} flex items-center justify-center shadow-2xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-2xl">{caseItem.metric}</span>
                </motion.div>
                
                <h4 className="text-2xl font-syne font-bold text-white mb-4 group-hover:text-neural transition-colors">
                  {caseItem.result}
                </h4>
                
                <p className="font-space text-white/80 leading-relaxed">
                  {caseItem.description}
                </p>

                <motion.div
                  className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MapPin size={16} className="text-neural" />
                    <span className="text-neural font-semibold text-sm">GCC Market Expertise</span>
                  </div>
                </motion.div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">📊</span>
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white">
                Results You Can Measure
              </h3>
            </div>
            <p className="text-xl font-space text-white leading-relaxed">
              We don't just build websites — we engineer growth systems with trackable ROI. 
              Every project comes with clear metrics and ongoing performance monitoring.{' '}
              <span className="text-neural font-bold">Your success is our success.</span>
            </p>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GCCProofSection;
