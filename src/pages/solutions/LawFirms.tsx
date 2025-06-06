
import React from 'react';
import ComprehensiveIndustryTemplate from '@/components/enterprise/ComprehensiveIndustryTemplate';
import { Scale, FileText, Users, Shield, Zap, Brain } from 'lucide-react';

const LawFirms = () => {
  const templateProps = {
    // Meta & SEO
    title: 'AI8TY for Law Firms',
    subtitle: 'Intelligence that strengthens legal practice',
    metaTitle: 'AI Systems for Law Firms | AI8TY',
    metaDescription: 'Operational AI systems for law firms including legal research automation, case management intelligence, and client relationship optimization.',
    
    // Visual Design
    primaryColor: 'text-slate-500',
    gradientFrom: 'from-slate-600',
    gradientTo: 'to-gray-600',
    
    // Content
    heroDescription: 'Revolutionize legal practice with AI systems that automate research, predict case outcomes, and optimize client relationships while maintaining the highest ethical and confidentiality standards.',
    
    challenges: [
      {
        title: 'Legal Research Time Inefficiency',
        description: 'Manual legal research consumes 40% of billable hours while potentially missing critical precedents and insights.',
        impact: 'Research costs $280K annually per partner, 65% slower case preparation, missed precedent risks',
        solution: 'AI-powered legal research analyzes vast legal databases instantly, identifying relevant cases and precedents in minutes.'
      },
      {
        title: 'Case Outcome Predictability',
        description: 'Limited ability to predict case outcomes affects client strategy and resource allocation decisions.',
        impact: 'Case strategy inefficiencies, client expectation misalignment, suboptimal settlement decisions',
        solution: 'Predictive case analytics analyze historical data and judge patterns to forecast likely outcomes and optimal strategies.'
      },
      {
        title: 'Client Relationship Management',
        description: 'Fragmented client information and manual communication processes limit service quality and business development.',
        impact: 'Client satisfaction 74%, missed business opportunities, inefficient matter management',
        solution: 'Intelligent client management provides comprehensive relationship insights and automated communication workflows.'
      },
      {
        title: 'Document Management Complexity',
        description: 'Manual document review and contract analysis create bottlenecks and increase error risks.',
        impact: 'Document review costs $180 per hour, 25% longer matter resolution, contract risk exposure',
        solution: 'Automated document analysis extracts key information, identifies risks, and ensures compliance efficiently.'
      }
    ],
    
    capabilities: [
      {
        icon: Brain,
        title: 'Legal Research Automation',
        description: 'Advanced AI that searches legal databases, analyzes precedents, and provides comprehensive research insights.',
        benefits: [
          'Instant case law analysis',
          'Precedent identification',
          'Research time reduction',
          'Comprehensive coverage'
        ]
      },
      {
        icon: Scale,
        title: 'Case Outcome Prediction',
        description: 'Predictive analytics that forecast case outcomes based on historical data and case characteristics.',
        benefits: [
          'Outcome probability analysis',
          'Strategy optimization',
          'Settlement recommendations',
          'Resource allocation guidance'
        ]
      },
      {
        icon: FileText,
        title: 'Document Intelligence',
        description: 'Automated document review, contract analysis, and risk identification systems.',
        benefits: [
          'Contract review automation',
          'Risk identification',
          'Clause analysis',
          'Compliance verification'
        ]
      },
      {
        icon: Users,
        title: 'Client Relationship Intelligence',
        description: 'Comprehensive client management with relationship insights and communication automation.',
        benefits: [
          'Client satisfaction tracking',
          'Communication automation',
          'Business development insights',
          'Matter progress tracking'
        ]
      },
      {
        icon: Shield,
        title: 'Compliance & Ethics Monitoring',
        description: 'Automated compliance monitoring and ethical guideline enforcement across all practice areas.',
        benefits: [
          'Regulatory compliance',
          'Ethical guideline enforcement',
          'Audit trail management',
          'Risk mitigation'
        ]
      },
      {
        icon: Zap,
        title: 'Practice Automation',
        description: 'Intelligent automation of routine legal tasks and administrative processes.',
        benefits: [
          'Time entry automation',
          'Billing optimization',
          'Calendar management',
          'Workflow automation'
        ]
      }
    ],
    
    caseStudy: {
      company: 'Prominent GCC Law Firm',
      industry: 'Corporate Law Practice (25 Partners, 120+ Lawyers)',
      challenge: 'The law firm was facing critical challenges with legal research consuming 45% of billable hours, unpredictable case outcomes affecting client strategy, and fragmented client management limiting business development and matter efficiency.',
      solution: 'AI8TY deployed a comprehensive legal intelligence platform featuring automated research systems, predictive case analytics, document intelligence, and client relationship management while maintaining strict confidentiality and ethical compliance.',
      results: [
        { value: '73%', label: 'Research Time Reduction', description: 'From 45% to 12% of billable hours' },
        { value: '89%', label: 'Case Outcome Accuracy', description: 'In prediction modeling' },
        { value: '156%', label: 'Partner Productivity', description: 'Increase in billable efficiency' },
        { value: '$3.2M', label: 'Annual Value Add', description: 'Through operational optimization' }
      ],
      quote: 'AI8TY has fundamentally transformed our legal practice. Our lawyers can focus on high-value strategic work while our research and analysis capabilities have reached unprecedented levels of depth and speed.',
      author: 'Sarah Al-Mansouri',
      title: 'Managing Partner, Prominent GCC Law Firm'
    },
    
    roiInputs: [
      { label: 'Number of Partners', defaultValue: 12, multiplier: 185000 },
      { label: 'Number of Associates', defaultValue: 35, multiplier: 95000 },
      { label: 'Average Billable Hours per Lawyer', defaultValue: 1800, multiplier: 280 },
      { label: 'Current Research Hours per Case', defaultValue: 45, multiplier: 380 }
    ],
    
    implementationSteps: [
      {
        phase: 'Phase 1',
        title: 'Legal Practice Assessment',
        description: 'Comprehensive analysis of practice areas, workflow processes, and technology infrastructure.',
        duration: '3-4 weeks',
        outcomes: [
          'Practice area analysis',
          'Workflow optimization mapping',
          'Technology infrastructure review',
          'Compliance framework assessment'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Core Legal Intelligence',
        description: 'Implementation of research automation, document intelligence, and basic case management systems.',
        duration: '8-10 weeks',
        outcomes: [
          'Legal research automation',
          'Document analysis systems',
          'Basic case management',
          'Compliance monitoring'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Advanced Analytics Integration',
        description: 'Full deployment of predictive analytics, client intelligence, and comprehensive practice management.',
        duration: '10-12 weeks',
        outcomes: [
          'Predictive case analytics',
          'Client relationship intelligence',
          'Advanced practice automation',
          'Performance optimization'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Practice Excellence',
        description: 'Performance optimization, advanced strategic insights, and preparation for practice expansion.',
        duration: '6-8 weeks',
        outcomes: [
          'Maximum practice efficiency',
          'Strategic business insights',
          'Advanced client service',
          'Continuous improvement protocols'
        ]
      }
    ]
  };

  return <ComprehensiveIndustryTemplate {...templateProps} />;
};

export default LawFirms;
