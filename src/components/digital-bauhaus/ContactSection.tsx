import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4"
            >
              Start Your AI Transformation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground px-4"
            >
              Schedule a consultation to discuss your specific needs
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-12"
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="bg-background min-h-[44px]" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background min-h-[44px]" />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your company" className="bg-background min-h-[44px]" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your AI needs..." 
                  className="bg-background min-h-[100px] md:min-h-[120px]" 
                />
              </div>
              <Button className="w-full group min-h-[44px]">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
