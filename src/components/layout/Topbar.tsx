import React from 'react';
import { Menu, Calendar, Sparkles, Bot, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onOpenMobileMenu }) => {
  return (
    <header className="relative w-full flex h-14 items-center justify-between border-b border-white/[0.06] bg-transparent px-4 md:px-8">
      {/* Left: Mobile Toggle & Brand / AI Status */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                AI Analytics Dashboard
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.2 text-[10px] font-semibold text-purple-700 dark:text-purple-300">
                v2.6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Last Updated Tag */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0d1424]/80 px-3.5 py-1 text-xs text-slate-400 shadow-sm backdrop-blur-md">
          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
          <span>Last updated: {profileData.lastUpdated}</span>
        </div>
      </div>
    </header>
  );
};
