
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/digital-bauhaus/Header';
import ContactSection from '@/components/digital-bauhaus/ContactSection';
import Footer from '@/components/digital-bauhaus/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Megaphone, Palette, Globe, Video, Bot, Server } from 'lucide-react';

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const serviceCategories = [
    {
      icon: Megaphone,
      title: "Digital Marketing & Advertising",
      intro: "Struggling to get noticed online or turn clicks into customers? We build and run smart campaigns that deliver real growth.",
      color: "neural",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          description: "Tired of being invisible on Google and AI search tools like ChatGPT? We optimize your presence for traditional search and AI platforms so customers find you when they're looking for solutions like yours. Get discovered, get traffic, get results."
        },
        {
          name: "Multilingual SEO (Arabic/English)",
          description: "Missing out on local GCC customers because of language barriers? We create SEO strategies that work in both Arabic and English, helping you connect with regional and international audiences. Expand your reach, multiply your opportunities."
        },
        {
          name: "Social Media Marketing (SMM)",
          description: "Posting regularly but getting zero leads from social media? We create engaging content and strategic campaigns that turn followers into customers. Stop wasting time on likes and start generating real business results."
        },
        {
          name: "Pay-Per-Click Advertising (PPC)",
          description: "Burning through ad budget with nothing to show for it? We design and manage profitable ad campaigns across Google, Facebook, and LinkedIn that actually deliver leads and sales. Get clear ROI from every dirham spent."
        }
      ]
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      intro: "Is your brand failing to connect or stand out? We craft unforgettable brand identities and designs that tell your story and convert.",
      color: "quantum",
      services: [
        {
          name: "Brand Strategy & Identity",
          description: "Feeling like your brand is invisible or easily forgotten? We develop clear brand positioning and messaging that makes you stand out in crowded markets. Get a brand that customers remember and choose over competitors."
        },
        {
          name: "Visual Identity & Logo Design",
          description: "Embarrassed by outdated or inconsistent visuals across your business? We create modern, professional brand designs that work across every platform and touchpoint. Look professional, build trust, attract premium customers."
        },
        {
          name: "Brand Narrative & Storytelling",
          description: "Struggling to explain why customers should care about your business? We craft compelling brand stories that create emotional connections with your audience. Turn browsers into believers, prospects into advocates."
        },
        {
          name: "Creative Design Services",
          description: "Need professional marketing materials but don't have an in-house designer? We create everything from brochures to digital assets that represent your brand beautifully. Impress prospects, close more deals."
        },
        {
          name: "Graphic Design (Web & Print)",
          description: "Tired of generic, template-based designs that don't convert? We create custom graphics and layouts specifically designed to drive action and results. Stand out visually, convert more visitors."
        }
      ]
    },
    {
      icon: Globe,
      title: "Web & Application Development",
      intro: "Is your website or app underperforming or outdated? We build fast, reliable, and high-converting digital products.",
      color: "intelligence",
      services: [
        {
          name: "Website Design & Development",
          description: "Frustrated with a slow, outdated website that doesn't bring in leads? We build lightning-fast, mobile-optimized sites designed to convert visitors into customers. Get a website that works as hard as you do."
        },
        {
          name: "Conversion-Focused UX",
          description: "Getting traffic but not enough sales from your website? We design user experiences that guide visitors toward taking action, whether that's buying, calling, or requesting a quote. Turn more traffic into revenue."
        },
        {
          name: "Mobile App Development",
          description: "Need to reach customers on their phones but don't know where to start with app development? We create user-friendly mobile apps for iOS and Android that engage your audience and drive business results. Meet customers where they are."
        }
      ]
    },
    {
      icon: Video,
      title: "Media & Content Production",
      intro: "Struggling to create content that grabs attention and drives action? We produce compelling videos and content that tell your story effectively.",
      color: "sand",
      services: [
        {
          name: "Video Production",
          description: "Need professional videos but worried about the cost and complexity? We handle everything from concept to final edit, creating compelling brand videos, product demos, and testimonials that actually drive business results. Tell your story, build trust, close deals."
        },
        {
          name: "Content Creation",
          description: "Running out of ideas for posts and struggling to maintain consistent content? We create engaging, strategic content that builds your audience and drives engagement. Stay top-of-mind, build authority, attract customers."
        }
      ]
    },
    {
      icon: Bot,
      title: "Workflow Automation & AI Services",
      intro: "Drowning in repetitive tasks and manual work? We design smart automation systems so you can work smarter, scale faster, and focus on growth.",
      color: "neural",
      services: [
        {
          name: "Custom Workflow Automation",
          description: "Spending hours on admin tasks, data entry, and repetitive work? We build custom automation systems that handle routine tasks automatically, from lead management to reporting. Reclaim 10+ hours per week for high-value activities."
        },
        {
          name: "AI Agents & Business Systems",
          description: "Overwhelmed by customer inquiries, scheduling, and communication bottlenecks? We create AI-powered systems that handle customer support, appointment booking, and routine communications 24/7. Scale your customer service without scaling your team."
        },
        {
          name: "CRM & Lead Nurturing Automation",
          description: "Losing leads because you can't follow up fast enough or consistently? We set up automated lead nurturing systems that keep prospects engaged until they're ready to buy. Never lose a lead to poor follow-up again."
        },
        {
          name: "AI Strategy & Consulting",
          description: "Confused about how AI can actually help your business grow? We provide clear, actionable AI strategies tailored to your specific industry and challenges. Get a roadmap for using AI that actually makes sense for your business."
        }
      ]
    },
    {
      icon: Server,
      title: "Web Infrastructure & Hosting",
      intro: "Worried about website speed, security, or downtime? We provide reliable, high-performance hosting so you can have peace of mind.",
      color: "quantum",
      services: [
        {
          name: "Secure Web Hosting",
          description: "Frustrated with slow loading times and security concerns? We provide fast, secure hosting that keeps your website running smoothly and protects your business data. Focus on growth, not technical headaches."
        },
        {
          name: "Managed Hosting Solutions",
          description: "Don't want to deal with server management and technical maintenance? We handle all the backend work so your website stays fast, secure, and updated. Get enterprise-level hosting without the complexity."
        },
        {
          name: "Performance Optimization",
          description: "Losing customers because your website is too slow? We optimize your site's speed and performance to improve user experience and search rankings. Keep visitors engaged, improve conversions."
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      neural: "border-neural/30 hover:border-neural/60",
      quantum: "border-quantum/30 hover:border-quantum/60",
      intelligence: "border-intelligence/30 hover:border-intelligence/60",
      sand: "border-sand/30 hover:border-sand/60"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      neural: "bg-neural/20 text-neural",
      quantum: "bg-quantum/20 text-quantum",
      intelligence: "bg-intelligence/20 text-intelligence",
      sand: "bg-sand/20 text-sand"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.neural;
  };

  return (
    <>
      <Helmet>
        <title>AI8TY Services | Smart Solutions, Handled For You - Dubai & UAE</title>
        <meta name="description" content="Complete digital services that work smarter, not harder. From AI automation to marketing that actually works - we handle the complexity so you get results." />
        <meta name="keywords" content="digital marketing services dubai, AI automation UAE, web development, branding services, workflow automation, business growth solutions" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            ref={heroRef}
            className="neural-section pt-24 md:pt-32 pb-12 md:pb-16"
          >
            <motion.div
              className="container mx-auto max-w-6xl px-4 md:px-6"
              variants={containerVariants}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center mb-12 md:mb-16"
                variants={itemVariants}
              >
                <h1 className="strategic-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8">
                  AI8TY Services:
                  <br />
                  <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
                    Smart Solutions, Handled For You
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 px-2">
                  You're looking for ways to work smarter, not harder. Here's a clear breakdown of how AI8TY's 
                  services solve your specific business challenges and help you achieve your goals – without you 
                  needing to become a tech expert.
                </p>

                <Button 
                  onClick={scrollToContact}
                  className="btn-primary text-sm sm:text-base md:text-lg group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 min-h-[44px]"
                  size="lg"
                >
                  <span className="relative z-10 font-medium">
                    👉 Get Your Free Service Consultation
                  </span>
                  <ArrowRight className="ml-2 md:ml-3 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* Services Categories */}
          {serviceCategories.map((category, categoryIndex) => (
            <ServiceCategorySection 
              key={categoryIndex}
              category={category}
              getColorClasses={getColorClasses}
              getIconColorClasses={getIconColorClasses}
            />
          ))}

          {/* Final CTA */}
          <section className="neural-section bg-depth-1">
            <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
              <h2 className="strategic-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
                Ready to Work Smarter,
                <br />
                <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
                  Not Harder?
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto px-2">
                Let's discuss which services will have the biggest impact on your business. 
                No complex proposals, just clear solutions.
              </p>
              
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl group relative overflow-hidden px-8 md:px-12 py-3 md:py-6 min-h-[44px]"
                size="lg"
              >
                <span className="relative z-10 font-medium">
                  👉 Schedule Your Strategy Call
                </span>
                <ArrowRight className="ml-2 md:ml-4 relative z-10 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 md:mt-6">
                30 minutes. No pitch. Just actionable advice for your business.
              </p>
            </div>
          </section>

          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

// Service Category Component
const ServiceCategorySection: React.FC<{
  category: any;
  getColorClasses: (color: string) => string;
  getIconColorClasses: (color: string) => string;
}> = ({ category, getColorClasses, getIconColorClasses }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section 
      ref={ref}
      className="neural-section relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid-bg opacity-5"></div>
      
      <motion.div
        className="container mx-auto max-w-6xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
            <motion.div 
              className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColorClasses(category.color)}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <category.icon size={28} className="md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h2 className="strategic-title text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
                {category.title}
              </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                {category.intro}
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid gap-8"
          variants={containerVariants}
        >
          {category.services.map((service: any, index: number) => (
            <motion.div
              key={index}
              className={`quantum-panel p-5 md:p-6 lg:p-8 group transition-all duration-500 ${getColorClasses(category.color)}`}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="strategic-title text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-white transition-colors">
                {service.name}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-sm sm:text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ai8ty-black to-transparent"></div>
    </section>
  );
};

export default Services;
