
import React from 'react';
import ComprehensiveIndustryTemplate from '@/components/enterprise/ComprehensiveIndustryTemplate';
import { Plane, Shield, TrendingUp, Users, Zap, Truck } from 'lucide-react';

const AviationLogistics = () => {
  const templateProps = {
    // Meta & SEO
    title: 'AI8TY for Aviation & Logistics',
    subtitle: 'Intelligence that keeps the world moving',
    metaTitle: 'AI Systems for Aviation & Logistics | AI8TY',
    metaDescription: 'Operational AI systems for aviation and logistics including predictive maintenance, cargo optimization, and operational efficiency monitoring.',
    
    // Visual Design
    primaryColor: 'text-cyan-500',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-blue-600',
    
    // Content
    heroDescription: 'Revolutionize transportation and logistics with AI systems that optimize routes, predict maintenance needs, and ensure seamless operations across the entire supply chain.',
    
    challenges: [
      {
        title: 'Aircraft Maintenance Complexity',
        description: 'Unplanned aircraft maintenance creates flight delays, cancellations, and massive operational costs while compromising safety.',
        impact: 'Average delay costs $150K per incident, 12% flight disruption rate, maintenance costs 35% above optimal',
        solution: 'AI-powered predictive maintenance analyzes aircraft sensor data to predict maintenance needs 4-12 weeks in advance.'
      },
      {
        title: 'Cargo Load Optimization',
        description: 'Manual cargo planning results in suboptimal weight distribution, fuel inefficiency, and revenue loss from unused capacity.',
        impact: 'Fuel costs 15% above optimal, cargo revenue 22% below potential, loading delays average 45 minutes',
        solution: 'Intelligent cargo optimization algorithms maximize payload efficiency while ensuring safety and regulatory compliance.'
      },
      {
        title: 'Route Planning Inefficiencies',
        description: 'Static route planning fails to adapt to real-time conditions, weather patterns, and traffic optimization opportunities.',
        impact: 'Fuel waste $2.3M annually, delivery delays 18% of shipments, customer satisfaction below 78%',
        solution: 'Dynamic route optimization considers real-time conditions to minimize costs and maximize on-time performance.'
      },
      {
        title: 'Supply Chain Visibility Gaps',
        description: 'Limited visibility across logistics networks prevents proactive issue resolution and customer communication.',
        impact: 'Lost shipment incidents, customer service costs $890K annually, inability to proactively manage disruptions',
        solution: 'End-to-end supply chain intelligence provides real-time visibility and predictive issue resolution.'
      }
    ],
    
    capabilities: [
      {
        icon: Plane,
        title: 'Predictive Aircraft Maintenance',
        description: 'Advanced analytics that monitor aircraft systems and predict maintenance requirements before failures occur.',
        benefits: [
          '85% reduction in unplanned maintenance',
          'Flight delay minimization',
          'Safety enhancement',
          'Maintenance cost optimization'
        ]
      },
      {
        icon: Truck,
        title: 'Intelligent Cargo Management',
        description: 'AI-powered cargo planning and optimization that maximizes payload efficiency and revenue.',
        benefits: [
          'Load optimization',
          'Weight distribution analysis',
          'Revenue maximization',
          'Fuel efficiency improvement'
        ]
      },
      {
        icon: TrendingUp,
        title: 'Dynamic Route Optimization',
        description: 'Real-time route planning that adapts to weather, traffic, and operational conditions for optimal efficiency.',
        benefits: [
          'Fuel cost reduction',
          'On-time performance improvement',
          'Weather impact minimization',
          'Capacity utilization optimization'
        ]
      },
      {
        icon: Users,
        title: 'Crew Resource Management',
        description: 'Intelligent crew scheduling and resource allocation that ensures compliance while maximizing efficiency.',
        benefits: [
          'Optimal crew scheduling',
          'Regulatory compliance',
          'Fatigue management',
          'Cost optimization'
        ]
      },
      {
        icon: Shield,
        title: 'Safety & Compliance Intelligence',
        description: 'Comprehensive safety monitoring and regulatory compliance management across all operations.',
        benefits: [
          'Safety incident prevention',
          'Regulatory compliance automation',
          'Risk assessment',
          'Audit trail management'
        ]
      },
      {
        icon: Zap,
        title: 'Operations Control Center',
        description: 'Centralized operations intelligence providing real-time visibility and control across all logistics operations.',
        benefits: [
          'Real-time operations monitoring',
          'Automated decision support',
          'Performance optimization',
          'Customer communication automation'
        ]
      }
    ],
    
    caseStudy: {
      company: 'Emirates Logistics Network',
      industry: 'Aviation & Cargo Logistics (45 Aircraft, 1200+ Routes)',
      challenge: 'The logistics network was experiencing critical operational challenges with unplanned aircraft maintenance causing 15% flight disruptions, suboptimal cargo loading resulting in $3.2M annual revenue loss, and route inefficiencies increasing fuel costs by 18% above industry benchmarks.',
      solution: 'AI8TY deployed a comprehensive aviation intelligence platform featuring predictive maintenance systems, intelligent cargo optimization, dynamic route planning, and real-time operations control integrated with existing aviation management systems.',
      results: [
        { value: '89%', label: 'Maintenance Prediction', description: 'Accuracy in predicting maintenance needs' },
        { value: '$5.2M', label: 'Annual Savings', description: 'Through operational optimization' },
        { value: '94%', label: 'On-Time Performance', description: 'Up from 78% baseline' },
        { value: '23%', label: 'Cargo Revenue Increase', description: 'Through optimization algorithms' }
      ],
      quote: 'AI8TY transformed our entire aviation operation from reactive to predictive. Our aircraft availability is at industry-leading levels, our cargo optimization is generating significant additional revenue, and our operational efficiency has never been higher.',
      author: 'Captain Ahmed Al-Mansouri',
      title: 'Chief Operations Officer, Emirates Logistics Network'
    },
    
    roiInputs: [
      { label: 'Number of Aircraft/Vehicles', defaultValue: 25, multiplier: 45000 },
      { label: 'Daily Flight Hours/Routes', defaultValue: 180, multiplier: 850 },
      { label: 'Average Fuel Cost per Hour (USD)', defaultValue: 2500, multiplier: 0.18 },
      { label: 'Monthly Cargo Volume (tons)', defaultValue: 8500, multiplier: 95 }
    ],
    
    implementationSteps: [
      {
        phase: 'Phase 1',
        title: 'Aviation Operations Assessment',
        description: 'Comprehensive analysis of fleet operations, maintenance processes, and logistics workflows to identify optimization opportunities.',
        duration: '3-4 weeks',
        outcomes: [
          'Fleet operations analysis',
          'Maintenance process review',
          'Route optimization assessment',
          'Safety compliance evaluation'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'Predictive Systems Deployment',
        description: 'Implementation of predictive maintenance, cargo optimization, and core operational intelligence systems.',
        duration: '8-10 weeks',
        outcomes: [
          'Predictive maintenance active',
          'Cargo optimization systems',
          'Route planning intelligence',
          'Safety monitoring systems'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Advanced Operations Integration',
        description: 'Full deployment of operations control, crew management, and comprehensive logistics intelligence platforms.',
        duration: '10-12 weeks',
        outcomes: [
          'Operations control center',
          'Crew resource optimization',
          'Supply chain visibility',
          'Performance analytics'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Excellence & Scale',
        description: 'Performance optimization, network expansion support, and advanced analytics for continuous improvement.',
        duration: '6-8 weeks',
        outcomes: [
          'Maximum efficiency optimization',
          'Network scalability',
          'Advanced analytics',
          'Continuous improvement protocols'
        ]
      }
    ]
  };

  return <ComprehensiveIndustryTemplate {...templateProps} />;
};

export default AviationLogistics;
