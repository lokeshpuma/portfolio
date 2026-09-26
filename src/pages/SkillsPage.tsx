import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalSkills, interviewCoverage, skillCategories } from '../data/skills';
import { globalStatMetrics } from '../data/profile';
import { StatCard } from '../components/common/StatCard';
import { CTABanner } from '../components/common/CTABanner';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SkillsPage: React.FC = () => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  const filteredCategories = skillCategories.filter(
    (cat) => activeCategoryFilter === 'All' || cat.name.toLowerCase() === activeCategoryFilter.toLowerCase()
  );

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Technical Skills
          </h1>
          <span className="meta-label outline-tag px-2 py-0.5">
            CAPABILITY MATRIX
          </span>
        </div>
        <p className="max-w-3xl text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
          A structured summary of tools, frameworks, concepts, and project-validated technical capabilities across data science, machine learning, and software development.
        </p>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {globalStatMetrics.slice(0, 4).map((stat, idx) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
            delay={idx}
          />
        ))}
      </div>

      {/* 3-Column Skills Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Column 1: Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-between bevel-panel p-5"
        >
          <div>
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Technical Skills
              </h3>
              <span className="font-mono tabular-nums text-[10px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-[2px]">
                {technicalSkills.length} SKILLS
              </span>
            </div>

            <div className="mt-3.5 space-y-2">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] text-[var(--accent-amber)]">
                      <DynamicIcon name={skill.icon || 'Code'} className="h-3 w-3" />
                    </div>
                    <span className="font-sans text-xs font-semibold text-[var(--text-primary)]">{skill.name}</span>
                  </div>
                  {/* Trailing monospace category tag (e.g. · ML) */}
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    · {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[var(--border-hairline)]">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
            >
              <span>VIEW IN PROJECTS</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Column 2: ML Interview Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="flex flex-col justify-between bevel-panel p-5"
        >
          <div>
            <div className="border-b border-[var(--border-hairline)] pb-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
                ML Interview Coverage
              </h3>
              <p className="mt-1 font-mono text-[10px] text-[var(--text-secondary)]">
                Validated portfolio evidence across interview probes.
              </p>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {interviewCoverage.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-amber)]" />
                    <div className="space-y-0.5">
                      <div className="font-sans text-xs font-bold text-[var(--text-primary)]">{item.theme}</div>
                      <div className="font-mono text-[10px] text-[var(--accent-amber)]">{item.projects}</div>
                      {item.description && (
                        <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[var(--border-hairline)]">
            <Link
              to="/insights"
              className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
            >
              <span>EXPLORE TECHNICAL PROOFS</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Column 3: Skills by Category */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16 }}
          className="flex flex-col justify-between bevel-panel p-5"
        >
          <div>
            <div className="border-b border-[var(--border-hairline)] pb-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Skills by Category
              </h3>
              {/* Category Outline Filter Tabs */}
              <div className="mt-2.5 flex flex-wrap gap-1">
                {['All', 'Programming', 'Data Analysis', 'Statistics', 'Machine Learning', 'Visualization'].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategoryFilter(cat)}
                      className={`rounded-[2px] px-2 py-0.5 font-mono text-[9px] font-semibold transition ${
                        activeCategoryFilter === cat
                          ? 'border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]'
                          : 'border border-[var(--border-hairline)] text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] text-[var(--accent-amber)]">
                        <DynamicIcon name={cat.icon} className="h-3 w-3" />
                      </div>
                      <span className="font-sans text-xs font-bold text-[var(--text-primary)]">{cat.name}</span>
                    </div>
                    <span className="font-mono tabular-nums text-[10px] text-[var(--accent-amber)]">
                      {cat.count} SKILLS
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-[var(--text-secondary)] leading-snug">
                    {cat.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[var(--border-hairline)]">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
            >
              <span>EXPLORE ML CAPABILITIES</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* CTABanner */}
      <CTABanner
        message="From Python and SQL to Machine Learning, Tableau, Power BI, Flask, and Streamlit - these are the tools powering every solution in this portfolio."
        nextRoute="/projects"
        nextLabel="Explore Projects"
      />
    </div>
  );
};
