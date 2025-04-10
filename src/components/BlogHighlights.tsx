
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/cmsData';
import { format, parseISO } from 'date-fns';

const BlogCard: React.FC<{ post: typeof blogPosts[0]; index: number }> = ({ post, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden bg-ai8ty-black/30 rounded-lg border border-ai8ty-grey/10 hover:border-ai8ty-violet/20 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        {post.category && (
          <span className="inline-block text-xs text-ai8ty-teal mb-2 font-medium">
            {post.category}
          </span>
        )}
        
        <h3 className="font-avant text-xl text-white mb-2 line-clamp-2">{post.title}</h3>
        
        <div className="flex items-center text-xs text-ai8ty-grey mb-4">
          <Calendar size={12} className="mr-1" />
          {format(parseISO(post.date), 'MMMM d, yyyy')}
          <span className="mx-2">•</span>
          {post.author}
        </div>
        
        <p className="text-ai8ty-grey text-sm mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <motion.a 
          href={post.readMoreLink}
          className="inline-flex items-center text-ai8ty-teal hover:text-white transition-colors group-hover:underline"
          whileHover={{ x: 5 }}
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const BlogHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section id="blog-section" className="py-16 md:py-24 px-4 md:px-6 bg-ai8ty-black">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <motion.h2 
          className="heading text-3xl md:text-4xl mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          AI8TY Insights
        </motion.h2>
        
        <motion.p 
          className="subheading text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          Thoughts on AI, design, and the future of creative strategy
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
