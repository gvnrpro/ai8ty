import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4"
            >
              Empowering the Next Generation of Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4"
            >
              We're building the infrastructure that enables organizations to harness 
              artificial intelligence at scale. Our mission is to make enterprise-grade 
              AI accessible, reliable, and transformative.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-12 lg:mt-16"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-base sm:text-lg font-medium mb-2">Faster Deployment</div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Reduce time-to-production with our streamlined AI infrastructure
              </p>
            </div>
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-base sm:text-lg font-medium mb-2">ROI Growth</div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Organizations see exponential returns within the first year
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
