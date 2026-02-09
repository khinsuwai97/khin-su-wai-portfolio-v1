'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleReady = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady);
      return () => window.removeEventListener('load', handleReady);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0a192f' }}
          >
            {/* Outer glowing ring */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full border-2 border-teal-500/20" />

              {/* Spinning arc */}
              <svg
                className="w-20 h-20 animate-spin"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="url(#loader-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="160"
                  strokeDashoffset="80"
                />
                <defs>
                  <linearGradient
                    id="loader-gradient"
                    x1="0"
                    y1="0"
                    x2="80"
                    y2="80"
                  >
                    <stop stopColor="#14b8a6" />
                    <stop offset="1" stopColor="#0d9488" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center pulsing dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-teal-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-6 text-sm text-slate-400 tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageLoader;
