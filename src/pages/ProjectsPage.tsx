import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectModal } from '../components/common/ProjectModal';
import { CTABanner } from '../components/common/CTABanner';
import { ProjectItem } from '../types';
import { Search, ExternalLink, Github, FileText, CheckCircle2 } from 'lucide-react';

const categories = ['All', 'Machine Learning', 'Healthcare'];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'Machine Learning' && project.category === 'ML') ||
      (selectedCategory === 'Healthcare' && (project.title.toLowerCase().includes('neonatal') || project.subtitle.toLowerCase().includes('health') || project.description.toLowerCase().includes('health')));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const liveDemosCount = projectsData.filter((p) => Boolean(p.links?.demo)).length;
  const githubReposCount = projectsData.filter((p) => Boolean(p.links?.github)).length;

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
            <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h1>
            <span className="meta-label outline-tag px-2 py-0.5">
              DEPLOYED WORKSPACE
            </span>
          </div>
          <p className="text-xs md:text-sm text-[var(--text-secondary)]">
            Selected projects demonstrating end-to-end data analytics, machine learning, and systems engineering.
          </p>
        </div>

        {/* Live Project Metrics Count in Bevel Ledger style */}
        <div className="flex items-center gap-4 bevel-panel px-4 py-2">
          <div className="text-center">
            <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">{projectsData.length}</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">PROJECTS</div>
          </div>
          <div className="h-6 w-[1px] bg-[var(--border-hairline)]" />
          <div className="text-center">
            <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">{liveDemosCount}</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">LIVE DEMO</div>
          </div>
          <div className="h-6 w-[1px] bg-[var(--border-hairline)]" />
          <div className="text-center">
            <div className="font-mono tabular-nums text-base font-bold text-[var(--accent-amber)]">{githubReposCount}</div>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">GITHUB</div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search projects, tools, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] py-2 pl-9 pr-3 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-[2px] px-3 py-1 font-mono text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]'
                  : 'border border-[var(--border-hairline)] bg-[var(--panel-sub)] text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group relative flex flex-col justify-between bevel-panel p-6"
            >
              <div>
                {/* Header: Title & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono tabular-nums text-[9px] font-semibold text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-[2px]">
                        CATEGORY · {project.category}
                      </span>
                      {project.status === 'completed' && (
                        <span className="outline-tag px-2 py-0.5">
                          ● DEPLOYED
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--accent-amber)] font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* 3 Inline Metrics in Ledger Style */}
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 text-center">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="font-mono tabular-nums text-sm font-bold text-[var(--accent-amber)]">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags in Outline-Tag Style */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="outline-tag px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Rocker-switch & Lever tactile controls */}
              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {/* Details Modal Trigger */}
                    <button
                      onClick={() => setSelectedProjectForModal(project)}
                      className="flex items-center gap-1.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent-border)] hover:text-[var(--accent-amber)] active:scale-95"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>DETAILS</span>
                    </button>

                    {/* Live Demo with Lever / Pull Affordance */}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="group/demo relative flex items-center gap-1.5 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3.5 py-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] transition-all hover:bg-[var(--accent-amber)] hover:text-white dark:hover:text-black active:scale-95"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>

                  {/* GitHub Repo with Rocker Switch styling */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)] transition hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                </div>

                {/* Subtitle / Status Footer */}
                {project.statusLabel && (
                  <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
                    <span>{project.statusLabel}</span>
                    <span className="text-[var(--accent-amber)] font-medium">VALIDATED</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="bevel-panel p-12 text-center">
          <Search className="mx-auto h-8 w-8 text-[var(--text-muted)]" />
          <h3 className="mt-3 font-sans text-sm font-bold text-[var(--text-primary)]">No projects match criteria</h3>
          <p className="mt-1 font-mono text-[11px] text-[var(--text-muted)]">
            Adjust search filter or category selection.
          </p>
        </div>
      )}

      {/* Bottom Philosophy & Code Section as Bevel Panels */}
      <div className="grid grid-cols-1 gap-4 bevel-panel p-5 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="meta-label !text-[var(--accent-amber)]">
            ENGINEERING PHILOSOPHY
          </h3>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-sans">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-amber)] shrink-0" />
              <span>Turning multi-modal data into clinical impact</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-amber)] shrink-0" />
              <span>Deterministic safety guarantees with ML inference</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-amber)] shrink-0" />
              <span>Containerized microservices engineered to scale</span>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="meta-label !text-[var(--accent-amber)]">
            SPECIFICATION BRIEFS
          </h3>
          <p className="text-xs leading-relaxed text-[var(--text-secondary)] font-sans">
            Every project card links to complete architectural briefs, metric validations, audio pipeline transforms, and container configurations.
          </p>
        </div>

        {/* Monospace code block */}
        <div className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 font-mono text-[11px] text-[var(--text-primary)]">
          <div className="text-[var(--text-muted)]">// Runtime telemetry loop</div>
          <div className="text-[var(--accent-amber)]">while(alive) &#123;</div>
          <div className="pl-3 text-[var(--text-secondary)]">evaluate();</div>
          <div className="pl-3 text-[var(--text-secondary)]">optimize();</div>
          <div className="pl-3 text-[var(--text-secondary)]">ship();</div>
          <div className="text-[var(--accent-amber)]">&#125;</div>
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
