
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/digital-bauhaus/Header';
import ContactSection from '@/components/digital-bauhaus/ContactSection';
import Footer from '@/components/digital-bauhaus/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Megaphone, Palette, Globe, Video, Bot, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

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

  // Content translations
  const content = {
    en: {
      heroTitle: "AI8TY Services:",
      heroSubtitle: "Smart Solutions, Handled For You",
      heroDescription: "You're looking for ways to work smarter, not harder. Here's a clear breakdown of how AI8TY's services solve your specific business challenges and help you achieve your goals – without you needing to become a tech expert.",
      heroCta: "👉 Get Your Free Service Consultation",
      ctaTitle: "Ready to Work Smarter,",
      ctaSubtitle: "Not Harder?",
      ctaDescription: "Let's discuss which services will have the biggest impact on your business. No complex proposals, just clear solutions.",
      ctaCta: "👉 Schedule Your Strategy Call",
      ctaNote: "30 minutes. No pitch. Just actionable advice for your business."
    },
    ar: {
      heroTitle: "خدمات AI8TY:",
      heroSubtitle: "حلول ذكية، نتولى التنفيذ",
      heroDescription: "أنت تبحث عن طرق للعمل بذكاء أكبر، وليس بجهد أكبر. إليك تفصيلاً واضحاً لكيفية حل خدمات AI8TY لتحدياتك التجارية المحددة ومساعدتك في تحقيق أهدافك - دون الحاجة إلى أن تصبح خبيراً تقنياً.",
      heroCta: "👈 احصل على استشارتك المجانية",
      ctaTitle: "هل أنت مستعد للعمل بذكاء،",
      ctaSubtitle: "وليس بجهد أكبر؟",
      ctaDescription: "دعنا نناقش الخدمات التي سيكون لها أكبر تأثير على عملك. لا مقترحات معقدة، فقط حلول واضحة.",
      ctaCta: "👈 جدول مكالمتك الاستراتيجية",
      ctaNote: "30 دقيقة. بدون عرض بيع. فقط نصائح عملية لعملك."
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

  const serviceCategories = isArabic ? [
    {
      icon: Megaphone,
      title: "التسويق الرقمي والإعلان",
      intro: "تواجه صعوبة في الظهور على الإنترنت أو تحويل النقرات إلى عملاء؟ نبني وندير حملات ذكية تحقق نمواً حقيقياً.",
      color: "neural",
      services: [
        {
          name: "تحسين محركات البحث (SEO)",
          description: "هل تعبت من كونك غير مرئي على جوجل وأدوات البحث بالذكاء الاصطناعي مثل ChatGPT؟ نحسن وجودك للبحث التقليدي ومنصات الذكاء الاصطناعي حتى يجدك العملاء عند بحثهم عن حلول مثل حلولك. اكتشف، احصل على الزيارات، حقق النتائج."
        },
        {
          name: "تحسين محركات البحث متعدد اللغات (عربي/إنجليزي)",
          description: "تفوتك فرص العملاء المحليين في دول الخليج بسبب حواجز اللغة؟ نصمم استراتيجيات SEO تعمل بالعربية والإنجليزية، تساعدك على التواصل مع الجمهور الإقليمي والدولي. وسع نطاقك، ضاعف فرصك."
        },
        {
          name: "التسويق عبر وسائل التواصل الاجتماعي",
          description: "تنشر بانتظام لكن لا تحصل على عملاء محتملين من وسائل التواصل؟ ننشئ محتوى جذاب وحملات استراتيجية تحول المتابعين إلى عملاء. توقف عن إضاعة الوقت على الإعجابات وابدأ في تحقيق نتائج أعمال حقيقية."
        },
        {
          name: "إعلانات الدفع لكل نقرة (PPC)",
          description: "تستنزف ميزانية الإعلانات بلا نتائج؟ نصمم وندير حملات إعلانية مربحة عبر جوجل وفيسبوك ولينكد إن تحقق فعلاً عملاء ومبيعات. احصل على عائد واضح من كل درهم تنفقه."
        }
      ]
    },
    {
      icon: Palette,
      title: "العلامة التجارية والتصميم الإبداعي",
      intro: "علامتك التجارية لا تتواصل أو تبرز؟ نصنع هويات علامات تجارية لا تُنسى وتصاميم تروي قصتك وتحول الزوار.",
      color: "quantum",
      services: [
        {
          name: "استراتيجية وهوية العلامة التجارية",
          description: "تشعر أن علامتك التجارية غير مرئية أو سهلة النسيان؟ نطور موقعاً ورسائل واضحة للعلامة التجارية تجعلك تبرز في الأسواق المزدحمة. احصل على علامة تجارية يتذكرها العملاء ويختارونها على المنافسين."
        },
        {
          name: "الهوية البصرية وتصميم الشعار",
          description: "محرج من المرئيات القديمة أو غير المتسقة عبر عملك؟ ننشئ تصاميم علامة تجارية حديثة واحترافية تعمل عبر كل منصة ونقطة تواصل. ابدُ محترفاً، ابنِ الثقة، اجذب العملاء المميزين."
        },
        {
          name: "سرد قصة العلامة التجارية",
          description: "تواجه صعوبة في شرح لماذا يجب أن يهتم العملاء بعملك؟ نصنع قصص علامة تجارية مقنعة تخلق روابط عاطفية مع جمهورك. حوّل المتصفحين إلى مؤمنين، والعملاء المحتملين إلى مؤيدين."
        },
        {
          name: "خدمات التصميم الإبداعي",
          description: "تحتاج مواد تسويقية احترافية لكن ليس لديك مصمم داخلي؟ ننشئ كل شيء من الكتيبات إلى الأصول الرقمية التي تمثل علامتك التجارية بشكل جميل. أبهر العملاء المحتملين، أغلق المزيد من الصفقات."
        },
        {
          name: "التصميم الجرافيكي (ويب وطباعة)",
          description: "تعبت من التصاميم العامة المبنية على القوالب التي لا تحول؟ ننشئ رسومات وتخطيطات مخصصة مصممة خصيصاً لدفع العمل والنتائج. ابرز بصرياً، حوّل المزيد من الزوار."
        }
      ]
    },
    {
      icon: Globe,
      title: "تطوير المواقع والتطبيقات",
      intro: "موقعك أو تطبيقك ضعيف الأداء أو قديم؟ نبني منتجات رقمية سريعة وموثوقة وعالية التحويل.",
      color: "intelligence",
      services: [
        {
          name: "تصميم وتطوير المواقع",
          description: "محبط من موقع بطيء وقديم لا يجلب عملاء محتملين؟ نبني مواقع فائقة السرعة ومحسنة للجوال مصممة لتحويل الزوار إلى عملاء. احصل على موقع يعمل بجد مثلك."
        },
        {
          name: "تجربة مستخدم تركز على التحويل",
          description: "تحصل على زيارات لكن ليس مبيعات كافية من موقعك؟ نصمم تجارب مستخدم توجه الزوار نحو اتخاذ إجراء، سواء الشراء أو الاتصال أو طلب عرض أسعار. حوّل المزيد من الزيارات إلى إيرادات."
        },
        {
          name: "تطوير تطبيقات الجوال",
          description: "تحتاج للوصول للعملاء على هواتفهم لكن لا تعرف من أين تبدأ بتطوير التطبيقات؟ ننشئ تطبيقات جوال سهلة الاستخدام لـ iOS و Android تشرك جمهورك وتحقق نتائج أعمال. قابل العملاء أينما كانوا."
        }
      ]
    },
    {
      icon: Video,
      title: "إنتاج الوسائط والمحتوى",
      intro: "تواجه صعوبة في إنشاء محتوى يجذب الانتباه ويدفع للعمل؟ ننتج فيديوهات ومحتوى مقنع يروي قصتك بفعالية.",
      color: "sand",
      services: [
        {
          name: "إنتاج الفيديو",
          description: "تحتاج فيديوهات احترافية لكن قلق من التكلفة والتعقيد؟ نتولى كل شيء من المفهوم إلى التحرير النهائي، ننشئ فيديوهات علامة تجارية مقنعة وعروض منتجات وشهادات تحقق فعلاً نتائج أعمال. اروِ قصتك، ابنِ الثقة، أغلق الصفقات."
        },
        {
          name: "إنشاء المحتوى",
          description: "نفدت الأفكار للمنشورات وتواجه صعوبة في الحفاظ على محتوى متسق؟ ننشئ محتوى جذاب واستراتيجي يبني جمهورك ويدفع التفاعل. ابقَ في الأذهان، ابنِ السلطة، اجذب العملاء."
        }
      ]
    },
    {
      icon: Bot,
      title: "أتمتة سير العمل وخدمات الذكاء الاصطناعي",
      intro: "غارق في المهام المتكررة والعمل اليدوي؟ نصمم أنظمة أتمتة ذكية حتى تعمل بذكاء أكبر، وتتوسع أسرع، وتركز على النمو.",
      color: "neural",
      services: [
        {
          name: "أتمتة سير العمل المخصصة",
          description: "تقضي ساعات في المهام الإدارية وإدخال البيانات والعمل المتكرر؟ نبني أنظمة أتمتة مخصصة تتولى المهام الروتينية تلقائياً، من إدارة العملاء المحتملين إلى التقارير. استعد 10+ ساعات أسبوعياً للأنشطة عالية القيمة."
        },
        {
          name: "وكلاء الذكاء الاصطناعي وأنظمة الأعمال",
          description: "غمرتك استفسارات العملاء والجدولة واختناقات التواصل؟ ننشئ أنظمة تعمل بالذكاء الاصطناعي تتولى دعم العملاء وحجز المواعيد والاتصالات الروتينية على مدار الساعة. وسّع خدمة عملائك دون توسيع فريقك."
        },
        {
          name: "أتمتة CRM ورعاية العملاء المحتملين",
          description: "تفقد عملاء محتملين لأنك لا تستطيع المتابعة بسرعة أو بشكل متسق؟ نعد أنظمة رعاية عملاء محتملين آلية تبقي العملاء المحتملين متفاعلين حتى يكونوا مستعدين للشراء. لا تفقد عميلاً محتملاً بسبب ضعف المتابعة مرة أخرى."
        },
        {
          name: "استراتيجية واستشارات الذكاء الاصطناعي",
          description: "مرتبك حول كيف يمكن للذكاء الاصطناعي مساعدة عملك فعلاً على النمو؟ نقدم استراتيجيات ذكاء اصطناعي واضحة وقابلة للتنفيذ مصممة لصناعتك وتحدياتك المحددة. احصل على خارطة طريق لاستخدام الذكاء الاصطناعي منطقية لعملك."
        }
      ]
    },
    {
      icon: Server,
      title: "البنية التحتية للويب والاستضافة",
      intro: "قلق من سرعة الموقع أو الأمان أو التوقف؟ نوفر استضافة موثوقة وعالية الأداء حتى تنعم براحة البال.",
      color: "quantum",
      services: [
        {
          name: "استضافة ويب آمنة",
          description: "محبط من أوقات التحميل البطيئة والمخاوف الأمنية؟ نوفر استضافة سريعة وآمنة تبقي موقعك يعمل بسلاسة وتحمي بيانات عملك. ركز على النمو، لا الصداع التقني."
        },
        {
          name: "حلول الاستضافة المدارة",
          description: "لا تريد التعامل مع إدارة السيرفرات والصيانة التقنية؟ نتولى كل العمل الخلفي حتى يبقى موقعك سريعاً وآمناً ومحدثاً. احصل على استضافة بمستوى المؤسسات بدون التعقيد."
        },
        {
          name: "تحسين الأداء",
          description: "تفقد عملاء لأن موقعك بطيء جداً؟ نحسن سرعة وأداء موقعك لتحسين تجربة المستخدم وتصنيفات البحث. أبقِ الزوار متفاعلين، حسّن التحويلات."
        }
      ]
    }
  ] : [
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
        <title>{isArabic ? 'خدمات AI8TY | حلول ذكية، نتولى التنفيذ - دبي والإمارات' : 'AI8TY Services | Smart Solutions, Handled For You - Dubai & UAE'}</title>
        <meta name="description" content={isArabic ? 'خدمات رقمية شاملة تعمل بذكاء أكبر. من أتمتة الذكاء الاصطناعي إلى التسويق الفعال - نتولى التعقيد حتى تحصل على النتائج.' : 'Complete digital services that work smarter, not harder. From AI automation to marketing that actually works - we handle the complexity so you get results.'} />
        <meta name="keywords" content={isArabic ? 'خدمات التسويق الرقمي دبي, أتمتة الذكاء الاصطناعي الإمارات, تطوير المواقع, خدمات العلامة التجارية' : 'digital marketing services dubai, AI automation UAE, web development, branding services, workflow automation, business growth solutions'} />
        
        <meta property="og:title" content={isArabic ? 'خدمات AI8TY | حلول ذكية، نتولى التنفيذ' : 'AI8TY Services | Smart Solutions, Handled For You'} />
        <meta property="og:description" content={isArabic ? 'خدمات رقمية شاملة تعمل بذكاء أكبر. من أتمتة الذكاء الاصطناعي إلى التسويق الفعال.' : 'Complete digital services that work smarter, not harder. From AI automation to marketing that actually works.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai8ty.com/services" />
        <meta property="og:image" content="https://ai8ty.com/og-services.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isArabic ? 'خدمات AI8TY | حلول ذكية' : 'AI8TY Services | Smart Solutions'} />
        <meta name="twitter:description" content={isArabic ? 'خدمات رقمية شاملة تعمل بذكاء أكبر.' : 'Complete digital services that work smarter, not harder.'} />
        <meta name="twitter:image" content="https://ai8ty.com/og-services.png" />
        
        <link rel="canonical" href="https://ai8ty.com/services" />
      </Helmet>

      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isArabic ? 'rtl' : ''}`}>
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
                  {t.heroTitle}
                  <br />
                  <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
                    {t.heroSubtitle}
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 px-2">
                  {t.heroDescription}
                </p>

                <Button 
                  onClick={scrollToContact}
                  className="btn-primary text-sm sm:text-base md:text-lg group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 min-h-[44px]"
                  size="lg"
                >
                  <span className="relative z-10 font-medium">
                    {t.heroCta}
                  </span>
                  <ArrowRight className={`${isArabic ? 'mr-2 md:mr-3 rotate-180' : 'ml-2 md:ml-3'} relative z-10 transition-transform group-hover:translate-x-1`} size={18} />
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
              isArabic={isArabic}
            />
          ))}

          {/* Final CTA */}
          <section className="neural-section bg-depth-1">
            <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
              <h2 className="strategic-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
                {t.ctaTitle}
                <br />
                <span className="bg-gradient-to-r from-neural to-quantum bg-clip-text text-transparent">
                  {t.ctaSubtitle}
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto px-2">
                {t.ctaDescription}
              </p>
              
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl group relative overflow-hidden px-8 md:px-12 py-3 md:py-6 min-h-[44px]"
                size="lg"
              >
                <span className="relative z-10 font-medium">
                  {t.ctaCta}
                </span>
                <ArrowRight className={`${isArabic ? 'mr-2 md:mr-4 rotate-180' : 'ml-2 md:ml-4'} relative z-10 transition-transform group-hover:translate-x-1`} size={20} />
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 md:mt-6">
                {t.ctaNote}
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
  isArabic?: boolean;
}> = ({ category, getColorClasses, getIconColorClasses, isArabic = false }) => {
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
