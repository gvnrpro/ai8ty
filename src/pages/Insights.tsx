
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights - AI8TY</title>
        <meta name="description" content="Insights and perspectives on accessible AI, automation, and the future of human-centered technology." />
      </Helmet>

      <div className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="pt-20">
          <section className="section-apple-large">
            <div className="container-apple text-center">
              <h1 className="text-display-large mb-8">Insights</h1>
              <p className="text-body-large text-gray-600">
                Coming soon - Thoughts and perspectives on accessible AI and human-centered technology
              </p>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Insights;
