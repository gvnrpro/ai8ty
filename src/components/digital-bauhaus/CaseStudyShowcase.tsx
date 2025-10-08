import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudyShowcase = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-sm font-medium text-primary mb-4">CASE STUDY</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How a Financial Institution Transformed Operations with AI
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A leading GCC financial institution implemented our AI infrastructure 
                to automate compliance monitoring, reduce processing time by 87%, 
                and improve accuracy to 99.4%.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold">Automated Compliance</div>
                    <div className="text-muted-foreground">Real-time monitoring across 47 regulatory frameworks</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold">Processing Speed</div>
                    <div className="text-muted-foreground">87% reduction in document processing time</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <div className="font-semibold">Accuracy</div>
                    <div className="text-muted-foreground">99.4% accuracy in risk assessment</div>
                  </div>
                </div>
              </div>
              <Button className="group">
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-12 border border-primary/20">
                <div className="absolute inset-0 bg-grid-white/5 rounded-2xl" />
                <div className="relative space-y-6">
                  <div className="text-5xl font-bold">87%</div>
                  <div className="text-xl font-medium">Faster Processing</div>
                  <div className="h-px bg-border" />
                  <div className="text-5xl font-bold">99.4%</div>
                  <div className="text-xl font-medium">Accuracy Rate</div>
                  <div className="h-px bg-border" />
                  <div className="text-5xl font-bold">$2.4M</div>
                  <div className="text-xl font-medium">Annual Savings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
