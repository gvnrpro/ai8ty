
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Building2, Heart, Factory, ShoppingCart, Landmark, Plane, Users } from 'lucide-react';
import EnterpriseNavigation from '@/components/enterprise/EnterpriseNavigation';
import EnterpriseFooter from '@/components/enterprise/EnterpriseFooter';
import TechBackground from '@/components/enterprise/TechBackground';

const Solutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Operational AI Solutions for UAE and GCC Enterprises',
      subtitle: 'AI8TY delivers AI systems designed for regulated, high-stakes sectors in the Gulf. Engineered for local market realities, regulatory frameworks, and operational risk management.',
      cta: 'Request Private Briefing'
    },
    ar: {
      title: 'حلول الذكاء الاصطناعي التشغيلية لشركات الإمارات ودول مجلس التعاون',
      subtitle: 'تقدم AI8TY أنظمة ذكاء اصطناعي مصممة للقطاعات المنظمة عالية المخاطر في الخليج. مهندسة لواقع السوق المحلي والأطر التنظيمية وإدارة المخاطر التشغيلية.',
      cta: 'طلب إحاطة خاصة'
    }
  };

  const industries = [
    {
      id: 'financial-institutions',
      icon: Building2,
      titleEn: 'Financial Institutions',
      titleAr: 'المؤسسات المالية',
      descEn: 'AI systems for banks, investment firms, and financial services in the GCC region.',
      descAr: 'أنظمة الذكاء الاصطناعي للبنوك وشركات الاستثمار والخدمات المالية في منطقة دول مجلس التعاون.',
      path: '/solutions/financial-institutions'
    },
    {
      id: 'healthcare-networks',
      icon: Heart,
      titleEn: 'Healthcare Networks',
      titleAr: 'شبكات الرعاية الصحية',
      descEn: 'Secure patient data intelligence and operational optimization for healthcare providers.',
      descAr: 'ذكاء بيانات المرضى الآمن والتحسين التشغيلي لمقدمي الرعاية الصحية.',
      path: '/solutions/healthcare-networks'
    },
    {
      id: 'retail-groups',
      icon: ShoppingCart,
      titleEn: 'Retail Groups',
      titleAr: 'مجموعات التجزئة',
      descEn: 'Customer intelligence, inventory optimization, and omnichannel analytics for retail.',
      descAr: 'ذكاء العملاء وتحسين المخزون وتحليلات القنوات المتعددة للتجزئة.',
      path: '/solutions/retail-groups'
    },
    {
      id: 'manufacturing-firms',
      icon: Factory,
      titleEn: 'Manufacturing Firms',
      titleAr: 'شركات التصنيع',
      descEn: 'Predictive maintenance, supply chain intelligence, and production optimization.',
      descAr: 'الصيانة التنبؤية وذكاء سلسلة التوريد وتحسين الإنتاج.',
      path: '/solutions/manufacturing-firms'
    },
    {
      id: 'private-wealth-offices',
      icon: Landmark,
      titleEn: 'Private Wealth Offices',
      titleAr: 'مكاتب الثروات الخاصة',
      descEn: 'Portfolio risk mapping, client intelligence, and investment decision support systems.',
      descAr: 'رسم خرائط مخاطر المحافظ وذكاء العملاء وأنظمة دعم قرارات الاستثمار.',
      path: '/solutions/private-wealth-offices'
    },
    {
      id: 'aviation-logistics',
      icon: Plane,
      titleEn: 'Aviation & Logistics',
      titleAr: 'الطيران واللوجستيات',
      descEn: 'Predictive maintenance, cargo optimization, and operational efficiency monitoring.',
      descAr: 'الصيانة التنبؤية وتحسين الشحن ومراقبة الكفاءة التشغيلية.',
      path: '/solutions/aviation-logistics'
    },
    {
      id: 'public-sector',
      icon: Users,
      titleEn: 'Public Sector',
      titleAr: 'القطاع العام',
      descEn: 'Citizen service optimization, emergency prediction models, and regulatory compliance.',
      descAr: 'تحسين خدمات المواطنين ونماذج التنبؤ بالطوارئ والامتثال التنظيمي.',
      path: '/solutions/public-sector'
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
          content={currentContent.subtitle} 
        />
      </Helmet>

      <div className={`min-h-screen bg-slate-900 ${isArabic ? 'rtl' : ''}`}>
        <EnterpriseNavigation />
        
        <main className="relative pt-20 md:pt-24">
          {/* Hero Section */}
          <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <TechBackground density={30} color="#3B82F6" className="opacity-10" />
            
            <div className="container mx-auto max-w-6xl text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {currentContent.title}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {currentContent.subtitle}
              </motion.p>
            </div>
          </section>

          {/* Industry Selector Grid */}
          <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.id}
                    className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    onClick={() => navigate(industry.path)}
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                        <industry.icon size={24} className="text-blue-400" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {isArabic ? industry.titleAr : industry.titleEn}
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 md:mb-6">
                      {isArabic ? industry.descAr : industry.descEn}
                    </p>
                    
                    <motion.div
                      className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all"
                      whileHover={{ x: isArabic ? -4 : 4 }}
                    >
                      <span className="text-sm md:text-base">{currentContent.cta}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Solutions;
