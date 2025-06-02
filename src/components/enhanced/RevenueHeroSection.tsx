
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const RevenueHeroSection: React.FC = () => {
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

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to turn my website into my strongest sales asset. Can we discuss how AI8TY can help?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIndicators = [
    { icon: Clock, text: "Response within 24h", color: "text-green-500" },
    { icon: MapPin, text: "GCC-Based", color: "text-blue-500" },
    { icon: Shield, text: "Results Guaranteed", color: "text-purple-500" }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-br from-ai8ty-black via-depth-1 to-depth-2"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* High-performance background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          density={window.innerWidth < 768 ? 8 : 15} 
          color="#3B82F6" 
          className="opacity-20" 
          mode="network" 
        />
        
        {/* Strategic positioning elements */}
        <motion.div 
          className="absolute top-[15%] right-[8%] w-16 h-16 md:w-24 md:h-24 border-2 border-neural/30 rounded-full flex items-center justify-center"
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
          <Shield size={24} className="text-neural" />
        </motion.div>
      </div>
      
      <motion.div 
        className="container max-w-6xl mx-auto z-10 w-full"
        style={{ y: y1 }}
      >
        {/* Authority Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-neural/15 border-2 border-neural/30 rounded-full px-4 md:px-6 py-3 text-sm md:text-base font-space text-white backdrop-blur-sm">
            <motion.div
              className="flex h-3 w-3 rounded-full bg-neural"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-bold">🏆 Elite Digital Growth Engineering Firm</span>
          </div>
        </motion.div>

        {/* HERO HEADLINE - Exact Copy */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-syne font-bold leading-tight mb-4">
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              👉 Your Website Should Be Your
            </motion.span>
            <motion.span 
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-neural via-quantum to-intelligence bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Strongest Sales Asset.
            </motion.span>
          </h1>
        </motion.div>
        
        {/* SUBHEADLINE - Exact Copy */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-space text-white/95 leading-relaxed">
            We design, optimize, and automate high-performance websites for GCC businesses that want results — not excuses.
          </p>
        </motion.div>
        
        {/* DUAL CTA BUTTONS - Exact Layout */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <motion.button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-8 py-4 rounded-xl text-lg shadow-2xl border-2 border-[#25D366]/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="mr-3 inline" size={20} />
              <span>💬 Chat on WhatsApp</span>
              <ArrowRight className="ml-3 inline group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-neural to-quantum hover:from-neural-dark hover:to-quantum-dark text-white font-bold px-8 py-4 rounded-xl text-lg shadow-2xl border-2 border-neural/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="mr-3 inline" size={20} />
              <span>📞 Book Free Strategy Call</span>
              <ArrowRight className="ml-3 inline group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* TRUST INDICATORS */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {trustIndicators.map((indicator, index) => (
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

        {/* AUTHORITY STATEMENT */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          <p className="text-white/80 font-space text-sm md:text-base">
            🇦🇪 Trusted by visionary founders across the GCC who refuse to settle for mediocre results.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RevenueHeroSection;
