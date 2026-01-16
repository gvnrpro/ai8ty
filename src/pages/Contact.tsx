import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, 
  CheckCircle, Sparkles, Calendar, Shield,
  Users, Zap, Globe, Award
} from 'lucide-react';
import Header from '@/components/digital-bauhaus/Header';
import Footer from '@/components/digital-bauhaus/Footer';
import FormField from '@/components/FormField';
import FormSelect from '@/components/FormSelect';

const Contact = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    sector: '',
    title: '',
    email: '',
    phone: '',
    timeline: '',
    budget: '',
    message: '',
    priority: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = useMemo(() => ({
    en: {
      hero: {
        badge: 'Strategic Partnership',
        title: 'Let\'s Build the Future of Your Industry',
        subtitle: 'Schedule a private briefing with our AI strategists. Transform your operations with enterprise-grade artificial intelligence.',
        description: 'Join industry leaders across the GCC who trust AI8TY to deliver measurable results through cutting-edge AI implementation.'
      },
      form: {
        title: 'Request Strategic Briefing',
        subtitle: 'Our enterprise team typically responds within 2 hours during business days.',
        fields: {
          name: 'Full Name',
          organization: 'Organization',
          title: 'Your Title',
          sector: 'Industry Sector',
          email: 'Business Email',
          phone: 'Direct Line',
          timeline: 'Project Timeline',
          budget: 'Investment Range',
          message: 'Strategic Objectives',
          priority: 'Briefing Priority'
        },
        placeholders: {
          name: 'Enter your full name',
          organization: 'Your company or organization',
          title: 'CEO, CTO, Head of Innovation...',
          email: 'your.email@company.com',
          phone: '+971 XX XXX XXXX',
          message: 'Describe your strategic objectives and current challenges...'
        },
        submit: 'Schedule Briefing',
        submitting: 'Scheduling...',
        success: 'Briefing Scheduled',
        priorities: {
          standard: 'Standard (Within 24h)',
          urgent: 'Urgent (Within 2h)',
          immediate: 'Immediate (Within 30min)'
        }
      },
      contact: {
        title: 'Executive Access',
        subtitle: 'Direct access to our strategic leadership team',
        channels: [
          {
            icon: Mail,
            label: 'Enterprise Inquiries',
            value: 'enterprise@ai8ty.com',
            description: 'Direct line to our strategic team',
            href: 'mailto:enterprise@ai8ty.com'
          },
          {
            icon: Phone,
            label: 'Executive Hotline',
            value: '+971 4 123 4567',
            description: '24/7 priority support line',
            href: 'tel:+97141234567'
          },
          {
            icon: Calendar,
            label: 'Executive Calendar',
            value: 'Book Direct Meeting',
            description: 'Schedule with C-suite directly',
            href: '#calendar'
          },
          {
            icon: MapPin,
            label: 'GCC Headquarters',
            value: 'Dubai International Financial Centre',
            description: 'DIFC, Dubai, UAE',
            href: null
          }
        ]
      },
      stats: [
        { number: '<2h', label: 'Response Time', icon: Clock },
        { number: '98%', label: 'Client Satisfaction', icon: Award },
        { number: '24/7', label: 'Enterprise Support', icon: Shield },
        { number: '50+', label: 'Industry Leaders', icon: Users }
      ],
      benefits: [
        'Confidential strategic consultation',
        'Custom AI implementation roadmap',
        'ROI projection and timeline',
        'Regulatory compliance guidance',
        'Executive team direct access',
        'Priority implementation queue'
      ]
    },
    ar: {
      hero: {
        badge: 'شراكة استراتيجية',
        title: 'لنبني مستقبل صناعتك معاً',
        subtitle: 'جدول إحاطة خاصة مع استراتيجيي الذكاء الاصطناعي لدينا. حوّل عملياتك بالذكاء الاصطناعي على مستوى المؤسسات.',
        description: 'انضم إلى قادة الصناعة عبر دول مجلس التعاون الذين يثقون في AI8TY لتحقيق نتائج قابلة للقياس من خلال تطبيق الذكاء الاصطناعي المتطور.'
      },
      form: {
        title: 'طلب إحاطة استراتيجية',
        subtitle: 'يستجيب فريقنا المؤسسي عادة في غضون ساعتين خلال أيام العمل.',
        fields: {
          name: 'الاسم الكامل',
          organization: 'المنظمة',
          title: 'منصبك',
          sector: 'قطاع الصناعة',
          email: 'البريد الإلكتروني للعمل',
          phone: 'الخط المباشر',
          timeline: 'الجدول الزمني للمشروع',
          budget: 'نطاق الاستثمار',
          message: 'الأهداف الاستراتيجية',
          priority: 'أولوية الإحاطة'
        },
        placeholders: {
          name: 'أدخل اسمك الكامل',
          organization: 'شركتك أو منظمتك',
          title: 'الرئيس التنفيذي، المدير التقني، رئيس الابتكار...',
          email: 'your.email@company.com',
          phone: '+971 XX XXX XXXX',
          message: 'اشرح أهدافك الاستراتيجية والتحديات الحالية...'
        },
        submit: 'جدولة الإحاطة',
        submitting: 'جاري الجدولة...',
        success: 'تم جدولة الإحاطة',
        priorities: {
          standard: 'قياسي (خلال 24 ساعة)',
          urgent: 'عاجل (خلال ساعتين)',
          immediate: 'فوري (خلال 30 دقيقة)'
        }
      },
      contact: {
        title: 'الوصول التنفيذي',
        subtitle: 'وصول مباشر إلى فريق القيادة الاستراتيجية لدينا',
        channels: [
          {
            icon: Mail,
            label: 'استفسارات المؤسسات',
            value: 'enterprise@ai8ty.com',
            description: 'خط مباشر إلى فريقنا الاستراتيجي',
            href: 'mailto:enterprise@ai8ty.com'
          },
          {
            icon: Phone,
            label: 'الخط الساخن التنفيذي',
            value: '+971 4 123 4567',
            description: 'خط دعم أولوية 24/7',
            href: 'tel:+97141234567'
          },
          {
            icon: Calendar,
            label: 'تقويم تنفيذي',
            value: 'حجز اجتماع مباشر',
            description: 'جدولة مع C-suite مباشرة',
            href: '#calendar'
          },
          {
            icon: MapPin,
            label: 'مقر مجلس التعاون الخليجي',
            value: 'مركز دبي المالي العالمي',
            description: 'DIFC، دبي، الإمارات العربية المتحدة',
            href: null
          }
        ]
      },
      stats: [
        { number: '<2h', label: 'وقت الاستجابة', icon: Clock },
        { number: '98%', label: 'رضا العملاء', icon: Award },
        { number: '24/7', label: 'دعم المؤسسات', icon: Shield },
        { number: '50+', label: 'قادة الصناعة', icon: Users }
      ],
      benefits: [
        'استشارة استراتيجية سرية',
        'خارطة طريق تنفيذ مخصصة للذكاء الاصطناعي',
        'إسقاط العائد على الاستثمار والجدول الزمني',
        'توجيه الامتثال التنظيمي',
        'وصول مباشر للفريق التنفيذي',
        'طابور تنفيذ أولوية'
      ]
    }
  }), []);

  const currentContent = content[isArabic ? 'ar' : 'en'];

  const sectors = useMemo(() => isArabic ? [
    'المؤسسات المالية',
    'شبكات الرعاية الصحية',
    'مجموعات التجزئة',
    'شركات التصنيع',
    'مكاتب الثروات الخاصة',
    'الطيران واللوجستيك',
    'القطاع العام',
    'العقارات',
    'شركات المحاماة'
  ] : [
    'Financial Services',
    'Healthcare & Life Sciences',
    'Retail & Consumer Goods',
    'Manufacturing & Industrial',
    'Private Wealth Management',
    'Aviation & Logistics',
    'Government & Public Sector',
    'Real Estate & Construction',
    'Legal & Professional Services',
    'Other'
  ], [isArabic]);

  const timelines = useMemo(() => [
    'Immediate (0-30 days)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Strategic planning phase'
  ], []);

  const budgetRanges = useMemo(() => [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M+',
    'To be discussed'
  ], []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '', organization: '', sector: '', title: '',
          email: '', phone: '', timeline: '', budget: '',
          message: '', priority: 'standard'
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  // Animation variants
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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
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

  return (
    <>
      <Helmet>
        <title>Contact AI8TY | Enterprise AI Strategic Briefing</title>
        <meta name="description" content="Schedule a strategic briefing with AI8TY's enterprise team. Transform your operations with custom AI solutions designed for GCC industry leaders." />
        <meta name="keywords" content="AI consultation, enterprise AI, strategic briefing, GCC AI solutions, business transformation" />
        <meta property="og:title" content="Contact AI8TY | Enterprise AI Strategic Briefing" />
        <meta property="og:description" content="Schedule a strategic briefing with AI8TY's enterprise team. Transform your operations with custom AI solutions." />
        <link rel="canonical" href="https://ai8ty.com/contact" />
      </Helmet>

      <div className={`min-h-screen bg-background ${isArabic ? 'rtl' : ''}`}>
        <Header />
        
        <main className="overflow-hidden">
          {/* Enhanced Hero Section */}
          <section 
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center pt-16"
            style={{ perspective: '1000px' }}
          >
            {/* Animated Background */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ y: backgroundY }}
            >
              <div className="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-[40%] right-[5%] w-[30vw] h-[30vw] bg-emerald-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-[25%] left-[25%] w-[25vw] h-[25vw] bg-purple-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
            </motion.div>

            {/* Floating Elements - Reduced for performance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${15 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -60, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.div
              className="container mx-auto px-6 text-center relative z-10 max-w-5xl"
              style={{ y: heroY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8"
                variants={itemVariants}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-medium">{currentContent.hero.badge}</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent leading-tight px-4"
                variants={heroTextVariants}
              >
                {currentContent.hero.title}
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-4 md:mb-6 leading-relaxed font-light px-4"
                variants={itemVariants}
              >
                {currentContent.hero.subtitle}
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
                variants={itemVariants}
              >
                {currentContent.hero.description}
              </motion.p>

              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 px-4"
                variants={containerVariants}
              >
                {currentContent.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className="flex justify-center mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Form and Contact Section */}
          <section className="py-12 md:py-16 lg:py-24 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {/* Enhanced Form */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Form Header */}
                  <div className="mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 md:mb-4">
                      {currentContent.form.title}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {currentContent.form.subtitle}
                    </p>
                  </div>

                  {/* Form Container */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name and Title */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label={currentContent.form.fields.name}
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={currentContent.form.placeholders.name}
                          required
                        />
                        <FormField
                          label={currentContent.form.fields.title}
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder={currentContent.form.placeholders.title}
                        />
                      </div>

                      {/* Organization and Sector */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label={currentContent.form.fields.organization}
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder={currentContent.form.placeholders.organization}
                          required
                        />
                        <FormSelect
                          label={currentContent.form.fields.sector}
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          options={sectors}
                          placeholder="Select your industry"
                          required
                        />
                      </div>

                      {/* Email and Phone */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label={currentContent.form.fields.email}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={currentContent.form.placeholders.email}
                          required
                        />
                        <FormField
                          label={currentContent.form.fields.phone}
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={currentContent.form.placeholders.phone}
                        />
                      </div>

                      {/* Timeline and Budget */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormSelect
                          label={currentContent.form.fields.timeline}
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          options={timelines}
                          placeholder="Select timeline"
                        />
                        <FormSelect
                          label={currentContent.form.fields.budget}
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          options={budgetRanges}
                          placeholder="Investment range"
                        />
                      </div>

                      {/* Priority */}
                      <FormSelect
                        label={currentContent.form.fields.priority}
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        options={Object.values(currentContent.form.priorities)}
                        placeholder="Select priority"
                      />

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-3">
                          {currentContent.form.fields.message}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                          placeholder={currentContent.form.placeholders.message}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting || submitStatus === 'success'}
                        className={`w-full group relative px-8 py-6 rounded-2xl text-white font-medium text-lg overflow-hidden transition-all duration-300 ${
                          submitStatus === 'success' 
                            ? 'bg-emerald-600' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/25'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              {currentContent.form.submitting}
                            </>
                          ) : submitStatus === 'success' ? (
                            currentContent.form.success
                          ) : (
                            <>
                              {currentContent.form.submit}
                              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                        {submitStatus !== 'success' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>

                {/* Enhanced Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Contact Header */}
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                      {currentContent.contact.title}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {currentContent.contact.subtitle}
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-6">
                    {currentContent.contact.channels.map((channel, index) => (
                      <ContactCard key={index} {...channel} index={index} />
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-emerald-400" />
                      What You Get
                    </h3>
                    <div className="space-y-4">
                      {currentContent.benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-white/80">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};


// Contact Card Component
const ContactCard: React.FC<{
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  description: string;
  href: string | null;
  index: number;
}> = ({ icon: Icon, label, value, description, href, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const content = (
    <motion.div
      ref={ref}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon size={20} className="text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">
            {label}
          </h3>
          <p className="text-blue-300 font-medium mb-2">
            {value}
          </p>
          <p className="text-white/60 text-sm">
            {description}
          </p>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </motion.div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export default Contact;
