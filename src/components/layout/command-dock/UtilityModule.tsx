import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { useTheme } from '../../../context/ThemeContext';

interface UtilityModuleProps {
  isCollapsed: boolean;
  prefersReducedMotion?: boolean;
}

export const UtilityModule: React.FC<UtilityModuleProps> = ({
  isCollapsed,
  prefersReducedMotion = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [resumeLeverDown, setResumeLeverDown] = useState(false);

  // Knob rotation angle: 0deg for dark mode, 135deg for light mode
  const knobRotation = theme === 'dark' ? 0 : 135;

  return (
    <div className="relative shrink-0 border-t border-[var(--border-shadow)] px-3 py-3 w-full">
      {/* Top Hairline Bevel Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-[var(--border-light)]" />

      {/* When Collapsed: Vertical Stack Centered on Common Axis */}
      {isCollapsed ? (
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          {/* GitHub Rocker */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub: @lokeshpuma"
            className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
              <Github className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
              <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
            </div>
          </a>

          {/* LinkedIn Rocker */}
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn: lokeshpuma"
            className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
              <Linkedin className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
              <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
            </div>
          </a>

          {/* Mail Rocker */}
          <a
            href={`mailto:${profileData.socials.email}`}
            title={`Email: ${profileData.socials.email}`}
            className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
              <Mail className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
              <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
            </div>
          </a>

          {/* Rotary Knob Theme Selector */}
          <button
            type="button"
            onClick={toggleTheme}
            title={`Theme Rotary Dial: Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label={`Toggle theme (currently ${theme})`}
            className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-[var(--panel-active)] shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)] active:scale-95"
          >
            <div className="absolute inset-0.5 rounded-full border border-dashed border-[var(--border-hairline)] opacity-60" />
            <motion.div
              className="relative h-4 w-4 rounded-full bg-gradient-to-br from-[var(--border-light)] to-[var(--panel-sub)] flex items-center justify-center shadow-inner"
              animate={{ rotate: knobRotation }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.1 }
                  : { type: 'spring', stiffness: 220, damping: 18 }
              }
            >
              <div className="absolute top-0.5 h-1.5 w-[2px] rounded-full bg-[var(--accent-amber)] shadow-[0_0_4px_var(--accent-glow)]" />
            </motion.div>
          </button>

          {/* Resume Tab Lever */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Resume (PDF) - Pull Lever"
            onMouseEnter={() => setResumeLeverDown(true)}
            onMouseLeave={() => setResumeLeverDown(false)}
            className="group relative flex h-7 w-8 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-140 ease-out"
              style={{
                transform: resumeLeverDown ? 'translateY(2px)' : 'translateY(0px)',
              }}
            >
              <FileDown className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
            </div>
          </a>
        </div>
      ) : (
        /* When Expanded: Horizontal Row + Full-Width Resume Lever */
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            {/* Rocker Switches Group */}
            <div className="flex items-center gap-1.5">
              {/* GitHub Rocker */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub: @lokeshpuma (Rocker Switch)"
                className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
                  <Github className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
                  <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
                </div>
              </a>

              {/* LinkedIn Rocker */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: lokeshpuma (Rocker Switch)"
                className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
                  <Linkedin className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
                  <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
                </div>
              </a>

              {/* Mail Rocker */}
              <a
                href={`mailto:${profileData.socials.email}`}
                title={`Email: ${profileData.socials.email} (Rocker Switch)`}
                className="group relative flex h-7 w-8 flex-col items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-0.5 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-[1px] bg-[var(--panel-active)] transition-transform duration-150 ease-out group-hover:translate-y-[2px]">
                  <Mail className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)]" />
                  <div className="absolute -top-[1px] inset-x-1 h-[2px] rounded-[1px] bg-[var(--accent-amber)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-[0_0_4px_var(--accent-glow)]" />
                </div>
              </a>
            </div>

            {/* Rotary Knob Theme Selector with visible state label */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-semibold text-[var(--text-muted)] tracking-wider">
                {theme === 'dark' ? 'DARK' : 'LIGHT'}
              </span>

              <button
                type="button"
                onClick={toggleTheme}
                title={`Rotate Dial: Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label={`Toggle theme (currently ${theme})`}
                className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-[var(--panel-active)] shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)] active:scale-95"
              >
                <div className="absolute inset-0.5 rounded-full border border-dashed border-[var(--border-hairline)] opacity-60" />
                <motion.div
                  className="relative h-4 w-4 rounded-full bg-gradient-to-br from-[var(--border-light)] to-[var(--panel-sub)] flex items-center justify-center shadow-inner"
                  animate={{ rotate: knobRotation }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.1 }
                      : { type: 'spring', stiffness: 220, damping: 18 }
                  }
                >
                  <div className="absolute top-0.5 h-1.5 w-[2px] rounded-full bg-[var(--accent-amber)] shadow-[0_0_4px_var(--accent-glow)]" />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Row 2: Resume Pull-Tab Lever */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Resume (PDF) - Pull-Tab Lever"
            onMouseEnter={() => setResumeLeverDown(true)}
            onMouseLeave={() => setResumeLeverDown(false)}
            className="group relative flex items-center w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-1 shadow-sm focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
          >
            <div className="pointer-events-none absolute inset-x-2 top-1 h-[2px] rounded-full bg-[var(--accent-subtle)]" />
            <div
              className="relative flex items-center justify-center gap-2 w-full py-1.5 px-2 rounded-[1px] border border-[var(--border-hairline)] bg-[var(--panel-active)] transition-transform duration-140 ease-out"
              style={{
                transform: resumeLeverDown ? 'translateY(3px)' : 'translateY(0px)',
              }}
            >
              <div className="flex flex-col gap-[2px] opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-2.5 bg-[var(--text-secondary)] group-hover:bg-[var(--accent-amber)]" />
                <div className="h-[1px] w-2.5 bg-[var(--text-secondary)] group-hover:bg-[var(--accent-amber)]" />
                <div className="h-[1px] w-2.5 bg-[var(--text-secondary)] group-hover:bg-[var(--accent-amber)]" />
              </div>

              <FileDown className="h-3 w-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-amber)] shrink-0" />

              <span className="font-mono text-[9px] font-bold tracking-wider text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-amber)]">
                PULL // RESUME.PDF
              </span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
