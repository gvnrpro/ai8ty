import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Target, MessageCircle, TrendingUp, Clock, DollarSign, Settings } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const TransformedAuditSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppRoast = () => {
    const message = encodeURIComponent("I want to know exactly why my site isn't converting. Send me your URL and roast it for free!");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Audit request submitted! We\'ll roast your site within 24 hours.');
      setEmail('');
      setWebsite('');
    }, 2000);
  };

  const auditItems = [
    { icon: Settings, text: "Site audit", color: "text-blue-500" },
    { icon: TrendingUp, text: "SEO check", color: "text-green-500" },
    { icon: Target, text: "Mobile test", color: "text-purple-500" },
    { icon: DollarSign, text: "ROI breakdown", color: "text-yellow-500" },
    { icon: Zap, text: "Fix plan", color: "text-red-500" }
  ];

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

  return (
    <section 
      id="website-audit"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-br from-depth-1 to-depth-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ROAST HEADLINE */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6">
            🎁 <span className="text-white">The 5-Minute</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Website Roast
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-3xl mx-auto">
            Want to know exactly why your site isn't converting? 
            <br className="hidden md:block" />
            <span className="text-red-400 font-bold">Send us your URL. We'll roast it. Free.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* WHAT YOU GET VISUAL BLOCK */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="glass" className="p-8 border-2 border-orange-500/30">
              <h3 className="text-2xl font-syne font-bold text-white mb-6 text-center">
                🛠️ What You Get
              </h3>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {auditItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-space text-white text-lg font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Clock size={20} className="text-green-400" />
                  <span className="font-space font-bold text-green-400">
                    Delivered in 24 Hours
                  </span>
                </div>
                <p className="text-white/80 text-sm">
                  Real feedback from conversion experts, not generic templates.
                </p>
              </div>
            </PremiumCard>
          </motion.div>

          {/* FORM OR WHATSAPP TRIGGER */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="neural" className="p-8">
              <h3 className="text-2xl font-syne font-bold text-white mb-6 text-center">
                Get Your Free Roast
              </h3>
              
              {/* WHATSAPP OPTION (PREFERRED) */}
              <div className="mb-8">
                <PremiumButton
                  variant="primary"
                  size="lg"
                  icon={MessageCircle}
                  onClick={handleWhatsAppRoast}
                  className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white border-[#25D366] mb-4"
                >
                  📲 WhatsApp Your URL (Fastest)
                </PremiumButton>
                
                <p className="text-center text-white/70 text-sm">
                  ⚡ Get roasted in under 2 hours via WhatsApp
                </p>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-white/60 text-sm">OR</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* FORM OPTION */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="url"
                    placeholder="Your website URL"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>
                      Roasting Your Site...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Roast My Site (Free)
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-sm text-center">
                  💡 We'll show you exactly what's broken and how to fix it. No fluff, just actionable insights.
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TransformedAuditSection;
