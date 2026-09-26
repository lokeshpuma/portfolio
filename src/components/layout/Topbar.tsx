import React from 'react';
import { Menu, Calendar, Bot } from 'lucide-react';
import { profileData } from '../../data/profile';

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onOpenMobileMenu }) => {
  return (
    <header className="relative w-full flex h-14 items-center justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-topbar)] backdrop-blur-md px-4 md:px-8">
      {/* Left: Mobile Toggle & Brand / AI Status */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-bg)] text-[var(--text-secondary)] transition hover:bg-[var(--panel-active)] md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                AI Analytics Dashboard
              </span>
              <span className="hidden sm:inline-flex items-center rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[var(--accent-amber)]">
                v2.6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Last Updated Tag */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-bg)] px-3 py-1 font-mono tabular-nums text-[10px] text-[var(--text-secondary)]">
          <Calendar className="h-3 w-3 text-[var(--accent-amber)]" />
          <span>LAST UPDATED: {profileData.lastUpdated}</span>
        </div>
      </div>
    </header>
  );
};
