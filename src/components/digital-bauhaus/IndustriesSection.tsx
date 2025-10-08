import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, HeartPulse, Plane, Scale, Factory, ShoppingBag } from 'lucide-react';

const IndustriesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const industries = [
    { icon: Building2, name: "Financial Services", desc: "Banking & Investment" },
    { icon: HeartPulse, name: "Healthcare", desc: "Medical & Pharma" },
    { icon: Plane, name: "Aviation & Logistics", desc: "Transportation" },
    { icon: Scale, name: "Legal", desc: "Law Firms" },
    { icon: Factory, name: "Manufacturing", desc: "Industrial" },
    { icon: ShoppingBag, name: "Retail", desc: "Commerce" }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Specialized AI solutions for enterprise organizations across the GCC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <industry.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-1">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
