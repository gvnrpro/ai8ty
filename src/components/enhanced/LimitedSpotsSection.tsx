
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, AlertTriangle } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const LimitedSpotsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate next month's end date
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    nextMonth.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = nextMonth.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const nextStartDate = new Date();
  nextStartDate.setDate(nextStartDate.getDate() + 14); // 2 weeks from now

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-red-900/20 via-depth-1 to-orange-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 quantum-dots-bg opacity-10"></div>
      
      {/* Urgency floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 border-2 border-red-500/30 rounded-full flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <AlertTriangle size={24} className="text-red-400" />
      </motion.div>
      
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
            ⏳ <span className="text-white">Limited Spots:</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              3 Builds Left This Month
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-3xl mx-auto">
            We only take 3 new clients per month to keep delivery fast and results sharp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Countdown Timer */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="glass" className="p-8 border-2 border-red-500/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-syne font-bold text-white mb-4">
                  🔥 Next Build Slot Closes In:
                </h3>
                
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <motion.div
                      key={unit}
                      className="bg-red-500/20 border border-red-500/30 rounded-lg p-4"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: Math.random() }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-red-400">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">
                        {unit}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-red-400" />
                  <span className="font-space text-white">
                    Next start date: <span className="text-red-400 font-semibold">{formatDate(nextStartDate)}</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-orange-400" />
                  <span className="font-space text-white">
                    Current waitlist: <span className="text-orange-400 font-semibold">7 businesses</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-yellow-400" />
                  <span className="font-space text-white">
                    Delivery time: <span className="text-yellow-400 font-semibold">14-21 days</span>
                  </span>
                </div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Urgency CTA */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="neural" className="p-8 text-center">
              <h3 className="text-2xl font-syne font-bold text-white mb-6">
                🎯 Secure Your Spot Now
              </h3>
              
              <div className="mb-8">
                <p className="font-space text-white/90 mb-4">
                  Why the limit? Quality over quantity.
                </p>
                <p className="font-space text-white/80 text-sm">
                  Each website gets our full attention. We'd rather turn away business than deliver mediocre results.
                </p>
              </div>

              <div className="space-y-4">
                <PremiumButton
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  onClick={scrollToContact}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Book Your Call Before It Closes
                </PremiumButton>
                
                <p className="text-white/60 text-sm">
                  ⚡ 5-minute application. 30-minute strategy call. Revenue system delivered.
                </p>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm font-medium">
                  ⚠️ Spots fill fast. Next available slot won't be until {formatDate(new Date(nextStartDate.getTime() + 30 * 24 * 60 * 60 * 1000))}
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LimitedSpotsSection;
