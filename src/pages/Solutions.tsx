
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Building2, Heart, Factory, ShoppingCart, Landmark, Plane, Users } from 'lucide-react';
import AppleInspiredNavigation from '@/components/enterprise/AppleInspiredNavigation';
import AppleInspiredFooter from '@/components/enterprise/AppleInspiredFooter';

const Solutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      subtitle: 'Solutions Portfolio',
      title: 'Operational AI designed for your industry',
      description: 'AI8TY delivers specialized AI systems engineered for the unique challenges, regulations, and opportunities of each major sector across the Gulf region.',
      cta: 'Explore Solution'
    },
    ar: {
      subtitle: 'محفظة الحلول',
      title: 'ذكاء اصطناعي تشغيلي مصمم لصناعتك',
      description: 'تقدم AI8TY أنظمة ذكاء اصطناعي متخصصة مهندسة للتحديات والأنظمة والفرص الفريدة لكل قطاع رئيسي في منطقة الخليج.',
      cta: 'استكشف الحل'
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
      gradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 'healthcare-networks',
      icon: Heart,
      titleEn: 'Healthcare Networks',
      titleAr: 'شبكات الرعاية الصحية',
      descEn: 'Patient intelligence, operational optimization, and MOHAP-compliant data systems.',
      descAr: 'ذكاء المرضى والتحسين التشغيلي وأنظمة البيانات المتوافقة مع وزارة الصحة.',
      path: '/solutions/healthcare-networks',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'retail-groups',
      icon: ShoppingCart,
      titleEn: 'Retail Groups',
      titleAr: 'مجموعات التجزئة',
      descEn: 'Customer intelligence, inventory optimization, and omnichannel analytics for retail excellence.',
      descAr: 'ذكاء العملاء وتحسين المخزون وتحليلات القنوات المتعددة للتميز في التجزئة.',
      path: '/solutions/retail-groups',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'manufacturing-firms',
      icon: Factory,
      titleEn: 'Manufacturing Firms',
      titleAr: 'شركات التصنيع',
      descEn: 'Predictive maintenance, supply chain intelligence, and production optimization systems.',
      descAr: 'الصيانة التنبؤية وذكاء سلسلة التوريد وأنظمة تحسين الإنتاج.',
      path: '/solutions/manufacturing-firms',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      id: 'private-wealth-offices',
      icon: Landmark,
      titleEn: 'Private Wealth Offices',
      titleAr: 'مكاتب الثروات الخاصة',
      descEn: 'Portfolio intelligence, client insight systems, and investment decision support.',
      descAr: 'ذكاء المحافظ وأنظمة رؤى العملاء ودعم قرارات الاستثمار.',
      path: '/solutions/private-wealth-offices',
      gradient: 'from-yellow-500/20 to-amber-500/20'
    },
    {
      id: 'aviation-logistics',
      icon: Plane,
      titleEn: 'Aviation & Logistics',
      titleAr: 'الطيران واللوجستيات',
      descEn: 'Predictive maintenance, cargo optimization, and operational efficiency systems.',
      descAr: 'الصيانة التنبؤية وتحسين الشحن وأنظمة الكفاءة التشغيلية.',
      path: '/solutions/aviation-logistics',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'public-sector',
      icon: Users,
      titleEn: 'Public Sector',
      titleAr: 'القطاع العام',
      descEn: 'Citizen service optimization, smart city initiatives, and regulatory compliance systems.',
      descAr: 'تحسين خدمات المواطنين ومبادرات المدن الذكية وأنظمة الامتثال التنظيمي.',
      path: '/solutions/public-sector',
      gradient: 'from-teal-500/20 to-green-500/20'
    }
  ];

  const currentContent = content[isArabic ? 'ar' : 'en'];

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
                <p className="text-body-large container-apple-narrow">
                  {currentContent.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Industry Solutions Grid */}
          <section className="section-apple">
            <div className="container-apple">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.id}
                    className="group relative cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onClick={() => navigate(industry.path)}
                  >
                    {/* Apple-style floating card */}
                    <div className="card-apple hover-lift group-hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 glass-apple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                          <industry.icon size={28} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-title mb-4 group-hover:text-white transition-colors duration-300">
                          {isArabic ? industry.titleAr : industry.titleEn}
                        </h3>
                        
                        <p className="text-body leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                          {isArabic ? industry.descAr : industry.descEn}
                        </p>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-white transition-all duration-300">
                          <span className="text-caption">{currentContent.cta}</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <AppleInspiredFooter />
      </div>
    </>
  );
};

export default Solutions;
