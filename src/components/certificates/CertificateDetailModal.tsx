import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CertificationItem } from '../../types';
import { MagneticButton } from '../common/MagneticButton';

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
        {/* Backdrop with Frosted Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-2xl transition-opacity"
        />

        {/* Spatial Glass Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-[#0c1424]/95 dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] md:p-8"
        >
          {/* Specular Top Rim */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/25" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header Info */}
          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                {certificate.categoryLabel}
              </span>
              <span className="rounded-full border border-white/15 bg-white/60 px-3 py-0.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {certificate.credentialType}
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 dark:border-amber-400/25 dark:text-amber-300">
                {certificate.badge}
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
              {certificate.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-semibold text-cyan-600 dark:text-cyan-400">
                <Award className="h-4 w-4" />
                <span>{certificate.provider}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>Completed: {certificate.completionDate}</span>
              </div>
            </div>
          </div>

          {/* Achievement Metrics Strip */}
          {certificate.achievementDetails && (
            <div className="mt-5 rounded-2xl border border-cyan-500/25 bg-cyan-500/10 p-4 dark:border-cyan-400/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
                Achievement & Performance Metrics
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {certificate.achievementDetails.score && (
                  <div className="rounded-2xl border border-white/10 bg-white/70 p-3 text-center shadow-sm backdrop-blur-md dark:bg-white/[0.04]">
                    <div className="text-base font-extrabold text-cyan-700 dark:text-cyan-300">
                      {certificate.achievementDetails.score}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Final Score</div>
                  </div>
                )}
                {certificate.achievementDetails.assignments && (
                  <div className="rounded-2xl border border-white/10 bg-white/70 p-3 text-center shadow-sm backdrop-blur-md dark:bg-white/[0.04]">
                    <div className="text-base font-extrabold text-cyan-700 dark:text-cyan-300">
                      {certificate.achievementDetails.assignments}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Assignments</div>
                  </div>
                )}
                {certificate.achievementDetails.exam && (
                  <div className="rounded-2xl border border-white/10 bg-white/70 p-3 text-center shadow-sm backdrop-blur-md dark:bg-white/[0.04]">
                    <div className="text-base font-extrabold text-cyan-700 dark:text-cyan-300">
                      {certificate.achievementDetails.exam}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Proctored Exam</div>
                  </div>
                )}
                {certificate.achievementDetails.duration && (
                  <div className="rounded-2xl border border-white/10 bg-white/70 p-3 text-center shadow-sm backdrop-blur-md dark:bg-white/[0.04]">
                    <div className="text-base font-extrabold text-cyan-700 dark:text-cyan-300">
                      {certificate.achievementDetails.duration}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Duration</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Overview & Key Learnings
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 md:text-sm">
              {certificate.description}
            </p>
          </div>

          {/* Validated Skills Tags */}
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Validated Skills & Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certificate.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl border border-white/15 bg-white/50 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur-md dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200/80 pt-5 dark:border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Verified Credential Record</span>
            </div>

            <MagneticButton intensity={0.15}>
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
              >
                <span>View Original Certificate</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
