
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, Compass, Monitor, Wand2 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "glass-panel p-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="text-ai8ty-teal mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-avant mb-3">{title}</h3>
      <p className="text-ai8ty-grey text-sm">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  return (
    <section id="about-section" className="py-24 px-6 bg-ai8ty-black relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ai8ty-black to-transparent z-0" />
      
      <div 
        ref={ref}
        className="container mx-auto max-w-6xl"
      >
        <h2 className={cn(
          "heading text-3xl md:text-5xl mb-8 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          A New Era of Intelligence by Design
        </h2>
        
        <p className={cn(
          "subheading text-center max-w-3xl mx-auto mb-16 leading-relaxed transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          We are a creative tech studio built at the intersection of human insight and artificial intelligence. 
          Our work lives where branding, business, and automation meet. 
          We turn bold ideas into enduring ecosystems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Compass size={32} />}
            title="Strategy"
            description="Brand positioning, market analysis, and strategic roadmaps to navigate complexity."
            delay={100}
          />
          <ServiceCard
            icon={<Wand2 size={32} />}
            title="Design"
            description="Visually stunning, user-centered designs that elevate your brand presence."
            delay={200}
          />
          <ServiceCard
            icon={<Monitor size={32} />}
            title="Technology"
            description="Cutting-edge development solutions built with performance and scalability in mind."
            delay={300}
          />
          <ServiceCard
            icon={<Brain size={32} />}
            title="AI Cloning"
            description="Next-generation AI solutions that create digital replicas of your voice and style."
            delay={400}
          />
        </div>

        <div className={cn(
          "mt-16 h-px bg-gradient-to-r from-transparent via-ai8ty-violet to-transparent opacity-50 transition-all duration-1000",
          isVisible ? "w-full" : "w-0"
        )}></div>
      </div>
    </section>
  );
};

export default AboutSection;
