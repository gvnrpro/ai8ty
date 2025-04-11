
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/cmsData';
import { useInView } from 'react-intersection-observer';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const MeetTheTeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const isMobile = useIsMobile();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-ai8ty-black relative overflow-hidden" id="team">
      {/* Neural network background */}
      <div className="absolute inset-0 bg-ai8ty-black">
        <div className="absolute inset-0 opacity-20 neural-grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ai8ty-black via-ai8ty-black/90 to-ai8ty-black"></div>
      </div>
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="heading text-4xl md:text-5xl lg:text-6xl mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-ai8ty-teal mx-auto mb-6"></div>
          <p className="subheading text-lg md:text-xl max-w-2xl mx-auto">
            The creative minds behind AI8TY's innovative solutions at the intersection of AI and design.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <TeamMemberCard member={member} isMobile={isMobile} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Team Member Card Component
interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    avatar: string;
  };
  isMobile: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <motion.div
          className="cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Card className="rounded-2xl border-0 overflow-hidden bg-transparent shadow-xl">
            <CardContent className="p-0 relative">
              {/* Photo Container with Aspect Ratio */}
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-ai8ty-black/0 via-ai8ty-black/20 to-ai8ty-black/90 z-10"></div>
                
                {/* Glowing corners - visible on hover */}
                {isHovered && !isMobile && (
                  <>
                    <motion.div 
                      className="absolute top-0 left-0 w-12 h-[2px] bg-ai8ty-teal z-20"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.div 
                      className="absolute top-0 left-0 w-[2px] h-12 bg-ai8ty-teal z-20"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                    <motion.div 
                      className="absolute top-0 right-0 w-12 h-[2px] bg-ai8ty-teal z-20"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                    <motion.div 
                      className="absolute top-0 right-0 w-[2px] h-12 bg-ai8ty-teal z-20"
                      initial={{ height: 0 }}
                      animate={{ height: 48 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    />
                  </>
                )}
                
                {/* Image with proper sizing */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Shimmer effect on hover */}
                {isHovered && !isMobile && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-10"
                    initial={{ opacity: 0, left: "-100%" }}
                    animate={{ 
                      opacity: [0, 0.08, 0],
                      left: ["-100%", "200%", "200%"]
                    }}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
              
              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-2xl font-avant tracking-tight mb-1">{member.name}</h3>
                <div className="w-10 h-0.5 bg-ai8ty-teal mb-2 transition-all duration-300 group-hover:w-16"></div>
                <p className="text-ai8ty-grey text-sm font-satoshi uppercase tracking-wider">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80 bg-ai8ty-black/90 backdrop-blur-md border border-ai8ty-violet/20 text-white p-4 shadow-xl">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-ai8ty-teal">{member.name}</h4>
          <p className="text-sm text-ai8ty-grey">{member.role}</p>
          <div className="h-px w-full bg-gradient-to-r from-ai8ty-teal to-ai8ty-violet/30 my-2"></div>
          <p className="text-xs text-ai8ty-grey/80">
            Creative technologist at the intersection of AI and design
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MeetTheTeamSection;
