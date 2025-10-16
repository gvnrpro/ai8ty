import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ApproachSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "Deep analysis of your current operations and AI readiness"
    },
    {
      number: "02",
      title: "Architecture",
      description: "Custom AI infrastructure designed for your specific needs"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Seamless deployment with minimal disruption to operations"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous improvement and scaling as your needs evolve"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4">Our Approach</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            A systematic methodology that ensures successful AI implementation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary/20 mb-3 md:mb-4">{step.number}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
