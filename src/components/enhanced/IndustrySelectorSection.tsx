
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Building, Scale, GraduationCap, Target, ArrowRight } from 'lucide-react';
import PremiumCard from './PremiumCard';

const IndustrySelectorSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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

  const industries = [
    {
      title: "Retail & E-Commerce",
      emoji: "🛍️",
      icon: ShoppingBag,
      result: "Convert product browsers into buyers",
      path: "/retail",
      color: "from-pink-500 to-rose-500",
      features: ["Product page optimization", "Cart abandonment recovery", "Mobile commerce"]
    },
    {
      title: "Hospitality & Tourism",
      emoji: "🏨",
      icon: Building,
      result: "Turn visitors into direct bookings",
      path: "/hospitality",
      color: "from-blue-500 to-cyan-500",
      features: ["Booking system integration", "Local SEO", "Review management"]
    },
    {
      title: "Legal & Consulting",
      emoji: "⚖️",
      icon: Scale,
      result: "Generate qualified consultation requests",
      path: "/legal",
      color: "from-purple-500 to-indigo-500",
      features: ["Client intake automation", "Consultation booking", "Authority building"]
    },
    {
      title: "Education & Coaching",
      emoji: "📚",
      icon: GraduationCap,
      result: "Attract and enroll serious students",
      path: "/education",
      color: "from-green-500 to-emerald-500",
      features: ["Course promotion", "Student onboarding", "Learning management"]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-ai8ty-black to-depth-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
            🧭 <span className="text-white">Solutions Tailored</span>
            <br />
            <span className="bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent">
              for Your Industry
            </span>
          </h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl font-space text-white/90 mb-8">
              Every industry has unique challenges. Our solutions are built specifically for how your customers think and buy.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <PremiumCard 
                variant="glass" 
                className="p-8 h-full group hover:border-neural/30 cursor-pointer transition-all duration-300"
                hover={true}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">{industry.emoji}</span>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-syne font-bold text-white mb-2 group-hover:text-neural transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                </div>
                
                <p className="font-space text-neural/90 text-lg font-medium mb-6">
                  "{industry.result}"
                </p>

                <div className="space-y-3 mb-8">
                  {industry.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + (index * 0.1) + (featureIndex * 0.05), duration: 0.5 }}
                    >
                      <Target size={16} className="text-neural flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-neural/20 to-quantum/20 hover:from-neural/30 hover:to-quantum/30 border border-neural/30 hover:border-neural/50 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Solution</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solution CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target size={32} className="text-neural" />
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white">
                Don't See Your Industry?
              </h3>
            </div>
            <p className="text-xl font-space text-white leading-relaxed mb-8">
              We work with businesses across every sector. Let's discuss how we can engineer growth for your specific market.
            </p>
            
            <motion.button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-neural to-quantum hover:from-neural-dark hover:to-quantum-dark text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>🎯 Custom? → Book Strategy Call</span>
              <ArrowRight className="ml-3 inline group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </motion.button>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IndustrySelectorSection;
