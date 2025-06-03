import React from 'react';
import { motion } from 'framer-motion';
const EnterpriseFooter: React.FC = () => {
  return <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="flex items-center gap-3 mb-8 md:mb-0" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }}>
            <img src="/lovable-uploads/4b4a830d-afce-4dc3-8cc3-4fae3e2728ed.png" alt="AI8TY" className="h-8 w-auto" />
            
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center gap-8 text-sm text-slate-400" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/security" className="hover:text-white transition-colors">Security</a>
            <span>© 2025 AI8TY. All rights reserved.</span>
          </motion.div>
        </div>
      </div>
    </footer>;
};
export default EnterpriseFooter;