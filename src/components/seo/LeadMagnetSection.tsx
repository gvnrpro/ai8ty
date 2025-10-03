import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, CheckCircle, ArrowRight, FileText, Calculator, Shield, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null);
  const { toast } = useToast();

  const leadMagnets = [
    {
      id: 'ai-readiness',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI implementation. Coming soon.',
      icon: Shield,
      downloadText: 'Request Early Access',
      keywords: 'AI readiness, enterprise assessment, AI implementation'
    },
    {
      id: 'consultation',
      title: 'Strategic AI Consultation',
      description: 'Book a consultation to discuss your AI needs and opportunities.',
      icon: BookOpen,
      downloadText: 'Book Consultation',
      keywords: 'AI consultation, strategy session, enterprise AI'
    }
  ];

  const handleDownload = (magnetId: string) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your work email to access this exclusive resource.",
        variant: "destructive"
      });
      return;
    }

    const selectedResource = leadMagnets.find(m => m.id === magnetId);
    
    // Here you would typically send to your CRM/email service
    console.log('Lead captured:', { email, resource: magnetId });
    
    toast({
      title: "Resource Sent!",
      description: `${selectedResource?.title} has been sent to ${email}`,
    });
    
    setEmail('');
    setSelectedMagnet(null);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display text-white mb-6">
            Start Your AI Journey
          </h2>
          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            Get started with AI implementation for your Gulf enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadMagnets.map((magnet) => (
            <div 
              key={magnet.id} 
              className={`premium-card cursor-pointer transition-all duration-300 ${
                selectedMagnet === magnet.id ? 'border-blue-500 bg-blue-950/20' : ''
              }`}
              onClick={() => setSelectedMagnet(magnet.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <magnet.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-title text-white mb-3">{magnet.title}</h3>
                  <p className="text-body text-gray-400 mb-4">{magnet.description}</p>
                  
                  {selectedMagnet === magnet.id && (
                    <div className="space-y-4 mt-6 pt-6 border-t border-gray-700">
                      <div className="flex space-x-3">
                        <Input
                          type="email"
                          placeholder="Your work email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-black/50 border-gray-600 text-white placeholder-gray-400"
                        />
                        <Button 
                          onClick={() => handleDownload(magnet.id)}
                          className="btn-apple-premium whitespace-nowrap"
                        >
                          {magnet.downloadText}
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Exclusive content • No spam • Executive-level insights</span>
                      </div>
                    </div>
                  )}
                  
                  {selectedMagnet !== magnet.id && (
                    <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="text-body font-medium">Select to Download</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-body text-gray-400 mb-4">
            Serving Gulf enterprises across industries
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <span className="text-lg font-semibold">Financial Services</span>
            <span className="text-lg font-semibold">Healthcare</span>
            <span className="text-lg font-semibold">Manufacturing</span>
            <span className="text-lg font-semibold">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;