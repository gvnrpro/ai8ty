
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const ManufacturingFirms = () => {
  return (
    <IndustryGatewayTemplate
      title="Operational AI for Manufacturing Firms"
      subtitle="AI systems for manufacturing improving efficiency, mitigating risk, and aligning with GCC regulatory requirements:"
      challenges={[
        "Predictive maintenance and equipment optimization",
        "Supply chain intelligence and risk management", 
        "Quality control automation and monitoring",
        "Production efficiency optimization algorithms",
        "Industrial IoT data intelligence and analytics"
      ]}
      caseStudy={{
        institution: "Regional Manufacturing Group",
        metric: "reduce equipment downtime by 45% while improving production quality"
      }}
      metaTitle="AI Systems for Manufacturing Firms | AI8TY"
      metaDescription="Operational AI systems for manufacturing including predictive maintenance, supply chain intelligence, and production optimization."
    />
  );
};

export default ManufacturingFirms;
