import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CTABannerProps {
  message: string;
  nextRoute: string;
  nextLabel: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({ message, nextRoute, nextLabel }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative mt-10 bevel-panel p-5"
    >
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left Side: Terminal Icon + Message */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]">
            <Terminal className="h-4 w-4" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 meta-label !text-[var(--accent-amber)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
              <span>ROUTING SIGNAL // NEXT TELEMETRY</span>
            </div>
            <p className="max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)]">
              {message}
            </p>
          </div>
        </div>

        {/* Right Side: Tactile Outline Button (fills on hover) */}
        <button
          onClick={() => {
            navigate(nextRoute);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative inline-flex shrink-0 items-center gap-2 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-5 py-2 font-mono text-xs font-bold tracking-wider text-[var(--accent-amber)] transition-all hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black active:scale-95"
        >
          <span>{nextLabel}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
