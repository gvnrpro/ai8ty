import React from 'react';
import { ArrowRight, TrendingUp, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudySection = () => {
  const caseStudy = {
    client: "Gulf Manufacturing Enterprise",
    industry: "Manufacturing",
    challenge: "Manual quality control processes causing 15% defect rate and production delays",
    solution: "AI-powered visual inspection system integrated with existing production lines",
    timeline: "3 months implementation",
    results: [
      { metric: "Defect Rate", before: "15%", after: "2%", improvement: "87% reduction" },
      { metric: "Inspection Time", before: "45 min/batch", after: "3 min/batch", improvement: "93% faster" },
      { metric: "ROI Timeline", value: "4.2 months", description: "Full cost recovery" }
    ],
    testimonial: {
      quote: "The AI system paid for itself in four months. More importantly, our quality reputation improved significantly.",
      author: "Operations Director",
      company: "Gulf Manufacturing Enterprise"
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display text-white mb-6">
            Real Implementation, Real Results
          </h2>
          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            How we helped a Gulf manufacturer reduce defects by 87% in 3 months
          </p>
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Context */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-title-large text-white">The Challenge</h3>
              </div>
              <p className="text-body text-gray-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-title-large text-white">Our Solution</h3>
              </div>
              <p className="text-body text-gray-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            <div className="premium-card bg-gradient-to-br from-blue-950/50 to-purple-950/50">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-body text-blue-200">{caseStudy.timeline}</span>
              </div>
              <blockquote className="text-body-large text-white italic mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <p className="text-body text-gray-400">
                — {caseStudy.testimonial.author}, {caseStudy.testimonial.company}
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div>
            <h3 className="text-title-large text-white mb-6">Measured Results</h3>
            <div className="space-y-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="premium-card">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-title text-white">{result.metric}</h4>
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {result.improvement || result.value}
                    </span>
                  </div>
                  
                  {result.before && result.after && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Before</p>
                        <p className="text-body-large text-red-400 font-semibold">{result.before}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">After</p>
                        <p className="text-body-large text-green-400 font-semibold">{result.after}</p>
                      </div>
                    </div>
                  )}
                  
                  {result.description && (
                    <p className="text-body text-gray-300 mt-2">{result.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center premium-card bg-gradient-to-r from-blue-950 to-purple-950">
          <h3 className="text-title-large text-white mb-4">
            Ready for Similar Results?
          </h3>
          <p className="text-body-large text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can solve your specific operational challenges
          </p>
          <Button className="btn-apple-premium">
            Schedule Implementation Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
