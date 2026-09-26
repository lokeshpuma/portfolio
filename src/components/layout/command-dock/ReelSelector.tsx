import React, { useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Brain,
  FolderGit2,
  TrendingUp,
  Clock,
  Award,
  Share2,
  Mail,
  LucideIcon
} from 'lucide-react';

export interface NavItemConfig {
  path: string;
  label: string;
  shortCode: string;
  icon: LucideIcon;
  indexStr: string;
}

export const navItemsConfig: NavItemConfig[] = [
  { path: '/overview', label: 'Overview', shortCode: 'OVW', icon: Bot, indexStr: '01' },
  { path: '/skills', label: 'Skills', shortCode: 'SKL', icon: Brain, indexStr: '02' },
  { path: '/projects', label: 'Projects', shortCode: 'PRJ', icon: FolderGit2, indexStr: '03' },
  { path: '/insights', label: 'Insights', shortCode: 'INS', icon: TrendingUp, indexStr: '04' },
  { path: '/journey', label: 'Journey', shortCode: 'JRN', icon: Clock, indexStr: '05' },
  { path: '/certifications', label: 'Certifications', shortCode: 'CRT', icon: Award, indexStr: '06' },
  { path: '/social', label: 'Social & Activity', shortCode: 'SOC', icon: Share2, indexStr: '07' },
  { path: '/contact', label: 'Contact', shortCode: 'CON', icon: Mail, indexStr: '08' },
];

interface ReelSelectorProps {
  activeIndex: number;
  onSelectIndex: (index: number, path: string) => void;
  isCollapsed: boolean;
  prefersReducedMotion?: boolean;
}

const ROW_HEIGHT = 46;
const VISIBLE_SLOTS = 5;
const TOTAL_VIEWPORT_HEIGHT = ROW_HEIGHT * VISIBLE_SLOTS; // 230px fixed total height

export const ReelSelector: React.FC<ReelSelectorProps> = ({
  activeIndex,
  onSelectIndex,
  isCollapsed,
  prefersReducedMotion = false,
}) => {
  const reelContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Clamped window index for 5 visible items with no empty whitespace
  const maxStartIndex = Math.max(0, navItemsConfig.length - VISIBLE_SLOTS);
  const windowStartIndex = Math.max(0, Math.min(maxStartIndex, activeIndex - 2));

  // Active item's slot index within the 5 visible slots (0 to 4)
  const activeSlotIndex = activeIndex - windowStartIndex;
  const targetTrackY = -windowStartIndex * ROW_HEIGHT;

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      if (Math.abs(e.deltaY) > 16) {
        isScrollingRef.current = true;
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.max(0, Math.min(navItemsConfig.length - 1, activeIndex + direction));
        if (nextIndex !== activeIndex) {
          onSelectIndex(nextIndex, navItemsConfig[nextIndex].path);
        }
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      }
    },
    [activeIndex, onSelectIndex]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(navItemsConfig.length - 1, activeIndex + 1);
      onSelectIndex(nextIndex, navItemsConfig[nextIndex].path);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(0, activeIndex - 1);
      onSelectIndex(prevIndex, navItemsConfig[prevIndex].path);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelectIndex(0, navItemsConfig[0].path);
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIdx = navItemsConfig.length - 1;
      onSelectIndex(lastIdx, navItemsConfig[lastIdx].path);
    }
  };

  const totalItems = navItemsConfig.length;
  const progressSegmentHeight = Math.max(20, TOTAL_VIEWPORT_HEIGHT / totalItems);
  const maxProgressTop = TOTAL_VIEWPORT_HEIGHT - progressSegmentHeight;
  const progressTop = (activeIndex / (totalItems - 1)) * maxProgressTop;

  return (
    <div className={`relative flex items-center ${isCollapsed ? 'justify-center px-1' : 'gap-1.5 px-2'}`}>
      {/* 5-Slot Reel Viewport Container */}
      <div
        ref={reelContainerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        role="region"
        aria-label="Navigation Reel Selector"
        className="group/reel relative flex-1 select-none overflow-hidden outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)]"
        style={{
          height: TOTAL_VIEWPORT_HEIGHT,
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 16px, black calc(100% - 16px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 16px, black calc(100% - 16px), transparent 100%)',
        }}
      >
        {/* Dynamic Notch Box: Single hairline rule directly above and below centered row only */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 z-10 flex flex-col justify-between"
          animate={{ top: activeSlotIndex * ROW_HEIGHT }}
          transition={
            prefersReducedMotion
              ? { duration: 0.05 }
              : { type: 'spring', stiffness: 180, damping: 22 }
          }
          style={{ height: ROW_HEIGHT }}
        >
          {/* Top Notch Hairline */}
          <div className="flex h-[1px] w-full items-center">
            <div className="h-[2px] w-2 bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]" />
            <div className="h-[1px] flex-1 bg-[var(--accent-border)]" />
            <div className="h-[2px] w-2 bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]" />
          </div>

          {/* Bottom Notch Hairline */}
          <div className="flex h-[1px] w-full items-center">
            <div className="h-[2px] w-2 bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]" />
            <div className="h-[1px] flex-1 bg-[var(--accent-border)]" />
            <div className="h-[2px] w-2 bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]" />
          </div>
        </motion.div>

        {/* Moving Items Stack Track */}
        <motion.div
          className="relative"
          animate={{ y: targetTrackY }}
          transition={
            prefersReducedMotion
              ? { duration: 0.1 }
              : { type: 'spring', stiffness: 180, damping: 22 }
          }
        >
          {navItemsConfig.map((item, index) => {
            const Icon = item.icon;
            const distance = Math.abs(index - activeIndex);
            const isCenter = distance === 0;

            let opacity = 1.0;
            let scale = 1.0;
            let fontSizeClass = 'text-xs font-bold text-[var(--text-primary)]';
            let numColorClass = 'text-[var(--accent-amber)] font-bold';

            if (distance === 1) {
              opacity = 0.7;
              scale = 0.94;
              fontSizeClass = 'text-[11px] font-semibold text-[var(--text-secondary)]';
              numColorClass = 'text-[var(--text-muted)] font-medium';
            } else if (distance >= 2) {
              opacity = 0.4;
              scale = 0.88;
              fontSizeClass = 'text-[10px] font-medium text-[var(--text-muted)]';
              numColorClass = 'text-[var(--text-muted)] opacity-60 font-normal';
            }

            return (
              <div
                key={item.path}
                style={{ height: ROW_HEIGHT }}
                className="flex items-center justify-center px-1"
              >
                <button
                  type="button"
                  onClick={() => onSelectIndex(index, item.path)}
                  aria-current={isCenter ? 'page' : undefined}
                  title={isCollapsed ? item.label : undefined}
                  className={`group relative flex w-full items-center rounded-[2px] py-2 transition-all outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-amber)] ${
                    isCollapsed ? 'justify-center px-0' : 'gap-2 px-2'
                  }`}
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    transformOrigin: 'center center',
                    transition: 'opacity 0.18s ease, transform 0.18s ease',
                  }}
                >
                  {/* Vernier Index Number (hidden on collapsed) */}
                  {!isCollapsed && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`font-mono tabular-nums text-[9px] ${numColorClass}`}>
                        {item.indexStr}
                      </span>
                      <div
                        className={`h-2.5 w-[2px] rounded-[1px] transition-colors ${
                          isCenter ? 'bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]' : 'bg-[var(--border-hairline)]'
                        }`}
                      />
                    </div>
                  )}

                  {/* Fixed 20x20 Icon Box for Zero Baseline Drift */}
                  <div className="icon-box">
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                        isCenter
                          ? 'text-[var(--accent-amber)] scale-105'
                          : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                      }`}
                    />
                  </div>

                  {/* Number & Label with animated presence */}
                  {!isCollapsed && (
                    <div className="flex min-w-0 flex-1 items-center justify-between">
                      <span className={`truncate font-sans tracking-tight ${fontSizeClass}`}>
                        {item.label}
                      </span>

                      {/* Right Monospace Short Code */}
                      <span
                        className={`ml-2 font-mono text-[8px] tracking-[0.08em] transition-colors ${
                          isCenter
                            ? 'text-[var(--accent-amber)] font-semibold'
                            : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
                        }`}
                      >
                        {item.shortCode}
                      </span>
                    </div>
                  )}

                  {/* Center Active Indicator Backing */}
                  {isCenter && (
                    <div className="pointer-events-none absolute inset-0 rounded-[2px] bg-[var(--accent-subtle)]" />
                  )}
                </button>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Thin Vertical Progress Track beside the reel */}
      {!isCollapsed && (
        <div
          className="relative h-[230px] w-[2px] shrink-0 rounded-full bg-[var(--panel-sub)] overflow-hidden"
          title={`Position ${activeIndex + 1} of ${totalItems}`}
        >
          {/* Active Bright Indicator Segment */}
          <motion.div
            className="absolute left-0 w-full rounded-full bg-[var(--accent-amber)] shadow-[0_0_5px_var(--accent-glow)]"
            style={{ height: progressSegmentHeight }}
            animate={{ top: progressTop }}
            transition={
              prefersReducedMotion
                ? { duration: 0.1 }
                : { type: 'spring', stiffness: 180, damping: 22 }
            }
          />
        </div>
      )}
    </div>
  );
};
