import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/digital-bauhaus/Header";
import Footer from "@/components/digital-bauhaus/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              404
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            variants={itemVariants}
          >
            {isArabic ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground mb-8 text-base md:text-lg"
            variants={itemVariants}
          >
            {isArabic 
              ? 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.'
              : "Sorry, we couldn't find the page you're looking for."
            }
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              asChild
              variant="default"
              className="min-h-[44px]"
            >
              <Link to="/" className="inline-flex items-center gap-2">
                <Home size={18} />
                {isArabic ? 'العودة للرئيسية' : 'Go Home'}
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="min-h-[44px]"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                <ArrowLeft size={18} />
                {isArabic ? 'اتصل بنا' : 'Contact Us'}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
