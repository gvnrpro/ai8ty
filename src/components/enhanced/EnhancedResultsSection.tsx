
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Users, Star, ArrowRight } from 'lucide-react';
import PremiumCard from './PremiumCard';

const EnhancedResultsSection: React.FC = () => {
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

  const resultsTestimonials = [
    {
      quote: "AI8TY rebuilt our site and automated our lead capture. We went from 2-3 inquiries per month to 15-20 qualified leads. Revenue increased 300% in 6 months.",
      author: "Khalid Al-Rashid",
      title: "CEO, Dubai Construction Solutions",
      results: "300% Revenue Increase",
      timeframe: "6 months",
      icon: DollarSign,
      beforeAfter: { before: "2-3 leads/month", after: "15-20 qualified leads/month" }
    },
    {
      quote: "The automation alone saves me 15 hours per week. No more manual follow-ups, everything runs automatically. My team can focus on closing deals instead of chasing prospects.",
      author: "Fatima Al-Zahra", 
      title: "Founder, Emirates Digital Marketing",
      results: "15 Hours Saved Weekly",
      timeframe: "Immediate",
      icon: Clock,
      beforeAfter: { before: "60 hours/week manual work", after: "45 hours/week + automation" }
    },
    {
      quote: "Our website was invisible on Google. AI8TY's SEO work got us ranking #1 for 'business consulting Dubai' and 8 other key terms. Organic traffic up 500%.",
      author: "Mohammed Hassan",
      title: "Managing Director, Gulf Business Advisory", 
      results: "500% Organic Traffic Growth",
      timeframe: "4 months",
      icon: TrendingUp,
      beforeAfter: { before: "Page 5+ Google rankings", after: "#1 position for key terms" }
    }
  ];

  const stats = [
    { value: "AED 2.3M", label: "Generated for Clients", icon: DollarSign },
    { value: "240+", label: "Hours Saved Monthly", icon: Clock },
    { value: "68%", label: "Average Conversion Increase", icon: TrendingUp },
    { value: "95%", label: "Client Satisfaction Rate", icon: Star }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-depth-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
            📈 <span className="text-white">Real GCC Businesses,</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Real Revenue Results
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 max-w-3xl mx-auto">
            These numbers aren't projections. They're actual results from businesses just like yours.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard variant="glass" className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neural/20 border border-neural/30 flex items-center justify-center">
                    <stat.icon size={24} className="text-neural" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-syne font-bold text-neural mb-2">
                  {stat.value}
                </div>
                <p className="text-sm font-space text-white/80">
                  {stat.label}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Results Testimonials */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
        >
          {resultsTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PremiumCard 
                variant="glass" 
                className="p-8 grid lg:grid-cols-3 gap-8 items-center"
                hover={true}
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="font-space text-white/90 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-neural/20 border border-neural/30 flex items-center justify-center">
                      <testimonial.icon size={24} className="text-neural" />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-white mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm font-space text-white/70 mb-2">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-syne font-bold text-green-400 mb-1">
                      {testimonial.results}
                    </div>
                    <div className="text-sm text-white/70">
                      in {testimonial.timeframe}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-sm font-space text-white/80 mb-2">
                      Before/After:
                    </div>
                    <div className="text-xs text-red-400 mb-1">
                      Before: {testimonial.beforeAfter.before}
                    </div>
                    <div className="text-xs text-green-400">
                      After: {testimonial.beforeAfter.after}
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <PremiumCard variant="neural" className="p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-syne font-bold text-white mb-4">
              Ready to See Results Like These?
            </h3>
            <p className="font-space text-white/90 mb-6">
              These clients started exactly where you are now. The only difference? They took action.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 bg-neural hover:bg-neural-dark text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get My Results Strategy Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedResultsSection;
