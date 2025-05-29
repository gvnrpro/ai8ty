
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
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

  const testimonials = [
    {
      quote: "We replaced 3 contractors and 6 tools with AI8ty — and we're moving faster than ever.",
      author: "Samantha K.",
      role: "SaaS Founder",
      avatar: "SK"
    },
    {
      quote: "Traffic doubled, our visibility exploded, and we cut dev costs by 70%.",
      author: "Jordan M.",
      role: "Agency Owner", 
      avatar: "JM"
    },
    {
      quote: "One AI agent saved us $2,000/month in admin costs. That's real ROI.",
      author: "Anish P.",
      role: "eCom Director",
      avatar: "AP"
    }
  ];

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 quantum-dots-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            Results That Speak
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              Louder Than Buzzwords
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="quantum-panel p-8 group hover:border-neural/30"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="text-neural/50 mb-6 group-hover:text-neural/70 transition-colors" size={32} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-sand fill-sand" />
                ))}
              </div>
              
              <blockquote className="text-lg leading-relaxed mb-6 text-white font-space">
                🗣️ "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neural/20 rounded-full flex items-center justify-center">
                  <span className="text-neural font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white font-syne">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-ai8ty-grey font-space">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default SocialProofSection;
