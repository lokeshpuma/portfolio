import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Bot, Brain, FolderGit2, TrendingUp, Clock, Award, Share2, Mail } from 'lucide-react';
import { IdentityModule } from './command-dock/IdentityModule';
import { ReelSelector, navItemsConfig } from './command-dock/ReelSelector';
import { LivePreviewModule } from './command-dock/LivePreviewModule';
import { UtilityModule } from './command-dock/UtilityModule';

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

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpenMobile = false,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Find index of current route
  const currentPathIndex = Math.max(
    0,
    navItemsConfig.findIndex((item) => item.path === location.pathname)
  );

  const [activeIndex, setActiveIndex] = useState(currentPathIndex);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Sync active index when route changes (e.g. back/forward navigation or link click elsewhere)
  useEffect(() => {
    const idx = navItemsConfig.findIndex((item) => item.path === location.pathname);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
  }, [location.pathname]);

  // Reduced motion query
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Handle dial spin / tick selection
  const handleSelectIndex = (index: number, path: string) => {
    setActiveIndex(index);
    if (location.pathname !== path) {
      navigate(path);
    }
    if (isOpenMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  const currentActivePath = navItemsConfig[activeIndex]?.path || location.pathname;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Main Command Dock Rail */}
      <aside
        role="navigation"
        aria-label="Modular Command Dock"
        className={`fixed inset-y-0 left-0 z-40 flex h-screen max-h-screen flex-col justify-between border-r border-[var(--border-shadow)] bg-[var(--bg-dock)] text-[var(--text-primary)] shadow-[2px_0_16px_rgba(0,0,0,0.2)] transition-all duration-300 md:translate-x-0 ${
          isCollapsed ? 'w-16 items-center' : 'w-64'
        } ${isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Physical Protruding Metal Tab/Handle for Collapse/Expand */}
        {onToggleCollapse && (
          <button
            type="button"
            onClick={onToggleCollapse}
            title={isCollapsed ? 'Expand Command Dock' : 'Collapse Command Dock'}
            aria-label={isCollapsed ? 'Expand Command Dock' : 'Collapse Command Dock'}
            className="absolute -right-3.5 top-1/2 z-50 hidden h-11 w-3.5 -translate-y-1/2 items-center justify-center rounded-r-[2px] border border-l-0 border-[var(--border-hairline)] bg-[var(--panel-bg)] shadow-[2px_1px_4px_rgba(0,0,0,0.4)] transition-all hover:bg-[var(--panel-active)] hover:border-[var(--accent-border)] hover:text-[var(--accent-amber)] active:scale-95 md:flex group"
          >
            {/* Machined Texture Grip Ridges on the Latch Handle */}
            <div className="flex flex-col gap-[3px] items-center">
              <span className="h-[1px] w-1.5 bg-[var(--text-muted)] group-hover:bg-[var(--accent-amber)] transition-colors" />
              <span className="h-[1px] w-1.5 bg-[var(--text-muted)] group-hover:bg-[var(--accent-amber)] transition-colors" />
              <span className="h-[1px] w-1.5 bg-[var(--text-muted)] group-hover:bg-[var(--accent-amber)] transition-colors" />
              <span className="h-[1px] w-1.5 bg-[var(--text-muted)] group-hover:bg-[var(--accent-amber)] transition-colors" />
            </div>
          </button>
        )}

        {/* Mobile Close Button */}
        <button
          onClick={onCloseMobile}
          className="absolute right-2.5 top-2.5 z-50 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-bg)] p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] md:hidden"
        >
          <X className="h-4 w-4" />
        </button>

        {/* MODULE 1: Identity & Status (Top) */}
        <IdentityModule
          isCollapsed={isCollapsed}
          prefersReducedMotion={prefersReducedMotion}
        />

        {/* MODULE 2: Navigation Reel Selector (Middle Dial) */}
        <div className={`flex-1 flex flex-col justify-center min-h-0 py-1 ${isCollapsed ? 'w-full items-center' : ''}`}>
          {!isCollapsed && (
            <div className="px-3.5 pb-1 flex items-center justify-between">
              <span className="meta-label">
                SELECT // CHANNEL
              </span>
              <span className="font-mono tabular-nums text-[9px] text-[var(--accent-amber)]">
                {String(activeIndex + 1).padStart(2, '0')}/08
              </span>
            </div>
          )}

          <ReelSelector
            activeIndex={activeIndex}
            onSelectIndex={handleSelectIndex}
            isCollapsed={isCollapsed}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        {/* MODULE 3: Live Preview Module (~120px micro-preview of centered section) */}
        <LivePreviewModule
          currentPath={currentActivePath}
          isCollapsed={isCollapsed}
        />

        {/* MODULE 4: Utility Module (Bottom: Rockers, Pull Lever, Rotary Theme Knob) */}
        <UtilityModule
          isCollapsed={isCollapsed}
          prefersReducedMotion={prefersReducedMotion}
        />
      </aside>
    </>
  );
};
