
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

  const handleExploreSolutions = () => {
    navigate('/solutions');
  };

  // Scrolling ticker industries
  const industries = [
    'Financial Institutions',
    'Healthcare Networks', 
    'Real Estate Investment Groups',
    'Aviation Authorities',
    'Private Wealth Offices',
    'Public Sector Entities',
    'Logistics Providers',
    'Retail Conglomerates'
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative flex flex-col justify-center items-center py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
          variants={itemVariants}
        >
          Operational AI Systems for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
            GCC Business Leaders
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Enterprise-grade AI infrastructure for financial, retail, healthcare, logistics, and public sector organizations in the UAE and Gulf region.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <button
            onClick={handleExploreSolutions}
            className="group inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300 hover:border-slate-500"
          >
            <span>Explore Solutions</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Scrolling Industry Ticker */}
        <motion.div 
          variants={itemVariants}
          className="mb-16 overflow-hidden"
        >
          <div className="relative h-12 flex items-center">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -100 * industries.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <span key={index} className="text-slate-400 text-lg mx-8 font-medium">
                  {industry} •
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* About AI8TY Section */}
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About AI8TY</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Operational AI frameworks for regulated, high-complexity GCC industries. Solutions designed to improve decision-making, reduce operational risk, and strengthen business resilience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-slate-800/50 p-6 rounded-sm border border-slate-700">
              <h3 className="text-white font-semibold mb-2">Enterprise AI Infrastructure</h3>
              <p className="text-slate-400 text-sm">Scalable, secure AI systems for complex organizations</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-sm border border-slate-700">
              <h3 className="text-white font-semibold mb-2">Regulator-Aligned Deployments</h3>
              <p className="text-slate-400 text-sm">UAE PDPL, MOHAP, and GCC compliance-ready solutions</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-sm border border-slate-700">
              <h3 className="text-white font-semibold mb-2">Sector-Specific Systems</h3>
              <p className="text-slate-400 text-sm">Industry-tailored AI for operational excellence</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-sm border border-slate-700">
              <h3 className="text-white font-semibold mb-2">Measurable Improvements</h3>
              <p className="text-slate-400 text-sm">ROI-focused implementations with clear outcomes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
        >
          <button
            onClick={handleExploreSolutions}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300"
          >
            <span>See What We Build</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnterpriseHeroSection;
