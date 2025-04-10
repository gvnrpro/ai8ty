
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="min-h-screen relative flex flex-col justify-center items-center py-24 px-4 overflow-hidden"
    >
      <ParticleBackground density={30} color="#00F5D4" className="opacity-30" />
      
      <div className={cn(
        "container max-w-4xl mx-auto z-10 transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}>
        <h1 className="heading text-4xl md:text-7xl mb-6 font-bold tracking-tight text-center">
          <span className="block">Think.</span>
          <span className="block">Create.</span>
          <span className="block text-ai8ty-violet">Automate.</span>
        </h1>
        
        <p className="subheading text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          AI8TY is the creative-strategy consultancy for visionary brands. We fuse human design with AI 
          to solve today's problems and build tomorrow's systems.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={scrollToWork}
            className="btn-primary text-lg group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </div>
      </div>

      <div className={cn(
        "absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-ai8ty-black to-transparent z-0",
        isVisible ? "opacity-100" : "opacity-0"
      )} />
    </section>
  );
};

export default HeroSection;
