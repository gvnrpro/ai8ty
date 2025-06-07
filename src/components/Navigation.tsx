import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navigation.css'; // Assume you have a CSS file for navigation

const SkipToContent = () => (
  <a href="#main-content" className="skip-to-content">Skip to main content</a>
);

// --- HERO SECTION COPY & NAV IMPROVEMENTS ---
const ScarcityBar = () => (
  <div className="scarcity-bar fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-ai8ty-black via-ai8ty-teal to-ai8ty-violet text-white text-center py-2 text-sm font-bold tracking-wide shadow-lg animate-pulse">
    Only <span className="text-ai8ty-teal">7</span> onboarding slots left this month. <span className="text-white/70">(Strictly invite-only. No agencies. No excuses.)</span>
  </div>
);

const HeroBanner = () => (
  <div className="hero-banner bg-gradient-to-br from-ai8ty-black via-ai8ty-teal to-ai8ty-violet text-white text-center py-24 px-4 relative">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg glitch-text">
      The AI Revenue Engine <span className="block text-ai8ty-teal">Your Competitors Fear.</span>
    </h1>
    <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 text-white/80">
      <span className="font-bold text-white">Stop losing millions to outdated systems.</span> <br className="hidden md:inline" />
      <span className="text-ai8ty-teal font-semibold">AI8TY</span> is the secret weapon behind the region’s fastest-growing companies—engineering revenue breakthroughs with AI, automation, and digital mastery. <br className="hidden md:inline" />
      <span className="text-white/90">If you want to dominate your market, you need us in your corner.</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <button className="btn-apple-primary px-10 py-5 text-xl font-bold shadow-lg hover:scale-105 transition-transform" onClick={() => document.getElementById('website-audit')?.scrollIntoView({behavior:'smooth'})}>
        Unlock Access
      </button>
      <button className="btn-apple-secondary px-10 py-5 text-xl font-bold shadow hover:scale-105 transition-transform" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
        Request Blackfile
      </button>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-ai8ty-teal text-lg font-bold animate-pulse">$4,200,000+ generated for clients in 2025</div>
      <div className="flex gap-2 justify-center items-center text-xs text-white/60">
        <span className="bg-white/10 px-2 py-1 rounded">Trusted by Top 1% Operators</span>
        <span className="bg-white/10 px-2 py-1 rounded">Private Slack: 1,200+ members</span>
        <span className="bg-white/10 px-2 py-1 rounded">Zero Noise</span>
      </div>
    </div>
    <p className="mt-10 text-base md:text-lg text-white/70 max-w-xl mx-auto italic">
      <span className="font-semibold text-ai8ty-teal">Warning:</span> Our clients see results so fast, they wonder why they didn’t call us sooner. <span className="font-semibold">Don’t let your competitors get there first.</span>
    </p>
  </div>
);

// --- SYSTEM BREACH/PROBLEM AGITATION SECTION ---
const ProblemAgitation = () => (
  <section className="problem-agitation bg-black text-white py-16 px-4 text-center relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none animate-flicker opacity-10" style={{background: 'repeating-linear-gradient(135deg, #00fff7 0 2px, transparent 2px 40px)'}}></div>
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-red-500 glitch-text">SYSTEM BREACH DETECTED</h2>
    <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-white/80">
      <span className="font-bold text-white">Why Are You Still Bleeding Revenue?</span>
    </p>
    <ul className="problem-list max-w-xl mx-auto text-left text-lg md:text-xl text-white/80 space-y-4 mb-8">
      <li>• Your CRM is leaking leads.</li>
      <li>• Your team is slow.</li>
      <li>• Your competitors are automating. You’re not.</li>
      <li>• Your pipeline is full of ghosts.</li>
      <li>• Your data is working against you.</li>
    </ul>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <button className="btn-apple-primary px-8 py-4 text-lg font-bold shadow-lg hover:scale-105 transition-transform" onClick={() => document.getElementById('website-audit')?.scrollIntoView({behavior:'smooth'})}>
        Patch My Revenue Leak
      </button>
      <button className="btn-apple-secondary px-8 py-4 text-lg font-bold shadow hover:scale-105 transition-transform" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
        Deploy AI8TY Protocol
      </button>
    </div>
  </section>
);

// --- SOCIAL PROOF/STATUS SECTION ---
const SocialProofSection = () => (
  <section className="social-proof bg-ai8ty-black text-white py-16 px-4 text-center relative overflow-hidden">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-ai8ty-teal">Anonymous Results. Ruthless Growth.</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
      <div className="blurred-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10">
          <div className="text-3xl font-extrabold text-green-400 mb-2">+312% MRR</div>
          <div className="text-white/80 mb-2">in 60 days</div>
          <div className="text-xs text-white/40">— [Redacted], SaaS Operator</div>
        </div>
      </div>
      <div className="blurred-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10">
          <div className="text-3xl font-extrabold text-green-400 mb-2">2X Revenue</div>
          <div className="text-white/80 mb-2">after firing sales team</div>
          <div className="text-xs text-white/40">— [Anonymous], Ecom Founder</div>
        </div>
      </div>
      <div className="blurred-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10">
          <div className="text-3xl font-extrabold text-green-400 mb-2">$1.1M Pipeline</div>
          <div className="text-white/80 mb-2">in 3 weeks</div>
          <div className="text-xs text-white/40">— [Redacted], B2B Agency</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
      <span className="bg-white/10 px-3 py-2 rounded text-xs text-white/60">Private Slack: 1,200+ operators</span>
      <span className="bg-white/10 px-3 py-2 rounded text-xs text-white/60">Zero Noise. All Results.</span>
      <span className="bg-white/10 px-3 py-2 rounded text-xs text-white/60">Top 1% Only</span>
    </div>
  </section>
);

// --- CURIOSITY GAP / BLACKFILE TEASER SECTION ---
const BlackfileTeaser = () => (
  <section className="blackfile-teaser bg-gradient-to-br from-ai8ty-black via-ai8ty-teal/40 to-ai8ty-violet/60 text-white py-20 px-4 text-center relative overflow-hidden">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-ai8ty-teal">What’s Inside the Blackfile?</h2>
    <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-white/80">
      The exact playbooks, automations, and AI systems that quietly power the region’s fastest-growing companies. <span className="font-semibold text-ai8ty-teal">No fluff. No theory. Just what works.</span>
    </p>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
      <div className="teaser-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden flex flex-col items-center">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="/public/placeholder.svg" alt="Redacted Playbook" className="h-16 w-16 mb-4 opacity-60 blur-sm" />
          <div className="text-white/80 mb-2">AI Revenue Playbook</div>
          <div className="text-xs text-white/40">(Redacted)</div>
        </div>
      </div>
      <div className="teaser-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden flex flex-col items-center">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="/public/placeholder.svg" alt="AI Automation" className="h-16 w-16 mb-4 opacity-60 blur-sm" />
          <div className="text-white/80 mb-2">Stealth Automations</div>
          <div className="text-xs text-white/40">(Redacted)</div>
        </div>
      </div>
      <div className="teaser-card bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-xs shadow-lg relative overflow-hidden flex flex-col items-center">
        <div className="blur-sm absolute inset-0 bg-gradient-to-br from-black/80 to-ai8ty-teal/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="/public/placeholder.svg" alt="AI Dashboard" className="h-16 w-16 mb-4 opacity-60 blur-sm" />
          <div className="text-white/80 mb-2">AI Dashboard Templates</div>
          <div className="text-xs text-white/40">(Redacted)</div>
        </div>
      </div>
    </div>
    <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-8">
      <span className="font-semibold text-ai8ty-teal">Curious?</span> Request access and see what your competitors wish they had.
    </p>
    <button className="btn-apple-primary px-10 py-5 text-xl font-bold shadow-lg hover:scale-105 transition-transform" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
      Request Blackfile Access
    </button>
  </section>
);

// --- STICKY IMPULSE CTA SECTION ---
const StickyImpulseCTA = () => (
  <div className="sticky-impulse-cta fixed bottom-4 left-0 right-0 z-[200] flex justify-center pointer-events-none">
    <div className="bg-ai8ty-teal text-black font-bold rounded-full shadow-xl px-8 py-4 flex items-center gap-4 animate-bounce pointer-events-auto cursor-pointer hover:bg-ai8ty-violet hover:text-white transition-colors duration-200"
      onClick={() => window.open('https://wa.me/971509229009?text=I%20want%20the%20AI8TY%20Blackfile%20and%20revenue%20system.', '_blank')}
      aria-label="Chat on WhatsApp for Blackfile Access">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a6.5 6.5 0 10-5.66 5.66l2.12.53.53 2.12a1 1 0 001.64.52l3.31-3.31a1 1 0 00-.52-1.64l-2.12-.53-.53-2.12z" /></svg>
      <span className="text-lg md:text-xl font-bold">Unlock Blackfile via WhatsApp</span>
      <span className="ml-4 text-xs font-semibold bg-black/10 px-3 py-1 rounded-full animate-pulse">Fastest Response</span>
    </div>
  </div>
);

// --- FINAL CTA / FOOTER SECTION ---
const FinalCTASection = () => (
  <footer className="final-cta-footer bg-ai8ty-black text-white py-20 px-4 text-center relative border-t border-ai8ty-teal/30 shadow-[0_-8px_32px_0_rgba(0,255,247,0.08)] overflow-hidden">
    <div className="absolute inset-0 pointer-events-none animate-flicker opacity-5" style={{background: 'repeating-linear-gradient(135deg, #00fff7 0 2px, transparent 2px 40px)'}}></div>
    <h2 className="text-4xl md:text-6xl font-black mb-6 text-ai8ty-teal drop-shadow-lg tracking-tight animate-pulse">Last Chance: Secure Your Edge</h2>
    <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-white/80 font-medium">
      The next market leader will be the one who acts <span className="text-ai8ty-teal font-bold animate-pulse">now</span>. Don’t let this window close. <span className="text-white/90 font-semibold">Request your Blackfile and join the region’s elite.</span>
    </p>
    <button className="btn-apple-primary px-12 py-6 text-2xl font-black shadow-xl hover:scale-110 transition-transform mb-8 animate-bounce" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
      Request Blackfile Access
    </button>
    <div className="mt-10 text-xs text-white/40 max-w-xl mx-auto flex flex-col items-center gap-2">
      <span className="font-semibold text-ai8ty-teal tracking-widest uppercase">AI8TY</span> operates strictly by invitation. All applications are reviewed. Results are not typical—our clients are not typical.
      <span className="text-white/60">© {new Date().getFullYear()} AI8TY. All rights reserved.</span>
      <span className="text-white/20 text-[10px] mt-2">This site is protected by advanced AI monitoring. Unauthorized use is strictly prohibited.</span>
    </div>
  </footer>
);

const Navigation: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("I'm interested in AI8TY's revenue systems. Can we discuss how you can help my business?");
    window.open(`https://wa.me/971509229009?text=${message}`, '_blank');
    closeMenu();
  };

  const navItems = [
    { label: "Revenue System", id: "hero-section" },
    { label: "About", id: "about-section" },
    { label: "Our Work", id: "work-showcase" },
    { label: "Services", id: "enhanced-services" },
    { label: "Free Audit", id: "website-audit" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <ScarcityBar />
      <HeroBanner />
      <ProblemAgitation />
      <SocialProofSection />
      <BlackfileTeaser />
      <StickyImpulseCTA />
      <FinalCTASection />
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-ai8ty-black/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('hero-section')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-8 w-auto"
            />
            <span className="hidden sm:block text-white font-syne font-bold text-lg group-hover:text-neural transition-colors">
              AI8TY
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 hover:text-white transition-colors font-space text-sm relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neural transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="mobile-cta-whatsapp px-4 py-2 text-sm"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-cta-primary px-4 py-2 text-sm"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="tap-target p-2 text-white hover:text-neural transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </button>
            
            <button
              onClick={toggleMenu}
              className="tap-target p-2 text-white hover:text-neural transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-ai8ty-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Navigation Items */}
              <div className="space-y-6 text-center mb-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="mobile-nav-item w-full text-white text-xl font-syne font-semibold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="space-y-4 w-full max-w-sm px-6">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mobile-cta-primary w-full"
                >
                  Book Strategy Call
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="mobile-cta-whatsapp w-full"
                >
                  WhatsApp Us Now
                </button>
                
                <button
                  onClick={() => handleNavClick('website-audit')}
                  className="mobile-cta-secondary w-full"
                >
                  Get Free Audit
                </button>
              </div>

              {/* Contact Info */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="tel:+971509229009"
                  className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors tap-target"
                >
                  <Phone size={16} />
                  <span className="text-sm">+971 50 922 9009</span>
                </a>
                <p className="text-white/50 text-xs mt-2">
                  Dubai, UAE • Serving the GCC
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to Content Link - Always visible */}
      <SkipToContent />

      {/* Language Switcher - Always visible */}
      <div className="language-switcher">
        <button
          aria-label="Switch to English"
          className={language === 'en' ? 'active' : ''}
          onClick={() => setLanguage('en')}
        >EN</button>
        <button
          aria-label="Switch to Arabic"
          className={language === 'ar' ? 'active' : ''}
          onClick={() => setLanguage('ar')}
        >AR</button>
        <button
          aria-label="Switch to French"
          className={language === 'fr' ? 'active' : ''}
          onClick={() => setLanguage('fr')}
        >FR</button>
      </div>
    </>
  );
};

export default Navigation;
