
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import EnterpriseNavigation from '@/components/enterprise/EnterpriseNavigation';
import EnterpriseFooter from '@/components/enterprise/EnterpriseFooter';
import TechBackground from '@/components/enterprise/TechBackground';
import toast, { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
  name: '',
  organization: '',
  sector: '',
  email: '',
  phone: '',
  message: '',
  referral: ''
});


  const content = {
    en: {
      title: 'Request a Private Briefing',
      subtitle: 'We typically respond within 24 hours. All inquiries confidential.',
      form: {
        name: 'Full Name',
        organization: 'Organization',
        sector: 'Sector',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Project Requirements',
        submit: 'Request Briefing'
      },
      contact: {
        email: 'Enterprise Inquiries',
        phone: 'Direct Line',
        location: 'Regional Office',
        hours: 'Response Time'
      },
      info: {
        emailValue: 'enterprise@ai8ty.com',
        phoneValue: '+971 4 123 4567',
        locationValue: 'Dubai, UAE',
        hoursValue: 'Within 24 Hours'
      }
    },
    ar: {
      title: 'طلب إحاطة خاصة',
      subtitle: 'نرد عادة خلال 24 ساعة. جميع الاستفسارات سرية.',
      form: {
        name: 'الاسم الكامل',
        organization: 'المؤسسة',
        sector: 'القطاع',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'متطلبات المشروع',
        submit: 'طلب إحاطة'
      },
      contact: {
        email: 'استفسارات المؤسسات',
        phone: 'الخط المباشر',
        location: 'المكتب الإقليمي',
        hours: 'وقت الاستجابة'
      },
      info: {
        emailValue: 'enterprise@ai8ty.com',
        phoneValue: '+971 4 123 4567',
        locationValue: 'دبي، الإمارات العربية المتحدة',
        hoursValue: 'خلال 24 ساعة'
      }
    }
  };

  const currentContent = content[isArabic ? 'ar' : 'en'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    // Simulate submission delay or real API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(isArabic ? 'تم إرسال الطلب بنجاح' : 'Briefing request submitted successfully');
    setFormData({
      name: '',
      organization: '',
      sector: '',
      email: '',
      phone: '',
      message: '',
      referral: ''
    });
  } catch (error) {
    toast.error(isArabic ? 'حدث خطأ. حاول مرة أخرى.' : 'Something went wrong. Please try again.');
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: currentContent.contact.email,
      value: currentContent.info.emailValue,
      href: `mailto:${currentContent.info.emailValue}`
    },
    {
      icon: Phone,
      label: currentContent.contact.phone,
      value: currentContent.info.phoneValue,
      href: `tel:${currentContent.info.phoneValue.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      label: currentContent.contact.location,
      value: currentContent.info.locationValue,
      href: null
    },
    {
      icon: Clock,
      label: currentContent.contact.hours,
      value: currentContent.info.hoursValue,
      href: null
    }
  ];

  const sectors = isArabic ? [
    'المؤسسات المالية',
    'شبكات الرعاية الصحية',
    'مجموعات التجزئة',
    'شركات التصنيع',
    'مكاتب الثروات الخاصة',
    'الطيران واللوجستيات',
    'القطاع العام'
  ] : [
    'Financial Institutions',
    'Healthcare Networks',
    'Retail Groups',
    'Manufacturing Firms',
    'Private Wealth Offices',
    'Aviation & Logistics',
    'Public Sector'
  ];

  return (
    <>
      <Helmet>
        <title>
          {isArabic ? 'اتصل بنا | AI8TY' : 'Contact Us | AI8TY'}
        </title>
        <meta 
          name="description" 
          content={currentContent.subtitle}
        />
      </Helmet>

      <div className={`min-h-screen bg-slate-900 ${isArabic ? 'rtl' : ''}`}>
        <EnterpriseNavigation />
        
        <main className="relative pt-20 md:pt-24">
          <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <TechBackground density={20} color="#3B82F6" className="opacity-10" />
            
            <div className="container mx-auto max-w-6xl">
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {currentContent.title}
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {currentContent.subtitle}
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          {currentContent.form.name}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          {currentContent.form.organization}
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {currentContent.form.sector}
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
                        required
                      >
                        <option value="">
                          {isArabic ? 'اختر القطاع' : 'Select Sector'}
                        </option>
                        {sectors.map((sector, index) => (
                          <option key={index} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          {currentContent.form.email}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          {currentContent.form.phone}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {currentContent.form.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base resize-none"
                        required
                      />
                    </div>
<div>
  <label className="block text-sm font-medium text-slate-300 mb-2">
    {isArabic ? 'كيف سمعت عنا؟' : 'How did you hear about us?'}
  </label>
  <select
    name="referral"
    value={formData.referral}
    onChange={handleInputChange}
    className="w-full px-4 py-3 md:py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base touch-manipulation"
    required
  >
    <option value="">{isArabic ? 'اختر خياراً' : 'Select an option'}</option>
    <option value="LinkedIn">{isArabic ? 'لينكدإن' : 'LinkedIn'}</option>
    <option value="X (Twitter)">{isArabic ? 'تويتر (X)' : 'X (Twitter)'}</option>
    <option value="Referral">{isArabic ? 'إحالة' : 'Referral'}</option>
    <option value="Search Engine">{isArabic ? 'محرك بحث' : 'Search Engine'}</option>
    <option value="Other">{isArabic ? 'أخرى' : 'Other'}</option>
  </select>
</div>

                    <motion.button
                      type="submit"
                      className="w-full group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-medium rounded-lg transition-all duration-300 touch-manipulation"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{currentContent.form.submit}</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6 md:space-y-8"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 hover:border-slate-600 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <info.icon size={20} className="text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold mb-2">
                            {info.label}
                          </h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-slate-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-slate-300 text-sm md:text-base">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        <EnterpriseFooter />
      </div>
    </>
  );
};

export default Contact;
