import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building2, Heart, Factory, ShoppingBag, Landmark, Plane, Users, Home, Scale } from 'lucide-react';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const solutionsData = {
    en: {
      title: 'AI Systems Built for Your Industry',
      subtitle: 'Operational intelligence tailored to the unique challenges of GCC business leaders',
      description: 'Every industry faces distinct operational challenges. Our AI systems are designed specifically for the complexities of your sector, ensuring immediate impact and measurable results.',
      cta: 'Ready to Transform Your Industry?',
      ctaDescription: 'Schedule a strategic briefing to discover how AI8TY can revolutionize your operations.',
      ctaButton: 'Schedule Strategic Briefing',
      industries: [
        {
          icon: Building2,
          title: 'Financial Institutions',
          description: 'Risk assessment, fraud detection, and investment optimization systems designed for UAE banking regulations.',
          path: '/solutions/financial-institutions',
          color: 'from-blue-600 to-indigo-600'
        },
        {
          icon: Heart,
          title: 'Healthcare Networks',
          description: 'Patient flow optimization and clinical decision support with MOHAP compliance and privacy-first design.',
          path: '/solutions/healthcare-networks',
          color: 'from-emerald-600 to-teal-600'
        },
        {
          icon: Factory,
          title: 'Manufacturing Firms',
          description: 'Predictive maintenance and supply chain optimization for industrial operations across the Emirates.',
          path: '/solutions/manufacturing-firms',
          color: 'from-orange-600 to-red-600'
        },
        {
          icon: ShoppingBag,
          title: 'Retail Groups',
          description: 'Customer intelligence and inventory optimization for omnichannel retail excellence.',
          path: '/solutions/retail-groups',
          color: 'from-purple-600 to-pink-600'
        },
        {
          icon: Landmark,
          title: 'Private Wealth Offices',
          description: 'Portfolio intelligence and family office optimization for UHNW wealth management.',
          path: '/solutions/private-wealth-offices',
          color: 'from-amber-600 to-yellow-600'
        },
        {
          icon: Plane,
          title: 'Aviation & Logistics',
          description: 'Fleet optimization and cargo intelligence for transportation and logistics operations.',
          path: '/solutions/aviation-logistics',
          color: 'from-cyan-600 to-blue-600'
        },
        {
          icon: Users,
          title: 'Public Sector',
          description: 'Citizen service optimization and smart city intelligence for government excellence.',
          path: '/solutions/public-sector',
          color: 'from-teal-600 to-green-600'
        },
        {
          icon: Home,
          title: 'Real Estate',
          description: 'Property portfolio optimization and market intelligence for real estate excellence.',
          path: '/solutions/real-estate',
          color: 'from-rose-600 to-pink-600'
        },
        {
          icon: Scale,
          title: 'Law Firms',
          description: 'Legal research automation and case management intelligence for modern law practices.',
          path: '/solutions/law-firms',
          color: 'from-slate-600 to-gray-600'
        }
      ]
    },
    ar: {
      title: 'أنظمة ذكاء اصطناعي مبنية لصناعتك',
      subtitle: 'ذكاء تشغيلي مصمم خصيصاً للتحديات الفريدة لقادة الأعمال في دول مجلس التعاون',
      description: 'كل صناعة تواجه تحديات تشغيلية مميزة. أنظمة الذكاء الاصطناعي الخاصة بنا مصممة خصيصاً لتعقيدات قطاعك، مما يضمن تأثيراً فورياً ونتائج قابلة للقياس.',
      cta: 'مستعد لتحويل صناعتك؟',
      ctaDescription: 'جدولة إحاطة استراتيجية لاكتشاف كيف يمكن لـ AI8TY أن تحدث ثورة في عملياتك.',
      ctaButton: 'جدولة إحاطة استراتيجية',
      industries: [
        {
          icon: Building2,
          title: 'المؤسسات المالية',
          description: 'أنظمة تقييم المخاطر واكتشاف الاحتيال وتحسين الاستثمارات المصممة للوائح المصرفية الإماراتية.',
          path: '/solutions/financial-institutions',
          color: 'from-blue-600 to-indigo-600'
        },
        {
          icon: Heart,
          title: 'شبكات الرعاية الصحية',
          description: 'تحسين تدفق المرضى ودعم القرارات السريرية مع امتثال وزارة الصحة وتصميم يركز على الخصوصية.',
          path: '/solutions/healthcare-networks',
          color: 'from-emerald-600 to-teal-600'
        },
        {
          icon: Factory,
          title: 'الشركات الصناعية',
          description: 'الصيانة التنبؤية وتحسين سلسلة التوريد للعمليات الصناعية عبر الإمارات.',
          path: '/solutions/manufacturing-firms',
          color: 'from-orange-600 to-red-600'
        },
        {
          icon: ShoppingBag,
          title: 'مجموعات التجزئة',
          description: 'ذكاء العملاء وتحسين المخزون لتميز التجزئة متعددة القنوات.',
          path: '/solutions/retail-groups',
          color: 'from-purple-600 to-pink-600'
        },
        {
          icon: Landmark,
          title: 'مكاتب الثروات الخاصة',
          description: 'ذكاء المحافظ وتحسين مكاتب العائلة لإدارة الثروات عالية القيمة.',
          path: '/solutions/private-wealth-offices',
          color: 'from-amber-600 to-yellow-600'
        },
        {
          icon: Plane,
          title: 'الطيران واللوجستيات',
          description: 'تحسين الأسطول وذكاء البضائع لعمليات النقل واللوجستيات.',
          path: '/solutions/aviation-logistics',
          color: 'from-cyan-600 to-blue-600'
        },
        {
          icon: Users,
          title: 'القطاع العام',
          description: 'تحسين خدمات المواطنين وذكاء المدن الذكية لتميز الحكومة.',
          path: '/solutions/public-sector',
          color: 'from-teal-600 to-green-600'
        },
        {
          icon: Home,
          title: 'العقارات',
          description: 'تحسين محفظة العقارات وذكاء السوق لتميز العقارات.',
          path: '/solutions/real-estate',
          color: 'from-rose-600 to-pink-600'
        },
        {
          icon: Scale,
          title: 'شركات المحاماة',
          description: 'أتمتة البحث القانوني وذكاء إدارة القضايا لممارسات القانون الحديثة.',
          path: '/solutions/law-firms',
          color: 'from-slate-600 to-gray-600'
        }
      ]
    }
  };

  const currentContent = solutionsData[isArabic ? 'ar' : 'en'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

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

      <div className={`min-h-screen ${isArabic ? 'rtl' : ''}`}>
        <AppleInspiredNavigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="section-apple-large relative">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-purple-500/8 rounded-full blur-[80px]" />
            </div>

            <motion.div
              className="container-apple text-center relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-display mb-6"
                variants={itemVariants}
              >
                {currentContent.title}
              </motion.h1>
              
              <motion.p 
                className="text-body-large container-apple-narrow mb-8"
                variants={itemVariants}
              >
                {currentContent.subtitle}
              </motion.p>

              <motion.p 
                className="text-body container-apple-narrow mb-16"
                variants={itemVariants}
              >
                {currentContent.description}
              </motion.p>
            </motion.div>
          </section>

          {/* Industries Grid with Loading States */}
          <section className="section-apple">
            <Suspense fallback={
              <div className="container-apple">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="premium-card animate-pulse">
                      <div className="w-12 h-12 rounded-xl bg-slate-700 mb-6" />
                      <div className="h-6 bg-slate-700 rounded mb-4" />
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-700 rounded" />
                        <div className="h-4 bg-slate-700 rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }>
              <motion.div
                className="container-apple"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {currentContent.industries.map((industry, index) => (
                    <motion.div
                      key={industry.path}
                      className="premium-card hover-lift group cursor-pointer touch-manipulation"
                      variants={itemVariants}
                      onClick={() => navigate(industry.path)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                        <industry.icon size={24} className="text-white" />
                      </div>
                      
                      <h3 className="text-title mb-4 text-foreground group-hover:text-blue-400 transition-colors">
                        {industry.title}
                      </h3>
                      
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Suspense>
          </section>

          {/* Enhanced CTA Section */}
          <section className="section-apple bg-gradient-to-br from-slate-900 to-slate-800">
            <motion.div
              className="container-apple text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                className="text-title-large mb-6"
                variants={itemVariants}
              >
                {currentContent.cta}
              </motion.h2>
              
              <motion.p 
                className="text-body-large mb-8 container-apple-narrow"
                variants={itemVariants}
              >
                {currentContent.ctaDescription}
              </motion.p>

              <motion.button
                onClick={() => navigate('/contact')}
                className="btn-premium touch-manipulation"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentContent.ctaButton}
              </motion.button>
            </motion.div>
          </section>
        </main>

        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Solutions;
