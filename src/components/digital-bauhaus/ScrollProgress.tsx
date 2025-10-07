import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-blue z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Percentage Indicator */}
      <motion.div
        className="fixed top-4 right-4 z-50 font-mono text-sm text-cyber-blue bg-background/80 backdrop-blur-xl px-3 py-1 rounded border border-cyber-blue/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.span>
          {scrollYProgress.get() ? Math.round(scrollYProgress.get() * 100) : 0}%
        </motion.span>
      </motion.div>
    </>
  );
};
