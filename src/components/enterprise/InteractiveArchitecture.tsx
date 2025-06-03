
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Shield, Cpu, Cloud, Zap, Lock } from 'lucide-react';

interface ArchitectureNodeProps {
  icon: React.ElementType;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
  isArabic: boolean;
}

const ArchitectureNode: React.FC<ArchitectureNodeProps> = ({
  icon: Icon,
  title,
  titleAr,
  description,
  descriptionAr,
  position,
  isActive,
  onClick,
  isArabic
}) => {
  return (
    <motion.div
      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          isActive 
            ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/30' 
            : 'bg-slate-800 border-slate-600 hover:border-blue-400'
        }`}
        animate={{ 
          boxShadow: isActive 
            ? '0 0 20px rgba(59, 130, 246, 0.5)' 
            : '0 0 0px rgba(59, 130, 246, 0)'
        }}
      >
        <Icon size={24} className={isActive ? 'text-white' : 'text-slate-400'} />
      </motion.div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={`absolute top-full mt-4 ${isArabic ? 'right-0' : 'left-0'} w-64 bg-slate-800 border border-slate-600 rounded-lg p-4 shadow-xl`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-2">
              {isArabic ? titleAr : title}
            </h3>
            <p className="text-slate-300 text-sm">
              {isArabic ? descriptionAr : description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface InteractiveArchitectureProps {
  isArabic: boolean;
}

const InteractiveArchitecture: React.FC<InteractiveArchitectureProps> = ({ isArabic }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      icon: Shield,
      title: 'Security Layer',
      titleAr: 'طبقة الأمان',
      description: 'UAE PDPL compliant data protection and encryption',
      descriptionAr: 'حماية البيانات والتشفير المتوافق مع قانون حماية البيانات الإماراتي',
      position: { x: 20, y: 30 }
    },
    {
      icon: Database,
      title: 'Data Processing',
      titleAr: 'معالجة البيانات',
      description: 'Real-time analytics and intelligence processing',
      descriptionAr: 'التحليلات ومعالجة الذكاء في الوقت الفعلي',
      position: { x: 50, y: 20 }
    },
    {
      icon: Cpu,
      title: 'AI Engine',
      titleAr: 'محرك الذكاء الاصطناعي',
      description: 'Advanced machine learning and decision algorithms',
      descriptionAr: 'خوارزميات التعلم الآلي وصناعة القرار المتقدمة',
      position: { x: 80, y: 30 }
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      titleAr: 'البنية التحتية السحابية',
      description: 'Scalable deployment on GCC-compliant cloud platforms',
      descriptionAr: 'النشر القابل للتوسع على المنصات السحابية المتوافقة مع دول مجلس التعاون',
      position: { x: 30, y: 70 }
    },
    {
      icon: Zap,
      title: 'Real-time APIs',
      titleAr: 'واجهات البرمجة الفورية',
      description: 'Instant integration with existing enterprise systems',
      descriptionAr: 'التكامل الفوري مع أنظمة المؤسسات الحالية',
      position: { x: 70, y: 70 }
    }
  ];

  return (
    <div className="relative w-full h-96 bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Draw connections between nodes */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.position.x}%`}
              y1={`${node.position.y}%`}
              x2={`${otherNode.position.x}%`}
              y2={`${otherNode.position.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))
        )}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <ArchitectureNode
          key={index}
          {...node}
          isActive={activeNode === index}
          onClick={() => setActiveNode(activeNode === index ? null : index)}
          isArabic={isArabic}
        />
      ))}
    </div>
  );
};

export default InteractiveArchitecture;
