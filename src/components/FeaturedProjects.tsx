
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { ProjectItem, featuredProjects } from '@/data/cmsData';

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-lg group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        {project.videoUrl ? (
          <div className="w-full h-full relative">
            <video
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src={project.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-14 h-14 rounded-full bg-ai8ty-black/50 flex items-center justify-center text-white"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={hovered ? { opacity: 1, scale: 1.1 } : { opacity: 0.6, scale: 1 }}
              >
                <Play size={24} />
              </motion.div>
            </div>
          </div>
        ) : (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ai8ty-black via-ai8ty-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.h3 
          className="font-avant text-xl text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-ai8ty-grey text-sm mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: (index * 0.1) + 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: (index * 0.1) + 0.4 }}
        >
          {project.tags?.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 bg-ai8ty-black/80 text-ai8ty-grey rounded"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        
        {project.externalLink && (
          <motion.a 
            href={project.externalLink}
            className="inline-flex items-center text-ai8ty-teal text-sm hover:text-white transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + 0.5 }}
            whileHover={{ x: 5 }}
          >
            View Project <ExternalLink size={14} className="ml-1" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const FeaturedProjects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section id="featured-projects" className="py-16 md:py-24 px-4 md:px-6 bg-ai8ty-black">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <motion.h2 
          className="heading text-3xl md:text-4xl mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="subheading text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          Explore our innovative solutions at the intersection of design, technology, and strategy
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
