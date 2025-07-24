import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const AppleTestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const {
    language
  } = useLanguage();
  const isArabic = language === 'ar';
  const content = {
    en: {
      subtitle: 'Trusted by Leaders',
      title: 'What GCC executives are saying about AI8TY',
      description: 'From Fortune 500 to fast-growing enterprises, leaders across the Gulf region trust AI8TY to deliver transformative results.'
    },
    ar: {
      subtitle: 'موثوق من القادة',
      title: 'ما يقوله المديرون التنفيذيون في دول مجلس التعاون عن AI8TY',
      description: 'من شركات فورتشن 500 إلى المؤسسات سريعة النمو، يثق القادة في منطقة الخليج في AI8TY لتحقيق نتائج تحويلية.'
    }
  };
  const testimonials = [{
    id: 1,
    quoteEn: "AI8TY didn't just implement AI for us—they transformed how we think about operational excellence. The results speak for themselves: 40% faster processing and unprecedented accuracy.",
    quoteAr: "AI8TY لم تقم فقط بتطبيق الذكاء الاصطناعي لنا - بل حولت طريقة تفكيرنا حول التميز التشغيلي. النتائج تتحدث عن نفسها: 40% أسرع في المعالجة ودقة لم يسبق لها مثيل.",
    nameEn: "Sarah Al-Mansouri",
    nameAr: "سارة المنصوري",
    titleEn: "Chief Technology Officer",
    titleAr: "المدير التنفيذي للتكنولوجيا",
    companyEn: "Leading UAE Bank",
    companyAr: "بنك إماراتي رائد",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=400&h=400&fit=crop&crop=face"
  }, {
    id: 2,
    quoteEn: "The cultural sensitivity and regulatory compliance built into AI8TY's systems gave us confidence from day one. They understand the Gulf market like no other AI provider.",
    quoteAr: "الحساسية الثقافية والامتثال التنظيمي المدمج في أنظمة AI8TY أعطانا الثقة من اليوم الأول. إنهم يفهمون السوق الخليجية مثل أي مزود ذكاء اصطناعي آخر.",
    nameEn: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    titleEn: "Head of Digital Innovation",
    titleAr: "رئيس الابتكار الرقمي",
    companyEn: "Major Healthcare Network",
    companyAr: "شبكة رعاية صحية رئيسية",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }, {
    id: 3,
    quoteEn: "AI8TY's approach to AI implementation is refreshingly strategic. They focus on business outcomes, not just technology deployment. That's exactly what we needed.",
    quoteAr: "نهج AI8TY في تطبيق الذكاء الاصطناعي استراتيجي بشكل منعش. إنهم يركزون على نتائج الأعمال، وليس فقط نشر التكنولوجيا. هذا بالضبط ما نحتاجه.",
    nameEn: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    titleEn: "Chief Operating Officer",
    titleAr: "المدير التنفيذي للعمليات",
    companyEn: "Regional Manufacturing Group",
    companyAr: "مجموعة تصنيع إقليمية",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }];
  const currentContent = content[isArabic ? 'ar' : 'en'];
  return;
};
export default AppleTestimonialsSection;