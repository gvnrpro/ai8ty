
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const PrivateWealthOffices = () => {
  return (
    <IndustryGatewayTemplate
      title="Operational AI for Private Wealth Offices"
      subtitle="AI systems for wealth management improving efficiency, mitigating risk, and aligning with GCC regulatory requirements:"
      challenges={[
        "Portfolio risk mapping and assessment algorithms",
        "Client intelligence and relationship optimization",
        "Investment decision support systems", 
        "Regulatory compliance automation for wealth management",
        "Cross-border wealth monitoring and reporting"
      ]}
      caseStudy={{
        institution: "Regional Family Office Network",
        metric: "improve portfolio risk assessment accuracy by 41%"
      }}
      metaTitle="AI Systems for Private Wealth Offices | AI8TY"
      metaDescription="Operational AI systems for private wealth management including portfolio risk mapping, client intelligence, and investment decision support systems."
    />
  );
};

export default PrivateWealthOffices;
