import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';

interface CTABannerProps {
  message?: string;
  nextRoute?: string;
  nextLabel?: string;
  className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  message = 'Explore the complete analytics breakdown and technical case studies.',
  nextRoute = '/skills',
  nextLabel = 'Next: Technical Skills',
  className = '',
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mt-12 ${className}`}
    >
      <GlassCard
        className="p-6 md:p-8 border-cyan-500/20 bg-gradient-to-r from-cyan-500/[0.04] via-blue-500/[0.04] to-purple-500/[0.04] shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
        enableTilt={false}
      >
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left Text & Icon */}
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-[0_0_15px_rgba(34,211,238,0.2)] dark:text-cyan-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Interactive Guided Tour
                </span>
              </div>
              <p className="max-w-2xl text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                {message}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <MagneticButton intensity={0.2}>
            <button
              onClick={() => {
                navigate(nextRoute);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95 dark:text-slate-950"
            >
              <span>{nextLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </MagneticButton>
        </div>
      </GlassCard>
    </motion.div>
  );
};
