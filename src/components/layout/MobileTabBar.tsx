import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bot, Brain, FolderGit2, Award, Share2, Menu } from 'lucide-react';

interface MobileTabBarProps {
  onOpenFullMenu: () => void;
}

const primaryMobileTabs = [
  { path: '/overview', label: 'Home', icon: Bot },
  { path: '/skills', label: 'Skills', icon: Brain },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/certifications', label: 'Certs', icon: Award },
  { path: '/social', label: 'Social', icon: Share2 },
];

export const MobileTabBar: React.FC<MobileTabBarProps> = ({ onOpenFullMenu }) => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
      <nav className="mx-auto max-w-md flex items-center justify-around rounded-3xl border border-white/20 bg-slate-900/80 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#070b14]/85">
        {primaryMobileTabs.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center rounded-2xl px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.3)]" />
                  )}
                  <Icon className={`h-4 w-4 relative z-10 transition-transform ${isActive ? 'scale-110' : ''}`} />
                  <span className="text-[10px] relative z-10 mt-0.5 tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}

        {/* More Menu Trigger */}
        <button
          onClick={onOpenFullMenu}
          className="relative flex flex-col items-center justify-center rounded-2xl px-3 py-1.5 text-slate-400 transition-all hover:text-slate-200"
          aria-label="Open all navigation tabs"
        >
          <Menu className="h-4 w-4" />
          <span className="text-[10px] mt-0.5 tracking-tight">More</span>
        </button>
      </nav>
    </div>
  );
};
