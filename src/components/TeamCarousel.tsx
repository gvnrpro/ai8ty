
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { TeamMember, teamMembers } from '@/data/cmsData';
import { useIsMobile } from '@/hooks/use-mobile';

const TeamMemberCard: React.FC<{
  member: TeamMember;
  isActive: boolean;
}> = ({
  member,
  isActive
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className={cn(
        "flex flex-col items-center p-4 transition-all duration-500",
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
      )}
      whileHover={{
        scale: isActive ? 1.05 : 0.97,
        y: -5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-xl overflow-hidden group">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Avatar Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent opacity-60" />
        
        {/* AI Shimmer Effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          initial={{ opacity: 0, x: -100 }}
          animate={hovered ? { opacity: 0.15, x: 200 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
        />
        
        {member.linkedIn && (
          <motion.a 
            href={member.linkedIn} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-ai8ty-black/50 flex items-center justify-center text-white hover:bg-ai8ty-violet transition-colors"
            whileHover={{ scale: 1.2, backgroundColor: "#8C52FF" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin size={16} />
          </motion.a>
        )}
      </div>
      
      <motion.div className="text-center">
        <motion.h3 
          className="font-avant text-xl text-white"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {member.name}
        </motion.h3>
        
        <motion.p 
          className="text-ai8ty-teal text-sm mb-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {member.role}
        </motion.p>
        
        {member.bio && (
          <motion.p 
            className="text-ai8ty-grey text-sm max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {member.bio}
          </motion.p>
        )}
      </motion.div>
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
    setActiveIndex(prev => prev === 0 ? teamMembers.length - 1 : prev - 1);
  };
  
  const handleNext = () => {
    setActiveIndex(prev => prev === teamMembers.length - 1 ? 0 : prev + 1);
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
    <section 
      id="team-section" 
      className="py-16 md:py-24 px-4 md:px-6 overflow-hidden relative"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-ai8ty-black overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          {/* Ambient Neural Network Background */}
          <div className="w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-ai8ty-violet"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                }}
                animate={{
                  x: [
                    Math.random() * 50 - 25,
                    Math.random() * 50 - 25,
                    Math.random() * 50 - 25,
                  ],
                  y: [
                    Math.random() * 50 - 25,
                    Math.random() * 50 - 25,
                    Math.random() * 50 - 25,
                  ],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            
            {/* Connection Lines */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-20"
              style={{ overflow: "visible" }}
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.path
                  key={i}
                  stroke="#8C52FF"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{
                    d: `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`,
                    opacity: 0.2,
                  }}
                  animate={{
                    d: [
                      `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`,
                      `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`,
                      `M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`,
                    ],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
      
      <div ref={ref} className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="heading text-3xl md:text-5xl mb-6">Meet the Team</h2>
          <p className="subheading max-w-2xl mx-auto">
            Creative technologists working at the intersection of AI and design
          </p>
        </motion.div>
        
        <div className="flex items-center justify-center mb-8">
          <motion.button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-ai8ty-black/50 text-ai8ty-grey mr-4 hover:text-ai8ty-white hover:bg-ai8ty-violet/20 transition-colors border border-ai8ty-grey/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button 
            onClick={handleNext}
            className="p-3 rounded-full bg-ai8ty-black/50 text-ai8ty-grey hover:text-ai8ty-white hover:bg-ai8ty-violet/20 transition-colors border border-ai8ty-grey/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        
        <div 
          ref={carouselRef}
          className="relative overflow-hidden mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div 
            className="flex justify-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="popLayout">
              {getVisibleMembers().map(({ member, isActive }, index) => (
                <motion.div
                  key={`${member.id}-${index}`}
                  initial={{ 
                    opacity: 0, 
                    x: index === 0 ? -50 : index === visibleCount - 1 ? 50 : 0,
                    y: 30
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: index === 0 ? -50 : index === visibleCount - 1 ? 50 : 0,
                    y: 30
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <TeamMemberCard 
                    member={member} 
                    isActive={isActive} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {teamMembers.map((_, index) => (
            <motion.button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-ai8ty-violet w-6" : "bg-ai8ty-grey/30"
              )}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
