import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
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
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-slate-50/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-cyan-500/30 dark:bg-gradient-to-b dark:from-[#0f172a]/95 dark:via-[#0c1324]/90 dark:to-[#090e1c]/95 dark:shadow-[0_8px_30px_rgba(3,7,18,0.8)] dark:hover:border-cyan-400/60 dark:hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)]'
          : 'border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-200/30 backdrop-blur-lg hover:border-cyan-500/40 dark:border-cyan-500/20 dark:bg-[#0c1222]/90 dark:shadow-[0_4px_20px_rgba(3,7,18,0.7)] dark:hover:border-cyan-400/50 dark:hover:bg-[#10182d] dark:hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]'
      }`}
    >
      <div>
        {/* Top: Category Pill & Completion Date */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-white/[0.05]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                featured
                  ? 'border border-cyan-500/30 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-950/60 dark:text-cyan-300'
                  : 'border border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300'
              }`}
            >
              {certificate.categoryLabel}
            </span>
            <span className="rounded-md border border-amber-500/30 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:border-amber-500/20 dark:bg-amber-950/40 dark:text-amber-300">
              {certificate.badge}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 shrink-0">
            <Calendar className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
            <span>{certificate.completionDate}</span>
          </div>
        </div>

        {/* Title & Provider */}
        <div className="mt-3.5 space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onOpenDetails(certificate)}
              className={`cursor-pointer font-bold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 ${
                featured ? 'text-base md:text-lg' : 'text-sm'
              }`}
            >
              {certificate.title}
            </h3>
            {featured && (
              <span className="flex shrink-0 items-center gap-0.5 rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700 dark:bg-amber-400/20 dark:text-amber-300">
                <Sparkles className="h-2.5 w-2.5" />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400/90">
            <Award className="h-3.5 w-3.5 shrink-0" />
            <span>{certificate.provider}</span>
            <span className="text-slate-400">•</span>
            <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
              {certificate.credentialType}
            </span>
          </div>
        </div>

        {/* Achievement Highlight (e.g. Elite • 73%) */}
        {certificate.achievementDetails?.score && (
          <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-50/80 px-3 py-2 text-xs font-bold text-cyan-800 dark:border-cyan-500/20 dark:bg-cyan-950/40 dark:text-cyan-300">
            <span>Score: {certificate.achievementDetails.score}</span>
            <span className="text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
              Assignments: {certificate.achievementDetails.assignments} | Exam: {certificate.achievementDetails.exam}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
          {certificate.description}
        </p>

        {/* Skill Tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-slate-200 bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Links */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 dark:border-white/[0.05]">
        <button
          onClick={() => onOpenDetails(certificate)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
        >
          <span>Details</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/35 active:scale-[0.98]"
        >
          <span>View Certificate</span>
          <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
};
