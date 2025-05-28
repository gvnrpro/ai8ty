
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkItem {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  metrics?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Neural Brand Architecture",
    description: "AI-guided brand transformation for tech unicorn",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c4c4?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/598231558/rendition/720p/file.mp4?loc=external",
    metrics: "300% engagement increase"
  },
  {
    title: "Intelligent Voice Systems",
    description: "Custom voice synthesis for enterprise scale",
    imageUrl: "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
    metrics: "50% operational efficiency"
  },
  {
    title: "Immersive 3D Experiences",
    description: "WebGL product visualization ecosystem",
    imageUrl: "https://images.unsplash.com/photo-1633186710895-309db2be5f2a?auto=format&fit=crop&w=800&q=80",
    metrics: "95% user retention"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time intelligence visualization system",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: "40% faster decisions"
  }
];

const WorkShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workItems.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="work-section" ref={ref} className="neural-section section-divider relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div 
          className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2 
              className="strategic-title text-3xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Intelligence in Action
            </motion.h2>
            <motion.p 
              className="subheading text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From transformation to dominance—our clients don't just adapt, they architect the future.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              onClick={goToPrev}
              className="p-3 rounded-full border border-white/20 text-white/70 hover:text-neural hover:border-neural/40 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous work"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button 
              onClick={goToNext}
              className="p-3 rounded-full border border-white/20 text-white/70 hover:text-neural hover:border-neural/40 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next work"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Mobile-first scrollable container */}
        <div className="relative overflow-hidden">
          <motion.div 
            ref={sliderRef}
            className="mobile-scroll-container md:flex md:transition-transform md:duration-700 md:ease-in-out"
            style={{ 
              transform: window.innerWidth >= 768 ? `translateX(-${currentIndex * 100}%)` : 'none' 
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {workItems.map((item, index) => (
              <motion.div 
                key={index}
                className="mobile-scroll-item md:min-w-full flex flex-col lg:flex-row gap-6 lg:gap-12"
                style={{ display: window.innerWidth >= 768 && index !== currentIndex ? 'none' : 'flex' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:w-2/3 relative aspect-video overflow-hidden rounded-xl video-container">
                  {item.videoUrl ? (
                    <>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="text-white ml-1" size={24} />
                        </motion.div>
                      </motion.div>
                    </>
                  ) : (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="text-neural" size={16} />
                      <span className="text-sm font-space text-neural">{item.metrics}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-syne font-bold mb-4 text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed mb-6 font-space">
                      {item.description}
                    </p>
                  </motion.div>
                  
                  {/* Progress indicators for desktop */}
                  <div className="hidden md:flex space-x-2">
                    {workItems.map((_, i) => (
                      <motion.div 
                        key={i} 
                        className={cn(
                          "h-1 flex-1 rounded-full transition-all duration-500",
                          i === currentIndex ? "bg-neural" : "bg-white/20"
                        )}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: i <= currentIndex ? 1 : 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Mobile dots indicator */}
        <div className="flex md:hidden justify-center mt-6 space-x-2">
          {workItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === currentIndex ? "bg-neural scale-125" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
