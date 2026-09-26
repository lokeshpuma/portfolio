import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
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
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative flex flex-col justify-between bevel-panel p-5 transition-colors hover:border-[var(--accent-border)]"
    >
      <div>
        {/* Top: Square Icon Frame echoing dock's frame & Outline Badge */}
        <div className="flex items-start justify-between gap-3 border-b border-[var(--border-hairline)] pb-3">
          {/* Small square frame (not circular) echoing the sidebar's avatar frame */}
          <div className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent-amber)]">
            <PlatformIcon platformKey={profile.platformIconKey} size={18} />
          </div>

          <div className="flex items-center gap-1.5">
            {/* Outline tag badge */}
            {profile.badge && (
              <span className="outline-tag px-1.5 py-0.5">
                {profile.badge}
              </span>
            )}
            {featured && (
              <span className="font-mono text-[9px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-1.5 py-0.5 rounded-[1px]">
                FEATURED
              </span>
            )}
            <ExternalLink className="h-3 w-3 text-[var(--text-muted)] group-hover:text-[var(--accent-amber)] transition-colors" />
          </div>
        </div>

        {/* Name & Handle */}
        <div className="mt-3.5 space-y-0.5">
          <h3 className="font-sans text-sm font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
            {profile.name}
          </h3>
          <p className="font-mono text-[10px] text-[var(--accent-amber)]">
            {profile.username}
          </p>
        </div>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2">
          {profile.description}
        </p>
      </div>

      {/* Bottom CTA in Tactile outline style */}
      <div className="mt-4 pt-2.5 border-t border-[var(--border-hairline)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[var(--accent-amber)] transition-colors">
        <span>{profile.ctaText}</span>
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
};
