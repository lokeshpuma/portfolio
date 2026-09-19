import React, { useState } from 'react';
import {
  selectedTechnicalProof,
  engineeringCapabilities,
  portfolioComposition,
  mlEvaluations,
  storiesWorthDiscussing,
  howIWorkPrinciples
} from '../data/insights';
import { globalStatMetrics } from '../data/profile';
import { StatCard } from '../components/common/StatCard';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ShieldCheck, ArrowRight, Activity, Cpu, Sparkles, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const InsightsPage: React.FC = () => {
  const [, setActiveDonutIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Analytics & <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Technical Proof</span>
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Quantified metrics, architectural decisions, evaluation rigor, and portfolio telemetry designed to demonstrate real-world impact.
        </p>
      </div>

      {/* 6 Top Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {globalStatMetrics.slice(0, 6).map((stat, idx) => (
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

      {/* Section: Selected Technical Proof */}
      <GlassCard className="p-6 md:p-8 space-y-6" enableTilt={false}>
        <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Selected Technical Proof</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Six projects with concrete validation, scale, and deployment evidence
            </p>
          </div>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-700 dark:border-cyan-400/20 dark:text-cyan-300">
            Rigorous Benchmarks
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedTechnicalProof.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/15 bg-white/50 p-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_8px_25px_rgba(34,211,238,0.15)] dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{item.projectTitle}</span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                  {item.statBadge}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <span>Open All 13 Case Studies</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </GlassCard>

      {/* Split Section: Engineering Capabilities vs Portfolio Composition */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 7 cols: Engineering Capabilities */}
        <div className="lg:col-span-7 h-full">
          <GlassCard className="flex flex-col justify-between h-full p-6 md:p-8" enableTilt={false}>
            <div className="space-y-4">
              <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Engineering Capabilities</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  What I can build, with projects that prove each capability
                </p>
              </div>

              <div className="space-y-3">
                {engineeringCapabilities.map((cap) => (
                  <div
                    key={cap.id}
                    className="rounded-2xl border border-white/10 bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                        <DynamicIcon name={cap.icon} className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cap.title}</h4>
                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {cap.description}
                        </p>
                        <div className="pt-1 text-[11px] text-cyan-600 dark:text-cyan-400/90 font-semibold">
                          Evidence: {cap.evidenceProjects.join(' | ')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
              <Link
                to="/skills"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                <span>See the Interview-Focused Skill Set</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Right 5 cols: Portfolio Composition Donut */}
        <div className="lg:col-span-5 h-full">
          <GlassCard className="flex flex-col justify-between h-full p-6 md:p-8" enableTilt={false}>
            <div className="space-y-4">
              <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Portfolio Composition</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Where the 13 case studies concentrate technically
                </p>
              </div>

              {/* Recharts Donut Chart */}
              <div className="relative h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as (typeof portfolioComposition)[0];
                          return (
                            <div className="rounded-2xl border border-white/20 bg-white/90 p-3 text-xs shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/95">
                              <span className="font-bold text-slate-900 dark:text-white">{data.name}</span>
                              <div className="text-cyan-600 dark:text-cyan-400 font-semibold">{data.value}% ({data.count} projects)</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Pie
                      data={portfolioComposition}
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                      onMouseEnter={(_, index) => setActiveDonutIndex(index)}
                    >
                      {portfolioComposition.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="none"
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Shield Icon */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 shadow-[0_0_12px_rgba(34,211,238,0.2)] dark:text-cyan-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Composition Legend */}
              <div className="space-y-2">
                {portfolioComposition.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-white/40 px-3 py-1.5 text-xs backdrop-blur-md dark:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{item.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">({item.count} projects)</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">{item.value}%</span>
                  </div>
                ))}
              </div>

              {/* Note banner */}
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 text-xs text-slate-700 backdrop-blur-md dark:border-cyan-400/20 dark:text-slate-300">
                <div className="font-semibold text-cyan-700 dark:text-cyan-300">Built for Applied AI/ML Roles</div>
                <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-400">
                  77% of the portfolio focuses on machine learning or analytics with emphasis on mathematical validation, explainability, and deployment.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                <span>Explore Projects by Domain</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Section: ML Evaluation in Context */}
      <GlassCard className="p-6 md:p-8 space-y-4" enableTilt={false}>
        <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">ML & AI Evaluation, in Context</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Task-specific validation strategies, benchmark datasets, and error distributions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mlEvaluations.map((evalItem) => (
            <div
              key={evalItem.project}
              className="rounded-2xl border border-white/10 bg-white/40 p-4 space-y-2 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{evalItem.project}</span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                  {evalItem.validationStrategy}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">{evalItem.keyMetric}</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{evalItem.detail}</p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <span>View Project Methodology</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </GlassCard>

      {/* Split Section: Stories Worth Discussing vs How I Work */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: Stories Worth Discussing */}
        <GlassCard className="flex flex-col justify-between p-6 md:p-8" enableTilt={false}>
          <div className="space-y-4">
            <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Stories Worth Discussing</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Key interview narratives and why the technical choices matter
              </p>
            </div>

            <div className="space-y-3">
              {storiesWorthDiscussing.map((story) => (
                <div
                  key={story.id}
                  className="rounded-2xl border border-white/10 bg-white/40 p-4 space-y-1.5 backdrop-blur-md transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">{story.project}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">{story.headline}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {story.narrative}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </GlassCard>

        {/* Right: How I Work */}
        <GlassCard className="flex flex-col justify-between p-6 md:p-8" enableTilt={false}>
          <div className="space-y-4">
            <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">How I Work</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Engineering habits visible across every project
              </p>
            </div>

            <div className="space-y-3">
              {howIWorkPrinciples.map((principle) => (
                <div
                  key={principle.id}
                  className="rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                        <DynamicIcon name={principle.icon} className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{principle.title}</h4>
                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-lg border border-slate-200/80 bg-white/70 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/5 dark:bg-white/[0.04] dark:text-slate-400">
                      {principle.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
            <Link
              to="/journey"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </GlassCard>
      </div>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Numbers tell stories. These metrics summarize the scale, impact, and technical depth behind the projects showcased in this portfolio."
        nextRoute="/journey"
        nextLabel="Explore Timeline"
      />
    </div>
  );
};
