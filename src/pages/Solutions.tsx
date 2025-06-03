
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, Heart, Factory, ShoppingCart } from 'lucide-react';
import EnterpriseNavigation from '@/components/enterprise/EnterpriseNavigation';
import EnterpriseFooter from '@/components/enterprise/EnterpriseFooter';

const Solutions = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: 'financial-institutions',
      title: 'Financial Institutions',
      icon: Building2,
      description: 'Advanced compliance and risk management systems'
    },
    {
      id: 'healthcare-networks',
      title: 'Healthcare Networks',
      icon: Heart,
      description: 'Secure patient data intelligence and operational optimization'
    },
    {
      id: 'manufacturing-groups',
      title: 'Manufacturing Groups',
      icon: Factory,
      description: 'Industrial IoT intelligence and supply chain optimization'
    },
    {
      id: 'retail-conglomerates',
      title: 'Retail Conglomerates',
      icon: ShoppingCart,
      description: 'Customer intelligence and inventory optimization systems'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Solutions by Sector | AI8TY Enterprise Systems</title>
        <meta name="description" content="Tailored AI system implementations for Financial Institutions, Healthcare Networks, Manufacturing Groups, and Retail Conglomerates." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <EnterpriseNavigation />
        
        <main className="pt-32 pb-24">
          <motion.div
            className="container mx-auto max-w-6xl px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Select Your Sector for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                  Tailored Briefings
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Domain-specific AI implementations designed for institutional complexity
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  variants={itemVariants}
                  onClick={() => navigate(`/solutions/${industry.id}`)}
                  className="group p-8 bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-sm transition-all duration-300 text-left hover:bg-slate-750"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-slate-700 group-hover:bg-slate-600 rounded-sm flex items-center justify-center transition-colors">
                      <industry.icon size={28} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {industry.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      
                      <span className="text-sm text-blue-400 font-medium">
                        Request Briefing →
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </main>

        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Solutions;
