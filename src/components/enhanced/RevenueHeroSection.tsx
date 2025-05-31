
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, Clock, TrendingUp, Users, DollarSign } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import PremiumButton from './PremiumButton';

const RevenueHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAudit = () => {
    const auditSection = document.getElementById('website-audit');
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const proofItems = [
    { icon: Clock, text: "Saved 20+ hours/week", color: "text-neural" },
    { icon: TrendingUp, text: "3× increase in inbound leads", color: "text-quantum" },
    { icon: Users, text: "Trusted by GCC founders", color: "text-intelligence" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-20 px-4 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={20} 
          color="#3B82F6" 
          className="opacity-30" 
          mode="network"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neural/5 via-transparent to-quantum/5"></div>
      </div>
      
      <motion.div 
        className="container max-w-6xl mx-auto z-10"
        style={{ y: y1 }}
      >
        {/* Revenue Promise Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-neural/20 border border-green-500/30 rounded-full px-6 py-3 text-sm font-space text-white backdrop-blur-sm">
            <motion.div
              className="flex h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium">Revenue System Disguised As A Website</span>
            <DollarSign size={16} className="text-green-500" />
          </div>
        </motion.div>

        {/* Main Revenue Headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-syne font-bold leading-none mb-4">
            <motion.span 
              className="block mb-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              We Turn Your Website Into a
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-green-500 via-neural to-quantum bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              24/7 Sales Machine
            </motion.span>
            <motion.span 
              className="block text-white text-xl md:text-3xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              — Or You Don't Pay.
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Stacked Outcomes Subheadline */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-xl md:text-2xl font-space text-white/90 leading-relaxed mb-6">
            Done-for-you websites, automation, and SEO — engineered for leads, speed, and growth.
            <br className="hidden md:block" />
            <span className="text-green-400 font-semibold">If it doesn't make you money in 30 days, it's free.</span>
          </p>
          
          {/* Price Anchor */}
          <motion.div
            className="inline-block bg-depth-2/80 border border-green-500/30 rounded-xl p-4 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <p className="text-lg font-space text-green-400 font-semibold">
              💰 AED 7,500 site generates AED 75,000 in leads = <span className="text-white">10x ROI</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Mini-Proof Bar */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {proofItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-3 text-white/90"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <item.icon size={20} className={item.color} />
              </div>
              <span className="font-space font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* High-Contrast CTAs */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PremiumButton
              variant="primary"
              size="lg"
              icon={Target}
              iconPosition="left"
              onClick={scrollToAudit}
              className="bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-red-600/30 min-w-[280px]"
            >
              Get Your Free 5-Minute Audit
            </PremiumButton>
            
            <PremiumButton
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-green-600/30 min-w-[240px]"
            >
              Book Revenue Call Now
            </PremiumButton>
          </div>
          
          <motion.p 
            className="text-sm text-white/60 font-space mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            ⚡ 2-minute form. 30-minute call. Serious revenue growth.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 0.8, 0], y: [0, 10, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          delay: 2.5,
          repeatDelay: 1
        }}
      >
        <div className="w-6 h-12 border-2 border-neural/40 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-neural rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default RevenueHeroSection;
