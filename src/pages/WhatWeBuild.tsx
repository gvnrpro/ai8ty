
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const WhatWeBuild = () => {
  return (
    <>
      <Helmet>
        <title>What We Build - AI8TY</title>
        <meta name="description" content="Discover the intelligent tools and infrastructure AI8TY builds for real-world impact." />
      </Helmet>

      <div className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="pt-20">
          <section className="section-apple-large">
            <div className="container-apple text-center">
              <h1 className="text-display-large mb-8">What We Build</h1>
              <p className="text-body-large text-gray-600">
                Coming soon - Intelligent tools and infrastructure for real-world impact
              </p>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default WhatWeBuild;
