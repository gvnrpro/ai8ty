import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Empowering the Next Generation of Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
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
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-medium mb-2">Faster Deployment</div>
              <p className="text-muted-foreground">
                Reduce time-to-production with our streamlined AI infrastructure
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-lg font-medium mb-2">ROI Growth</div>
              <p className="text-muted-foreground">
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
