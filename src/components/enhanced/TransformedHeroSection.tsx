
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, Zap, DollarSign, Clock, TrendingUp, MapPin } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const TransformedHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
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

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to know exactly why my site isn't converting. Can you roast it for free?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const proofIndicators = [
    { icon: Clock, text: "Saved 20+ hours/week", color: "text-green-500" },
    { icon: TrendingUp, text: "3× increase in inbound leads", color: "text-blue-500" },
    { icon: MapPin, text: "Trusted by GCC founders", color: "text-purple-500" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-12 md:py-20 px-4 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Revenue-focused background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={window.innerWidth < 768 ? 8 : 15} 
          color="#22c55e" 
          className="opacity-20" 
          mode="network" 
        />
        
        {/* Money-making floating elements */}
        <motion.div 
          className="absolute top-[15%] right-[8%] w-16 h-16 md:w-24 md:h-24 border-2 border-green-500/30 rounded-full flex items-center justify-center"
          style={{ y: y1 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <DollarSign size={24} className="text-green-500" />
        </motion.div>
      </div>
      
      <motion.div 
        className="container max-w-6xl mx-auto z-10 w-full"
        style={{ y: y1 }}
      >
        {/* Revenue Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-green-500/15 border-2 border-green-500/30 rounded-full px-4 md:px-6 py-3 text-sm md:text-base font-space text-white backdrop-blur-sm">
            <motion.div
              className="flex h-3 w-3 rounded-full bg-green-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-bold">👉 Your Site Should Be Your #1 Sales Rep. Make It Work.</span>
          </div>
        </motion.div>

        {/* BIG PROMISE HEADLINE */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold leading-tight mb-4">
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We Turn Your Website Into a 24/7 Sales Machine
            </motion.span>
            <motion.span 
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              — Or You Don't Pay.
            </motion.span>
          </h1>
        </motion.div>
        
        {/* STACKED OUTCOMES SUBHEADLINE */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-space text-white/95 leading-relaxed mb-6">
            Done-for-you websites, automation, and SEO — engineered for leads, speed, and growth. 
            <br className="hidden md:block" />
            <span className="text-green-400 font-bold">If it doesn't make you money in 30 days, it's free.</span>
          </p>
        </motion.div>

        {/* PRICE ANCHOR */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-white text-lg md:text-xl font-bold">
              💰 <span className="text-green-400">AED 7,500 site generates AED 75,000 in leads</span> = 10x ROI
            </p>
          </div>
        </motion.div>
        
        {/* HIGH-CONTRAST CTA BUTTONS */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <motion.button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-2xl border-2 border-red-500/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Target className="mr-3 inline" size={20} />
              <span>Book Strategy Call</span>
              <ArrowRight className="ml-3 inline group-hover:translate-x-1 transition-transform duration-200" size={18} />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.button>
            
            <motion.button
              onClick={scrollToAudit}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-2xl border-2 border-green-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="mr-3 inline" size={20} />
              <span>Free Site Roast</span>
              <ArrowRight className="ml-3 inline group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* MINI-PROOF BAR */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {proofIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + (index * 0.1), duration: 0.4 }}
              >
                <indicator.icon size={24} className={indicator.color} />
                <span className="text-white font-medium text-center sm:text-left text-sm md:text-base">
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* REVENUE PROMISE */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          <p className="text-white/80 font-space text-sm md:text-base">
            🔒 30-minute call. No sales pitch. Just honest feedback about what's not working.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default TransformedHeroSection;
