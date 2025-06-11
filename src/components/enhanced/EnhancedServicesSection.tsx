import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PenTool, Layout, Camera, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const EnhancedServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const services = [
    {
      icon: PenTool,
      title: "Brand Identity & Strategy",
      description: "We craft bold, memorable brands that stand out and connect. From logo to voice, we build your creative DNA.",
      benefits: [
        "Distinctive visual identity",
        "Brand strategy & positioning",
        "Guidelines for consistency"
      ],
      quote: "Your brand is your superpower. We make it unforgettable.",
      color: "neural",
      detailedBenefits: [
        "Logo, color, and typography systems",
        "Brand voice and messaging",
        "Brand books and asset kits"
      ]
    },
    {
      icon: Layout,
      title: "Web Design & Digital Experiences",
      description: "Minimal, high-impact websites and digital products that engage and convert. Built for speed, beauty, and results.",
      benefits: [
        "Modern, responsive design",
        "UX-first, conversion-focused",
        "Custom or CMS builds (Webflow, Shopify, etc.)"
      ],
      quote: "We turn ideas into digital experiences that move people.",
      color: "quantum",
      detailedBenefits: [
        "Wireframes and prototypes",
        "UI/UX design systems",
        "Performance and accessibility optimization"
      ]
    },
    {
      icon: Camera,
      title: "Content & Campaigns",
      description: "From viral campaigns to stunning visuals, we create content that gets noticed and shared.",
      benefits: [
        "Creative campaign concepts",
        "Photo, video, and motion",
        "Social & digital activation"
      ],
      quote: "Stories that spark action, visuals that stick.",
      color: "intelligence",
      detailedBenefits: [
        "Campaign strategy and rollout",
        "Content production (photo, video, animation)",
        "Influencer and social media activation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      description: "Big ideas, sharp strategy. We help you find your edge and make bold moves in a crowded world.",
      benefits: [
        "Brand & digital audits",
        "Go-to-market strategy",
        "Innovation workshops"
      ],
      quote: "Fresh perspective. Real results.",
      color: "sand",
      detailedBenefits: [
        "Competitive analysis",
        "Positioning & messaging workshops",
        "Creative direction & ideation"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "neural",
      quantum: "quantum",
      intelligence: "intelligence",
      sand: "default"
    };
    return colorMap[color as keyof typeof colorMap] || "default";
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural",
      quantum: "bg-quantum/20 text-quantum",
      intelligence: "bg-intelligence/20 text-intelligence",
      sand: "bg-sand/20 text-sand"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section 
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 intelligence-flow-bg opacity-5"></div>
      <div className="absolute inset-0 quantum-dots-bg opacity-3"></div>
      
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-8">
            All-in-One Growth Solutions,
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              Built for Founders Who Move Fast
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/80 max-w-3xl mx-auto">
            We bring deep strategy, bleeding-edge tools — and we execute everything for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard
                variant={getColorClasses(service.color) as any}
                size="lg"
                className="h-full"
              >
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${getIconColorClasses(service.color)}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon size={28} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-syne font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="font-space text-white/85 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex}
                      className="flex items-center gap-3 text-base font-space text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ 
                        delay: (index * 0.1) + (benefitIndex * 0.05),
                        duration: 0.5 
                      }}
                    >
                      <CheckCircle size={18} className={`${service.color === 'neural' ? 'text-neural' : 
                        service.color === 'quantum' ? 'text-quantum' : 
                        service.color === 'intelligence' ? 'text-intelligence' : 'text-sand'}`} />
                      <span>✅ {benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Quote */}
                {service.quote && (
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                    <p className="text-sm font-space text-neural/90 italic">
                      💬 "{service.quote}"
                    </p>
                  </div>
                )}

                {/* Expand/Collapse for detailed benefits */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedService === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {expandedService === index && (
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-lg font-syne font-semibold mb-3 text-white">What You Get:</h4>
                      <ul className="space-y-2">
                        {service.detailedBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm font-space text-white/70">
                            <div className="w-1.5 h-1.5 bg-neural rounded-full flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={ArrowRight}
                  onClick={() => toggleExpanded(index)}
                  className="mt-4"
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                </PremiumButton>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedServicesSection;
