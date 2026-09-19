import React from 'react';
import { Menu, Calendar, Bot } from 'lucide-react';
import { profileData } from '../../data/profile';

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onOpenMobileMenu }) => {
  return (
    <header className="relative w-full flex h-16 items-center justify-between px-4 md:px-8">
      {/* Left: Mobile Drawer Trigger & Frosted Brand Capsule */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Dynamic Island Capsule */}
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/60 px-3.5 py-1.5 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-[#090f1d]/75">
          <div className="flex h-6 w-6 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              AI Analytics Dashboard
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.2 text-[10px] font-semibold text-purple-600 dark:text-purple-300">
              v2.6
            </span>
          </div>
        </div>
      </div>

      {/* Right: Last Updated Glass Pill */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/60 px-3.5 py-1.5 text-xs text-slate-600 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-[#090f1d]/75 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
          <span className="font-medium">Updated {profileData.lastUpdated}</span>
        </div>
      </div>
    </header>
  );
};
