import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';

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
      transition={{ duration: 0.4, delay: delay * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/40 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 dark:border-cyan-500/20 dark:bg-[#0c1220]/90 dark:shadow-[0_8px_30px_rgba(3,7,18,0.7)] dark:hover:border-cyan-400/50 dark:hover:bg-[#10192e] dark:hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)]"
    >
      {/* Top Accent Icon Box */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-50 text-cyan-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-100 dark:border-cyan-500/30 dark:bg-cyan-950/60 dark:text-cyan-400 dark:group-hover:bg-cyan-900/50 dark:group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          <DynamicIcon name={icon} className="h-5 w-5" />
        </div>
        {badge && (
          <span className="flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-950/50 dark:text-cyan-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
            {badge}
          </span>
        )}
      </div>

      {/* Number Value */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
          {displayValue}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h4 className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}
      </h4>

      {/* Sublabel */}
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {sublabel}
      </p>

      {/* Bottom subtle glow line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent transition-all duration-300 group-hover:via-cyan-500 dark:group-hover:via-cyan-400" />
    </motion.div>
  );
};
