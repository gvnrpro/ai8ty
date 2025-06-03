
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock } from 'lucide-react';
import EnterpriseNavigation from '@/components/enterprise/EnterpriseNavigation';
import EnterpriseFooter from '@/components/enterprise/EnterpriseFooter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    sector: '',
    contact: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const sectors = [
    'Financial Institutions',
    'Healthcare Networks',
    'Retail Groups',
    'Manufacturing Firms',
    'Private Wealth Offices',
    'Aviation & Logistics',
    'Public Sector',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Request Private Briefing | AI8TY Enterprise AI</title>
        <meta name="description" content="Request a private briefing on operational AI systems for GCC enterprises. All inquiries confidential. We typically respond within 24 hours." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <EnterpriseNavigation />
        
        <main className="pt-32 pb-24">
          <div className="container mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Request a Private Briefing
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock size={20} className="text-blue-400" />
                  <span>We typically respond within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Shield size={20} className="text-blue-400" />
                  <span>All inquiries confidential</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Company/Organization name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-white mb-2">
                      Sector *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your sector</option>
                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-white mb-2">
                      Contact *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Email or phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your operational AI requirements..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300"
                  >
                    <span>Request Briefing</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </main>

        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Contact;
