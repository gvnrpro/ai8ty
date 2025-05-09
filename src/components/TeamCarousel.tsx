
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { TeamMember, teamMembers } from '@/data/cmsData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamMemberProfile: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const member = teamMembers[0]; // We only have one member now
  
  // Shimmer effect ref
  const shimmerRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse move for interactive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shimmerRef.current) return;
    
    const rect = shimmerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    shimmerRef.current.style.setProperty('--mouse-x', `${x}px`);
    shimmerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };
  
  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        ref={shimmerRef}
        className="relative glow-card bg-ai8ty-black/40 backdrop-blur-md overflow-hidden rounded-xl p-8 border border-ai8ty-violet/30"
      >
        {/* Interactive Background */}
        <div className="absolute inset-0 neural-grid-bg opacity-20"></div>
        
        {/* Radial gradient that follows cursor */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-ai8ty-violet/20 to-transparent opacity-0 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(140, 82, 255, 0.15), transparent)',
            opacity: hovered ? 1 : 0
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Main content wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
          {/* Profile Image with Effects */}
          <div className="relative">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-xl"
              initial={{ borderRadius: 16 }}
              whileHover={{ scale: 1.02, borderRadius: 14 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-ai8ty-black/0 to-ai8ty-black/80"
                animate={{ opacity: hovered ? 0.7 : 0.4 }}
                transition={{ duration: 0.5 }}
              />
              
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
              
              {/* AI Shimmer Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                initial={{ opacity: 0, x: -100 }}
                animate={hovered ? { 
                  opacity: 0.15, 
                  x: 300, 
                  transition: { 
                    duration: 1.2, 
                    ease: "easeInOut", 
                    repeat: 2, 
                    repeatDelay: 0.5 
                  } 
                } : { opacity: 0, x: -100 }}
              />
              
              {/* Tech outline effects */}
              <motion.div 
                className="absolute inset-0 border-2 border-ai8ty-teal/0"
                animate={{ 
                  borderColor: hovered ? 'rgba(0, 245, 212, 0.3)' : 'rgba(0, 245, 212, 0)', 
                  boxShadow: hovered ? '0 0 20px 0 rgba(0, 245, 212, 0.2)' : '0 0 0 0 rgba(0, 245, 212, 0)'
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Glow corners */}
              {[
                'top-0 left-0 w-10 h-[1px]',
                'top-0 left-0 h-10 w-[1px]',
                'top-0 right-0 w-10 h-[1px]',
                'top-0 right-0 h-10 w-[1px]',
                'bottom-0 left-0 w-10 h-[1px]',
                'bottom-0 left-0 h-10 w-[1px]',
                'bottom-0 right-0 w-10 h-[1px]',
                'bottom-0 right-0 h-10 w-[1px]',
              ].map((position, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${position} bg-ai8ty-teal/0 z-20`}
                  animate={{ 
                    backgroundColor: hovered ? 'rgba(0, 245, 212, 0.8)' : 'rgba(0, 245, 212, 0)'
                  }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              ))}
            </motion.div>
            
            {/* Social media links */}
            <div className="absolute -bottom-4 right-4 flex space-x-3">
              {member.socialLinks?.instagram && (
                <motion.a 
                  href={member.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-ai8ty-violet flex items-center justify-center text-white hover:bg-ai8ty-violet/80 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Instagram size={18} />
                </motion.a>
              )}
              
              {member.socialLinks?.linkedin && (
                <motion.a 
                  href={member.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-ai8ty-violet flex items-center justify-center text-white hover:bg-ai8ty-violet/80 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Text information */}
          <div className="text-center md:text-left max-w-lg">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl font-avant tracking-tighter text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {member.name}
              </motion.h3>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[1px] bg-gradient-to-r from-ai8ty-teal via-ai8ty-violet to-transparent"
              />
              
              <motion.h4 
                className="text-ai8ty-teal text-lg md:text-xl tracking-wide uppercase font-satoshi font-light"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {member.role}
              </motion.h4>
              
              <motion.p 
                className="text-ai8ty-grey text-base md:text-lg mt-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {member.bio}
              </motion.p>
              
              {/* Futuristic data metrics visualization */}
              <motion.div 
                className="flex justify-center md:justify-start gap-8 mt-6 pt-6 border-t border-ai8ty-violet/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { label: "VISION", value: "AI Design" },
                  { label: "EXPERTISE", value: "8+ Years" },
                  { label: "PROJECTS", value: "120+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.div 
                      className="text-ai8ty-white text-xl md:text-2xl font-avant"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="text-ai8ty-grey text-xs uppercase tracking-wider mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCarousel: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
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
          <h2 className="heading text-3xl md:text-5xl mb-6">Meet Our Visionary</h2>
          <p className="subheading max-w-2xl mx-auto">
            The creative technologist defining the future at the intersection of AI and design
          </p>
        </motion.div>
        
        <TeamMemberProfile />
      </div>
    </section>
  );
};

export default TeamCarousel;
