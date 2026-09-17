import React from 'react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200/80 dark:border-white/[0.06] py-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="flex flex-wrap items-center justify-center gap-2 font-medium">
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
          {profileData.name} Portfolio
        </span>
        <span className="text-slate-400 dark:text-slate-600">© 2026</span>
      </div>
    </footer>
  );
};
