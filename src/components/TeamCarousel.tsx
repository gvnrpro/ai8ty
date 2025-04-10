import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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
  return <motion.div className={cn("flex flex-col items-center p-4 transition-all duration-300", isActive ? "opacity-100 scale-100" : "opacity-60 scale-95")} whileHover={{
    scale: isActive ? 1.03 : 0.97
  }}>
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 rounded-xl overflow-hidden">
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black to-transparent opacity-60" />
        
        {member.linkedIn && <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-ai8ty-black/50 flex items-center justify-center text-white hover:bg-ai8ty-violet/80 transition-colors">
            <Linkedin size={16} />
          </a>}
      </div>
      
      <h3 className="font-avant text-xl text-white text-center">{member.name}</h3>
      <p className="text-ai8ty-teal text-sm text-center mb-2">{member.role}</p>
      
      {member.bio && <p className="text-ai8ty-grey text-sm text-center max-w-xs">
          {member.bio}
        </p>}
    </motion.div>;
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
  return;
};
export default TeamCarousel;