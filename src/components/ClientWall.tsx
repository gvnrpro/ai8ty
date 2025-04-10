
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface ClientLogoProps {
  name: string;
  delay: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "flex items-center justify-center p-6 h-24 transition-all duration-700 filter grayscale hover:grayscale-0 hover:scale-110",
        inView ? "opacity-70 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-2xl font-avant font-bold tracking-tight text-ai8ty-grey">
        {name}
      </div>
    </div>
  );
};

const ClientWall: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const clients = [
    "ACME CORP", "NEXUS", "VERTEX", "CIPHER",
    "QUANTUM", "HELIX", "NOVA", "PULSE"
  ];
  
  return (
    <section className="py-24 px-6 bg-ai8ty-black">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <h2 className={cn(
          "heading text-3xl md:text-4xl mb-12 text-center transition-all duration-700",
          inView ? "opacity-100" : "opacity-0"
        )}>
          Who We Work With
        </h2>
        
        <p className={cn(
          "subheading text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-100",
          inView ? "opacity-100" : "opacity-0"
        )}>
          Startups. Institutions. Game-changers. We partner with those who choose vision over noise.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <ClientLogo 
              key={index} 
              name={client} 
              delay={100 + index * 50} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
