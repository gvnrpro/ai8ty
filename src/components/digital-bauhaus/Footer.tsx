import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">AI8TY</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Enterprise AI Infrastructure for the GCC
            </p>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">Solutions</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Financial Services</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Healthcare</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Manufacturing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors min-h-[44px] inline-block">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 md:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 AI8TY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
