import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, Factory, Plane, Shield, Home, Scale, Briefcase } from 'lucide-react';

const IndustryLandingPages = () => {
  const industries = [
    {
      id: 'banking-difc',
      title: 'AI for DIFC Banks',
      icon: Building2,
      description: 'Arabic-native compliance systems for UAE financial institutions. DIFC-certified AI processing.',
      link: '/solutions/financial-institutions',
      keywords: 'DIFC banking AI, UAE financial AI, Islamic banking compliance',
      metrics: '3 weeks → 2 days processing',
      clients: 'Major DIFC Banks'
    },
    {
      id: 'healthcare-uae',
      title: 'AI for UAE Healthcare',
      icon: Heart,
      description: 'Cultural AI for patient care. Arabic processing with Gulf medical terminology understanding.',
      link: '/solutions/healthcare-networks',
      keywords: 'UAE healthcare AI, Arabic medical AI, patient care systems',
      metrics: '28% better outcomes',
      clients: 'UAE Hospital Networks'
    },
    {
      id: 'manufacturing-gulf',
      title: 'AI for Gulf Manufacturing',
      icon: Factory,
      description: 'Supply chain intelligence for Gulf logistics. Heat-aware, Ramadan-optimized operations.',
      link: '/solutions/manufacturing-firms',
      keywords: 'Gulf manufacturing AI, supply chain UAE, industrial AI',
      metrics: '34% efficiency gain',
      clients: 'Saudi Manufacturing Giants'
    },
    {
      id: 'aviation-emirates',
      title: 'AI for Emirates Aviation',
      icon: Plane,
      description: 'Flight optimization and passenger experience AI built for Middle East aviation requirements.',
      link: '/solutions/aviation-logistics',
      keywords: 'Emirates aviation AI, UAE airline AI, airport systems',
      metrics: 'Real-time optimization',
      clients: 'Gulf Airlines'
    },
    {
      id: 'public-sector-uae',
      title: 'AI for UAE Government',
      icon: Shield,
      description: 'Smart city infrastructure and citizen services. Arabic-first, culturally aware government AI.',
      link: '/solutions/public-sector',
      keywords: 'UAE government AI, smart city Dubai, public sector AI',
      metrics: 'Citizen satisfaction boost',
      clients: 'UAE Government Entities'
    },
    {
      id: 'real-estate-dubai',
      title: 'AI for Dubai Real Estate',
      icon: Home,
      description: 'Property valuation and market intelligence for Dubai\'s dynamic real estate landscape.',
      link: '/solutions/real-estate',
      keywords: 'Dubai real estate AI, property valuation UAE, real estate intelligence',
      metrics: 'Market prediction accuracy',
      clients: 'Dubai Developers'
    },
    {
      id: 'legal-gulf',
      title: 'AI for Gulf Law Firms',
      icon: Scale,
      description: 'Legal document processing with Sharia law compliance and Arabic contract analysis.',
      link: '/solutions/law-firms',
      keywords: 'Gulf legal AI, Sharia compliance AI, Arabic legal processing',
      metrics: 'Document processing speed',
      clients: 'Gulf Law Firms'
    },
    {
      id: 'wealth-management',
      title: 'AI for Gulf Wealth Offices',
      icon: Briefcase,
      description: 'Islamic finance-compliant wealth management with cultural investment preferences.',
      link: '/solutions/private-wealth-offices',
      keywords: 'Islamic wealth management AI, Gulf private banking, Sharia investment AI',
      metrics: 'Portfolio optimization',
      clients: 'Gulf Family Offices'
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
                <strong className="text-blue-400">Financial Services:</strong> DIFC banks, Islamic banking, 
                UAE fintech, Gulf investment firms, private wealth management
              </div>
              <div>
                <strong className="text-blue-400">Healthcare:</strong> UAE hospitals, Saudi medical centers, 
                Qatar healthcare networks, Gulf medical AI, Arabic patient systems
              </div>
              <div>
                <strong className="text-blue-400">Industrial:</strong> Saudi manufacturing, UAE logistics, 
                Gulf supply chains, ADNOC partners, Emirates industrial AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLandingPages;