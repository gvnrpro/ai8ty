
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ArrowRight, Clock, CheckCircle, Zap } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const TransformedWhatsAppFunnel: React.FC = () => {
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

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent("I want to know exactly why my site isn't converting. Can you give me 3 things to fix today?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const fixesYouGetToday = [
    "The #1 reason your visitors bounce (and how to fix it in 10 minutes)",
    "Why your contact forms aren't converting (simple copy change)",
    "The mobile mistake that's costing you 40% of your leads"
  ];

  return (
    <section 
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-[#25D366]/10 via-depth-1 to-emerald-500/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      {/* WhatsApp floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-[#25D366]/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#25D366]/40"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle size={32} className="text-[#25D366]" />
      </motion.div>
      
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
            💬 <span className="text-white">Want to Know Why Your</span>
            <br />
            <span className="bg-gradient-to-r from-[#25D366] via-emerald-400 to-[#25D366] bg-clip-text text-transparent">
              Site's Not Making Money?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-4xl mx-auto">
            Message us on WhatsApp — and we'll give you 
            <span className="text-[#25D366] font-bold"> 3 things to fix today. Free.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* What You Get Today */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="glass" className="p-8 border-2 border-[#25D366]/30 bg-[#25D366]/5">
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-8 text-center">
                🛠️ What You Get in the Next 10 Minutes:
              </h3>
              
              <div className="space-y-6 mb-8">
                {fixesYouGetToday.map((fix, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-[#25D366]/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  >
                    <CheckCircle size={24} className="text-[#25D366] mt-1 flex-shrink-0" />
                    <p className="font-space text-white/95 leading-relaxed text-lg">
                      {fix}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#25D366]/15 border-2 border-[#25D366]/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock size={24} className="text-[#25D366]" />
                  <span className="font-space font-bold text-[#25D366] text-xl">
                    Response Time: Under 2 Hours
                  </span>
                </div>
                <p className="text-white/90 text-lg">
                  Real person, not a bot. We actually look at your site and give specific advice.
                </p>
              </div>
            </PremiumCard>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="neural" className="p-8 text-center border-2 border-[#25D366]/40 bg-gradient-to-br from-[#25D366]/10 to-emerald-500/10">
              <motion.div
                className="flex justify-center mb-8"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
                    <MessageCircle size={48} className="text-white" />
                  </div>
                  <motion.div
                    className="absolute -inset-2 border-2 border-[#25D366]/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-8">
                Start the Conversation
              </h3>
              
              <div className="mb-8">
                <p className="font-space text-white/95 mb-6 text-xl">
                  No forms. No waiting. No sales pitch.
                </p>
                <p className="font-space text-white/85 text-lg">
                  Just honest feedback about what's not working and how to fix it.
                </p>
              </div>

              <PremiumButton
                variant="primary"
                size="lg"
                icon={MessageCircle}
                onClick={handleWhatsAppMessage}
                className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white border-[#25D366] mb-6 text-xl py-4"
              >
                📲 Message AI8TY Now
              </PremiumButton>
              
              <p className="text-white/80 text-lg mb-6">
                💬 Connect with our revenue optimization team directly
              </p>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={20} className="text-yellow-400" />
                  <span className="font-space font-bold text-yellow-400">Pro Tip:</span>
                </div>
                <p className="text-white/80 text-sm">
                  Include your website URL in the message for faster, more specific feedback
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>

        {/* Trust Building Quote */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <PremiumCard variant="glass" className="p-8 max-w-4xl mx-auto border border-[#25D366]/20">
            <p className="text-xl md:text-2xl font-space text-[#25D366] leading-relaxed font-bold mb-4">
              "We've done this analysis for 200+ GCC businesses. 
              Takes us 5 minutes to spot what's costing you money."
            </p>
            <div className="mt-4">
              <span className="text-white/80 font-space text-lg">— AI8TY Revenue Team</span>
            </div>
          </PremiumCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransformedWhatsAppFunnel;
