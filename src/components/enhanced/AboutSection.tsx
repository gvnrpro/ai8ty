import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, PenTool, Camera, Lightbulb } from 'lucide-react';
import PremiumCard from './PremiumCard';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const aboutCards = [
    {
      icon: PenTool,
      title: "Bold Creativity",
      description: "We turn ideas into visual identities, digital experiences, and campaigns that stand out."
    },
    {
      icon: Camera,
      title: "Visual Storytelling",
      description: "We believe in the power of design, imagery, and motion to move people."
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "Every project is guided by insight, research, and a drive to make an impact."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We work closely with visionary brands and founders to create something remarkable."
    }
  ];

  return (
    <section 
      ref={ref}
      id="about-section"
      className="py-16 md:py-24 px-4 md:px-6 bg-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-xl md:text-2xl font-space text-white/80 max-w-2xl mx-auto">
            We are a creative agency for brands who want to make waves. Minimal, visual, and relentlessly original.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
          {aboutCards.map((card, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PremiumCard variant="neural" className="h-full flex flex-col items-center text-center p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-neural/10">
                  <card.icon size={32} className="text-neural" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white font-syne">{card.title}</h3>
                <p className="text-base text-white/80 font-space">{card.description}</p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
