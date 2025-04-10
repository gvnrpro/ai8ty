
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const SiteFooter: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const links = [
    { label: "Services", href: "#services-section" },
    { label: "Work", href: "#work-section" },
    { label: "About", href: "#about-section" },
    { label: "Contact", href: "#contact" },
  ];
  
  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ];
  
  const socials = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];
  
  return (
    <footer ref={ref} className="py-12 px-6 bg-ai8ty-black border-t border-ai8ty-grey/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <img 
              src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
              alt="AI8TY Logo" 
              className="h-8 w-auto mb-4"
            />
            
            <p className="text-ai8ty-grey text-sm">
              The creative-strategy consultancy for visionary brands.
              Fusing human design with AI to solve today's problems and build tomorrow's systems.
            </p>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <h3 className="font-avant mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-ai8ty-grey hover:text-ai8ty-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <h3 className="font-avant mb-4 text-lg">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-ai8ty-grey hover:text-ai8ty-teal transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-sm text-ai8ty-grey">
              <div className="mb-2 hover:text-ai8ty-teal">
                <a href="mailto:futureis@ai8ty.com">futureis@ai8ty.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "pt-8 border-t border-ai8ty-grey/20 flex flex-col md:flex-row items-center justify-between text-sm text-ai8ty-grey transition-all duration-700 delay-300",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <div>
            © 2025 AI8TY. Designed by Vision.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="hover:text-ai8ty-teal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
