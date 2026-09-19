import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  Bot,
  Brain,
  FolderGit2,
  TrendingUp,
  Clock,
  Award,
  Share2,
  Mail,
  Github,
  Linkedin,
  FileDown,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';
import { MagneticButton } from '../common/MagneticButton';

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const navItems = [
  { path: '/overview', label: 'Overview', icon: Bot },
  { path: '/skills', label: 'Skills', icon: Brain },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/insights', label: 'Insights', icon: TrendingUp },
  { path: '/journey', label: 'Journey', icon: Clock },
  { path: '/certifications', label: 'Certifications', icon: Award },
  { path: '/social', label: 'Social & Activity', icon: Share2 },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isOpenMobile,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [useAnimeAvatar, setUseAnimeAvatar] = useState(false);

  const currentAvatar = useAnimeAvatar ? profileData.aiAvatarUrl : profileData.avatarUrl;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity md:hidden"
        />
      )}

      <aside
        className={`fixed z-40 flex flex-col justify-between transition-all duration-300 md:translate-x-0 ${
          /* Desktop: Floating detached macOS Glass Dock */
          'md:top-3 md:bottom-3 md:left-3 md:h-[calc(100vh-1.5rem)] md:rounded-3xl'
        } ${
          /* Mobile: Full height drawer */
          'inset-y-0 left-0 h-screen md:h-auto'
        } ${
          isCollapsed ? 'w-20 p-2.5' : 'w-64 p-4'
        } ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } border border-white/20 bg-white/80 backdrop-blur-3xl shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:bg-[#070b14]/85 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
      >
        {/* Specular Top Rim */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/25" />

        {/* Desktop Collapse Toggle Arrow (Floats on right border) */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="absolute -right-3.5 top-1/2 z-50 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all hover:scale-110 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:bg-[#0d1424]/90 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 md:flex"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        )}

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="absolute right-3 top-3 rounded-xl p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 md:hidden"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top: Avatar & Profile Card */}
        <div className="shrink-0 flex flex-col items-center text-center pt-1">
          <div className="relative group">
            <div
              onClick={() => setUseAnimeAvatar(!useAnimeAvatar)}
              title="Click to toggle Real / AI Builder Avatar"
              className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/40 bg-gradient-to-tr from-cyan-950 via-slate-900 to-purple-950 p-0.5 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 ${
                isCollapsed ? 'h-10 w-10' : 'h-16 w-16'
              }`}
            >
              <img
                src={currentAvatar}
                alt={profileData.name}
                className="h-full w-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Online Pulse Indicator */}
            <span
              className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_8px_#34d399] dark:border-[#070b14] dark:bg-emerald-400"
              title="Active"
            />
          </div>

          {!isCollapsed && (
            <div className="mt-2.5 px-2 text-center">
              <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                {profileData.name}
              </h1>
              <p className="mt-0.5 text-[10.5px] font-semibold text-cyan-600 dark:text-cyan-400 leading-tight">
                {profileData.role}
              </p>
            </div>
          )}
        </div>

        {/* Middle: Navigation Links */}
        <nav className="my-2 flex-1 space-y-1 overflow-y-auto scrollbar-none pr-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onCloseMobile}
                title={isCollapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                    isCollapsed ? 'justify-center p-2.5' : 'px-3.5 py-2'
                  } ${
                    isActive
                      ? 'glass-pill-active text-cyan-900 dark:text-cyan-200 font-bold'
                      : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 dark:text-slate-300/80 dark:hover:bg-white/[0.06] dark:hover:text-white border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                        isActive
                          ? 'text-cyan-600 dark:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                          : 'text-slate-400 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                      }`}
                    />
                    {!isCollapsed && <span className="truncate tracking-wide">{item.label}</span>}
                    {isActive && !isCollapsed && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee] dark:bg-cyan-400" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom: Socials, Theme Switcher & Resume CTA */}
        <div className="shrink-0 space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/[0.08]">
          {/* Primary Socials + Single Icon Theme Switcher */}
          <div
            className={`grid gap-1.5 ${
              isCollapsed ? 'grid-cols-1 justify-items-center' : 'grid-cols-4'
            }`}
          >
            <MagneticButton intensity={0.15}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub: lokeshpuma"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-300"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.15}>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: lokeshpuma"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-300"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={0.15}>
              <a
                href={`mailto:${profileData.socials.email}`}
                title={`Email: ${profileData.socials.email}`}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-300"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>

            {/* Single Icon Theme Toggle */}
            <MagneticButton intensity={0.15}>
              <button
                onClick={toggleTheme}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-amber-400/40 hover:bg-amber-50 hover:text-amber-600 hover:scale-105 active:scale-95 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-amber-400/15 dark:hover:text-amber-300"
                aria-label="Toggle theme mode"
              >
                {theme === 'dark' ? (
                  <Sun className="h-3.5 w-3.5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
                ) : (
                  <Moon className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 -rotate-12 hover:rotate-0" />
                )}
              </button>
            </MagneticButton>
          </div>

          {/* Resume Button with Magnetic Hover */}
          <MagneticButton intensity={0.15} className="w-full">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              title={isCollapsed ? 'View Resume (PDF)' : undefined}
              className={`group flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 font-bold text-white shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-[0.98] dark:text-slate-950 ${
                isCollapsed ? 'h-8 w-8 p-0 mx-auto' : 'w-full px-3 py-2 text-xs'
              }`}
            >
              <FileDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {!isCollapsed && <span>View Resume (PDF)</span>}
            </a>
          </MagneticButton>
        </div>
      </aside>
    </>
  );
};
