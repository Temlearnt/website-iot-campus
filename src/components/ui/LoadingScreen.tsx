"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        // Smooth progression from 1 to 100%
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="orange-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-neutral-950 select-none overflow-hidden"
        >
          {/* Centered Orange 1-100% Counter */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Big Orange Percentage Display */}
            <div className="flex items-baseline font-bold font-headline tracking-tighter text-primary">
              <span className="text-7xl sm:text-9xl tabular-nums drop-shadow-sm">
                {progress}
              </span>
              <span className="text-3xl sm:text-5xl ml-1 text-primary/80 font-bold">
                %
              </span>
            </div>

            {/* Clean Orange Progress Line */}
            <div className="w-56 sm:w-72 h-1.5 bg-orange-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Minimalist Subtext in Orange */}
            <p className="text-xs uppercase font-bold tracking-[0.25em] text-primary/80">
              Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
