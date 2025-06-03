
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const ManufacturingGroups = () => {
  return (
    <IndustryGatewayTemplate
      title="AI8TY for Manufacturing Groups"
      subtitle="Industrial intelligence systems addressing:"
      challenges={[
        "Predictive maintenance algorithms",
        "Supply chain optimization engines",
        "Quality control automation",
        "Production efficiency intelligence",
        "Equipment performance monitoring"
      ]}
      caseStudy={{
        institution: "Global Manufacturing Conglomerate",
        metric: "reduce downtime by 47%"
      }}
      metaTitle="AI Systems for Manufacturing Groups | AI8TY"
      metaDescription="Industrial AI implementations including predictive maintenance, supply chain optimization, and production efficiency intelligence systems."
    />
  );
};

export default ManufacturingGroups;
