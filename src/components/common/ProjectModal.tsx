import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../../types';
import { MagneticButton } from './MagneticButton';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop with Frosted Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-2xl transition-opacity"
        />

        {/* Spatial Glass Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-[#0c1424]/95 dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] md:p-8"
        >
          {/* Specular Top Rim */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/25" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                {project.category}
              </span>
              {project.status === 'in-progress' && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-500/30 dark:text-amber-300">
                  ● In progress
                </span>
              )}
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{project.subtitle}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Inline Metrics Strip */}
          <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/60 p-4 text-center backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.03]">
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
              <div className="rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md dark:border-white/[0.04] dark:bg-white/[0.02]">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Layers className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  System Overview
                </h4>
                <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  {project.detailsData.overview}
                </p>
              </div>

              {/* Problem & Motivation */}
              <div className="rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md dark:border-white/[0.04] dark:bg-white/[0.02]">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <BarChart3 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  Problem & Evaluation Challenge
                </h4>
                <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  {project.detailsData.problem}
                </p>
              </div>

              {/* Technical Architecture */}
              <div className="rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md dark:border-white/[0.04] dark:bg-white/[0.02]">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Cpu className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  Technical Architecture & Pipeline
                </h4>
                <ul className="mt-2 space-y-2 text-xs sm:text-sm">
                  {project.detailsData.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantified Impact */}
              <div className="rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md dark:border-white/[0.04] dark:bg-white/[0.02]">
                <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  Quantified Impact & Results
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm">
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

          {/* Tech Stack Chips */}
          <div className="mt-6 border-t border-slate-200/80 dark:border-white/[0.08] pt-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies & Frameworks
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-400/25 dark:text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Row */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200/80 dark:border-white/[0.08] pt-5">
            {project.links.github && (
              <MagneticButton intensity={0.15}>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  <span>Source Code</span>
                </a>
              </MagneticButton>
            )}
            {project.links.demo && (
              <MagneticButton intensity={0.15}>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95 dark:text-slate-950"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Interactive Demo</span>
                </a>
              </MagneticButton>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
