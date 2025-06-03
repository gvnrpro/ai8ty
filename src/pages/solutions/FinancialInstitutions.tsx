
import React from 'react';
import IndustryGatewayTemplate from '@/components/enterprise/IndustryGatewayTemplate';

const FinancialInstitutions = () => {
  return (
    <IndustryGatewayTemplate
      title="AI8TY for Global Finance"
      subtitle="Bespoke systems addressing:"
      challenges={[
        "AML pattern suppression",
        "Cross-border liquidity AI",
        "Private wealth inference engines",
        "Regulatory compliance automation",
        "Risk assessment optimization"
      ]}
      caseStudy={{
        institution: "Regional Banking Network",
        metric: "reduce false positives by 63%"
      }}
      metaTitle="AI Systems for Financial Institutions | AI8TY"
      metaDescription="Advanced AI implementations for global finance including AML pattern suppression, cross-border liquidity optimization, and private wealth inference engines."
    />
  );
};

export default FinancialInstitutions;
