import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { SocialProfileItem } from '../../types';
import { PlatformIcon } from '../common/PlatformIcon';
import { GlassCard } from '../common/GlassCard';

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
      className="block h-full"
    >
      <GlassCard
        className={`flex flex-col justify-between h-full p-5 md:p-6 transition-all duration-300 ${
          featured
            ? 'border-cyan-500/30 shadow-[0_15px_35px_rgba(34,211,238,0.15)]'
            : 'hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(34,211,238,0.1)]'
        }`}
        tiltIntensity={6}
      >
        <div>
          {/* Top: Icon & Badge */}
          <div className="flex items-start justify-between gap-3">
            <div
              className={`flex items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                featured
                  ? 'h-12 w-12 border-cyan-500/30 bg-cyan-500/15 text-cyan-600 shadow-[0_0_15px_rgba(34,211,238,0.25)] dark:text-cyan-400'
                  : 'h-10 w-10 border-white/15 bg-white/60 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:group-hover:text-cyan-300'
              }`}
            >
              <PlatformIcon platformKey={profile.platformIconKey} size={featured ? 24 : 20} />
            </div>

            <div className="flex items-center gap-1.5">
              {profile.badge && (
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${
                    featured
                      ? 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300'
                      : 'border border-white/15 bg-white/50 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400'
                  }`}
                >
                  {profile.badge}
                </span>
              )}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/40 text-slate-400 transition-colors group-hover:text-cyan-600 dark:bg-white/[0.02] dark:text-slate-500 dark:group-hover:text-cyan-400">
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-3.5 space-y-1">
            <div className="flex items-center gap-2">
              <h3
                className={`font-bold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300 ${
                  featured ? 'text-base md:text-lg' : 'text-sm'
                }`}
              >
                {profile.name}
              </h3>
              {featured && (
                <span className="flex items-center gap-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-2 py-0.2 text-[9px] font-bold uppercase text-amber-700 dark:text-amber-300">
                  <Sparkles className="h-2.5 w-2.5" />
                  Featured
                </span>
              )}
            </div>

            {profile.username && (
              <p className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
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
        <div className="mt-4 flex items-center justify-between border-t border-slate-200/80 pt-3 dark:border-white/[0.06]">
          <span className="text-xs font-semibold text-cyan-600 transition-colors group-hover:text-cyan-700 dark:text-cyan-400 dark:group-hover:text-cyan-300">
            {profile.ctaText}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-cyan-600 transition-transform duration-300 group-hover:translate-x-1.5 dark:text-cyan-400" />
        </div>
      </GlassCard>
    </motion.a>
  );
};
