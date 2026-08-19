import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface LoadingScreenProps {
  language: Language;
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  language,
  onFinish,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onFinish?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0D] text-[#F3EFE7] select-none"
        >
          {/* Subtle radial ambient backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,166,100,0.06)_0%,transparent_60%)] pointer-events-none" />

          {/* Elegant Gtechniq Wordmark */}
          <div className="relative flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
               <span className="font-display text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#F3EFE7]">
                  GTECHNIQ
               </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 text-[10px] md:text-xs tracking-[0.3em] text-[#C6A664] uppercase font-semibold"
            >
              {language === 'ar' ? 'الاستوديو المعتمد' : 'Accredited Studio'}
            </motion.div>
            
            {/* Minimalist Progress Line */}
            <div className="mt-10 w-48 h-[1px] bg-[#26262B] relative overflow-hidden rounded-full">
               <motion.div 
                 initial={{ scaleX: 0, originX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 1.2, ease: [0.8, 0, 0.2, 1] }}
                 className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-[#8F7238] via-[#DFCA95] to-[#8F7238]"
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
