import React from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones } from '../data/journey';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { Star, ExternalLink, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export const JourneyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            From Student to <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">AI Engineer</span>
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          A structured timeline of how I evolved into an applied machine learning and AI systems engineer through coursework, certifications, research, hackathons, and production architectures.
        </p>
      </div>

      {/* Spatial Glass Timeline Grid (5 generous cards filling screen width) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {journeyMilestones.map((milestone, idx) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="h-full"
          >
            <GlassCard
              className="flex flex-col justify-between h-full p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(34,211,238,0.12)]"
              tiltIntensity={6}
            >
              {/* Top: Stepper Number & Icon */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:text-cyan-400">
                    <DynamicIcon name={milestone.badgeType} className="h-5 w-5" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_8px_#34d399] dark:border-[#0c1222] dark:bg-emerald-400" />
                  </div>

                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-700 dark:border-cyan-400/25 dark:text-cyan-300">
                    {milestone.yearOrDate}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                    {milestone.title}
                  </h3>
                  {milestone.subtitle && (
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {milestone.subtitle}
                    </p>
                  )}
                </div>

                {/* Highlight Metric Card if available */}
                {milestone.highlightStat && (
                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/40 p-2.5 text-center backdrop-blur-md dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <div className="text-lg font-extrabold text-cyan-700 dark:text-cyan-300">
                      {milestone.highlightStat.value}
                    </div>
                    <div className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
                      {milestone.highlightStat.label}
                    </div>
                  </div>
                )}

                {/* Bullets List */}
                <div className="mt-4 space-y-2 border-t border-slate-200/80 pt-3 dark:border-white/[0.06]">
                  {milestone.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500 dark:text-cyan-400" />
                      <p className="leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Date & Links */}
              <div className="mt-5 space-y-2 border-t border-slate-200/80 pt-3 dark:border-white/[0.06]">
                {milestone.durationText && (
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{milestone.durationText}</span>
                  </div>
                )}

                {milestone.links && milestone.links.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {milestone.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/15 bg-white/50 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 backdrop-blur-md transition hover:border-cyan-500/30 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
                      >
                        <span className="truncate">{link.label}</span>
                        <ExternalLink className="h-3 w-3 shrink-0 opacity-70" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Pill */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2 text-xs font-semibold text-amber-700 shadow-sm backdrop-blur-md dark:border-amber-400/20 dark:text-amber-300">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
          <span>Learning · Building · Deploying · Iterating</span>
          <Star className="h-4 w-4 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
        </div>
      </div>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="What started as curiosity became an extensive portfolio of AI systems, deep learning architectures, and analytics solutions spanning climate, healthcare, agriculture, and NLP."
        nextRoute="/certifications"
        nextLabel="Explore Certifications"
      />
    </div>
  );
};
