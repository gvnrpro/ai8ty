
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  
  // Scroll-linked animation
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  
  return (
    <motion.div 
      ref={cardRef}
      style={{ 
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      className={cn(
        "platform-card transition-all duration-700 h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div 
        ref={ref} 
        className="h-full flex flex-col"
      >
        <div className="text-sand mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-syne mb-3">{title}</h3>
        <p className="text-ai8ty-grey text-sm flex-grow">{description}</p>
        
        <div className="mt-4 h-0.5 w-12 bg-sand/20"></div>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll-linked animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  return (
    <section 
      id="about-section" 
      className="py-24 md:py-32 px-6 bg-ai8ty-black relative"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ai8ty-black to-transparent z-0" />
      
      {/* Background design elements */}
      <motion.div
        className="absolute right-10 top-20 w-64 h-64 rounded-full border border-sand/5 opacity-20"
        style={{ y: y1 }}
      />
      
      <motion.div
        className="absolute left-10 bottom-20 w-32 h-32 rounded-md border border-sand/5 opacity-10"
        style={{ y: y2 }}
      />
      
      <div 
        ref={ref}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-12"
        >
          <h2 className="section-title heading text-3xl md:text-5xl mb-8 text-left">
            Business OS
          </h2>
          
          <p className="subheading max-w-3xl leading-relaxed">
            AI8TY is a business transformation platform built at the intersection of human insight and artificial intelligence. 
            Our platform turns bold ideas into enduring ecosystems through strategic automation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Compass size={32} />}
            title="Strategy"
            description="Proprietary business analysis and strategic frameworks to navigate complexity and reveal growth opportunities."
            delay={100}
          />
          <ServiceCard
            icon={<Wand2 size={32} />}
            title="Design"
            description="Systems architecture and interface design that elevate your brand presence and operational effectiveness."
            delay={200}
          />
          <ServiceCard
            icon={<Monitor size={32} />}
            title="Technology"
            description="Cutting-edge automation solutions built with scalability and long-term adaptability in mind."
            delay={300}
          />
          <ServiceCard
            icon={<Brain size={32} />}
            title="AI Integration"
            description="Seamless integration of AI capabilities to create intelligent systems that learn and adapt to your business needs."
            delay={400}
          />
        </div>

        <div className={cn(
          "mt-16 h-px bg-gradient-to-r from-transparent via-sand to-transparent opacity-20 transition-all duration-1000",
          isVisible ? "w-full" : "w-0"
        )}></div>
      </div>
    </section>
  );
};

export default AboutSection;
