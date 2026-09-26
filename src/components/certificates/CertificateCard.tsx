import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { CertificationItem } from '../../types';

interface CertificateCardProps {
  certificate: CertificationItem;
  featured?: boolean;
  onOpenDetails: (cert: CertificationItem) => void;
  index?: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  featured = false,
  onOpenDetails,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative flex flex-col justify-between bevel-panel p-5 transition-colors hover:border-[var(--accent-border)]"
    >
      <div>
        {/* Top: Category Outline Tag & Completion Date (Log Timestamp) */}
        <div className="flex items-center justify-between gap-2 border-b border-[var(--border-hairline)] pb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="outline-tag px-1.5 py-0.5">
              {certificate.categoryLabel}
            </span>
            {certificate.badge && (
              <span className="font-mono text-[9px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-1.5 py-0.5 rounded-[1px]">
                {certificate.badge}
              </span>
            )}
          </div>

          {/* Plain monospace date badge */}
          <div className="flex items-center gap-1 font-mono tabular-nums text-[10px] text-[var(--text-muted)] shrink-0">
            <Calendar className="h-3 w-3 text-[var(--accent-amber)]" />
            <span>{certificate.completionDate}</span>
          </div>
        </div>

        {/* Title & Provider */}
        <div className="mt-3.5 space-y-1">
          <h3
            onClick={() => onOpenDetails(certificate)}
            className="cursor-pointer font-sans text-sm font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-amber)]"
          >
            {certificate.title}
          </h3>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">
            {certificate.provider} · {certificate.credentialType}
          </p>
        </div>

        {/* Achievement Details in Ledger Style if available */}
        {certificate.achievementDetails && (
          <div className="mt-3 grid grid-cols-3 gap-1 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-2 text-center">
            <div className="space-y-0.5">
              <div className="font-mono tabular-nums text-xs font-bold text-[var(--accent-amber)]">
                {certificate.achievementDetails.score}
              </div>
              <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">SCORE</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-mono tabular-nums text-xs font-bold text-[var(--text-primary)]">
                {certificate.achievementDetails.duration}
              </div>
              <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">DURATION</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-mono tabular-nums text-xs font-bold text-[var(--text-primary)]">
                {certificate.achievementDetails.credits || 'Verified'}
              </div>
              <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">CREDITS</div>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-3">
          {certificate.description}
        </p>

        {/* Tags in Outline Style */}
        <div className="mt-3 flex flex-wrap gap-1">
          {certificate.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="outline-tag px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action: Outline Tactile Button */}
      <div className="mt-5 pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(certificate)}
          className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[var(--accent-amber)] hover:underline transition-colors"
        >
          <span>VIEW SPECIFICATION</span>
          <ChevronRight className="h-3 w-3" />
        </button>

        {certificate.certificateUrl && (
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            CREDENTIAL ↗
          </a>
        )}
      </div>
    </motion.div>
  );
};
