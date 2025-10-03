import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, Factory, Plane, Shield, Home, Scale, Briefcase } from 'lucide-react';

const IndustryLandingPages = () => {
  const industries = [
    {
      id: 'banking-difc',
      title: 'AI for Financial Institutions',
      icon: Building2,
      description: 'Compliance-ready AI systems for Gulf financial institutions with Arabic processing capabilities.',
      link: '/solutions/financial-institutions',
      keywords: 'DIFC banking AI, UAE financial AI, Islamic banking compliance',
      metrics: 'Streamlined compliance workflows',
      clients: 'Gulf Financial Sector'
    },
    {
      id: 'healthcare-uae',
      title: 'AI for Healthcare Networks',
      icon: Heart,
      description: 'Patient care AI with Arabic processing and regional medical terminology understanding.',
      link: '/solutions/healthcare-networks',
      keywords: 'UAE healthcare AI, Arabic medical AI, patient care systems',
      metrics: 'Enhanced patient care efficiency',
      clients: 'Healthcare Networks'
    },
    {
      id: 'manufacturing-gulf',
      title: 'AI for Manufacturing',
      icon: Factory,
      description: 'Supply chain intelligence adapted for Gulf logistics and regional operational patterns.',
      link: '/solutions/manufacturing-firms',
      keywords: 'Gulf manufacturing AI, supply chain UAE, industrial AI',
      metrics: 'Operational efficiency gains',
      clients: 'Manufacturing Sector'
    },
    {
      id: 'aviation-logistics',
      title: 'AI for Aviation & Logistics',
      icon: Plane,
      description: 'Operations optimization and intelligence systems for Middle East aviation and logistics.',
      link: '/solutions/aviation-logistics',
      keywords: 'aviation AI, UAE logistics AI, operations optimization',
      metrics: 'Optimized operations',
      clients: 'Aviation & Logistics'
    },
    {
      id: 'public-sector',
      title: 'AI for Public Sector',
      icon: Shield,
      description: 'Smart infrastructure and citizen services with Arabic-first, culturally aware systems.',
      link: '/solutions/public-sector',
      keywords: 'government AI, smart city, public sector AI',
      metrics: 'Enhanced citizen services',
      clients: 'Public Sector'
    },
    {
      id: 'real-estate',
      title: 'AI for Real Estate',
      icon: Home,
      description: 'Property intelligence and market analysis for Gulf real estate markets.',
      link: '/solutions/real-estate',
      keywords: 'real estate AI, property valuation, market intelligence',
      metrics: 'Market insights',
      clients: 'Real Estate Sector'
    },
    {
      id: 'legal',
      title: 'AI for Law Firms',
      icon: Scale,
      description: 'Legal document processing with regional compliance and Arabic contract analysis.',
      link: '/solutions/law-firms',
      keywords: 'legal AI, document processing, contract analysis',
      metrics: 'Faster processing',
      clients: 'Legal Sector'
    },
    {
      id: 'wealth-management',
      title: 'AI for Wealth Management',
      icon: Briefcase,
      description: 'Investment intelligence systems with regional financial compliance.',
      link: '/solutions/private-wealth-offices',
      keywords: 'wealth management AI, investment intelligence, financial AI',
      metrics: 'Investment intelligence',
      clients: 'Wealth Management'
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display text-white mb-6">
            Industry-Specific AI Solutions
          </h2>
          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            Not generic AI consulting. Purpose-built solutions for Gulf industries with specific regulatory, 
            cultural, and operational requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Link 
              key={industry.id}
              to={industry.link}
              className="group premium-card hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="bg-blue-600 p-3 rounded-xl w-fit mb-4">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-title text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-body text-gray-400 mb-4 flex-1">
                  {industry.description}
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-800 px-3 py-2 rounded-lg">
                    <p className="text-sm text-green-400 font-semibold">{industry.metrics}</p>
                  </div>
                  
                  <div className="bg-gray-800 px-3 py-2 rounded-lg">
                    <p className="text-sm text-blue-400">{industry.clients}</p>
                  </div>
                  
                  <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-title text-white mb-6">
              Serving Gulf Enterprises Across All Sectors
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <strong className="text-blue-400">Financial Services:</strong> Banking, Islamic finance, 
                fintech, investment management, wealth offices
              </div>
              <div>
                <strong className="text-blue-400">Healthcare:</strong> Hospital networks, medical centers, 
                healthcare systems, Arabic medical AI
              </div>
              <div>
                <strong className="text-blue-400">Industrial:</strong> Manufacturing, logistics, 
                supply chain, aviation, industrial operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLandingPages;