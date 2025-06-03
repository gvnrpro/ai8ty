
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnterpriseHeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleExploreImplementations = () => {
    navigate('/solutions');
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen relative flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <motion.div
        className="container mx-auto max-w-5xl text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
          variants={itemVariants}
        >
          AI Systems Engineered for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
            Enterprise Complexity
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Advanced intelligence infrastructure for organizations operating at scale.
        </motion.p>

        <motion.div
          variants={itemVariants}
        >
          <button
            onClick={handleExploreImplementations}
            className="group inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300 hover:border-slate-500"
          >
            <span>Explore Implementations</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnterpriseHeroSection;
