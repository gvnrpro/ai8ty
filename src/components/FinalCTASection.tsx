
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden bg-depth-1"
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
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-5xl lg:text-6xl mb-8">
            Let's Find the 3 Biggest Ways to
            <br />
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              Cut Costs & Grow Smarter
            </span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl font-space text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Most teams are overpaying for bloated tools, outdated strategies, and underperforming 
            agencies. AI8ty gives you a smarter way forward — at a fraction of the cost.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-xl group relative overflow-hidden px-12 py-6"
              size="lg"
            >
              <span className="relative z-10 font-medium">
                👉 Book Your Free Growth Audit
              </span>
              <ArrowRight className="ml-4 relative z-10 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-white/60 font-space"
            variants={itemVariants}
          >
            Takes 30 seconds. No commitment. Serious upside.
          </motion.p>
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
