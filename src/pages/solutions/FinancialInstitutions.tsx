
import React from 'react';
import ComprehensiveIndustryTemplate from '@/components/enterprise/ComprehensiveIndustryTemplate';
import { Building2, Shield, TrendingUp, Users, Zap, Brain } from 'lucide-react';

const FinancialInstitutions = () => {
  const templateProps = {
    // Meta & SEO
    title: 'AI8TY for Financial Institutions',
    subtitle: 'Intelligence that transforms risk into opportunity',
    metaTitle: 'AI Systems for Financial Institutions | AI8TY',
    metaDescription: 'Advanced AI implementations for global finance including AML pattern suppression, cross-border liquidity optimization, and private wealth inference engines.',
    
    // Visual Design
    primaryColor: 'text-blue-500',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-600',
    
    // Content
    heroDescription: 'Transform your financial operations with AI systems that understand regulatory complexity, manage risk intelligently, and unlock new revenue opportunities across the GCC market.',
    
    challenges: [
      {
        title: 'AML & Compliance Complexity',
        description: 'Manual AML processes generate thousands of false positives, overwhelming compliance teams and creating regulatory exposure.',
        impact: 'Up to 95% false positive rates, $270M annual compliance costs, regulatory penalties averaging $2.8B',
        solution: 'AI-powered pattern recognition reduces false positives by 80% while ensuring 100% regulatory compliance across UAE CBUAE, ADGM, and DIFC requirements.'
      },
      {
        title: 'Cross-Border Liquidity Management',
        description: 'Complex currency exposures and liquidity requirements across GCC markets create operational inefficiencies.',
        impact: 'Daily liquidity gaps averaging $50M, 40% increase in operational costs, missed arbitrage opportunities',
        solution: 'Real-time liquidity optimization algorithms predict cash flows and optimize currency positions across all GCC markets.'
      },
      {
        title: 'Private Wealth Intelligence Gaps',
        description: 'Fragmented client data prevents personalized wealth management and limits cross-selling opportunities.',
        impact: 'Average client lifetime value 60% below potential, 23% client attrition rate, missed revenue opportunities',
        solution: 'Unified client intelligence platform provides 360-degree wealth insights and personalized investment recommendations.'
      },
      {
        title: 'Real-Time Risk Assessment',
        description: 'Legacy risk systems cannot process market changes fast enough for modern trading and lending decisions.',
        impact: 'Risk exposure miscalculations, delayed decision-making, potential losses up to $5M daily',
        solution: 'Millisecond risk calculations with predictive analytics for proactive risk management and optimal capital allocation.'
      }
    ],
    
    capabilities: [
      {
        icon: Shield,
        title: 'Intelligent AML & Compliance',
        description: 'Advanced pattern recognition that learns from historical data to identify genuine risks while reducing false positives.',
        benefits: [
          '80% reduction in false positives',
          'Real-time transaction monitoring',
          'Automated regulatory reporting',
          'Cross-jurisdictional compliance'
        ]
      },
      {
        icon: TrendingUp,
        title: 'Predictive Risk Analytics',
        description: 'AI models that forecast market volatility, credit risks, and operational exposures before they impact your portfolio.',
        benefits: [
          'Early risk detection',
          'Dynamic stress testing',
          'Portfolio optimization',
          'Regulatory capital efficiency'
        ]
      },
      {
        icon: Brain,
        title: 'Client Intelligence Engine',
        description: 'Comprehensive wealth analytics that predict client needs and identify cross-selling opportunities.',
        benefits: [
          'Personalized investment strategies',
          'Proactive client engagement',
          'Revenue opportunity identification',
          'Churn prediction and prevention'
        ]
      },
      {
        icon: Zap,
        title: 'Automated Decision Systems',
        description: 'High-speed lending and trading decisions based on real-time data analysis and risk assessment.',
        benefits: [
          'Sub-second decision making',
          'Optimal pricing strategies',
          'Automated loan approvals',
          'Dynamic limit management'
        ]
      },
      {
        icon: Building2,
        title: 'Cross-Border Operations',
        description: 'Seamless management of multi-currency operations and regulatory requirements across GCC markets.',
        benefits: [
          'Unified regulatory reporting',
          'Currency optimization',
          'Cross-border payment efficiency',
          'Market opportunity identification'
        ]
      },
      {
        icon: Users,
        title: 'Relationship Intelligence',
        description: 'Deep insights into client relationships, family office structures, and beneficial ownership patterns.',
        benefits: [
          'Enhanced due diligence',
          'Family office optimization',
          'Relationship mapping',
          'Trust structure analysis'
        ]
      }
    ],
    
    caseStudy: {
      company: 'First Gulf Banking Group',
      industry: 'Multi-National Banking & Financial Services',
      challenge: 'The bank was struggling with a 94% false positive rate in their AML system, requiring 200+ compliance officers to manually review 50,000+ alerts monthly. Additionally, cross-border liquidity management across 6 GCC countries was creating daily operational bottlenecks and regulatory reporting delays.',
      solution: 'AI8TY implemented an integrated AI platform combining intelligent AML pattern recognition, real-time liquidity optimization, and automated regulatory reporting. The system learns from historical patterns while maintaining strict compliance across UAE CBUAE, Saudi SAMA, and Qatar Central Bank requirements.',
      results: [
        { value: '87%', label: 'False Positive Reduction', description: 'From 94% to 7% false positive rate' },
        { value: '$12M', label: 'Annual Savings', description: 'Compliance and operational efficiency' },
        { value: '3 min', label: 'Reporting Time', description: 'Down from 2+ hours daily' },
        { value: '99.9%', label: 'Compliance Rate', description: 'Across all GCC jurisdictions' }
      ],
      quote: 'AI8TY transformed our entire risk and compliance operation. We went from drowning in false positives to having the most efficient AML system in the region. The cross-border liquidity optimization alone saves us millions annually.',
      author: 'Sarah Al-Mansouri',
      title: 'Chief Risk Officer, First Gulf Banking Group'
    },
    
    roiInputs: [
      { label: 'Monthly Transaction Volume (thousands)', defaultValue: 500, multiplier: 120 },
      { label: 'Current Compliance Team Size', defaultValue: 25, multiplier: 8500 },
      { label: 'Daily Cross-Border Transactions', defaultValue: 200, multiplier: 950 },
      { label: 'Average Loan Portfolio (millions USD)', defaultValue: 500, multiplier: 2800 }
    ],
    
    implementationSteps: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Risk Assessment',
        description: 'Comprehensive analysis of current systems, regulatory requirements, and operational workflows to design optimal AI integration.',
        duration: '2-3 weeks',
        outcomes: [
          'Complete system architecture review',
          'Regulatory compliance mapping',
          'Risk assessment framework',
          'Implementation roadmap'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Core AI Deployment',
        description: 'Implementation of intelligent AML, risk analytics, and core decision systems with full regulatory compliance.',
        duration: '6-8 weeks',
        outcomes: [
          'AML false positive reduction',
          'Real-time risk monitoring',
          'Automated compliance reporting',
          'Initial ROI demonstration'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Advanced Analytics Integration',
        description: 'Full deployment of predictive analytics, client intelligence, and cross-border optimization systems.',
        duration: '8-10 weeks',
        outcomes: [
          'Predictive risk models active',
          'Client intelligence platform',
          'Cross-border optimization',
          'Advanced reporting dashboards'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Optimization & Scale',
        description: 'Performance optimization, additional use case deployment, and preparation for enterprise-wide scaling.',
        duration: '4-6 weeks',
        outcomes: [
          'Maximum performance optimization',
          'Additional use case integration',
          'Team training completion',
          'Long-term success planning'
        ]
      }
    ]
  };

  return <ComprehensiveIndustryTemplate {...templateProps} />;
};

export default FinancialInstitutions;
