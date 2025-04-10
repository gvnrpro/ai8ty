
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { TeamMember, teamMembers } from '@/data/cmsData';
import { useIsMobile } from '@/hooks/use-mobile';

const TeamMemberCard: React.FC<{ member: TeamMember; isActive: boolean }> = ({ 
  member, 
  isActive 
}) => {
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center p-4 transition-all duration-300",
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
      )}
      whileHover={{ scale: isActive ? 1.03 : 0.97 }}
    >
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-xl overflow-hidden">
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent opacity-60" />
        
        {member.linkedIn && (
          <a 
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-ai8ty-black/50 flex items-center justify-center text-white hover:bg-ai8ty-violet/80 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
      
      <h3 className="font-avant text-xl text-white text-center">{member.name}</h3>
      <p className="text-ai8ty-teal text-sm text-center mb-2">{member.role}</p>
      
      {member.bio && (
        <p className="text-ai8ty-grey text-sm text-center max-w-xs">
          {member.bio}
        </p>
      )}
    </motion.div>
  );
};

const TeamCarousel: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const visibleCount = isMobile ? 1 : 3;
  
  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    setTouchStart(null);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [inView, activeIndex]);
  
  // Get visible team members
  const getVisibleMembers = () => {
    const result = [];
    const total = teamMembers.length;
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % total;
      result.push({
        member: teamMembers[index],
        isActive: i === Math.floor(visibleCount / 2)
      });
    }
    
    return result;
  };
  
  return (
    <section id="team-section" className="py-16 md:py-24 px-4 md:px-6 bg-ai8ty-black">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <motion.h2 
          className="heading text-3xl md:text-4xl mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Meet the Team
        </motion.h2>
        
        <motion.p 
          className="subheading text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          The visionaries behind AI8TY's innovations
        </motion.p>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              className="w-10 h-10 flex items-center justify-center text-ai8ty-grey hover:text-white bg-ai8ty-black/30 rounded-full backdrop-blur-sm"
              onClick={handlePrev}
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              className="w-10 h-10 flex items-center justify-center text-ai8ty-grey hover:text-white bg-ai8ty-black/30 rounded-full backdrop-blur-sm"
              onClick={handleNext}
              aria-label="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Carousel */}
          <motion.div
            ref={carouselRef}
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex justify-center">
              {isMobile ? (
                // Mobile view - Show one at a time
                <TeamMemberCard 
                  member={teamMembers[activeIndex]} 
                  isActive={true} 
                />
              ) : (
                // Desktop view - Show three with center focused
                getVisibleMembers().map(({ member, isActive }, index) => (
                  <TeamMemberCard 
                    key={member.id} 
                    member={member} 
                    isActive={isActive} 
                  />
                ))
              )}
            </div>
          </motion.div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-ai8ty-teal w-6" : "bg-ai8ty-grey/40"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
