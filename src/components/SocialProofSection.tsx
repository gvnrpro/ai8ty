
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const testimonials = [
    {
      quote: "AI8TY saved us 20+ hours per week. Our marketing runs itself now, and leads have tripled. Finally, a team that delivers what they promise.",
      author: "Sarah Al-Mansouri",
      title: "CEO, Dubai Tech Solutions",
      result: "20+ Hours Saved Weekly"
    },
    {
      quote: "We were drowning in manual tasks. AI8TY automated everything seamlessly. Now we focus on growth instead of admin work.",
      author: "Ahmed Hassan", 
      title: "Founder, Gulf Retail Group",
      result: "80% Less Manual Work"
    },
    {
      quote: "Our website was invisible online. After AI8TY's work, we're ranking first for our key terms and getting quality leads daily.",
      author: "Fatima Al-Zahra",
      title: "Director, Emirates Consulting",
      result: "3x More Quality Leads"
    }
  ];

  const stats = [
    { value: "10+", label: "Hours Saved Weekly", icon: CheckCircle },
    { value: "3x", label: "Faster Results", icon: CheckCircle },
    { value: "30", label: "Days to ROI", icon: CheckCircle },
    { value: "0", label: "Tech Knowledge Required", icon: CheckCircle }
  ];

  return (
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden bg-depth-1"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="strategic-title text-3xl md:text-4xl lg:text-5xl mb-8">
            Real Businesses, Real Results
            <br />
            <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
              (Just Like Yours Will Be)
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed max-w-3xl mx-auto">
            GCC businesses trust AI8TY to handle their growth while they focus on what matters most
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={32} className="text-neural" />
              </div>
              <div className="strategic-title text-3xl md:text-4xl text-neural mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-space text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="quantum-panel p-8 text-center h-full flex flex-col justify-between min-h-[320px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <Quote size={32} className="text-neural mx-auto mb-6" />
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-neural fill-current" />
                  ))}
                </div>
                
                <p className="font-space text-white/90 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div>
                <div className="bg-neural/20 border border-neural/30 rounded-lg p-3 mb-4">
                  <p className="text-sm font-space text-neural font-medium">
                    📈 {testimonial.result}
                  </p>
                </div>
                
                <h4 className="strategic-title text-lg mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-sm font-space text-white/70">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default SocialProofSection;
