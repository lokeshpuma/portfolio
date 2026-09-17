import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectModal } from '../components/common/ProjectModal';
import { CTABanner } from '../components/common/CTABanner';
import { ProjectItem } from '../types';
import { Search, ExternalLink, Github, FileText, CheckCircle2, Terminal } from 'lucide-react';

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
            <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] dark:bg-cyan-400" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Featured <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Projects</span>
            </h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Selected projects demonstrating end-to-end data analytics and machine learning capabilities.
          </p>
        </div>

        {/* Live Project Metrics Count */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2 text-xs shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-[#0c1222]/90">
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{projectsData.length}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Total Projects</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-teal-600 dark:text-teal-400">10</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Live Demos</div>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">12</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">GitHub Repos</div>
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
            className="w-full rounded-2xl border border-slate-200/80 bg-white/90 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-md transition focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 dark:border-white/[0.08] dark:bg-[#0c1222]/90 dark:text-white dark:placeholder-slate-400"
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 shadow-sm backdrop-blur-md dark:border-white/[0.06] dark:bg-[#0c1222]/90">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md shadow-cyan-500/20 dark:from-cyan-500 dark:to-teal-400 dark:text-slate-950'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-slate-200'
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 dark:border-white/[0.08] dark:bg-[#0c1222]/85 dark:hover:bg-[#0f172c] dark:hover:shadow-[0_12px_40px_rgba(34,211,238,0.1)]"
            >
              <div>
                {/* Header: Title & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-cyan-500/30 bg-cyan-50 px-2 py-0.5 text-[11px] font-semibold text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-950/60 dark:text-cyan-300">
                        {project.category}
                      </span>
                      {project.status === 'in-progress' && (
                        <span className="rounded-md border border-amber-500/30 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-950/60 dark:text-amber-300">
                          ● In progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
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
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 text-center dark:border-white/[0.05] dark:bg-[#10192e]/60">
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
                      className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-slate-300"
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
                    <button
                      onClick={() => setSelectedProjectForModal(project)}
                      className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Details</span>
                    </button>

                    {/* Live Demo */}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-xl border border-teal-500/30 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-100 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:bg-teal-500/20"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* GitHub Repo */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                {/* Subtitle / Status Footer */}
                {project.statusLabel && (
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{project.statusLabel}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-12 text-center dark:border-white/[0.08] dark:bg-[#0c1222]/80">
          <Search className="mx-auto h-10 w-10 text-slate-400" />
          <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">No projects found</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Try adjusting your search query or filter tags.
          </p>
        </div>
      )}

      {/* Bottom Philosophy & Code Section */}
      <div className="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1222]/80 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            What Drives My Work
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>Turning complex data into impact</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>Building systems that scale</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>Curiosity + code = solutions</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Detailed Project Briefs
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            Every project card links to a full project description with metrics, highlights, architectural decision trees, and technologies.
          </p>
        </div>

        {/* Monospace code block */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-cyan-300/90 dark:border-white/[0.08] dark:bg-[#080d1a]">
          <div className="text-slate-400">// Keep learning. Keep building.</div>
          <div className="mt-1 text-teal-400">while(alive) &#123;</div>
          <div className="pl-4 text-slate-200">code();</div>
          <div className="pl-4 text-slate-200">learn();</div>
          <div className="pl-4 text-slate-200">build();</div>
          <div className="text-teal-400">&#125;</div>
        </div>
      </div>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Every project started with a real-world problem and evolved into a deployable solution through data, analytics, and machine learning."
        nextRoute="/insights"
        nextLabel="Explore Insights"
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </div>
  );
};
