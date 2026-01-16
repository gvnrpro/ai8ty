import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">AI8TY</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {isArabic 
                ? 'البنية التحتية للذكاء الاصطناعي للمؤسسات في الخليج'
                : 'Enterprise AI Infrastructure for the GCC'
              }
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">
              {isArabic ? 'الحلول' : 'Solutions'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/solutions/financial-institutions" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الخدمات المالية' : 'Financial Services'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions/healthcare-networks" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الرعاية الصحية' : 'Healthcare'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions/manufacturing-firms" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'التصنيع' : 'Manufacturing'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">
              {isArabic ? 'الشركة' : 'Company'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/solutions" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الحلول' : 'Solutions'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">
              {isArabic ? 'قانوني' : 'Legal'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الخصوصية' : 'Privacy'}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-foreground transition-colors py-2 inline-block"
                >
                  {isArabic ? 'الشروط' : 'Terms'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} AI8TY. {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
