import React from 'react';
import { profileData } from '../../data/profile';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 mb-16 md:mb-6 border-t border-slate-200/80 dark:border-white/[0.06] pt-8 pb-4 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-medium">
        <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
          <Sparkles className="h-3.5 w-3.5" />
          {profileData.name} · Portfolio Pro
        </span>
        <span className="hidden sm:inline text-slate-400 dark:text-slate-600">|</span>
        <span className="text-slate-500 dark:text-slate-400">
          Built with React, Vite, Tailwind & Apple Liquid Glass System
        </span>
        <span className="hidden sm:inline text-slate-400 dark:text-slate-600">|</span>
        <span className="text-slate-400 dark:text-slate-600">© 2026</span>
      </div>
    </footer>
  );
};
