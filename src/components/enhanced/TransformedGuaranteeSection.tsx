
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, CheckCircle, Clock, BarChart3, RefreshCw, Target, Zap } from 'lucide-react';
import PremiumCard from './PremiumCard';

const TransformedGuaranteeSection: React.FC = () => {
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
      text: "Applies only to done-for-you builds",
      color: "text-green-500"
    },
    {
      icon: BarChart3,
      text: "We track and report leads in real-time",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      text: "You get clarity and growth — fast",
      color: "text-purple-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-1 via-green-900/10 to-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      {/* Money-back floating badge */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border-2 border-green-500/30 rounded-full flex items-center justify-center bg-green-500/10 backdrop-blur-sm"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="text-center">
          <Shield size={32} className="text-green-500 mx-auto mb-1" />
          <div className="text-green-400 text-xs font-bold">30-DAY</div>
          <div className="text-white text-xs">GUARANTEE</div>
        </div>
      </motion.div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
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
            className="p-8 md:p-12 border-4 border-green-500/40 shadow-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 backdrop-blur-xl"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Shield size={48} className="text-white" />
                </div>
                <motion.div
                  className="absolute -inset-3 border-3 border-green-400/60 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-6 border-2 border-green-400/30 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-syne font-bold mb-8">
              💸 <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                The Boldest Guarantee in the GCC
              </span>
            </h2>
            
            <motion.div
              className="max-w-4xl mx-auto mb-10"
              variants={itemVariants}
            >
              <p className="text-2xl md:text-3xl font-space text-white leading-relaxed mb-8 font-bold">
                If you don't get qualified leads within 30 days of your new site going live —{' '}
                <span className="text-green-400 text-3xl md:text-4xl">you don't pay.</span>
              </p>
              
              <p className="text-xl md:text-2xl font-space text-white/95 mb-6">
                We'll either fix it, or refund you 100%. 
                <span className="text-green-400 font-bold"> Zero-risk.</span>
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6 mt-12 mb-10"
              variants={containerVariants}
            >
              {guaranteeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white/5 border border-green-500/20 rounded-xl backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mb-4">
                    <feature.icon size={28} className={feature.color} />
                  </div>
                  <p className="font-space text-white/95 text-lg font-semibold">
                    ✅ {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 p-8 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-2xl border-2 border-green-500/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <RefreshCw size={32} className="text-green-400" />
                <span className="font-space font-bold text-green-400 text-2xl">
                  30-Day Money-Back Promise
                </span>
                <Zap size={32} className="text-green-400" />
              </div>
              <p className="text-white/90 text-center text-xl leading-relaxed">
                No questions asked. No hoops to jump through. 
                <br className="hidden md:block" />
                <span className="font-bold">If you're not getting leads, we make it right.</span>
              </p>
            </motion.div>

            {/* Risk Reversal Statement */}
            <motion.div
              className="mt-8 p-6 bg-white/5 border border-white/20 rounded-xl"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Target size={24} className="text-white" />
                <span className="font-space font-bold text-white text-lg">
                  This Means ALL The Risk Is On Us
                </span>
              </div>
              <p className="text-white/80 text-center">
                You only pay when your site starts generating qualified leads. Period.
              </p>
            </motion.div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransformedGuaranteeSection;
