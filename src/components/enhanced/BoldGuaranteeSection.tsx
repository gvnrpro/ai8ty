
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, CheckCircle, Clock, BarChart3, RefreshCw } from 'lucide-react';
import PremiumCard from './PremiumCard';

const BoldGuaranteeSection: React.FC = () => {
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

  const guaranteeFeatures = [
    {
      icon: CheckCircle,
      text: "Applies only to done-for-you builds"
    },
    {
      icon: BarChart3,
      text: "We track and report leads in real-time"
    },
    {
      icon: Clock,
      text: "You get clarity and growth — fast"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-1 to-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      {/* Floating guarantee badge */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 border border-green-500/20 rounded-full flex items-center justify-center"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Shield size={32} className="text-green-500" />
      </motion.div>
      
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <PremiumCard 
            variant="glass" 
            className="p-12 border-2 border-green-500/30 shadow-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10"
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield size={40} className="text-white" />
                </div>
                <motion.div
                  className="absolute -inset-2 border-2 border-green-500/50 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-syne font-bold mb-6">
              💸 <span className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                The Boldest Guarantee in the GCC
              </span>
            </h2>
            
            <motion.div
              className="max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              <p className="text-xl md:text-2xl font-space text-white leading-relaxed mb-6">
                If you don't get qualified leads within 30 days of your new site going live —{' '}
                <span className="text-green-400 font-bold">you don't pay.</span>
              </p>
              
              <p className="text-lg font-space text-white/90">
                We'll either fix it, or refund you 100%. 
                <span className="text-green-400 font-semibold"> Zero-risk.</span>
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6 mt-10"
              variants={containerVariants}
            >
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-3">
                    <feature.icon size={24} className="text-green-400" />
                  </div>
                  <p className="font-space text-white/90 text-sm">
                    ✅ {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 p-6 bg-white/5 rounded-xl border border-green-500/20"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <RefreshCw size={24} className="text-green-400" />
                <span className="font-space font-semibold text-green-400 text-lg">
                  30-Day Money-Back Promise
                </span>
              </div>
              <p className="text-white/80 text-center">
                No questions asked. No hoops to jump through. If you're not getting leads, we make it right.
              </p>
            </motion.div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BoldGuaranteeSection;
