import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTASection: React.FC = () => {
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
      className="py-24 px-6 relative overflow-hidden bg-depth-1"
    >
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neural/10 via-quantum/10 to-intelligence/10"></div>
        <div className="absolute inset-0 neural-grid-bg opacity-10"></div>
        <div className="absolute inset-0 quantum-dots-bg opacity-5"></div>
      </div>
      
      <motion.div
        className="container mx-auto max-w-5xl px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            Ready to Create Something Bold?
          </h2>
          <p className="text-xl md:text-2xl font-space text-white/80 max-w-2xl mx-auto">
            Let’s build a brand, website, or campaign that people remember. Reach out and let’s make it happen.
          </p>
        </motion.div>
        
        <motion.div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10" variants={containerVariants}>
          <Button
            size="lg"
            className="btn-primary text-lg px-8 py-4 font-bold flex items-center gap-3 shadow-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Start a Project <ArrowRight size={20} />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-lg px-8 py-4 font-bold flex items-center gap-3"
            onClick={() => window.location.href = '#contact'}
          >
            Book a Call <Phone size={20} />
          </Button>
        </motion.div>
        
        {/* Floating elements for visual appeal */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-neural/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border border-quantum/30 rounded-lg"
          animate={{ 
            rotate: [0, -180, -360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
