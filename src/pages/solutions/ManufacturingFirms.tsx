
import React from 'react';
import ComprehensiveIndustryTemplate from '@/components/enterprise/ComprehensiveIndustryTemplate';
import { Factory, Shield, TrendingUp, Users, Zap, Cog } from 'lucide-react';

const ManufacturingFirms = () => {
  const templateProps = {
    // Meta & SEO
    title: 'AI8TY for Manufacturing Firms',
    subtitle: 'Intelligence that powers Industry 4.0 excellence',
    metaTitle: 'AI Systems for Manufacturing Firms | AI8TY',
    metaDescription: 'Operational AI systems for manufacturing including predictive maintenance, supply chain intelligence, and production optimization.',
    
    // Visual Design
    primaryColor: 'text-orange-500',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-red-600',
    
    // Content
    heroDescription: 'Transform your manufacturing operations with AI systems that predict equipment failures, optimize production flows, and ensure quality excellence across the entire value chain.',
    
    challenges: [
      {
        title: 'Unplanned Equipment Downtime',
        description: 'Reactive maintenance approaches result in unexpected equipment failures, production stoppages, and massive operational losses.',
        impact: 'Average downtime costs $50,000/hour, 23% of production time lost, maintenance costs 40% above optimal',
        solution: 'Predictive maintenance AI analyzes equipment sensor data to predict failures 2-8 weeks in advance, enabling proactive maintenance scheduling.'
      },
      {
        title: 'Supply Chain Disruptions',
        description: 'Global supply chain volatility creates material shortages, production delays, and inventory optimization challenges.',
        impact: 'Production delays average 12 days, inventory carrying costs 25% above optimal, 18% revenue loss from stockouts',
        solution: 'AI-powered supply chain intelligence predicts disruptions and automatically optimizes inventory levels and supplier relationships.'
      },
      {
        title: 'Quality Control Inconsistencies',
        description: 'Manual quality inspection processes miss defects, create bottlenecks, and result in customer returns and warranty claims.',
        impact: 'Defect rates 3.2%, customer returns cost $2.1M annually, inspection bottlenecks slow production by 15%',
        solution: 'Computer vision and AI quality systems provide 100% automated inspection with 99.7% accuracy and real-time defect prevention.'
      },
      {
        title: 'Production Optimization Gaps',
        description: 'Complex production scheduling and resource allocation decisions rely on manual planning, missing efficiency opportunities.',
        impact: 'Production efficiency 15% below optimal, resource utilization 68%, missed revenue opportunities $3.5M annually',
        solution: 'Intelligent production planning optimizes schedules, resource allocation, and workflow management for maximum efficiency.'
      }
    ],
    
    capabilities: [
      {
        icon: Cog,
        title: 'Predictive Maintenance Intelligence',
        description: 'Advanced sensor analysis and machine learning models that predict equipment failures before they occur.',
        benefits: [
          '85% reduction in unplanned downtime',
          'Maintenance cost optimization',
          'Equipment lifespan extension',
          'Spare parts inventory optimization'
        ]
      },
      {
        icon: TrendingUp,
        title: 'Production Optimization',
        description: 'Real-time production planning and scheduling optimization based on demand forecasts and resource availability.',
        benefits: [
          'Throughput maximization',
          'Resource utilization optimization',
          'Cycle time reduction',
          'Energy efficiency improvement'
        ]
      },
      {
        icon: Shield,
        title: 'Quality Assurance Automation',
        description: 'Computer vision and AI systems that provide comprehensive quality control with higher accuracy than human inspection.',
        benefits: [
          '99.7% defect detection accuracy',
          'Real-time quality monitoring',
          'Automated reject handling',
          'Continuous process improvement'
        ]
      },
      {
        icon: Factory,
        title: 'Supply Chain Intelligence',
        description: 'Comprehensive supply chain visibility and optimization from raw materials to finished goods delivery.',
        benefits: [
          'Demand forecasting accuracy',
          'Supplier risk management',
          'Inventory optimization',
          'Logistics route optimization'
        ]
      },
      {
        icon: Zap,
        title: 'Real-Time Operations Control',
        description: 'Centralized operations intelligence providing real-time visibility and control across all manufacturing processes.',
        benefits: [
          'Real-time performance monitoring',
          'Automated process adjustments',
          'Energy consumption optimization',
          'Safety incident prevention'
        ]
      },
      {
        icon: Users,
        title: 'Workforce Intelligence',
        description: 'AI-powered workforce planning and performance optimization to maximize human potential and safety.',
        benefits: [
          'Optimal shift scheduling',
          'Skills gap identification',
          'Safety risk prediction',
          'Training needs assessment'
        ]
      }
    ],
    
    caseStudy: {
      company: 'Gulf Manufacturing Excellence',
      industry: 'Automotive Parts Manufacturing (3 Facilities)',
      challenge: 'The company was experiencing critical production challenges with unplanned downtime averaging 18% of production time, quality defect rates of 3.8% resulting in $4.2M annual customer returns, and supply chain disruptions causing production delays of 15+ days monthly.',
      solution: 'AI8TY implemented a comprehensive manufacturing intelligence platform featuring predictive maintenance, computer vision quality control, and intelligent supply chain management. The system integrates with existing ERP and MES systems while providing real-time optimization capabilities.',
      results: [
        { value: '82%', label: 'Downtime Reduction', description: 'From 18% to 3.2% unplanned downtime' },
        { value: '94%', label: 'Quality Improvement', description: 'Defect rate down to 0.23%' },
        { value: '$8.5M', label: 'Annual Savings', description: 'Combined operational efficiency gains' },
        { value: '28%', label: 'Throughput Increase', description: 'Production capacity optimization' }
      ],
      quote: 'AI8TY revolutionized our entire manufacturing operation. We went from constant firefighting to predictive excellence. Our quality is the best in the industry, downtime is virtually eliminated, and our profitability has increased dramatically.',
      author: 'Fatima Al-Zahra',
      title: 'Chief Operating Officer, Gulf Manufacturing Excellence'
    },
    
    roiInputs: [
      { label: 'Production Hours per Day', defaultValue: 20, multiplier: 2500 },
      { label: 'Average Downtime Cost per Hour (USD)', defaultValue: 35000, multiplier: 0.85 },
      { label: 'Monthly Production Volume (units)', defaultValue: 15000, multiplier: 45 },
      { label: 'Current Quality Defect Rate (%)', defaultValue: 3, multiplier: 85000 }
    ],
    
    implementationSteps: [
      {
        phase: 'Phase 1',
        title: 'Manufacturing Assessment',
        description: 'Comprehensive analysis of production processes, equipment systems, and operational workflows to identify optimization opportunities.',
        duration: '2-3 weeks',
        outcomes: [
          'Production process mapping',
          'Equipment assessment',
          'Data integration planning',
          'ROI optimization strategy'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Predictive Systems Deployment',
        description: 'Implementation of predictive maintenance, quality control automation, and core production intelligence systems.',
        duration: '8-10 weeks',
        outcomes: [
          'Predictive maintenance active',
          'Automated quality control',
          'Real-time monitoring',
          'Initial efficiency gains'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Advanced Analytics Integration',
        description: 'Full deployment of supply chain intelligence, production optimization, and comprehensive analytics platforms.',
        duration: '10-12 weeks',
        outcomes: [
          'Supply chain optimization',
          'Production planning automation',
          'Advanced analytics dashboards',
          'Workforce intelligence'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Optimization & Scale',
        description: 'Performance fine-tuning, additional use case implementation, and preparation for multi-facility scaling.',
        duration: '6-8 weeks',
        outcomes: [
          'Maximum efficiency optimization',
          'Multi-facility integration',
          'Team capability building',
          'Continuous improvement protocols'
        ]
      }
    ]
  };

  return <ComprehensiveIndustryTemplate {...templateProps} />;
};

export default ManufacturingFirms;
