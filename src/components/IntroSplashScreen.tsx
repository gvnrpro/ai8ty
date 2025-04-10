
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ParticleBackground from './ParticleBackground';
import GlitchText from './GlitchText';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface IntroSplashScreenProps {
  onComplete?: () => void;
}

const IntroSplashScreen: React.FC<IntroSplashScreenProps> = ({ onComplete }) => {
  const [loaded, setLoaded] = useState(false);
  const [entering, setEntering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation sequence
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const nextSection = document.getElementById('hero-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-ai8ty-black transition-opacity duration-1000",
        entering ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <ParticleBackground color="#8C52FF" density={50} />
      
      <div className={cn(
        "transform transition-all duration-1000 flex flex-col items-center",
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="w-40 h-40 mb-8 relative">
          <img 
            src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
            alt="AI8TY Logo" 
            className={cn(
              "w-full h-full object-contain transition-all duration-1000 filter",
              loaded ? "opacity-100" : "opacity-0 blur-lg",
            )} 
          />
          <div className={cn(
            "absolute inset-0 bg-ai8ty-violet rounded-full mix-blend-screen opacity-0 transition-opacity duration-500",
            loaded ? "animate-pulse" : ""
          )}></div>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-avant tracking-wider text-center mb-6 overflow-hidden">
          <GlitchText 
            text="Intelligence by Design." 
            delay={1000} 
            className="text-ai8ty-white"
          />
        </h1>
        
        <div className={cn(
          "mt-6 transition-all duration-1000 transform",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}>
          <Button 
            onClick={handleEnter}
            variant="outline" 
            className="border-ai8ty-teal text-ai8ty-teal hover:bg-ai8ty-teal hover:text-ai8ty-black"
          >
            Enter
          </Button>
        </div>
        
        <div className={cn(
          "absolute bottom-8 transition-all duration-500",
          loaded ? "opacity-75 animate-bounce" : "opacity-0"
        )}>
          <ChevronDown 
            className="text-ai8ty-white cursor-pointer" 
            size={32} 
            onClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSplashScreen;
