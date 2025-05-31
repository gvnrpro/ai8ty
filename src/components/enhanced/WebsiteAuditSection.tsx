
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Search, Smartphone, DollarSign, Brain, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import PremiumCard from './PremiumCard';

const WebsiteAuditSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const auditItems = [
    { icon: Search, title: "Site Audit", description: "Complete conversion analysis" },
    { icon: Search, title: "SEO Check", description: "Keyword ranking & optimization" },
    { icon: Smartphone, title: "Mobile Test", description: "Speed & mobile experience" },
    { icon: DollarSign, title: "ROI Breakdown", description: "Revenue potential assessment" },
    { icon: Brain, title: "Fix Plan", description: "Step-by-step improvement roadmap" }
  ];

  const handleWhatsAppAudit = () => {
    const siteUrl = website || "my website";
    const message = encodeURIComponent(`I want my free 5-minute website audit. My website is: ${siteUrl}`);
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    setTimeout(() => {
      const message = encodeURIComponent(`I want my free website audit. Website: ${website}, Email: ${email}`);
      window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section 
      ref={ref}
      id="website-audit"
      className="py-12 md:py-20 px-4 bg-depth-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syne font-bold mb-4 md:mb-6">
            🎁 <span className="text-white">The</span>{' '}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              5-Minute Website Audit
            </span>
          </h2>
          
          <p className="text-base md:text-xl font-space text-white/90 mb-4 md:mb-6 max-w-3xl mx-auto px-2">
            Want to know exactly why your site isn't converting? 
            <br />
            <span className="text-red-400 font-semibold">Send us your URL. We'll roast it. Free.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* What You Get - Mobile Optimized */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="glass" className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-syne font-bold text-white mb-4 md:mb-6">
                🛠️ What You Get (Worth AED 1,500):
              </h3>
              
              <div className="space-y-4">
                {auditItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-space font-semibold text-white mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-green-400" />
                  <span className="font-space font-semibold text-green-400 text-sm">
                    Delivered in 24 Hours
                  </span>
                </div>
                <p className="text-white/80 text-xs">
                  Get your complete audit report via WhatsApp or email within 1 business day.
                </p>
              </motion.div>
            </PremiumCard>
          </motion.div>

          {/* Mobile-Optimized Audit Request Form */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="neural" className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-syne font-bold text-white mb-4 text-center">
                Get Your Free Audit Now
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 font-space mb-2 text-sm">
                    Your Website URL *
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="mobile-form-input"
                    required
                    autoComplete="url"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 font-space mb-2 text-sm">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="mobile-form-input"
                    autoComplete="email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !website}
                  className="mobile-cta-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight size={18} />
                      <span>Get My Free Audit Report</span>
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Quick Option */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-xs text-center mb-3">Or get instant access via WhatsApp:</p>
                <button
                  onClick={handleWhatsAppAudit}
                  className="mobile-cta-whatsapp w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>📲 WhatsApp Audit Request</span>
                </button>
              </div>

              {/* Trust Indicator */}
              <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-xs text-center">
                  🔒 We hate spam too. Your info stays private. Unsubscribe anytime.
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>

        {/* Mobile Quick Stats */}
        <motion.div 
          className="mt-8 md:mt-12 text-center"
          variants={itemVariants}
        >
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-green-400 font-bold text-lg">200+</div>
              <div className="text-white/70 text-xs">Sites Audited</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-blue-400 font-bold text-lg">&lt;24h</div>
              <div className="text-white/70 text-xs">Response Time</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-purple-400 font-bold text-lg">Free</div>
              <div className="text-white/70 text-xs">No Hidden Costs</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WebsiteAuditSection;
