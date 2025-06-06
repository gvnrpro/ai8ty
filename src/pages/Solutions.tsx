
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, 
  Building2, 
  Heart, 
  Factory, 
  ShoppingCart, 
  Landmark, 
  Plane, 
  Users,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Solutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const sectionsRef = useRef(null);
  const isInView = useInView(sectionsRef, { once: true, amount: 0.2 });

  const content = {
    en: {
      subtitle: 'Solutions Portfolio',
      title: 'Operational AI designed for your industry',
      description: 'AI8TY delivers specialized AI systems engineered for the unique challenges, regulations, and opportunities of each major sector across the Gulf region.',
      cta: 'Explore Solution',
      trustTitle: 'Trusted across the GCC',
      trustDescription: 'Our enterprise AI systems are built for the specific needs and regulatory requirements of the Gulf region.'
    },
    ar: {
      subtitle: 'محفظة الحلول',
      title: 'ذكاء اصطناعي تشغيلي مصمم لصناعتك',
      description: 'تقدم AI8TY أنظمة ذكاء اصطناعي متخصصة مهندسة للتحديات والأنظمة والفرص الفريدة لكل قطاع رئيسي في منطقة الخليج.',
      cta: 'استكشف الحل',
      trustTitle: 'موثوق في جميع أنحاء دول مجلس التعاون الخليجي',
      trustDescription: 'تم تصميم أنظمة الذكاء الاصطناعي للمؤسسات لدينا لتلبية الاحتياجات المحددة والمتطلبات التنظيمية لمنطقة الخليج.'
    }
  };

  const industries = [
    {
      id: 'financial-institutions',
      icon: Building2,
      titleEn: 'Financial Institutions',
      titleAr: 'المؤسسات المالية',
      descEn: 'Risk intelligence, regulatory compliance, and customer insight systems for GCC financial services.',
      descAr: 'ذكاء المخاطر والامتثال التنظيمي وأنظمة رؤى العملاء للخدمات المالية في دول مجلس التعاون.',
      path: '/solutions/financial-institutions',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      primaryColor: 'text-blue-500',
      benefits: ['AML pattern suppression', 'Cross-border liquidity AI', 'Risk assessment optimization']
    },
    {
      id: 'healthcare-networks',
      icon: Heart,
      titleEn: 'Healthcare Networks',
      titleAr: 'شبكات الرعاية الصحية',
      descEn: 'Patient intelligence, operational optimization, and MOHAP-compliant data systems.',
      descAr: 'ذكاء المرضى والتحسين التشغيلي وأنظمة البيانات المتوافقة مع وزارة الصحة.',
      path: '/solutions/healthcare-networks',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      primaryColor: 'text-emerald-500',
      benefits: ['Patient data intelligence', 'Clinical decision support', 'Resource allocation AI']
    },
    {
      id: 'retail-groups',
      icon: ShoppingCart,
      titleEn: 'Retail Groups',
      titleAr: 'مجموعات التجزئة',
      descEn: 'Customer intelligence, inventory optimization, and omnichannel analytics for retail excellence.',
      descAr: 'ذكاء العملاء وتحسين المخزون وتحليلات القنوات المتعددة للتميز في التجزئة.',
      path: '/solutions/retail-groups',
      gradient: 'from-purple-500/20 to-pink-500/20',
      primaryColor: 'text-purple-500',
      benefits: ['Customer behavior prediction', 'Inventory optimization AI', 'Omnichannel analytics']
    },
    {
      id: 'manufacturing-firms',
      icon: Factory,
      titleEn: 'Manufacturing Firms',
      titleAr: 'شركات التصنيع',
      descEn: 'Predictive maintenance, supply chain intelligence, and production optimization systems.',
      descAr: 'الصيانة التنبؤية وذكاء سلسلة التوريد وأنظمة تحسين الإنتاج.',
      path: '/solutions/manufacturing-firms',
      gradient: 'from-orange-500/20 to-red-500/20',
      primaryColor: 'text-orange-500',
      benefits: ['Predictive maintenance', 'Quality control automation', 'Production efficiency AI']
    },
    {
      id: 'private-wealth-offices',
      icon: Landmark,
      titleEn: 'Private Wealth Offices',
      titleAr: 'مكاتب الثروات الخاصة',
      descEn: 'Portfolio intelligence, client insight systems, and investment decision support.',
      descAr: 'ذكاء المحافظ وأنظمة رؤى العملاء ودعم قرارات الاستثمار.',
      path: '/solutions/private-wealth-offices',
      gradient: 'from-amber-500/20 to-yellow-500/20',
      primaryColor: 'text-amber-500',
      benefits: ['Portfolio risk mapping', 'Client intelligence AI', 'Investment decision support']
    },
    {
      id: 'aviation-logistics',
      icon: Plane,
      titleEn: 'Aviation & Logistics',
      titleAr: 'الطيران واللوجستيات',
      descEn: 'Predictive maintenance, cargo optimization, and operational efficiency systems.',
      descAr: 'الصيانة التنبؤية وتحسين الشحن وأنظمة الكفاءة التشغيلية.',
      path: '/solutions/aviation-logistics',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      primaryColor: 'text-cyan-500',
      benefits: ['Aircraft maintenance AI', 'Cargo load optimization', 'Route planning intelligence']
    },
    {
      id: 'public-sector',
      icon: Users,
      titleEn: 'Public Sector',
      titleAr: 'القطاع العام',
      descEn: 'Citizen service optimization, smart city initiatives, and regulatory compliance systems.',
      descAr: 'تحسين خدمات المواطنين ومبادرات المدن الذكية وأنظمة الامتثال التنظيمي.',
      path: '/solutions/public-sector',
      gradient: 'from-teal-500/20 to-green-500/20',
      primaryColor: 'text-teal-500',
      benefits: ['Citizen service optimization', 'Emergency services AI', 'Regulatory compliance']
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

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

  return (
    <>
      <Helmet>
        <title>
          {isArabic ? 'حلول الذكاء الاصطناعي التشغيلية | AI8TY' : 'Operational AI Solutions | AI8TY'}
        </title>
        <meta 
          name="description" 
          content={currentContent.description} 
        />
      </Helmet>

      <div className={`min-h-screen ${isArabic ? 'rtl' : ''}`}>
        <AppleInspiredNavigation />
        
        <main className="relative pt-20">
          {/* Hero Section */}
          <section className="section-apple-large relative overflow-hidden">
            {/* Apple-style background treatment */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[30%] right-[15%] w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
              <div className="absolute top-[40%] right-[20%] w-px h-32 bg-gradient-to-b from-blue-500/30 to-transparent" />
            </div>

            <div className="container-apple text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-caption text-blue-500 font-medium mb-4 tracking-wider uppercase">
                  {currentContent.subtitle}
                </p>
                <h1 className="text-display-large mb-6">
                  {currentContent.title}
                </h1>
                <p className="text-body-large container-apple-narrow mb-8">
                  {currentContent.description}
                </p>

                <div className="flex justify-center space-x-6 mt-12 mb-16">
                  <motion.div 
                    className="flex items-center justify-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <Shield size={24} className="text-blue-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium">GCC Compliance</p>
                      <p className="text-xs text-gray-400">Built-in regulatory frameworks</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    <Zap size={24} className="text-purple-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium">ROI Focused</p>
                      <p className="text-xs text-gray-400">Measurable business outcomes</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                  >
                    <Globe size={24} className="text-emerald-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Regional Expertise</p>
                      <p className="text-xs text-gray-400">Understanding local markets</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Industry Solutions Grid */}
          <section ref={sectionsRef} className="section-apple">
            <div className="container-apple">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="text-center mb-16">
                  <h2 className="text-display mb-6">{currentContent.trustTitle}</h2>
                  <p className="text-body-large container-apple-narrow">
                    {currentContent.trustDescription}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={industry.id}
                      variants={itemVariants}
                      className="premium-card group relative cursor-pointer"
                      onClick={() => navigate(industry.path)}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Ambient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                      
                      <div className="relative z-10 p-8">
                        {/* Icon */}
                        <div className={`w-16 h-16 glass-apple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300`}>
                          <industry.icon size={28} className={`${industry.primaryColor} group-hover:text-white transition-colors duration-300`} />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-title-large mb-4 group-hover:text-white transition-colors duration-300">
                          {isArabic ? industry.titleAr : industry.titleEn}
                        </h3>
                        
                        <p className="text-body leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                          {isArabic ? industry.descAr : industry.descEn}
                        </p>
                        
                        {/* Benefits */}
                        <div className="mb-6 space-y-2">
                          {industry.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${industry.primaryColor} group-hover:bg-white transition-colors duration-300`} />
                              <span className="text-caption text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className={`flex items-center gap-2 ${industry.primaryColor} font-medium group-hover:text-white transition-all duration-300 mt-auto`}>
                          <span className="text-caption">{currentContent.cta}</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Premium Contact CTA */}
              <motion.div
                className="mt-20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-title-large mb-6">Can't find your industry?</h2>
                <p className="text-body mb-8 max-w-lg mx-auto">
                  Our AI expertise spans across many industries. Contact us to discuss your specific requirements.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-apple-premium hover-lift"
                >
                  Schedule Custom Consultation
                </button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Solutions;
