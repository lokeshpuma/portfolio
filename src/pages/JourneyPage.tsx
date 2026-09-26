import React from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones } from '../data/journey';
import { CTABanner } from '../components/common/CTABanner';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const JourneyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            From Student to AI Engineer
          </h1>
          <span className="meta-label outline-tag px-2 py-0.5">
            TIMELINE LOG // 2023–2027
          </span>
        </div>
        <p className="max-w-3xl text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
          A structured timeline of how I evolved into a machine learning and AI practitioner through coursework, certifications, research, hackathons, and systems engineering.
        </p>
      </div>

      {/* Expansive Timeline Section */}
      <div className="space-y-6">
        {/* Timeline Grid: 5 Milestone Bevel Panels */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {journeyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group relative flex flex-col justify-between bevel-panel p-5 transition-colors hover:border-[var(--accent-border)]"
            >
              <div>
                {/* Top: Icon + Plain Monospace Date (Log Timestamp format) */}
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] text-[var(--accent-amber)]">
                    <DynamicIcon name={milestone.badgeType} className="h-4 w-4" />
                  </div>

                  {/* Date badge: plain monospace label with tabular numbers */}
                  <span className="font-mono tabular-nums text-[10px] font-semibold text-[var(--accent-amber)] tracking-wider">
                    {milestone.yearOrDate}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-3.5 space-y-1">
                  <h3 className="font-sans text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                    {milestone.title}
                  </h3>
                  {milestone.subtitle && (
                    <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                      {milestone.subtitle}
                    </p>
                  )}
                </div>

                {/* Highlight Metric Card in Ledger Style if available */}
                {milestone.highlightStat && (
                  <div className="mt-3 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-2.5 text-center">
                    <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">
                      {milestone.highlightStat.value}
                    </div>
                    <div className="font-mono text-[9px] uppercase text-[var(--text-muted)]">
                      {milestone.highlightStat.label}
                    </div>
                  </div>
                )}

                {/* Bullets List */}
                <div className="mt-3 space-y-1.5 pt-2">
                  {milestone.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)] leading-snug">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Duration Log */}
              <div className="mt-4 pt-2.5 border-t border-[var(--border-hairline)]">
                {milestone.durationText && (
                  <div className="flex items-center gap-1.5 font-mono tabular-nums text-[10px] text-[var(--text-muted)]">
                    <Calendar className="h-3 w-3 text-[var(--accent-amber)]" />
                    <span>{milestone.durationText}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTABanner */}
      <CTABanner
        message="My journey is defined by continuous learning, disciplined practice, and turning academic foundations into deployable AI systems."
        nextRoute="/certifications"
        nextLabel="Explore Certifications"
      />
    </div>
  );
};
