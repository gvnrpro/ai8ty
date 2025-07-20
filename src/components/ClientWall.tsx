
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import './ClientWall.css';

interface ClientLogoProps {
  name: string;
  delay: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({
  name,
  delay
}) => {
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
  {
    name: 'Acme Corp',
    logo: '/lovable-uploads/acme-logo.png',
    alt: 'Acme Corp logo'
  },
  {
    name: 'BetaSoft',
    logo: '/lovable-uploads/betasoft-logo.png',
    alt: 'BetaSoft logo'
  },
  {
    name: 'GammaAI',
    logo: '/lovable-uploads/gammaai-logo.png',
    alt: 'GammaAI logo'
  }
];

const ClientWall: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 px-6 bg-depth-1">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join the companies already transforming their operations with AI8TY
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <ClientLogo
              key={client.name}
              name={client.name}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
