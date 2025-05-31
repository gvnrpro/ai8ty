import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, Zap, DollarSign } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';
import PremiumButton from './PremiumButton';
const RevenueHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]); // Reduced for mobile
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Faster for mobile
    return () => clearTimeout(timer);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToAudit = () => {
    const auditSection = document.getElementById('website-audit');
    if (auditSection) {
      auditSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to turn my website into a 24/7 sales machine. Can we schedule a strategy call?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };
  const trustIndicators = [{
    icon: CheckCircle,
    text: "30-Day Guarantee"
  }, {
    icon: CheckCircle,
    text: "50+ GCC Businesses"
  }, {
    icon: CheckCircle,
    text: "24/7 Sales Machine"
  }];
  return <motion.section ref={sectionRef} className="min-h-screen relative flex flex-col justify-center items-center py-12 md:py-20 px-4 overflow-hidden" style={{
    opacity
  }} initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.8
  }}>
      {/* Optimized Background for mobile */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground density={window.innerWidth < 768 ? 8 : 15} color="#3B82F6" className="opacity-15" mode="network" />
        
        {/* Simplified floating elements for mobile */}
        <motion.div className="absolute top-[10%] right-[5%] w-12 h-12 md:w-20 md:h-20 border border-green-500/20 rounded-full flex items-center justify-center" style={{
        y: y1
      }} animate={{
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 360]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}>
          <DollarSign size={16} className="text-green-500 md:w-6 md:h-6" />
        </motion.div>
      </div>
      
      <motion.div className="container max-w-6xl mx-auto z-10 w-full" style={{
      y: y1
    }}>
        {/* Revenue Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-space text-white/90 backdrop-blur-sm">
            <motion.div className="flex h-2 w-2 rounded-full bg-green-500" animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} />
            <span className="font-medium">Turn Your Website Into a 24/7 Sales Machine</span>
            <DollarSign size={14} className="text-green-500 md:w-4 md:h-4" />
          </div>
        </motion.div>

        {/* Main Headline - Mobile Optimized */}
        <motion.div className="text-center mb-4 md:mb-6" initial={{
        y: 40,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold leading-tight mb-3 md:mb-6">
            <motion.span className="block mb-1 md:mb-2 text-white" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }}>We Turn Your Website Into a 24/7 Sales Machine</motion.span>
            <motion.span className="block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}> — Or You Don’t Pay.</motion.span>
          </h1>
        </motion.div>
        
        {/* Value Proposition - Mobile Optimized */}
        <motion.div className="max-w-4xl mx-auto text-center mb-6 md:mb-8" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-space text-white/90 leading-relaxed mb-4 md:mb-6 px-2">
            If your site isn't generating qualified leads every day, you're losing money.
            <br className="hidden sm:block" />
            <span className="text-green-400 font-semibold"> We build revenue systems that work while you sleep.</span>
          </p>
          
          {/* Trust Indicators - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 px-2">
            {trustIndicators.map((indicator, index) => <motion.div key={index} className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/70 py-2" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 1.0 + index * 0.1,
            duration: 0.4
          }}>
                <indicator.icon size={14} className="text-green-500 flex-shrink-0" />
                <span className="text-center sm:text-left">{indicator.text}</span>
              </motion.div>)}
          </div>
        </motion.div>
        
        {/* Enhanced CTA - Mobile First */}
        <motion.div className="text-center mb-8 md:mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 1.2
      }}>
          <div className="flex flex-col gap-3 justify-center items-center max-w-sm sm:max-w-md mx-auto px-4">
            <button onClick={scrollToContact} className="mobile-cta-primary w-full flex items-center justify-center gap-2 group">
              <Target size={18} />
              <span>Book Strategy Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <div className="flex gap-2 w-full">
              <button onClick={scrollToAudit} className="mobile-cta-secondary flex-1 flex items-center justify-center gap-2">
                <span>Free Audit</span>
                <ArrowRight size={14} />
              </button>
              
              <button onClick={handleWhatsApp} className="mobile-cta-whatsapp flex-1 flex items-center justify-center gap-2">
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
          
          <motion.p className="text-xs md:text-sm text-white/60 font-space mt-3 px-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.4,
          duration: 0.4
        }}>
            30-minute call. No sales pitch. Just honest feedback about what's not working.
          </motion.p>
        </motion.div>

        {/* Results Preview - Mobile Optimized */}
        <motion.div className="max-w-4xl mx-auto px-4" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 1.6
      }}>
          <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 backdrop-blur-sm">
            <div className="text-center mb-3 md:mb-4">
              <span className="text-xs md:text-sm text-green-400 font-semibold uppercase tracking-wider">
                What You Get
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  &lt;2 sec
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Page Load Speed
                </div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Lead Generation
                </div>
              </div>
              <div>
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  30 Days
                </div>
                <div className="text-xs md:text-sm text-white/70">
                  Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Hidden on mobile for space */}
      <motion.div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block" initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: [0, 0.8, 0],
      y: [0, 10, 0]
    }} transition={{
      duration: 2.5,
      repeat: Infinity,
      delay: 2,
      repeatDelay: 1
    }}>
        <div className="w-5 h-8 md:w-6 md:h-12 border-2 border-neural/40 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div className="w-1 h-2 md:h-3 bg-neural rounded-full mt-2" animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }} />
        </div>
      </motion.div>
    </motion.section>;
};
export default RevenueHeroSection;