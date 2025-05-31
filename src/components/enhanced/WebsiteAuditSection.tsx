
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Search, Smartphone, DollarSign, Brain, ArrowRight, Clock } from 'lucide-react';
import PremiumCard from './PremiumCard';
import PremiumButton from './PremiumButton';

const WebsiteAuditSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  
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

  const auditItems = [
    { icon: Search, title: "Site Audit", description: "Complete conversion analysis" },
    { icon: Search, title: "SEO Check", description: "Keyword ranking & optimization" },
    { icon: Smartphone, title: "Mobile Test", description: "Speed & mobile experience" },
    { icon: DollarSign, title: "ROI Breakdown", description: "Revenue potential assessment" },
    { icon: Brain, title: "Fix Plan", description: "Step-by-step improvement roadmap" }
  ];

  const handleWhatsAppAudit = () => {
    const message = encodeURIComponent("I want my free 5-minute website audit. My website is: " + website);
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`I want my free website audit. Website: ${website}, Email: ${email}`);
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  return (
    <section 
      ref={ref}
      id="website-audit"
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
            🎁 <span className="text-white">The</span>{' '}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              5-Minute Website Audit
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-3xl mx-auto">
            Want to know exactly why your site isn't converting? 
            <br />
            <span className="text-red-400 font-semibold">Send us your URL. We'll roast it. Free.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* What You Get */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="glass" className="p-8">
              <h3 className="text-2xl font-syne font-bold text-white mb-8">
                🛠️ What You Get (Worth AED 1,500):
              </h3>
              
              <div className="space-y-6">
                {auditItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-space font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-green-400" />
                  <span className="font-space font-semibold text-green-400">
                    Delivered in 24 Hours
                  </span>
                </div>
                <p className="text-white/80 text-sm">
                  Get your complete audit report via WhatsApp or email within 1 business day.
                </p>
              </motion.div>
            </PremiumCard>
          </motion.div>

          {/* Audit Request Form */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="neural" className="p-8">
              <h3 className="text-2xl font-syne font-bold text-white mb-6 text-center">
                Get Your Free Audit Now
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 font-space mb-2">
                    Your Website URL *
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neural focus:ring-2 focus:ring-neural/20"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 font-space mb-2">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neural focus:ring-2 focus:ring-neural/20"
                  />
                </div>

                <PremiumButton
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleFormSubmit}
                >
                  Get My Free Audit Report
                </PremiumButton>
              </form>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm mb-4">Or get instant access via WhatsApp:</p>
                <PremiumButton
                  variant="secondary"
                  size="md"
                  onClick={handleWhatsAppAudit}
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white border-[#25D366]"
                >
                  📲 WhatsApp Audit Request
                </PremiumButton>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-xs text-center">
                  🔒 We hate spam too. Your info stays private. Unsubscribe anytime.
                </p>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WebsiteAuditSection;
