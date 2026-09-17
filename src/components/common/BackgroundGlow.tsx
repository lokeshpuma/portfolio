import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top Left: Deep Cyan / Blue Fluid Orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/20 to-transparent blur-[90px] dark:from-cyan-500/20 dark:via-blue-600/15"
      />

      {/* Top Right: Purple / Indigo Fluid Orb */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-28 -top-28 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-purple-600/25 via-indigo-500/20 to-pink-500/10 blur-[100px] dark:from-purple-600/20 dark:via-indigo-900/25 dark:to-transparent"
      />

      {/* Middle Center-Right: Fluid Ambient Violet / Blue glow */}
      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-transparent blur-[110px] dark:from-blue-600/15 dark:via-purple-800/15"
      />

      {/* Bottom Left: Electric Teal / Cyan Fluid Orb */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-teal-500/20 via-cyan-500/15 to-transparent blur-[100px] dark:from-teal-600/15 dark:via-cyan-900/20"
      />

      {/* Bottom Right: Deep Purple / Royal Blue Fluid Orb */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-purple-600/25 via-blue-600/20 to-transparent blur-[100px] dark:from-purple-800/25 dark:via-blue-900/20"
      />

      {/* Subtle Fluid Lines / Wave Overlay for visual dynamics */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-40" />
    </div>
  );
};
