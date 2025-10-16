import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Heart, Factory, ShoppingBag, Landmark, Plane, 
  Users, Home, Scale, ArrowRight, CheckCircle, Sparkles 
} from 'lucide-react';
import Header from '@/components/digital-bauhaus/Header';
import Footer from '@/components/digital-bauhaus/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const industriesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // State for enhanced interactions
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const solutionsData = useMemo(() => ({
    en: {
      title: 'AI Systems Built for Your Industry',
      subtitle: 'Operational intelligence tailored to the unique challenges of GCC business leaders',
      description: 'Every industry faces distinct operational challenges. Our AI systems are designed specifically for the complexities of your sector, ensuring immediate impact and measurable results.',
      ctaTitle: 'Ready to Transform Your Industry?',
      ctaSubtitle: 'Schedule a strategic briefing to discover how AI8TY can revolutionize your operations.',
      ctaButton: 'Schedule Strategic Briefing',
      benefits: [
        'Industry-specific AI models',
        'GCC regulatory compliance',
        'Immediate operational impact',
        'Measurable ROI within 90 days'
      ],
      industries: [
        {
          icon: Building2,
          title: 'Financial Institutions',
          description: 'Risk assessment, fraud detection, and investment optimization systems designed for UAE banking regulations.',
          path: '/solutions/financial-institutions',
          color: 'from-blue-600 to-indigo-600',
          features: ['Risk Management', 'Fraud Detection', 'Regulatory Compliance']
        },
        {
          icon: Heart,
          title: 'Healthcare Networks',
          description: 'Patient flow optimization and clinical decision support with MOHAP compliance and privacy-first design.',
          path: '/solutions/healthcare-networks',
          color: 'from-emerald-600 to-teal-600',
          features: ['Patient Flow', 'Clinical Support', 'Privacy-First']
        },
        {
          icon: Factory,
          title: 'Manufacturing Firms',
          description: 'Predictive maintenance and supply chain optimization for industrial operations across the Emirates.',
          path: '/solutions/manufacturing-firms',
          color: 'from-orange-600 to-red-600',
          features: ['Predictive Maintenance', 'Supply Chain', 'Quality Control']
        },
        {
          icon: ShoppingBag,
          title: 'Retail Groups',
          description: 'Customer intelligence and inventory optimization for omnichannel retail excellence.',
          path: '/solutions/retail-groups',
          color: 'from-purple-600 to-pink-600',
          features: ['Customer Analytics', 'Inventory Control', 'Omnichannel']
        },
        {
          icon: Landmark,
          title: 'Private Wealth Offices',
          description: 'Portfolio intelligence and family office optimization for UHNW wealth management.',
          path: '/solutions/private-wealth-offices',
          color: 'from-amber-600 to-yellow-600',
          features: ['Portfolio Analysis', 'Wealth Management', 'Family Office']
        },
        {
          icon: Plane,
          title: 'Aviation & Logistics',
          description: 'Fleet optimization and cargo intelligence for transportation and logistics operations.',
          path: '/solutions/aviation-logistics',
          color: 'from-cyan-600 to-blue-600',
          features: ['Fleet Management', 'Route Optimization', 'Cargo Intelligence']
        },
        {
          icon: Users,
          title: 'Public Sector',
          description: 'Citizen service optimization and smart city intelligence for government excellence.',
          path: '/solutions/public-sector',
          color: 'from-teal-600 to-green-600',
          features: ['Smart Cities', 'Citizen Services', 'Government AI']
        },
        {
          icon: Home,
          title: 'Real Estate',
          description: 'Property portfolio optimization and market intelligence for real estate excellence.',
          path: '/solutions/real-estate',
          color: 'from-rose-600 to-pink-600',
          features: ['Portfolio Management', 'Market Intelligence', 'Property Analytics']
        },
        {
          icon: Scale,
          title: 'Law Firms',
          description: 'Legal research automation and case management intelligence for modern law practices.',
          path: '/solutions/law-firms',
          color: 'from-slate-600 to-gray-600',
          features: ['Legal Research', 'Case Management', 'Document Analysis']
        }
      ]
    },
    ar: {
      title: 'أنظمة ذكاء اصطناعي مبنية لصناعتك',
      subtitle: 'ذكاء تشغيلي مصمم خصيصاً للتحديات الفريدة لقادة الأعمال في دول مجلس التعاون',
      description: 'كل صناعة تواجه تحديات تشغيلية مميزة. أنظمة الذكاء الاصطناعي الخاصة بنا مصممة خصيصاً لتعقيدات قطاعك، مما يضمن تأثيراً فورياً ونتائج قابلة للقياس.',
      ctaTitle: 'هل أنت مستعد لتحويل صناعتك؟',
      ctaSubtitle: 'جدول إحاطة استراتيجية لاكتشاف كيف يمكن لـ AI8TY أن يحدث ثورة في عملياتك.',
      ctaButton: 'جدولة إحاطة استراتيجية',
      benefits: [
        'نماذج ذكاء اصطناعي خاصة بالصناعة',
        'امتثال للوائح دول مجلس التعاون',
        'تأثير تشغيلي فوري',
        'عائد استثمار قابل للقياس خلال 90 يوماً'
      ],
      industries: [
        {
          icon: Building2,
          title: 'المؤسسات المالية',
          description: 'أنظمة تقييم المخاطر واكتشاف الاحتيال وتحسين الاستثمارات المصممة للوائح المصرفية الإماراتية.',
          path: '/solutions/financial-institutions',
          color: 'from-blue-600 to-indigo-600',
          features: ['إدارة المخاطر', 'اكتشاف الاحتيال', 'الامتثال التنظيمي']
        },
        // ... other Arabic translations would go here
      ]
    }
  }), []);

  const currentContent = solutionsData[isArabic ? 'ar' : 'en'];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: -2,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const heroTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleCTAClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI8TY Industry Solutions",
    "description": "Operational AI systems tailored for specific industries in the GCC region",
    "provider": {
      "@type": "Organization",
      "name": "AI8TY",
      "url": "https://ai8ty.com"
    },
    "serviceType": "Artificial Intelligence Systems",
    "areaServed": {
      "@type": "Place",
      "name": "Gulf Cooperation Council"
    }
  };

  return (
    <>
      <Helmet>
        <title>Industry-Specific AI Solutions | AI8TY</title>
        <meta name="description" content="Operational AI systems tailored for financial institutions, healthcare networks, manufacturing firms, retail groups, and more across the GCC region." />
        <meta name="keywords" content="industry AI solutions, GCC AI systems, sector-specific AI, operational intelligence, UAE AI technology" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta property="og:title" content="Industry-Specific AI Solutions | AI8TY" />
        <meta property="og:description" content="Operational AI systems tailored for financial institutions, healthcare networks, manufacturing firms, retail groups, and more across the GCC region." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ai8ty.com/solutions" />
      </Helmet>

      <div className={`min-h-screen bg-background ${isArabic ? 'rtl' : ''}`}>
        <Header />
        
        <main className="overflow-hidden">
          {/* Enhanced Hero Section */}
          <section 
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ y: backgroundY }}
            >
              <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] bg-purple-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vw] bg-emerald-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.div
              className="container mx-auto px-6 text-center relative z-10"
              style={{ y: heroY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Sparkle Icon */}
              <motion.div
                className="flex justify-center mb-8"
                variants={itemVariants}
              >
                <div className="relative">
                  <Sparkles className="w-16 h-16 text-blue-400" />
                  <motion.div
                    className="absolute inset-0 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent leading-tight px-4"
                variants={heroTextVariants}
              >
                {currentContent.title}
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed font-light px-4"
                variants={itemVariants}
              >
                {currentContent.subtitle}
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
                variants={itemVariants}
              >
                {currentContent.description}
              </motion.p>

              {/* Benefits Pills */}
              <motion.div 
                className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
                variants={containerVariants}
              >
                {currentContent.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2.5 md:px-6 md:py-3 border border-white/20 min-h-[44px]"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.15)'
                    }}
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Enhanced Industries Grid */}
          <section ref={industriesRef} className="py-16 md:py-24 lg:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center mb-12 md:mb-16 lg:mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-white px-4">
                  Choose Your Industry
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
                  Discover AI solutions designed specifically for your sector's unique challenges
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {currentContent.industries.map((industry, index) => (
                  <IndustryCard
                    key={industry.path}
                    industry={industry}
                    index={index}
                    isHovered={hoveredCard === index}
                    onHover={() => setHoveredCard(index)}
                    onLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(industry.path)}
                    variants={cardVariants}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-emerald-900/20" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
              className="container mx-auto px-4 md:px-6 text-center relative z-10"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 md:mb-8 text-white px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {currentContent.ctaTitle}
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {currentContent.ctaSubtitle}
              </motion.p>

              <motion.button
                onClick={handleCTAClick}
                className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 min-h-[44px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 flex items-center gap-2 md:gap-3 justify-center">
                  {currentContent.ctaButton}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Enhanced Industry Card Component
const IndustryCard: React.FC<{
  industry: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  variants: any;
}> = ({ industry, index, isHovered, onHover, onLeave, onClick, variants }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer h-full"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={onClick}
      style={{ 
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center -50px'
      }}
    >
      {/* Card Background with Glass Effect */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon */}
          <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <industry.icon size={32} className="text-white" />
            </div>
            
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-medium mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
            {industry.title}
          </h3>
          
          {/* Description */}
          <p className="text-white/70 mb-6 leading-relaxed flex-grow">
            {industry.description}
          </p>
          
          {/* Features */}
          {industry.features && (
            <div className="space-y-2 mb-6">
              {industry.features.map((feature: string, featureIndex: number) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-white/60"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + featureIndex * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  {feature}
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Call to Action */}
          <div className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </motion.div>
  );
};

export default Solutions;
