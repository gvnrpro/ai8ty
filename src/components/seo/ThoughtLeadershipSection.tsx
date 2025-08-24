import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, AlertCircle, Lightbulb, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThoughtLeadershipSection = () => {
  const insights = [
    {
      id: 'difc-ai-regulations-2025',
      title: 'DIFC AI Regulations 2025: What Gulf Banks Need to Know',
      excerpt: 'Breaking down the new DIFC AI compliance requirements and how financial institutions can prepare for implementation without disrupting operations.',
      author: 'Sarah Al-Mahmoud, Ex-McKinsey Partner',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Regulatory Compliance',
      icon: AlertCircle,
      keywords: 'DIFC AI regulations, UAE banking compliance, financial AI 2025',
      tags: ['DIFC', 'Banking', 'Compliance', 'Regulations']
    },
    {
      id: 'arabic-ai-processing-breakthrough',
      title: 'Why Most Arabic AI Processing Fails in Enterprise Settings',
      excerpt: 'Technical deep-dive into the cultural and linguistic nuances that make Arabic AI challenging, and how we solved processing accuracy for UAE enterprises.',
      author: 'Ahmed Hassan, Former ADNOC AI Lead',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'Technical Innovation',
      icon: Lightbulb,
      keywords: 'Arabic AI processing, multilingual AI UAE, cultural AI systems',
      tags: ['Arabic AI', 'NLP', 'Cultural Computing', 'Enterprise']
    },
    {
      id: 'gulf-ai-implementation-guide',
      title: 'The Gulf Enterprise AI Implementation Playbook',
      excerpt: 'Lessons from deploying AI across 50+ Gulf enterprises. What works, what fails, and how to avoid the pitfalls that cost millions.',
      author: 'Dr. Khalid Al-Rashid, AI8TY Chief Architect',
      date: '2024-12-05',
      readTime: '15 min read',
      category: 'Implementation Strategy',
      icon: TrendingUp,
      keywords: 'Gulf AI implementation, enterprise AI strategy, Middle East AI deployment',
      tags: ['Strategy', 'Implementation', 'Gulf Business', 'Enterprise AI']
    },
    {
      id: 'ramadan-ai-optimization',
      title: 'How to Optimize AI Systems for Ramadan Business Cycles',
      excerpt: 'Unique operational insights for Gulf enterprises: adjusting AI predictions and workflows for cultural and religious business patterns.',
      author: 'Fatima Al-Zahra, Operations Intelligence Lead',
      date: '2024-11-28',
      readTime: '10 min read',
      category: 'Cultural Computing',
      icon: Globe,
      keywords: 'Ramadan AI optimization, Gulf business cycles, cultural AI adaptation',
      tags: ['Cultural AI', 'Operations', 'Seasonal Optimization', 'Gulf Markets']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Gulf AI Summit 2025 - Dubai',
      date: 'January 15, 2025',
      type: 'Keynote Speaker',
      topic: 'Enterprise AI Architecture for DIFC Compliance'
    },
    {
      title: 'UAE AI Office Strategic Briefing',
      date: 'January 22, 2025',
      type: 'Panel Discussion',
      topic: 'Arabic AI Processing: State of the Art'
    },
    {
      title: 'ADNOC Innovation Forum',
      date: 'February 5, 2025',
      type: 'Workshop Leader',
      topic: 'Industrial AI for Gulf Operations'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display text-white mb-6">
            Gulf AI Intelligence
          </h2>
          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            Strategic insights from deploying AI in the world's most regulated and culturally complex business environment. 
            Written by the architects who build these systems.
          </p>
        </div>

        {/* Latest Insights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-title-large text-white mb-8">Latest Strategic Insights</h3>
            <div className="space-y-8">
              {insights.map((insight) => (
                <article key={insight.id} className="premium-card group cursor-pointer hover:border-blue-500/50">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <insight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {insight.category}
                        </span>
                        {insight.tags.map((tag) => (
                          <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-title text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {insight.title}
                      </h4>
                      
                      <p className="text-body text-gray-400 mb-4">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{insight.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{insight.date}</span>
                          </div>
                          <span>{insight.readTime}</span>
                        </div>
                        
                        <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform">
                          <span className="text-sm font-medium">Read Full Analysis</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="premium-card">
              <h3 className="text-title text-white mb-6">Upcoming Speaking Engagements</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-body font-semibold text-white mb-1">{event.title}</h4>
                    <p className="text-sm text-blue-400 mb-1">{event.type}</p>
                    <p className="text-sm text-gray-400 mb-2">{event.date}</p>
                    <p className="text-sm text-gray-300">{event.topic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Briefing CTA */}
            <div className="premium-card bg-gradient-to-br from-blue-950 to-purple-950 border-blue-500/30">
              <h3 className="text-title text-white mb-4">Executive AI Briefing</h3>
              <p className="text-body text-blue-100 mb-6">
                Get strategic AI insights tailored to your Gulf enterprise. No sales pitch—just intelligence.
              </p>
              <Button className="btn-apple-premium w-full">
                Request Private Briefing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="premium-card">
              <h3 className="text-title text-white mb-4">Gulf AI Intelligence Weekly</h3>
              <p className="text-body text-gray-400 mb-4">
                Strategic AI insights for Gulf executives. No noise, just intelligence.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Executive email"
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                <Button className="btn-apple-secondary w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-950 to-purple-950 rounded-2xl p-12">
          <h3 className="text-title-large text-white mb-4">
            Want These Insights Applied to Your Business?
          </h3>
          <p className="text-body-large text-blue-100 mb-8 max-w-2xl mx-auto">
            Strategic AI consulting for Gulf enterprises who understand that competitive advantage 
            comes from implementation, not just insights.
          </p>
          <Button className="btn-apple-premium">
            Schedule Strategic Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;