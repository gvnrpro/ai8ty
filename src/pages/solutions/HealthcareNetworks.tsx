
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const HealthcareNetworks = () => {
  return (
    <IndustryGatewayTemplate
      title="AI8TY for Healthcare Networks"
      subtitle="Secure intelligence systems addressing:"
      challenges={[
        "Patient data pattern recognition",
        "Clinical decision support optimization",
        "Resource allocation intelligence",
        "Operational efficiency algorithms",
        "Compliance monitoring automation"
      ]}
      caseStudy={{
        institution: "Multi-Site Healthcare Network",
        metric: "improve diagnostic accuracy by 34%"
      }}
      metaTitle="AI Systems for Healthcare Networks | AI8TY"
      metaDescription="Secure AI implementations for healthcare including patient data intelligence, clinical decision support, and operational optimization systems."
    />
  );
};

export default HealthcareNetworks;
