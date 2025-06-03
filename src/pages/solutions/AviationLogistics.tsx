
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const AviationLogistics = () => {
  return (
    <IndustryGatewayTemplate
      title="Operational AI for Aviation & Logistics"
      subtitle="AI systems for transport sectors improving efficiency, mitigating risk, and aligning with GCC regulatory requirements:"
      challenges={[
        "Predictive maintenance for aircraft and fleet optimization",
        "Cargo load optimization and route planning algorithms",
        "Operational efficiency monitoring and enhancement",
        "Supply chain visibility and risk management",
        "Regulatory compliance automation for aviation authorities"
      ]}
      caseStudy={{
        institution: "Regional Aviation Authority",
        metric: "reduce maintenance costs by 38% while improving safety compliance"
      }}
      metaTitle="AI Systems for Aviation & Logistics | AI8TY"
      metaDescription="Operational AI systems for aviation and logistics including predictive maintenance, cargo optimization, and operational efficiency monitoring."
    />
  );
};

export default AviationLogistics;
