
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MetricProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  title: string;
  titleAr: string;
  isArabic: boolean;
}

const AnimatedCounter: React.FC<MetricProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  title,
  titleAr,
  isArabic 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400 text-sm md:text-base">
        {isArabic ? titleAr : title}
      </div>
    </motion.div>
  );
};

interface AnimatedMetricsProps {
  isArabic: boolean;
}

const AnimatedMetrics: React.FC<AnimatedMetricsProps> = ({ isArabic }) => {
  const metrics = [
    {
      end: 47,
      suffix: '+',
      title: 'AI Systems Deployed',
      titleAr: 'أنظمة الذكاء الاصطناعي المنشورة'
    },
    {
      end: 12,
      title: 'GCC Organizations',
      titleAr: 'منظمات دول مجلس التعاون'
    },
    {
      end: 89,
      suffix: '%',
      title: 'Operational Efficiency Gain',
      titleAr: 'زيادة الكفاءة التشغيلية'
    },
    {
      end: 24,
      suffix: '/7',
      title: 'Monitoring & Support',
      titleAr: 'المراقبة والدعم'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {metrics.map((metric, index) => (
        <AnimatedCounter
          key={index}
          {...metric}
          isArabic={isArabic}
        />
      ))}
    </div>
  );
};

export default AnimatedMetrics;
