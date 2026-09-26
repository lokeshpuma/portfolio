import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../../data/profile';

interface IdentityModuleProps {
  isCollapsed: boolean;
  prefersReducedMotion?: boolean;
}

export const IdentityModule: React.FC<IdentityModuleProps> = ({
  isCollapsed,
  prefersReducedMotion = false,
}) => {
  const [useAnimeAvatar, setUseAnimeAvatar] = useState(false);
  const currentAvatar = useAnimeAvatar ? profileData.aiAvatarUrl : profileData.avatarUrl;

  // Arc calculation for 260° partial readout arc
  // Radius 28, center (32, 32)
  const radius = 28;
  const strokeWidth = 2.5;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (260 / 360) * circumference;
  const activePercent = 0.94;
  const strokeDasharray = `${arcLength * activePercent} ${circumference}`;

  return (
    <div className="relative shrink-0 border-b border-[var(--border-shadow)] p-4">
      {/* Top Hairline Bevel Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-[var(--border-light)]" />

      {/* Unified Flex Row: items-center with fixed 16px gap */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'}`}>
        {/* Fixed 48px Avatar Frame Container */}
        <div className="relative shrink-0 flex items-center justify-center h-12 w-12">
          {/* Subtle Breathing Status Arc SVG */}
          <motion.svg
            className="absolute -inset-1 h-[56px] w-[56px] pointer-events-none -rotate-[130deg]"
            viewBox="0 0 64 64"
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: [0.7, 1, 0.7] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Background Track Arc */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="var(--panel-active)"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeLinecap="round"
            />
            {/* Active Amber Readout Arc */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="var(--accent-amber)"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Chamfered / Beveled Square Instrument Frame (Fixed 48px) */}
          <div
            onClick={() => setUseAnimeAvatar(!useAnimeAvatar)}
            title="Click to toggle Real / AI Builder Avatar"
            className="group relative h-12 w-12 cursor-pointer overflow-hidden p-[2px] transition-transform active:scale-95"
            style={{
              clipPath:
                'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
              background: 'linear-gradient(145deg, var(--border-light), var(--panel-sub))',
            }}
          >
            <div
              className="h-full w-full overflow-hidden bg-[var(--panel-sub)]"
              style={{
                clipPath:
                  'polygon(7px 0, calc(100% - 7px) 0, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0 calc(100% - 7px), 0 7px)',
              }}
            >
              <img
                src={currentAvatar}
                alt={profileData.name}
                className="h-full w-full object-cover object-top transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Status dot badge: fixed offset from corner */}
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--bg-dock)] bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]" />
        </div>

        {/* Name and Role Tag Stack: fixed 5px vertical gap, left-aligned */}
        {!isCollapsed && (
          <div className="min-w-0 flex-1 flex flex-col justify-center gap-[5px]">
            <div className="flex items-baseline justify-between gap-1">
              <h1 className="truncate font-sans text-sm font-bold tracking-tight text-[var(--text-primary)] uppercase leading-none">
                {profileData.name}
              </h1>
              <span className="font-mono tabular-nums text-[10px] font-semibold text-[var(--accent-amber)] leading-none shrink-0">
                94% ACT
              </span>
            </div>

            {/* Serial-style Role Badge */}
            <div className="inline-flex self-start items-center gap-1.5 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-1.5 py-0.5 shadow-sm">
              <span className="h-1 w-1 rounded-full bg-[var(--accent-amber)]" />
              <span className="font-mono text-[10px] tracking-[0.08em] font-semibold text-[var(--accent-amber)] leading-none">
                ROLE · AI-ML-ENG-01
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Milled Seam */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[var(--border-light)] opacity-40" />
    </div>
  );
};
