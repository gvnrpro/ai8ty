import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Globe, Zap, Users, Building, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GulfSpecificPositioning: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Gulf-First AI Solutions',
      title: 'Built for the unique regulatory and cultural landscape of the GCC',
      description: 'The only AI consultancy with native expertise in DIFC, ADGM, QFC regulations and Arabic language processing capabilities.',
      cta: 'Explore Gulf Advantages'
    },
    ar: {
      subtitle: 'حلول ذكاء اصطناعي تركز على الخليج أولاً',
      title: 'مبنية للمشهد التنظيمي والثقافي الفريد لدول مجلس التعاون الخليجي',
      description: 'الشركة الاستشارية الوحيدة للذكاء الاصطناعي التي تتمتع بخبرة محلية في لوائح مركز دبي المالي العالمي وأبوظبي العالمي ومركز قطر المالي وقدرات معالجة اللغة العربية.',
      cta: 'اكتشف مزايا الخليج'
    }
  };

  const gulfAdvantages = [
    {
      icon: Shield,
      titleEn: 'Regulatory Mastery',
      titleAr: 'إتقان تنظيمي',
      descEn: 'Native compliance with UAE Central Bank, SAMA, QCB, and CMA regulations',
      descAr: 'امتثال محلي مع البنك المركزي الإماراتي ومؤسسة النقد العربي السعودي وبنك قطر المركزي وهيئة السوق المالية',
      features: [
        'DIFC Data Protection Law',
        'SAMA Cyber Security Framework',
        'QFC Digital Assets Framework',
        'UAE AI Ethics Guidelines'
      ]
    },
    {
      icon: Globe,
      titleEn: 'Arabic AI Processing',
      titleAr: 'معالجة الذكاء الاصطناعي العربية',
      descEn: 'Advanced natural language processing for Arabic with Gulf dialect recognition',
      descAr: 'معالجة متقدمة للغة الطبيعية للعربية مع التعرف على اللهجات الخليجية',
      features: [
        'Gulf Arabic Dialect Models',
        'Cultural Context Understanding',
        'Bilingual Document Processing',
        'Voice Recognition (Arabic/English)'
      ]
    },
    {
      icon: Building,
      titleEn: 'Gulf Market Intelligence',
      titleAr: 'ذكاء السوق الخليجي',
      descEn: 'Deep understanding of GCC business practices, cultural nuances, and market dynamics',
      descAr: 'فهم عميق لممارسات الأعمال الخليجية والفروق الثقافية وديناميكيات السوق',
      features: [
        'Family Business Integration',
        'Sharia-Compliant AI Solutions',
        'Cross-Border GCC Operations',
        'Local Partnership Networks'
      ]
    }
  ];

  const regulatoryCompliance = [
    {
      region: 'UAE',
      authorities: ['Central Bank UAE', 'DIFC Authority', 'ADGM', 'SCA'],
      frameworks: ['Data Protection Law', 'AML/CFT', 'AI Ethics Guidelines'],
      certifications: ['ISO 27001', 'SOC 2 Type II', 'NIST Framework']
    },
    {
      region: 'Saudi Arabia',
      authorities: ['SAMA', 'CMA', 'CITC', 'SDAIA'],
      frameworks: ['Vision 2030 AI Strategy', 'NUSUK Guidelines', 'Fintech Regulatory Sandbox'],
      certifications: ['SAMA Compliance', 'G20 AI Principles', 'CITC Cybersecurity']
    },
    {
      region: 'Qatar',
      authorities: ['QCB', 'QFC Authority', 'MICT', 'NQTP'],
      frameworks: ['National Vision 2030', 'Digital Assets Framework', 'Smart City Initiative'],
      certifications: ['QFC License', 'Qatar AI Strategy', 'Smart Qatar Compliance']
    }
  ];

  const partnershipEcosystem = [
    {
      category: 'Technology Partners',
      partners: ['Microsoft Azure (Gold)', 'AWS (Advanced)', 'Google Cloud (Premier)', 'NVIDIA (Elite)']
    },
    {
      category: 'Regional Partners',
      partners: ['Emirates NBD Innovation', 'ADNOC Digital', 'Qatar Airways Digital', 'STC Pay']
    },
    {
      category: 'Academic Partners',
      partners: ['KAUST AI Initiative', 'AUB AI Lab', 'Khalifa University', 'Qatar Computing Research']
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

  return (
    <section 
      ref={ref}
      className={`section-apple relative overflow-hidden ${isArabic ? 'rtl' : ''}`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(var(--gray-950)) 0%, hsl(var(--background)) 50%, hsl(var(--gray-950)) 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] right-[5%] w-80 h-80 bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-apple relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-green-500 font-medium mb-4 tracking-wider uppercase">
            {currentContent.subtitle}
          </p>
          <h2 className="text-display mb-6 container-apple-narrow">
            {currentContent.title}
          </h2>
          <p className="text-body-large container-apple-narrow">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Gulf Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {gulfAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="card-apple hover-lift group p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <advantage.icon size={28} className="text-green-400" />
              </div>
              
              <h3 className="text-title mb-4">
                {isArabic ? advantage.titleAr : advantage.titleEn}
              </h3>
              
              <p className="text-body mb-6">
                {isArabic ? advantage.descAr : advantage.descEn}
              </p>

              <div className="space-y-2">
                {advantage.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-caption text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Compliance Matrix */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-title-large text-center mb-12">Regulatory Compliance Matrix</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regulatoryCompliance.map((region, index) => (
              <motion.div
                key={index}
                className="card-apple p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
              >
                <h4 className="text-title mb-4 text-green-400">{region.region}</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-body font-medium mb-2">Regulatory Bodies</h5>
                    <div className="space-y-1">
                      {region.authorities.map((authority, authIndex) => (
                        <div key={authIndex} className="text-caption text-muted-foreground flex items-center gap-2">
                          <Shield size={12} className="text-green-400" />
                          {authority}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-body font-medium mb-2">Frameworks</h5>
                    <div className="space-y-1">
                      {region.frameworks.map((framework, frameIndex) => (
                        <div key={frameIndex} className="text-caption text-muted-foreground flex items-center gap-2">
                          <Award size={12} className="text-blue-400" />
                          {framework}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-body font-medium mb-2">Certifications</h5>
                    <div className="space-y-1">
                      {region.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="text-caption text-muted-foreground flex items-center gap-2">
                          <Zap size={12} className="text-purple-400" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-title-large text-center mb-12">Strategic Partnership Ecosystem</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipEcosystem.map((category, index) => (
              <motion.div
                key={index}
                className="card-apple p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + (index * 0.2) }}
              >
                <h4 className="text-title mb-6 text-blue-400">{category.category}</h4>
                
                <div className="space-y-3">
                  {category.partners.map((partner, partnerIndex) => (
                    <div 
                      key={partnerIndex} 
                      className="glass-apple p-3 rounded-lg text-caption"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GulfSpecificPositioning;