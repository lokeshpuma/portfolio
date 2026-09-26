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
    const duration = 800;
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: delay * 0.05 }}
      className="group relative flex flex-col justify-between bevel-panel p-4 transition-colors hover:border-[var(--accent-border)]"
    >
      <div>
        {/* Top Header: Square Icon Frame & Outline Tag */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-hairline)]">
          <div className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] text-[var(--accent-amber)]">
            <DynamicIcon name={icon} className="h-3.5 w-3.5" />
          </div>
          {badge && (
            <span className="outline-tag px-1.5 py-0.5">
              {badge}
            </span>
          )}
        </div>

        {/* Ledger Row: Big Condensed Number + Label */}
        <div className="pt-3">
          <div className="flex items-baseline gap-1">
            <span className="font-mono tabular-nums text-2xl font-bold tracking-tight text-[var(--accent-amber)]">
              {displayValue}
              {suffix}
            </span>
          </div>

          <h4 className="mt-1 font-sans text-xs font-bold uppercase tracking-tight text-[var(--text-primary)]">
            {label}
          </h4>

          <p className="mt-0.5 text-[11px] text-[var(--text-secondary)] leading-snug">
            {sublabel}
          </p>
        </div>
      </div>

      {/* Hairline Bottom Notch */}
      <div className="mt-3 pt-2 border-t border-[var(--border-hairline)] flex items-center justify-between">
        <span className="meta-label">METRIC // TELEMETRY</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
      </div>
    </motion.div>
  );
};
