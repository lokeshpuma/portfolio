import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../../data/projects';
import {
  Activity,
  Layers,
  Sparkles,
  Award,
  Terminal,
  Share2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

interface LivePreviewModuleProps {
  currentPath: string;
  isCollapsed: boolean;
}

export const LivePreviewModule: React.FC<LivePreviewModuleProps> = ({
  currentPath,
  isCollapsed,
}) => {
  // Stat tick cycling for Overview
  const [statCycleIndex, setStatCycleIndex] = useState(0);
  const overviewStats = [
    { label: 'CASE STUDIES', val: '13', sub: 'Production Architectures' },
    { label: 'ML MODELS', val: '7', sub: 'Deep Learning & NLP' },
    { label: 'DEPLOYED APPS', val: '10', sub: 'Sub-50ms Inference' },
  ];

  // Cycling platform for Social
  const [socialCycleIndex, setSocialCycleIndex] = useState(0);
  const socialItems = [
    { name: 'GITHUB', stat: '12 Repositories', sub: '@lokeshpuma' },
    { name: 'LINKEDIN', stat: 'Professional Network', sub: 'lokeshpuma' },
    { name: 'LEETCODE', stat: 'Algorithmic Problem Solving', sub: 'Active' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatCycleIndex((prev) => (prev + 1) % overviewStats.length);
      setSocialCycleIndex((prev) => (prev + 1) % socialItems.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [overviewStats.length, socialItems.length]);

  // Section icon mapping for collapsed mode
  const getSectionIconAndBadge = () => {
    switch (currentPath) {
      case '/skills':
        return { icon: Layers, badge: '02' };
      case '/projects':
        return { icon: FolderGit2, badge: '03' };
      case '/insights':
        return { icon: Activity, badge: '04' };
      case '/journey':
        return { icon: Calendar, badge: '05' };
      case '/certifications':
        return { icon: Award, badge: '06' };
      case '/social':
        return { icon: Share2, badge: '07' };
      case '/contact':
        return { icon: Terminal, badge: '08' };
      case '/overview':
      default:
        return { icon: Activity, badge: '01' };
    }
  };

  // If collapsed, render single centered icon with small numeric badge on common center axis
  if (isCollapsed) {
    const { icon: CollapsedIcon, badge: collapsedBadge } = getSectionIconAndBadge();
    return (
      <div className="shrink-0 flex flex-col items-center justify-center border-y border-[var(--border-shadow)] py-2 w-full">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="icon-box text-[var(--accent-amber)]">
            <CollapsedIcon className="h-4 w-4" />
          </div>
          <span className="font-mono tabular-nums text-[9px] font-bold text-[var(--accent-amber)] leading-none">
            {collapsedBadge}
          </span>
        </div>
      </div>
    );
  }

  const renderSectionContent = () => {
    switch (currentPath) {
      case '/skills':
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Layers className="h-3 w-3" />
                </span>
                <span>CORE CAPABILITY</span>
              </span>
              <span className="tabular-nums">INDEX // 02</span>
            </div>
            {/* Top 3 Micro Capability Meter Bars */}
            <div className="space-y-1 pt-0.5">
              <div>
                <div className="flex justify-between font-mono tabular-nums text-[9px] text-[var(--text-secondary)]">
                  <span>PYTHON / ML</span>
                  <span className="text-[var(--accent-amber)] font-bold">95%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-[var(--panel-active)] overflow-hidden">
                  <div className="h-full w-[95%] bg-[var(--accent-amber)] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono tabular-nums text-[9px] text-[var(--text-secondary)]">
                  <span>TENSORFLOW / DL</span>
                  <span className="text-[var(--accent-amber)] font-bold">90%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-[var(--panel-active)] overflow-hidden">
                  <div className="h-full w-[90%] bg-[var(--accent-amber)] opacity-80 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono tabular-nums text-[9px] text-[var(--text-secondary)]">
                  <span>FASTAPI / DOCKER</span>
                  <span className="text-[var(--accent-amber)] font-bold">88%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-[var(--panel-active)] overflow-hidden">
                  <div className="h-full w-[88%] bg-[var(--accent-amber)] opacity-60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );

      case '/projects': {
        const featuredProject = projectsData[0];
        return (
          <div className="space-y-1">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
                <span>ACTIVE PROJECT</span>
              </span>
              <span className="tabular-nums">01 / 01</span>
            </div>
            <div className="truncate font-sans text-xs font-bold text-[var(--text-primary)]">
              {featuredProject ? featuredProject.title : 'Prenatal Risk Detection'}
            </div>
            <div className="truncate text-[10px] text-[var(--text-secondary)] leading-tight">
              {featuredProject ? featuredProject.subtitle : 'Neonatal Health AI'}
            </div>
            <div className="flex items-center gap-1 pt-1 flex-wrap">
              <span className="rounded-[2px] bg-[var(--accent-subtle)] border border-[var(--accent-border)] px-1.5 py-0.2 font-mono text-[8px] font-semibold text-[var(--accent-amber)]">
                TensorFlow
              </span>
              <span className="rounded-[2px] bg-[var(--panel-active)] border border-[var(--border-hairline)] px-1.5 py-0.2 font-mono text-[8px] text-[var(--text-secondary)]">
                FastAPI
              </span>
              <span className="rounded-[2px] bg-[var(--panel-active)] border border-[var(--border-hairline)] px-1.5 py-0.2 font-mono text-[8px] text-[var(--text-secondary)]">
                Docker
              </span>
            </div>
          </div>
        );
      }

      case '/insights':
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Activity className="h-3 w-3" />
                </span>
                <span>EVALUATION RIGOR</span>
              </span>
              <span>BENCHMARK</span>
            </div>
            <div className="flex items-center gap-2 pt-0.5">
              <div className="font-mono tabular-nums text-lg font-bold text-[var(--accent-amber)]">100%</div>
              <div className="text-[10px] text-[var(--text-secondary)] leading-tight font-sans">
                Benchmark validation on test suites
              </div>
            </div>
            <div className="font-mono tabular-nums text-[9px] text-[var(--text-muted)]">
              Sub-50ms latency · zero leakage
            </div>
          </div>
        );

      case '/journey':
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Calendar className="h-3 w-3" />
                </span>
                <span>TIMELINE TRACK</span>
              </span>
              <span className="tabular-nums">2023–27</span>
            </div>
            {/* Compressed Mini-Timeline Dot Track */}
            <div className="relative pt-2 pb-1">
              <div className="absolute top-3 inset-x-1 h-[2px] bg-[var(--panel-active)]" />
              <div className="relative flex justify-between items-center font-mono tabular-nums text-[9px] text-[var(--text-secondary)]">
                <div className="flex flex-col items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent-amber)] shadow-[0_0_4px_var(--accent-glow)]" />
                  <span>'23</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                  <span>'25</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                  <span>'26</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent-amber)] opacity-70" />
                  <span>'27</span>
                </div>
              </div>
            </div>
            <div className="truncate font-mono text-[9px] text-[var(--text-muted)]">
              DSCE Bangalore · 8.86 CGPA
            </div>
          </div>
        );

      case '/certifications':
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Award className="h-3 w-3" />
                </span>
                <span>CREDENTIALS</span>
              </span>
              <span className="tabular-nums">15 TOTAL</span>
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <div className="flex-1 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-1 text-center">
                <div className="font-mono text-[9px] font-bold text-[var(--accent-amber)]">NPTEL</div>
                <div className="font-mono tabular-nums text-[8px] text-[var(--accent-amber)] opacity-90">ELITE 73%</div>
              </div>
              <div className="flex-1 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] p-1 text-center">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)]">OCI AI</div>
                <div className="font-mono tabular-nums text-[8px] text-[var(--text-secondary)]">2025</div>
              </div>
              <div className="flex-1 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] p-1 text-center">
                <div className="font-mono text-[9px] font-bold text-[var(--text-primary)]">GCP</div>
                <div className="font-mono text-[8px] text-[var(--text-secondary)]">Launch</div>
              </div>
            </div>
          </div>
        );

      case '/social': {
        const item = socialItems[socialCycleIndex];
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Share2 className="h-3 w-3" />
                </span>
                <span>ACTIVITY FEED</span>
              </span>
              <span>LIVE</span>
            </div>
            <div className="pt-0.5">
              <div className="font-mono text-xs font-bold text-[var(--text-primary)]">{item.name}</div>
              <div className="text-[10px] text-[var(--accent-amber)] font-medium font-sans">{item.stat}</div>
              <div className="font-mono text-[9px] text-[var(--text-muted)]">{item.sub}</div>
            </div>
          </div>
        );
      }

      case '/contact':
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Terminal className="h-3 w-3" />
                </span>
                <span>CHANNEL STATUS</span>
              </span>
              <span className="flex items-center gap-1 text-[var(--accent-amber)] text-[8px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="pt-0.5 font-mono text-[10px] text-[var(--text-secondary)] space-y-0.5">
              <div>&gt; INQUIRIES: OPEN</div>
              <div className="text-[var(--accent-amber)] truncate">ping@lokeshpuma.dev</div>
              <div className="text-[var(--text-muted)] text-[9px]">&gt; READY _</div>
            </div>
          </div>
        );

      case '/overview':
      default: {
        const stat = overviewStats[statCycleIndex];
        return (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between meta-label">
              <span className="flex items-center gap-1.5 text-[var(--accent-amber)]">
                <span className="icon-box !w-3.5 !h-3.5">
                  <Activity className="h-3 w-3" />
                </span>
                <span>TELEMETRY</span>
              </span>
              <span>LIVE GAUGES</span>
            </div>
            <div className="flex items-baseline gap-2 pt-0.5">
              <span className="font-mono tabular-nums text-xl font-bold tracking-tight text-[var(--accent-amber)]">
                {stat.val}
              </span>
              <span className="font-mono text-[10px] font-semibold text-[var(--text-primary)]">
                {stat.label}
              </span>
            </div>
            <div className="truncate text-[10px] text-[var(--text-secondary)] font-sans">{stat.sub}</div>
          </div>
        );
      }
    }
  };

  return (
    <div className="relative shrink-0 border-y border-[var(--border-shadow)] px-3 py-2 w-full">
      {/* Top Hairline Bevel Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-[var(--border-light)]" />

      {/* Recessed Instrument Bay */}
      <div
        className="relative h-[98px] overflow-hidden rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-2.5 shadow-inner"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="h-full flex flex-col justify-center"
          >
            {renderSectionContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Milled Seam */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[var(--border-light)] opacity-40" />
    </div>
  );
};
