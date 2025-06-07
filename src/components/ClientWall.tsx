import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import './ClientWall.css';

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

const clients = [
  { name: 'Acme Corp', logo: '/lovable-uploads/acme-logo.png', alt: 'Acme Corp logo' },
  { name: 'BetaSoft', logo: '/lovable-uploads/betasoft-logo.png', alt: 'BetaSoft logo' },
  { name: 'GammaAI', logo: '/lovable-uploads/gammaai-logo.png', alt: 'GammaAI logo' },
  // Add more as needed
];

const ClientWall: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-24 px-6 bg-ai8ty-black client-wall" aria-label="Client Logos">
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 client-logos">
          {clients.map((client, index) => (
            <ClientLogo 
              key={index} 
              name={client.name} 
              delay={100 + index * 50} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
