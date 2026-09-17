import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { SocialProfileItem } from '../../types';
import { PlatformIcon } from '../common/PlatformIcon';

interface ProfileCardProps {
  profile: SocialProfileItem;
  featured?: boolean;
  index?: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, featured = false, index = 0 }) => {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? 'border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-slate-50/90 p-5 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-cyan-500/30 dark:bg-gradient-to-b dark:from-[#0f172a]/95 dark:via-[#0c1324]/90 dark:to-[#090e1c]/95 dark:shadow-[0_8px_30px_rgba(3,7,18,0.8)] dark:hover:border-cyan-400/60 dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] md:p-6'
          : 'border-slate-200/80 bg-white/80 p-4 shadow-sm shadow-slate-200/30 backdrop-blur-lg hover:border-cyan-500/40 dark:border-cyan-500/20 dark:bg-[#0c1222]/90 dark:shadow-[0_4px_20px_rgba(3,7,18,0.7)] dark:hover:border-cyan-400/50 dark:hover:bg-[#10182d] dark:hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]'
      }`}
    >
      {/* Ambient background glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 group-hover:opacity-100" />

      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${
              featured
                ? 'h-12 w-12 border-slate-200 bg-slate-50 text-slate-800 shadow-sm dark:border-cyan-500/30 dark:bg-[#141f38] dark:text-cyan-400 dark:group-hover:border-cyan-400/50 dark:group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                : 'h-10 w-10 border-slate-200 bg-slate-50 text-slate-700 dark:border-cyan-500/20 dark:bg-[#10182b] dark:text-slate-300 dark:group-hover:text-cyan-300'
            }`}
          >
            <PlatformIcon platformKey={profile.platformIconKey} size={featured ? 24 : 20} />
          </div>

          <div className="flex items-center gap-1.5">
            {profile.badge && (
              <span
                className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                  featured
                    ? 'border-cyan-500/30 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-950/50 dark:text-cyan-300'
                    : 'border-slate-200 bg-slate-100/80 text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-400'
                }`}
              >
                {profile.badge}
              </span>
            )}
            <div className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors group-hover:text-cyan-600 dark:text-slate-500 dark:group-hover:text-cyan-400">
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-3.5 space-y-1">
          <div className="flex items-center gap-2">
            <h3
              className={`font-bold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 ${
                featured ? 'text-base md:text-lg' : 'text-sm'
              }`}
            >
              {profile.name}
            </h3>
            {featured && (
              <span className="flex items-center gap-0.5 rounded bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-1.5 py-0.2 text-[9px] font-bold uppercase text-amber-700 dark:from-amber-400/20 dark:to-orange-400/20 dark:text-amber-300">
                <Sparkles className="h-2.5 w-2.5" />
                Featured
              </span>
            )}
          </div>

          {profile.username && (
            <p className="font-mono text-xs font-medium text-cyan-600 dark:text-cyan-400/90">
              {profile.username}
            </p>
          )}

          <p
            className={`text-slate-600 dark:text-slate-300 ${
              featured ? 'mt-2 text-xs leading-relaxed md:text-sm' : 'mt-1.5 text-xs leading-relaxed'
            }`}
          >
            {profile.description}
          </p>
        </div>
      </div>

      {/* Bottom CTA Action Link */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/[0.05]">
        <span className="text-xs font-semibold text-cyan-600 transition-colors group-hover:text-cyan-700 dark:text-cyan-400 dark:group-hover:text-cyan-300">
          {profile.ctaText}
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-cyan-600 transition-transform duration-300 group-hover:translate-x-1.5 dark:text-cyan-400" />
      </div>
    </motion.a>
  );
};
