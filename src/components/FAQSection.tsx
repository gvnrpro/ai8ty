
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const faqs = [
    {
      question: "Do I need to understand AI?",
      answer: "Nope. We handle all of it — strategy, setup, and execution."
    },
    {
      question: "When will I see results?",
      answer: "Many clients see measurable traction within the first 30–45 days."
    },
    {
      question: "Is this a software or a service?",
      answer: "Service — done-for-you, customized to your business."
    },
    {
      question: "What if I already have a team or agency?",
      answer: "We can support or replace. Your call."
    },
    {
      question: "What's the cost?",
      answer: "We'll build a custom package after your free call."
    }
  ];

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-4xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            You've Got Questions —
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="quantum-panel overflow-hidden"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-left p-6 text-lg font-syne font-medium text-white hover:text-neural transition-colors hover:no-underline">
                    Q: {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-lg font-space text-white/85 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button 
            onClick={scrollToContact}
            className="btn-primary text-lg group relative overflow-hidden px-8 py-4"
            size="lg"
          >
            <span className="relative z-10 font-medium">
              👉 Book Your Free Growth Strategy Call
            </span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default FAQSection;
