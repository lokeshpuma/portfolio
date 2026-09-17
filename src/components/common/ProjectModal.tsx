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
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl backdrop-blur-2xl dark:border-cyan-500/30 dark:bg-[#0c1222]/95 dark:shadow-cyan-950/50 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-cyan-500/30 bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-950/60 dark:text-cyan-300">
                {project.category}
              </span>
              {project.status === 'in-progress' && (
                <span className="rounded-md border border-amber-500/30 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-950/50 dark:text-amber-300">
                  ● In progress
                </span>
              )}
              <span className="text-xs text-slate-500 dark:text-slate-400">{project.subtitle}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Inline Metrics Strip */}
          <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center dark:border-white/[0.06] dark:bg-[#10192e]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-lg font-bold text-cyan-700 dark:text-cyan-300 md:text-xl">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Content */}
          {project.detailsData && (
            <div className="mt-6 space-y-6 text-sm text-slate-600 dark:text-slate-300">
              {/* Overview */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Layers className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  System Overview
                </h4>
                <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.detailsData.overview}
                </p>
              </div>

              {/* Problem & Motivation */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  Problem & Evaluation Challenge
                </h4>
                <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.detailsData.problem}
                </p>
              </div>

              {/* Key Technical Architecture */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Cpu className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  Technical Architecture
                </h4>
                <ul className="mt-2 space-y-2">
                  {project.detailsData.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantified Outcomes */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  Quantified Impact & Results
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {project.detailsData.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech stack chips */}
          <div className="mt-6 border-t border-slate-200/80 dark:border-white/[0.08] pt-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies & Frameworks
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-cyan-500/30 bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-950/30 dark:text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Row */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200/80 dark:border-white/[0.08] pt-5">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:from-teal-600 hover:to-cyan-700 dark:from-teal-400 dark:via-cyan-500 dark:to-blue-600 dark:text-slate-950"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
