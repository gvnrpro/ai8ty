
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';
import GlitchText from './GlitchText';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [emailHovered, setEmailHovered] = useState(false);
  
  return (
    <section id="contact" className="py-24 px-6 bg-ai8ty-black">
      <div 
        ref={ref}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className={cn(
          "heading text-3xl md:text-5xl mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Ready to Build What's Next?
        </h2>
        
        <div 
          className={cn(
            "mb-12 py-8 px-4 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div 
            className="relative inline-flex items-center text-xl md:text-3xl font-avant"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <span className="text-ai8ty-teal mr-2">📩</span>
            <a 
              href="mailto:futureis@ai8ty.com" 
              className="relative z-10 transition-colors duration-300 hover:text-ai8ty-teal"
            >
              {emailHovered ? (
                <GlitchText text="futureis@ai8ty.com" glitchIntensity={50} />
              ) : (
                "futureis@ai8ty.com"
              )}
            </a>
          </div>
        </div>
        
        <p className={cn(
          "subheading mb-12 transition-all duration-700 delay-200",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Because the future doesn't write itself.
        </p>
        
        <div className={cn(
          "flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button 
            className="btn-primary flex items-center"
            size="lg"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Let's Talk Strategy
          </Button>
          
          <Button 
            variant="outline"
            className="border-ai8ty-teal text-ai8ty-teal hover:bg-ai8ty-teal hover:text-ai8ty-black"
            size="lg"
          >
            <Send className="mr-2 h-4 w-4" />
            Get a Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
