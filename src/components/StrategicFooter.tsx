
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const StrategicFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Intelligence Shift", href: "#intelligence-shift" },
    { name: "About AI8TY", href: "#about-section" },
    { name: "Our Work", href: "#work-showcase" },
    { name: "Free Audit", href: "#website-audit" },
    { name: "Services", href: "#enhanced-services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Revenue System Build", href: "#enhanced-services" },
    { name: "Website Audit", href: "#website-audit" },
    { name: "WhatsApp Automation", href: "#whatsapp-funnel" },
    { name: "Lead Generation", href: "#why-this-works" },
    { name: "24/7 Sales Machine", href: "#bold-guarantee" }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I want to learn more about AI8TY's revenue systems. Can we discuss how you can help my business?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-depth-3 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                alt="AI8TY Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-white/80 font-space text-sm md:text-base leading-relaxed mb-6">
                Turning GCC websites into 24/7 sales machines. 
                We build the revenue systems that let you focus on strategy while technology handles the execution.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin size={16} className="text-neural flex-shrink-0" />
                  <span>Dubai, UAE • Serving the GCC</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone size={16} className="text-neural flex-shrink-0" />
                  <a href="tel:+971509229009" className="hover:text-neural transition-colors">
                    +971 50 922 9009
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Mail size={16} className="text-neural flex-shrink-0" />
                  <a href="mailto:hello@ai8ty.com" className="hover:text-neural transition-colors">
                    hello@ai8ty.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-syne font-bold text-lg mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-neural transition-all duration-300 text-sm md:text-base flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="text-neural/50 group-hover:text-neural group-hover:translate-x-1 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-syne font-bold text-lg mb-4 md:mb-6">Services</h3>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-white/70 hover:text-neural transition-all duration-300 text-sm md:text-base flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="text-neural/50 group-hover:text-neural group-hover:translate-x-1 transition-all duration-300" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-syne font-bold text-lg mb-4 md:mb-6">Start Today</h3>
              <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                Ready to turn your website into a revenue-generating machine?
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold group"
                >
                  📲 WhatsApp Us Now
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <a
                  href="#website-audit"
                  className="w-full bg-neural/20 hover:bg-neural/30 border border-neural/30 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold group"
                >
                  Get Free Audit
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              <p className="text-xs text-white/60 mt-4 text-center">
                🔒 Free consultation • No spam • Results guaranteed
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-6 md:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} AI8TY. All rights reserved. • Built with 🚀 for the GCC market
            </p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-white/60 hover:text-neural transition-colors text-sm flex items-center gap-2 group"
              >
                Back to Top
                <ArrowRight size={14} className="rotate-[-90deg] group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default StrategicFooter;
