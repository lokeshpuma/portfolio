import React from 'react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-[var(--border-hairline)] py-6 text-center text-xs text-[var(--text-muted)]">
      <div className="flex flex-wrap items-center justify-center gap-2 font-mono tabular-nums text-[10px]">
        <span className="text-[var(--text-primary)] font-semibold tracking-wide">
          {profileData.name} PORTFOLIO // INSTRUMENT CONSOLE
        </span>
        <span className="text-[var(--text-muted)]">·</span>
        <span className="text-[var(--accent-amber)]">© 2026</span>
      </div>
    </footer>
  );
};
