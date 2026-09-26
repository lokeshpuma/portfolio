import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window in Bevel Panel style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bevel-panel p-6 shadow-2xl md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-1.5 text-[var(--text-muted)] transition hover:border-[var(--accent-border)] hover:text-[var(--accent-amber)]"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10 border-b border-[var(--border-hairline)] pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono tabular-nums text-[9px] font-semibold text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-[2px]">
                CATEGORY · {project.category}
              </span>
              <span className="font-mono text-xs text-[var(--text-secondary)]">{project.subtitle}</span>
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>

          {/* Metrics in Ledger Style */}
          <div className="my-5 grid grid-cols-3 gap-2 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">
                  {m.value}
                </div>
                <div className="font-mono text-[9px] uppercase text-[var(--text-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Content */}
          {project.detailsData && (
            <div className="space-y-5 text-xs text-[var(--text-secondary)]">
              {/* Problem & Solution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 meta-label !text-[var(--accent-amber)]">
                  <BarChart3 className="h-3.5 w-3.5" />
                  <span>Problem Statement & Objectives</span>
                </div>
                <p className="leading-relaxed text-[var(--text-secondary)] rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3">
                  {project.detailsData.problem}
                </p>
              </div>

              {/* Architecture */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 meta-label !text-[var(--accent-amber)]">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>Architecture & Technical Highlights</span>
                </div>
                <div className="space-y-1.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3">
                  {project.detailsData.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]" />
                      <p className="leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 meta-label !text-[var(--accent-amber)]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Validated Results & Deliverables</span>
                </div>
                <div className="space-y-1.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3">
                  {project.detailsData.results.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]" />
                      <p className="leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 meta-label !text-[var(--accent-amber)]">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Technologies & Frameworks</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.detailsData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="outline-tag px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] pt-4">
            <div className="flex items-center gap-2">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-2 font-mono text-xs font-bold text-[var(--accent-amber)] transition-all hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>LIVE DEMO</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-4 py-2 font-mono text-xs text-[var(--text-secondary)] transition hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-4 py-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              CLOSE WINDOW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
