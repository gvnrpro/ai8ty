
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Join Us - AI8TY Careers</title>
        <meta name="description" content="Join AI8TY in building systems for a more intelligent, accessible future. Explore career opportunities with us." />
      </Helmet>

      <div className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="pt-20">
          <section className="section-apple-large">
            <div className="container-apple text-center">
              <h1 className="text-display-large mb-8">Join Us</h1>
              <p className="text-body-large text-gray-600 mb-8">
                Help us build systems for a more intelligent, accessible future
              </p>
              <p className="text-body text-gray-500">
                Career opportunities coming soon - follow us for updates
              </p>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Careers;
