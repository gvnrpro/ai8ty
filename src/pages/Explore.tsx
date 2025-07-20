
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore AI Tools - AI8TY</title>
        <meta name="description" content="Explore the directory of AI tools and applications built by AI8TY. Try accessible AI technology designed for everyone." />
      </Helmet>

      <div className="min-h-screen">
        <AppleInspiredNavigation />
        
        <main className="pt-20">
          <section className="section-apple-large">
            <div className="container-apple text-center">
              <h1 className="text-display-large mb-8">Explore</h1>
              <p className="text-body-large text-gray-600 mb-8">
                Directory of AI tools built by AI8TY
              </p>
              <p className="text-body text-gray-500">
                Coming soon - Interactive tools and applications you can try today
              </p>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Explore;
