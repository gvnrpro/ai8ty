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
      id: 'difc-assessment',
      title: 'DIFC AI Compliance Readiness Assessment',
      description: 'Exclusive 47-point audit used by DIFC banks to ensure AI systems meet regulatory requirements.',
      icon: Shield,
      downloadText: 'Get Assessment Tool',
      keywords: 'DIFC AI compliance, UAE banking AI, financial AI assessment'
    },
    {
      id: 'gulf-playbook',
      title: 'Gulf Enterprise AI Implementation Playbook',
      description: 'Step-by-step guide used by UAE enterprises to successfully implement AI without disrupting operations.',
      icon: BookOpen,
      downloadText: 'Download Playbook',
      keywords: 'Gulf AI implementation, UAE enterprise AI, Middle East AI strategy'
    },
    {
      id: 'arabic-audit',
      title: 'Arabic AI Processing Capability Audit',
      description: 'Technical assessment framework for evaluating AI systems\' Arabic language and cultural processing abilities.',
      icon: FileText,
      downloadText: 'Get Audit Framework',
      keywords: 'Arabic AI processing, multilingual AI UAE, cultural AI assessment'
    },
    {
      id: 'roi-calculator',
      title: 'Enterprise AI ROI Calculator',
      description: 'Interactive tool used by Gulf CFOs to calculate exact AI implementation costs vs. operational savings.',
      icon: Calculator,
      downloadText: 'Access Calculator',
      keywords: 'AI ROI calculator UAE, enterprise AI costs, AI investment calculator'
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
            Exclusive Gulf AI Resources
          </h2>
          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            Strategic tools and frameworks used by DIFC banks, UAE hospitals, and Gulf manufacturing giants. 
            Not available anywhere else.
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
            Trusted by executives at:
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <span className="text-lg font-semibold">DIFC Banks</span>
            <span className="text-lg font-semibold">UAE Hospitals</span>
            <span className="text-lg font-semibold">Gulf Manufacturers</span>
            <span className="text-lg font-semibold">ADNOC Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;