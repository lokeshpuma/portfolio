import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-50/90 via-sky-50/90 to-indigo-50/90 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-cyan-500/30 dark:bg-gradient-to-r dark:from-[#0d162a]/95 dark:via-[#0f1b33]/95 dark:to-[#0d162a]/95 dark:shadow-2xl md:p-6"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/15" />

      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Left Side: Mascot + Text */}
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-white p-1 shadow-md shadow-cyan-500/10 dark:border-cyan-400/40 dark:bg-cyan-950/60 dark:shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            {/* Mascot Robot Icon */}
            <svg
              className="h-10 w-10 text-cyan-600 dark:text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="14" x="3" y="6" rx="4" fill="rgba(34,211,238,0.15)" />
              <path d="M12 2v4" />
              <path d="M8 2h8" />
              <circle cx="9" cy="13" r="1.5" fill="#0284c7" className="dark:fill-[#22d3ee]" />
              <circle cx="15" cy="13" r="1.5" fill="#0284c7" className="dark:fill-[#22d3ee]" />
              <path d="M10 17h4" />
              <path d="M2 13h1" />
              <path d="M21 13h1" />
            </svg>
            {/* Small glowing online beacon */}
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0d162a] dark:bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfolio signal</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
              {message}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Next Button */}
        <button
          onClick={() => {
            navigate(nextRoute);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 active:scale-[0.98]"
        >
          <span>{nextLabel}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
