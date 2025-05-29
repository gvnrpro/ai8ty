
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const WhoWeAreSection: React.FC = () => {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
              You Don't Need a Bigger Team.
              <br />
              <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
                You Need a Smarter One.
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-space text-white/90 leading-relaxed">
                At AI8ty, we blend AI-powered automation with digital marketing, SEO, and creative 
                execution to help brands scale smarter — not harder.
              </p>
              
              <p className="text-lg md:text-xl font-space text-white/90 leading-relaxed">
                From automating your support and outreach to building conversion-ready websites 
                and optimizing for the next generation of search, we replace tools, teams, and 
                agencies with a high-performance partner.
              </p>
              
              <motion.div
                className="bg-depth-2/50 border border-neural/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <p className="text-lg font-space text-neural/90 leading-relaxed italic">
                      "We're not here to sell you software. We're here to solve real problems 
                      and help you grow — with tech that works."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-xl">
              {/* Placeholder for branded animation/video */}
              <div className="aspect-square bg-gradient-to-br from-neural/20 via-quantum/20 to-intelligence/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <motion.div
                  className="w-32 h-32 border-2 border-neural/40 rounded-full flex items-center justify-center"
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
                  <motion.div
                    className="w-16 h-16 bg-neural/30 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-8 h-8 bg-neural rounded-full"></div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-neural/10 to-transparent rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default WhoWeAreSection;
