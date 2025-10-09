
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/digital-bauhaus/Header';
import Footer from '@/components/digital-bauhaus/Footer';

interface IndustryGatewayTemplateProps {
  title: string;
  subtitle: string;
  challenges: string[];
  caseStudy: {
    institution: string;
    metric: string;
  };
  metaTitle: string;
  metaDescription: string;
}

const IndustryGatewayTemplate: React.FC<IndustryGatewayTemplateProps> = ({
  title,
  subtitle,
  challenges,
  caseStudy,
  metaTitle,
  metaDescription
}) => {
  const navigate = useNavigate();

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
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-24">
          <motion.div
            className="container mx-auto max-w-4xl px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-16"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                {subtitle}
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <CheckCircle size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-800 border border-slate-700 rounded-sm p-8 mb-12"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Case Implementation
              </h3>
              <p className="text-slate-300">
                Deployed at <span className="text-blue-400">{caseStudy.institution}</span> to {caseStudy.metric}
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={itemVariants}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition-colors">
                Schedule Technical Walkthrough
              </button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => navigate('/solutions')}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Overview
              </button>
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndustryGatewayTemplate;
