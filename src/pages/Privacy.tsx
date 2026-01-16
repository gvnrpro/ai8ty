import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/digital-bauhaus/Header';
import Footer from '@/components/digital-bauhaus/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{isArabic ? 'سياسة الخصوصية | AI8TY' : 'Privacy Policy | AI8TY'}</title>
        <meta 
          name="description" 
          content={isArabic 
            ? 'سياسة الخصوصية لشركة AI8TY. تعرف على كيفية جمع واستخدام وحماية بياناتك.'
            : 'Privacy Policy for AI8TY. Learn how we collect, use, and protect your data.'
          } 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 md:pt-32 pb-16 md:pb-24">
          <motion.div
            className="container mx-auto max-w-4xl px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <ArrowLeft size={16} />
                {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
              </Link>
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
              variants={itemVariants}
            >
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </motion.h1>

            <motion.div 
              className="prose prose-invert max-w-none space-y-8"
              variants={itemVariants}
            >
              <p className="text-muted-foreground text-lg">
                {isArabic 
                  ? 'آخر تحديث: يناير 2025'
                  : 'Last updated: January 2025'
                }
              </p>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك عند الاتصال بنا أو طلب خدماتنا.'
                    : 'We collect information you provide directly to us, such as your name, email address, and phone number when you contact us or request our services.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '2. كيف نستخدم معلوماتك' : '2. How We Use Your Information'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'نستخدم المعلومات التي نجمعها للتواصل معك بشأن خدماتنا، والرد على استفساراتك، وتحسين تجربتك على موقعنا.'
                    : 'We use the information we collect to communicate with you about our services, respond to your inquiries, and improve your experience on our website.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '3. مشاركة المعلومات' : '3. Information Sharing'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا.'
                    : 'We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who help us operate our business.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '4. أمان البيانات' : '4. Data Security'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به والإفصاح.'
                    : 'We take reasonable security measures to protect your personal information from unauthorized access and disclosure.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '5. اتصل بنا' : '5. Contact Us'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:'
                    : 'If you have any questions about this Privacy Policy, please contact us at:'
                  }
                </p>
                <p className="text-foreground">
                  <a href="mailto:hello@ai8ty.com" className="text-primary hover:underline">
                    hello@ai8ty.com
                  </a>
                </p>
              </section>
            </motion.div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
