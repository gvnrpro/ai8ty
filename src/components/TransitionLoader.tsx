
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TransitionLoaderProps {
  initialLoad?: boolean;
}

const TransitionLoader: React.FC<TransitionLoaderProps> = ({ initialLoad = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  
  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for reduced motion preference
      setIsLoading(false);
      return;
    }
    
    let interval: NodeJS.Timeout;
    
    if (isLoading) {
      // Simulate loading with progress counter
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 15;
          return next > 100 ? 100 : next;
        });
      }, 150);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading, prefersReducedMotion]);
  
  useEffect(() => {
    if (progress >= 100) {
      // Complete the loading when progress reaches 100%
      setTimeout(() => {
        setShowContent(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 300);
    }
  }, [progress]);
  
  // Skip entire animation for non-initial loads or reduced motion preference
  if (!initialLoad || prefersReducedMotion) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ai8ty-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md px-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" 
                alt="AI8TY Logo" 
                className="h-16 w-auto"
              />
            </motion.div>
            
            <motion.div
              className="w-full h-[2px] bg-ai8ty-grey/20 mb-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-ai8ty-teal"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div 
              className="flex justify-between w-full text-sm text-ai8ty-grey mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Initializing Intelligence</span>
              <span className={cn(
                "font-mono",
                showContent ? "text-ai8ty-teal" : ""
              )}>
                {Math.round(progress)}%
              </span>
            </motion.div>
            
            <div className="h-24 relative overflow-hidden">
              <AnimatePresence>
                {!showContent ? (
                  <motion.div
                    key="loading"
                    className="absolute top-0 left-0 w-full text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="w-full h-16 relative">
                      {/* Animated particle effect */}
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-ai8ty-teal rounded-full"
                            animate={{
                              x: [
                                Math.random() * 200 - 100,
                                Math.random() * 200 - 100,
                                Math.random() * 200 - 100,
                              ],
                              y: [
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                              ],
                              opacity: [0, 1, 0],
                              scale: [0, Math.random() * 2 + 0.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="complete"
                    className="absolute top-0 left-0 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-ai8ty-teal font-avant text-lg">SYSTEM READY</p>
                    <p className="text-ai8ty-grey text-sm mt-2">Activating Vision Protocol</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionLoader;
