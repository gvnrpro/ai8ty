
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, Bot, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesOverviewSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  
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

  const serviceCategories = [
    {
      icon: Zap,
      title: "Smart Marketing Systems",
      description: "Automated campaigns that find and convert your ideal customers.",
      benefit: "Save 15+ hours/week on marketing tasks",
      color: "neural"
    },
    {
      icon: Bot,
      title: "AI & Automation Power-Ups",
      description: "Custom workflows that handle repetitive tasks automatically.",
      benefit: "Eliminate 80% of manual work",
      color: "quantum"
    },
    {
      icon: Globe,
      title: "High-Performance Websites",
      description: "Fast, mobile-first sites built to convert visitors into customers.",
      benefit: "3x faster loading, 2x more conversions",
      color: "intelligence"
    },
    {
      icon: Megaphone,
      title: "Brand & Creative Services",
      description: "Compelling stories and visuals that make customers choose you.",
      benefit: "Stand out in crowded markets",
      color: "sand"
    }
  ];

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural",
      quantum: "bg-quantum/20 text-quantum",
      intelligence: "bg-intelligence/20 text-intelligence",
      sand: "bg-sand/20 text-sand"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
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
            What We Can Handle For You
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              (So You Don't Have To)
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed max-w-3xl mx-auto">
            Four core areas where we take the complexity off your plate
          </p>
        </motion.div>
        
        {/* Enhanced grid with consistent heights */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="quantum-panel p-8 group hover:border-neural/30 cursor-pointer flex flex-col h-full min-h-[280px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={handleViewAllServices}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColorClasses(category.color)}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon size={28} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="strategic-title text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-space text-white/85 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>
              </div>
              
              {/* Benefit highlight */}
              <div className="bg-depth-2/50 border border-neural/20 rounded-lg p-4 mb-4 mt-auto">
                <p className="text-sm font-space text-neural/90 font-medium">
                  ✅ {category.benefit}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-neural group-hover:text-white transition-colors mt-auto">
                <span className="text-sm font-space font-medium">Learn More</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button 
            onClick={handleViewAllServices}
            className="btn-secondary text-lg group relative overflow-hidden px-8 py-4 min-h-[48px]"
            size="lg"
          >
            <span className="relative z-10 font-medium">
              Which Service Fits My Business?
            </span>
            <ArrowRight className="ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default ServicesOverviewSection;
