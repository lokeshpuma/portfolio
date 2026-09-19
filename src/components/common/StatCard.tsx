import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';
import { GlassCard } from './GlassCard';

interface StatCardProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  badge?: string;
  delay?: number;
  interactiveLink?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  suffix = '',
  label,
  sublabel,
  badge,
  delay = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.06 }}
      className="h-full"
    >
      <GlassCard
        className="h-full p-5 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]"
        tiltIntensity={6}
      >
        {/* Top Icon Box & Badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-600 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] dark:text-cyan-400">
            <DynamicIcon name={icon} className="h-5 w-5" />
          </div>
          {badge && (
            <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-700 shadow-sm backdrop-blur-md dark:border-cyan-400/25 dark:text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
              {badge}
            </span>
          )}
        </div>

        {/* Counter Number */}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
            {displayValue}
            {suffix}
          </span>
        </div>

        {/* Label */}
        <h4 className="mt-1 text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          {label}
        </h4>

        {/* Sublabel */}
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400/90 leading-relaxed">
          {sublabel}
        </p>

        {/* Bottom Specular Reflection Line */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent transition-all duration-300 group-hover:via-cyan-400/80" />
      </GlassCard>
    </motion.div>
  );
};
