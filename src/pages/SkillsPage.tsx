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
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] dark:bg-cyan-400" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Technical <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Skills</span>
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.06] pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Technical Skills</h3>
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-cyan-500/30 bg-cyan-50 px-2 py-0.5 text-xs font-semibold text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-950/40 dark:text-cyan-300">
                  {technicalSkills.length} Skills
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Verified Proofs</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2.5 transition hover:border-cyan-500/30 hover:bg-cyan-50/50 dark:border-white/[0.05] dark:bg-[#10192e]/60 dark:hover:bg-[#131f38]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <DynamicIcon name={skill.icon || 'Code'} className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-400">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <span>View All Skills in Projects</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Column 2: ML Interview Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85"
        >
          <div>
            <div className="border-b border-slate-200/80 dark:border-white/[0.06] pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">ML Interview Coverage</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Concrete portfolio evidence across the workflow interviewers usually probe.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {interviewCoverage.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition hover:border-cyan-500/30 hover:bg-cyan-50/50 dark:border-white/[0.06] dark:bg-[#10192e]/60 dark:hover:bg-[#131f38]"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.theme}</div>
                      <div className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400/90">{item.projects}</div>
                      {item.description && (
                        <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
            <Link
              to="/insights"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <span>Explore Technical Proofs</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Column 3: Skills by Category */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85"
        >
          <div>
            <div className="border-b border-slate-200/80 dark:border-white/[0.06] pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Skills by Category</h3>
              {/* Category Filter Tabs */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['All', 'Programming', 'Data Analysis', 'Statistics', 'Machine Learning', 'Visualization'].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategoryFilter(cat)}
                      className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition ${
                        activeCategoryFilter === cat
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition hover:border-cyan-500/30 hover:bg-cyan-50/50 dark:border-white/[0.06] dark:bg-[#10192e]/60 dark:hover:bg-[#131f38]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        <DynamicIcon name={cat.icon} className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{cat.name}</span>
                    </div>
                    <span className="rounded-md border border-cyan-500/30 bg-cyan-50 px-2 py-0.5 text-[11px] font-semibold text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-950/40 dark:text-cyan-300">
                      {cat.count} Skills
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {cat.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <span>Explore ML Skills</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="From Python and SQL to Machine Learning, Tableau, Power BI, Flask, and Streamlit - these are the tools powering every solution in this portfolio."
        nextRoute="/projects"
        nextLabel="Explore Projects"
      />
    </div>
  );
};
