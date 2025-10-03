import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FounderStorySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Founder Image Placeholder */}
          <div className="lg:col-span-2">
            <div className="premium-card aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-blue-600/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-blue-400">AA</span>
                </div>
                <p className="text-body text-gray-400">Awwab Abdul</p>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-3">
            <h2 className="text-display text-white mb-6">
              Why AI8TY Exists
            </h2>
            
            <div className="space-y-6 text-body-large text-gray-300 leading-relaxed mb-8">
              <p>
                After implementing AI systems across Gulf enterprises, I noticed a pattern: 
                most consultants were selling dreams, not delivering implementations.
              </p>
              
              <p>
                Gulf businesses deserve AI partners who understand regional nuances—from Arabic 
                language processing to cultural context in automation. Not generic solutions 
                copy-pasted from Western case studies.
              </p>
              
              <p>
                AI8TY was founded on a simple principle: <strong className="text-white">real implementations, 
                measured results, no BS.</strong> We're building the AI future for Gulf enterprises, 
                one successful project at a time.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <p className="text-body text-gray-300">
                  <strong className="text-white">Gulf-focused:</strong> Every implementation considers regional context
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <p className="text-body text-gray-300">
                  <strong className="text-white">Results-driven:</strong> ROI measured in months, not promises
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <p className="text-body text-gray-300">
                  <strong className="text-white">Transparent:</strong> No inflated portfolios or fake testimonials
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-apple-premium">
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-body text-gray-400">
                <strong className="text-white">Awwab Abdul</strong> — Founder & AI Implementation Specialist
              </p>
              <p className="text-body text-gray-500 mt-2">
                Building AI systems for Gulf enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
