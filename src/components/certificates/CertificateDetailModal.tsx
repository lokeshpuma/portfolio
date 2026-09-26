import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import { CertificationItem } from '../../types';

interface CertificateDetailModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateDetailModal: React.FC<CertificateDetailModalProps> = ({
  certificate,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container in Bevel Panel style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bevel-panel p-6 shadow-2xl md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-1.5 text-[var(--text-muted)] transition hover:border-[var(--accent-border)] hover:text-[var(--accent-amber)]"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header info */}
          <div className="space-y-2 pr-8 border-b border-[var(--border-hairline)] pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[9px] font-semibold text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-[2px]">
                {certificate.categoryLabel}
              </span>
              {certificate.badge && (
                <span className="outline-tag px-2 py-0.5">
                  {certificate.badge}
                </span>
              )}
            </div>

            <h2 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {certificate.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-[10px] text-[var(--text-secondary)]">
              <span className="text-[var(--accent-amber)] font-semibold">{certificate.provider}</span>
              <span>·</span>
              <span>{certificate.credentialType}</span>
              <span>·</span>
              <span className="flex items-center gap-1 font-mono tabular-nums">
                <Calendar className="h-3 w-3 text-[var(--accent-amber)]" />
                {certificate.completionDate}
              </span>
            </div>
          </div>

          {/* Achievement Breakdown in Ledger Style */}
          {certificate.achievementDetails && (
            <div className="my-4 grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 text-center">
              <div className="space-y-0.5">
                <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">
                  {certificate.achievementDetails.score}
                </div>
                <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">FINAL SCORE</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono tabular-nums text-base font-bold text-[var(--text-primary)]">
                  {certificate.achievementDetails.duration}
                </div>
                <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">PROGRAM DURATION</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono tabular-nums text-base font-bold text-[var(--text-primary)]">
                  {certificate.achievementDetails.assignments || 'Completed'}
                </div>
                <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">ASSIGNMENTS</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono tabular-nums text-base font-bold text-[var(--text-primary)]">
                  {certificate.achievementDetails.credits || 'Verified'}
                </div>
                <div className="font-mono text-[8px] uppercase text-[var(--text-muted)]">ACADEMIC CREDITS</div>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="space-y-4 pt-2 text-xs text-[var(--text-secondary)]">
            <div className="space-y-1.5">
              <div className="meta-label !text-[var(--accent-amber)]">
                OVERVIEW & CURRICULUM
              </div>
              <p className="leading-relaxed text-[var(--text-secondary)] rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3">
                {certificate.description}
              </p>
            </div>

            {/* Tags in Outline Style */}
            <div className="space-y-1.5">
              <div className="meta-label !text-[var(--accent-amber)]">
                SKILLS & COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {certificate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="outline-tag px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] pt-4">
            {certificate.certificateUrl ? (
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 font-mono text-xs font-bold text-[var(--accent-amber)] transition-all hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black"
              >
                <span>VERIFY CREDENTIAL ↗</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="font-mono text-[10px] text-[var(--text-muted)]">INTERNAL CERTIFICATION RECORD</span>
            )}

            <button
              onClick={onClose}
              className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-4 py-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              CLOSE WINDOW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
