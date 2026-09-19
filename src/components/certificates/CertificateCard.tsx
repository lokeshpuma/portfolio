import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Sparkles, ChevronRight } from 'lucide-react';
import { CertificationItem } from '../../types';
import { GlassCard } from '../common/GlassCard';
import { MagneticButton } from '../common/MagneticButton';

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
      className="h-full"
    >
      <GlassCard
        className={`flex flex-col justify-between h-full p-6 transition-all duration-300 ${
          featured
            ? 'border-cyan-500/30 shadow-[0_15px_40px_rgba(34,211,238,0.15)]'
            : 'hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(34,211,238,0.1)]'
        }`}
        tiltIntensity={5}
      >
        <div>
          {/* Top: Category Pill & Completion Date */}
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3.5 dark:border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-1.5">
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                  featured
                    ? 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300'
                    : 'border border-white/15 bg-white/50 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300'
                }`}
              >
                {certificate.categoryLabel}
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:border-amber-400/20 dark:text-amber-300">
                {certificate.badge}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 shrink-0">
              <Calendar className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
              <span>{certificate.completionDate}</span>
            </div>
          </div>

          {/* Title & Provider */}
          <div className="mt-3.5 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3
                onClick={() => onOpenDetails(certificate)}
                className={`cursor-pointer font-bold tracking-tight text-slate-900 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300 ${
                  featured ? 'text-base md:text-lg' : 'text-sm'
                }`}
              >
                {certificate.title}
              </h3>
              {featured && (
                <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[9px] font-bold uppercase text-amber-700 dark:text-amber-300">
                  <Sparkles className="h-2.5 w-2.5" />
                  Featured
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <Award className="h-3.5 w-3.5 shrink-0" />
              <span>{certificate.provider}</span>
              <span className="text-slate-400">•</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                {certificate.credentialType}
              </span>
            </div>
          </div>

          {/* Achievement Score Strip */}
          {certificate.achievementDetails?.score && (
            <div className="mt-3.5 flex items-center justify-between rounded-2xl border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-2 text-xs font-bold text-cyan-800 dark:border-cyan-400/20 dark:text-cyan-300">
              <span>Score: {certificate.achievementDetails.score}</span>
              <span className="text-[10.5px] font-medium text-cyan-600 dark:text-cyan-400">
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
                className="rounded-xl border border-white/15 bg-white/40 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-700 backdrop-blur-md dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Links */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-3.5 dark:border-white/[0.06]">
          <button
            onClick={() => onOpenDetails(certificate)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
          >
            <span>Details</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

          <MagneticButton intensity={0.15}>
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>View Certificate</span>
              <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </a>
          </MagneticButton>
        </div>
      </GlassCard>
    </motion.div>
  );
};
