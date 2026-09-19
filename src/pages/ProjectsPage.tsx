import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectModal } from '../components/common/ProjectModal';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import { MagneticButton } from '../components/common/MagneticButton';
import { ProjectItem } from '../types';
import { Search, ExternalLink, Github, FileText, CheckCircle2, Sparkles, FolderGit2 } from 'lucide-react';

const categories = ['All', 'Machine Learning', 'NLP', 'Analytics', 'Healthcare', 'Computer Vision'];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Featured <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Projects</span>
            </h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Selected projects demonstrating end-to-end data analytics, machine learning, and AI agent architectures.
          </p>
        </div>

        {/* Live Project Metrics Count Capsule */}
        <div className="flex items-center gap-4 rounded-3xl border border-white/20 bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-[#0c1424]/80">
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{projectsData.length}</div>
            <div className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">Total Projects</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-teal-600 dark:text-teal-400">10</div>
            <div className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">Live Demos</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">12</div>
            <div className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">GitHub Repos</div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, tools, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/20 bg-white/60 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#0c1424]/80 dark:text-white dark:placeholder-slate-400"
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/15 bg-white/50 p-1.5 shadow-sm backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1424]/75">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'glass-pill-active text-cyan-900 dark:text-cyan-200 font-bold shadow-sm'
                  : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 2-Column Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="h-full"
            >
              <GlassCard
                className="flex flex-col justify-between h-full p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)]"
                tiltIntensity={5}
              >
                <div>
                  {/* Header: Title & Badges */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                          {project.category}
                        </span>
                        {project.status === 'in-progress' && (
                          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-medium text-amber-700 dark:border-amber-500/30 dark:text-amber-300">
                            ● In progress
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                        {project.title}
                      </h3>
                      <p className="text-xs text-cyan-600 font-medium dark:text-cyan-400/90">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* 3 Inline Metrics */}
                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/40 p-3 text-center backdrop-blur-md dark:border-white/[0.05] dark:bg-white/[0.02]">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="text-sm font-bold text-cyan-700 dark:text-cyan-300">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-white/15 bg-white/50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 backdrop-blur-md dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions & Status Bar */}
                <div className="mt-6 space-y-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* Details Modal Trigger */}
                      <MagneticButton intensity={0.15}>
                        <button
                          onClick={() => setSelectedProjectForModal(project)}
                          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Case Study</span>
                        </button>
                      </MagneticButton>

                      {/* Live Demo */}
                      {project.links.demo && (
                        <MagneticButton intensity={0.15}>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 rounded-xl border border-teal-500/30 bg-teal-50/80 px-3 py-1.5 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur-md transition hover:bg-teal-100 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:bg-teal-500/20"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        </MagneticButton>
                      )}
                    </div>

                    {/* GitHub Repo */}
                    {project.links.github && (
                      <MagneticButton intensity={0.15}>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Source Code</span>
                        </a>
                      </MagneticButton>
                    )}
                  </div>

                  {/* Subtitle / Status Footer */}
                  {project.statusLabel && (
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <span>{project.statusLabel}</span>
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <GlassCard className="p-12 text-center" enableTilt={false}>
          <Search className="mx-auto h-10 w-10 text-slate-400" />
          <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">No projects found</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Try adjusting your search query or category filters.
          </p>
        </GlassCard>
      )}

      {/* Bottom Philosophy & Architecture Card */}
      <GlassCard className="p-6 md:p-8" enableTilt={false}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Engineering Principles
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Turning raw complex data into production impact</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Building resilient, scalable neural pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Autonomous AI agent reasoning workflows</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Detailed Case Studies
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Every project card provides a comprehensive architectural breakdown, mathematical formulations, metrics, and live demo links.
            </p>
          </div>

          {/* Monospace code block */}
          <div className="rounded-2xl border border-white/10 bg-[#080d1a]/90 p-4 font-mono text-xs text-cyan-300/90 shadow-inner backdrop-blur-md">
            <div className="text-slate-500">// Keep learning. Keep building.</div>
            <div className="mt-1 text-teal-400">while(alive) &#123;</div>
            <div className="pl-4 text-slate-200">code();</div>
            <div className="pl-4 text-slate-200">learn();</div>
            <div className="pl-4 text-slate-200">build();</div>
            <div className="text-teal-400">&#125;</div>
          </div>
        </div>
      </GlassCard>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Every project started with a real-world problem and evolved into a deployable solution through rigorous validation, analytics, and deep learning."
        nextRoute="/insights"
        nextLabel="Explore Analytics & Proofs"
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </div>
  );
};
