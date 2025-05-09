
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/i18n';

const BusinessTransformationModule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [beforeRef, beforeInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [afterRef, afterInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const { language } = useLanguage();

  // Animation values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.8, 1, 1, 0.8]);
  const xPosition = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-100%"]);

  // Before state chaos elements
  const chaosElements = [
    { name: "CRM", x: "-5%", y: "10%", delay: 0 },
    { name: "WhatsApp", x: "20%", y: "-15%", delay: 0.1 },
    { name: "Spreadsheets", x: "-25%", y: "-5%", delay: 0.2 },
    { name: "Emails", x: "15%", y: "20%", delay: 0.3 },
    { name: "PDFs", x: "-20%", y: "25%", delay: 0.4 },
    { name: "Manual Tasks", x: "30%", y: "5%", delay: 0.5 },
    { name: "Phone Calls", x: "-10%", y: "-25%", delay: 0.6 }
  ];

  // After state unified elements
  const unifiedElements = [
    { name: "Unified Dashboard", delay: 0 },
    { name: "Automated Workflows", delay: 0.1 },
    { name: "Client Portal", delay: 0.2 },
    { name: "Real-time Analytics", delay: 0.3 },
    { name: "Team Collaboration", delay: 0.4 },
    { name: "Document Management", delay: 0.5 },
    { name: "Integrated Communications", delay: 0.6 }
  ];

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full overflow-hidden bg-ai8ty-black">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          className="relative w-full max-w-6xl mx-auto px-6"
          style={{ opacity, scale }}
        >
          <div className="text-center mb-12">
            <h2 className="heading text-3xl md:text-5xl mb-4">
              {t('transformation.title', language)}
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              {t('transformation.subtitle', language)}
            </p>
          </div>
          
          {/* Transformation visualization */}
          <div className="relative h-[60vh] overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-[200%] h-full flex"
              style={{ x: xPosition }}
            >
              {/* BEFORE state */}
              <div 
                ref={beforeRef} 
                className={cn(
                  "w-1/2 h-full flex flex-col justify-center items-center relative p-6",
                  "bg-depth-2 rounded-xl border border-white/5"
                )}
              >
                <h3 className="text-2xl font-syne mb-6 text-sand">Before</h3>
                <div className="relative w-full h-3/4 border-2 border-dashed border-white/20 rounded-xl">
                  <div className="absolute inset-0 w-full h-full">
                    {chaosElements.map((element, index) => (
                      <motion.div
                        key={index}
                        className="absolute bg-depth-3 border border-white/10 px-4 py-2 rounded-lg text-sm shadow-glow-sm"
                        style={{ 
                          left: "50%",
                          top: "50%", 
                          translateX: "-50%", 
                          translateY: "-50%"
                        }}
                        initial={{ opacity: 0, x: element.x, y: element.y, scale: 0.8 }}
                        animate={beforeInView ? { 
                          opacity: 1, 
                          x: element.x, 
                          y: element.y,
                          scale: 1,
                          transition: { 
                            delay: element.delay, 
                            type: "spring",
                            stiffness: 100
                          } 
                        } : {}}
                      >
                        {element.name}
                        
                        {/* Random connecting lines */}
                        <div className="absolute w-[100px] h-[1px] bg-white/20 origin-center"
                          style={{
                            top: "50%",
                            left: "100%",
                            transform: `rotate(${Math.random() * 180}deg)`
                          }}
                        ></div>
                      </motion.div>
                    ))}
                    
                    {/* Chaos visual elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                      <div className="tech-dots-bg absolute inset-0"></div>
                      <div className="neural-grid-bg absolute inset-0 opacity-40"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-ai8ty-grey">Scattered tools. Disconnected processes.</p>
                </div>
              </div>
              
              {/* AFTER state */}
              <div 
                ref={afterRef} 
                className={cn(
                  "w-1/2 h-full flex flex-col justify-center items-center relative p-6",
                  "bg-depth-1 rounded-xl border border-sand/30"
                )}
              >
                <h3 className="text-2xl font-syne mb-6 text-sand">After</h3>
                <div className="relative w-full h-3/4 border-2 border-sand/40 rounded-xl overflow-hidden">
                  {/* Unified system visualization */}
                  <div className="absolute inset-0 w-full h-full">
                    {/* Central hub */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-sand/20 flex items-center justify-center border border-sand"
                      initial={{ scale: 0 }}
                      animate={afterInView ? { 
                        scale: 1, 
                        transition: { 
                          delay: 0.2,
                          type: "spring",
                          stiffness: 100 
                        } 
                      } : {}}
                    >
                      <div className="text-sand font-bold">AI8TY OS</div>
                    </motion.div>
                    
                    {/* Connected elements */}
                    {unifiedElements.map((element, index) => {
                      const angle = (index / unifiedElements.length) * Math.PI * 2;
                      const radius = 130; // Distance from center
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <React.Fragment key={index}>
                          <motion.div
                            className="absolute bg-depth-2 border border-sand/30 px-3 py-1 rounded-lg text-xs shadow-glow-sm"
                            style={{ 
                              left: "50%",
                              top: "50%",
                              translateX: "-50%", 
                              translateY: "-50%"
                            }}
                            initial={{ opacity: 0, x, y, scale: 0.8 }}
                            animate={afterInView ? { 
                              opacity: 1, 
                              x, 
                              y, 
                              scale: 1,
                              transition: { 
                                delay: 0.5 + element.delay, 
                                type: "spring",
                                stiffness: 80 
                              } 
                            } : {}}
                          >
                            {element.name}
                          </motion.div>
                          
                          {/* Connection line to center */}
                          <motion.div 
                            className="absolute bg-sand/40 h-[1px] origin-left"
                            style={{ 
                              left: "50%",
                              top: "50%",
                              width: radius,
                              transform: `rotate(${angle}rad)`
                            }}
                            initial={{ scaleX: 0 }}
                            animate={afterInView ? { 
                              scaleX: 1,
                              transition: { 
                                delay: 0.4 + element.delay,
                                duration: 0.6 
                              } 
                            } : {}}
                          />
                        </React.Fragment>
                      );
                    })}
                    
                    {/* System visual elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="data-flow-bg absolute inset-0 opacity-10"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-ai8ty-grey">Unified platform. Seamless growth.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTransformationModule;
