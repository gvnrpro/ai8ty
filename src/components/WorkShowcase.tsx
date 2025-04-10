
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Neural Rebrand",
    description: "AI-guided brand transformation for tech startup",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://player.vimeo.com/progressive_redirect/playback/598231558/rendition/720p/file.mp4?loc=external"
  },
  {
    title: "Voice Clone API",
    description: "Custom voice synthesis for enterprise client",
    imageUrl: "https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Immersive 3D",
    description: "WebGL product visualization experience",
    imageUrl: "https://images.unsplash.com/photo-1633186710895-309db2be5f2a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Dashboard",
    description: "Real-time analytics visualization system",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
    <section id="work-section" ref={ref} className="py-24 px-6 bg-ai8ty-black relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className={cn(
            "heading text-3xl md:text-5xl transition-all duration-700",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Work That Speaks
          </h2>
          
          <div className={cn(
            "flex space-x-4 transition-all duration-700 delay-300",
            inView ? "opacity-100" : "opacity-0"
          )}>
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full border border-ai8ty-grey/30 text-ai8ty-grey hover:text-ai8ty-white hover:border-ai8ty-white transition-colors"
              aria-label="Previous work"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full border border-ai8ty-grey/30 text-ai8ty-grey hover:text-ai8ty-white hover:border-ai8ty-white transition-colors"
              aria-label="Next work"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <p className={cn(
          "subheading mb-12 max-w-2xl transition-all duration-700 delay-100",
          inView ? "opacity-100" : "opacity-0"
        )}>
          From rebrands to AI systems, our clients don't just keep up—they lead.
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {workItems.map((item, index) => (
              <div 
                key={index}
                className="min-w-full flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-2/3 relative aspect-video overflow-hidden rounded-lg">
                  {item.videoUrl ? (
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
                  ) : (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent opacity-60" />
                </div>
                
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-avant mb-3 text-ai8ty-white">{item.title}</h3>
                  <p className="text-ai8ty-grey mb-6">{item.description}</p>
                  
                  <div className="flex space-x-1">
                    {workItems.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-1 flex-1 rounded-full",
                          i === currentIndex ? "bg-ai8ty-violet" : "bg-ai8ty-grey/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
