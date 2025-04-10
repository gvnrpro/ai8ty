
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  Palette, BrainCircuit, LineChart, Globe,
  PenTool, Box, Layout, PlayCircle,
  Bot, Users, Database, BarChart3,
  Code, Smartphone, Gauge, AppWindow
} from 'lucide-react';

interface ServiceBlockProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  services: { name: string; icon: React.ReactNode }[];
  delay: number;
  visual: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ 
  title, color, icon, services, delay, visual 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [isHovered, setIsHovered] = useState(false);
  
  const blockColors = {
    violet: "bg-ai8ty-violet/5 border-ai8ty-violet/20 hover:border-ai8ty-violet",
    teal: "bg-ai8ty-teal/5 border-ai8ty-teal/20 hover:border-ai8ty-teal",
    white: "bg-white/5 border-white/20 hover:border-white",
    grey: "bg-ai8ty-grey/5 border-ai8ty-grey/20 hover:border-ai8ty-grey",
  };
  
  const iconColors = {
    violet: "text-ai8ty-violet",
    teal: "text-ai8ty-teal",
    white: "text-ai8ty-white",
    grey: "text-ai8ty-grey",
  };
  
  return (
    <motion.div 
      ref={ref}
      className={cn(
        "border rounded-lg transition-all duration-500 transform group h-full",
        blockColors[color as keyof typeof blockColors],
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
            iconColors[color as keyof typeof iconColors]
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-avant ml-3">{title}</h3>
        </div>
        
        <div className={cn(
          "relative mt-4 flex-grow aspect-video rounded-md overflow-hidden mb-6 bg-black/30",
          "transition-all duration-500"
        )}>
          <motion.div 
            className="absolute inset-0 opacity-50 bg-center bg-cover"
            style={{ backgroundImage: `url(${visual})` }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent" />
        </div>
        
        <ul className="space-y-3">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              className="flex items-center text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ 
                duration: 0.3, 
                delay: (delay * 0.1) + (index * 0.1),
                ease: "easeOut" 
              }}
            >
              <span className={cn(
                "inline-flex mr-2",
                iconColors[color as keyof typeof iconColors]
              )}>
                {service.icon}
              </span>
              {service.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section id="services-section" className="py-16 md:py-24 px-4 md:px-6 bg-ai8ty-black relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <motion.h2 
          className="heading text-3xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          The AI8TY System
        </motion.h2>
        
        <motion.p 
          className="subheading text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Creative Precision Meets Intelligent Execution
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceBlock
            title="AI8TY Creatives"
            color="violet"
            icon={<Palette size={24} />}
            delay={1}
            visual="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=800&q=80"
            services={[
              { name: "Branding", icon: <PenTool size={16} /> },
              { name: "3D Visualization", icon: <Box size={16} /> },
              { name: "UI/UX + Web", icon: <Layout size={16} /> },
              { name: "Cinematic Media", icon: <PlayCircle size={16} /> }
            ]}
          />
          
          <ServiceBlock
            title="AI8TY Labs"
            color="teal"
            icon={<BrainCircuit size={24} />}
            delay={2}
            visual="https://images.unsplash.com/photo-1677442133752-1d586162c7df?auto=format&fit=crop&w=800&q=80"
            services={[
              { name: "Custom AI Tools", icon: <Bot size={16} /> },
              { name: "Digital Clones", icon: <Users size={16} /> },
              { name: "AI Chat Interfaces", icon: <Database size={16} /> },
              { name: "Data Visualization", icon: <BarChart3 size={16} /> }
            ]}
          />
          
          <ServiceBlock
            title="AI8TY Strategies"
            color="white"
            icon={<LineChart size={24} />}
            delay={3}
            visual="https://images.unsplash.com/photo-1589561253898-768105ca91a8?auto=format&fit=crop&w=800&q=80"
            services={[
              { name: "Growth Blueprints", icon: <LineChart size={16} /> },
              { name: "SEO & Campaigns", icon: <BarChart3 size={16} /> },
              { name: "Business Modelling", icon: <LineChart size={16} /> },
              { name: "Funnel Optimization", icon: <LineChart size={16} /> }
            ]}
          />
          
          <ServiceBlock
            title="AI8TY Sites"
            color="grey"
            icon={<Globe size={24} />}
            delay={4}
            visual="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80"
            services={[
              { name: "72hr Web Builds", icon: <Code size={16} /> },
              { name: "Custom Domains & Hosting", icon: <Globe size={16} /> },
              { name: "Mobile Optimization", icon: <Smartphone size={16} /> },
              { name: "App Dev + API", icon: <AppWindow size={16} /> }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
