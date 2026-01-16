import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/digital-bauhaus/Header';
import Footer from '@/components/digital-bauhaus/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
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
        <title>{isArabic ? 'شروط الخدمة | AI8TY' : 'Terms of Service | AI8TY'}</title>
        <meta 
          name="description" 
          content={isArabic 
            ? 'شروط الخدمة لشركة AI8TY. تعرف على الشروط والأحكام لاستخدام خدماتنا.'
            : 'Terms of Service for AI8TY. Learn about the terms and conditions for using our services.'
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
              {isArabic ? 'شروط الخدمة' : 'Terms of Service'}
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
                  {isArabic ? '1. قبول الشروط' : '1. Acceptance of Terms'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'باستخدام خدمات AI8TY، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام خدماتنا.'
                    : 'By using AI8TY services, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, you may not use our services.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '2. وصف الخدمات' : '2. Description of Services'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'تقدم AI8TY خدمات استشارات الذكاء الاصطناعي وحلول التحول الرقمي وخدمات تطوير التقنية للمؤسسات في منطقة الخليج.'
                    : 'AI8TY provides AI consulting services, digital transformation solutions, and technology development services for enterprises in the GCC region.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '3. الملكية الفكرية' : '3. Intellectual Property'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'جميع المحتويات والعلامات التجارية والملكية الفكرية على هذا الموقع مملوكة لشركة AI8TY ما لم يُذكر خلاف ذلك.'
                    : 'All content, trademarks, and intellectual property on this website are owned by AI8TY unless otherwise stated.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '4. تحديد المسؤولية' : '4. Limitation of Liability'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'لن تكون AI8TY مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام خدماتنا.'
                    : 'AI8TY shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '5. القانون الحاكم' : '5. Governing Law'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة وتفسر وفقاً لها.'
                    : 'These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.'
                  }
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  {isArabic ? '6. اتصل بنا' : '6. Contact Us'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic 
                    ? 'إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على:'
                    : 'If you have any questions about these terms, please contact us at:'
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

export default Terms;
