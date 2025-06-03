
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const PublicSector = () => {
  return (
    <IndustryGatewayTemplate
      title="Operational AI for Public Sector"
      subtitle="AI systems for government entities improving efficiency, mitigating risk, and aligning with GCC regulatory requirements:"
      challenges={[
        "Citizen service optimization and automation",
        "Emergency services demand prediction models",
        "Regulatory compliance monitoring and enforcement",
        "Resource allocation and budgeting intelligence",
        "Inter-agency data intelligence and coordination"
      ]}
      caseStudy={{
        institution: "Municipal Government Entity",
        metric: "improve citizen service response times by 52%"
      }}
      metaTitle="AI Systems for Public Sector | AI8TY"
      metaDescription="Operational AI systems for government including citizen service optimization, emergency prediction models, and regulatory compliance automation."
    />
  );
};

export default PublicSector;
