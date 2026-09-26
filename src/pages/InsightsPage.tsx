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
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ShieldCheck, ArrowRight, Activity, Cpu, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const InsightsPage: React.FC = () => {
  const [, setActiveDonutIndex] = useState<number | null>(null);

  // Recolor donut chart to single accent (amber) + neutral grays only (matching spec)
  const donutColors = ['#f59e0b', '#d97706', '#52525b', '#27272a'];

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Analytics & Technical Proof
          </h1>
          <span className="meta-label outline-tag px-2 py-0.5">
            VALIDATION TELEMETRY
          </span>
        </div>
        <p className="max-w-3xl text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
          Quantified metrics, architectural decisions, evaluation rigor, and portfolio insights designed to demonstrate real-world engineering impact.
        </p>
      </div>

      {/* 6 Top Stat Cards as one Ledger Block snapped to 8px grid */}
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
      <div className="bevel-panel p-6 space-y-5">
        <div className="border-b border-[var(--border-hairline)] pb-3 flex items-center justify-between">
          <div>
            <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
              Selected Technical Proof
            </h3>
            <p className="font-mono text-[10px] text-[var(--text-secondary)]">
              Concrete validation, scale, and deployment evidence across projects.
            </p>
          </div>
          <span className="font-mono text-[10px] text-[var(--accent-amber)]">VERIFIED METRICS</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {selectedTechnicalProof.map((item) => (
            <div
              key={item.id}
              className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3.5 transition-colors hover:border-[var(--accent-border)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-[var(--text-primary)]">{item.projectTitle}</span>
                <span className="font-mono tabular-nums text-[9px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-1.5 py-0.5 rounded-[1px]">
                  {item.statBadge}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
          >
            <span>OPEN DEPLOYED PROJECTS</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Split Section: Engineering Capabilities vs Portfolio Composition */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 7 cols: Engineering Capabilities */}
        <div className="flex flex-col justify-between bevel-panel p-6 lg:col-span-7">
          <div className="space-y-4">
            <div className="border-b border-[var(--border-hairline)] pb-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Engineering Capabilities
              </h3>
              <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                What I can build, with projects that prove each capability
              </p>
            </div>

            <div className="space-y-2.5">
              {engineeringCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3.5 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-active)] text-[var(--accent-amber)]">
                      <DynamicIcon name={cap.icon} className="h-3.5 w-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-sans text-xs font-bold text-[var(--text-primary)]">{cap.title}</h4>
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                        {cap.description}
                      </p>
                      <div className="pt-1 font-mono text-[10px] text-[var(--accent-amber)] font-medium">
                        Evidence: {cap.evidenceProjects.join(' | ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[var(--border-hairline)]">
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent-amber)] hover:underline"
            >
              <span>SEE INTERVIEW-FOCUSED SKILL SET</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Right 5 cols: Portfolio Composition Donut */}
        <div className="flex flex-col justify-between bevel-panel p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="border-b border-[var(--border-hairline)] pb-3">
              <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
                Portfolio Composition
              </h3>
              <p className="font-mono text-[10px] text-[var(--text-secondary)]">
                Technical domain concentration
              </p>
            </div>

            {/* Recharts Donut Chart */}
            <div className="relative h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as (typeof portfolioComposition)[0];
                        return (
                          <div className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-bg)] p-2 font-mono tabular-nums text-xs text-[var(--text-primary)] shadow-md">
                            <span className="font-bold text-[var(--accent-amber)]">{data.name}</span>
                            <div className="text-[var(--text-secondary)]">{data.value}% ({data.count} projects)</div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Pie
                    data={portfolioComposition}
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveDonutIndex(index)}
                  >
                    {portfolioComposition.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={donutColors[index % donutColors.length]}
                        stroke="var(--bg-main)"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Shield Icon */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Composition Legend with neutral / amber color indicators */}
            <div className="space-y-1.5">
              {portfolioComposition.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-[2px] bg-[var(--panel-sub)] px-3 py-1.5 font-mono tabular-nums text-[11px]"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-[1px]"
                      style={{ backgroundColor: donutColors[index % donutColors.length] }}
                    />
                    <span className="text-[var(--text-primary)] font-sans">{item.name}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">({item.count})</span>
                  </div>
                  <span className="font-bold text-[var(--accent-amber)]">{item.value}%</span>
                </div>
              ))}
            </div>

            {/* Note banner */}
            <div className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3 text-xs">
              <div className="meta-label !text-[var(--accent-amber)]">
                APPLIED DS/ML FOCUS
              </div>
              <p className="mt-1 font-sans text-[11px] leading-relaxed text-[var(--text-secondary)]">
                Concentrated on machine learning and analytics with emphasis on cross-validation, explainability, sub-50ms inference, and decision support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Rigor Table as Bevel Panel */}
      <div className="bevel-panel p-6 space-y-4">
        <div className="border-b border-[var(--border-hairline)] pb-3">
          <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
            Evaluation Rigor Matrix
          </h3>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">
            Explicit validation strategy and performance metrics per architecture.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono tabular-nums text-xs">
            <thead>
              <tr className="border-b border-[var(--border-hairline)] text-[10px] text-[var(--text-muted)]">
                <th className="pb-2">PROJECT</th>
                <th className="pb-2">VALIDATION STRATEGY</th>
                <th className="pb-2">KEY METRIC</th>
                <th className="pb-2">DETAILS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-hairline)]">
              {mlEvaluations.map((row) => (
                <tr key={row.project} className="hover:bg-[var(--panel-sub)] transition-colors">
                  <td className="py-2.5 font-bold text-[var(--text-primary)]">{row.project}</td>
                  <td className="py-2.5 text-[var(--accent-amber)]">{row.validationStrategy}</td>
                  <td className="py-2.5 text-[var(--text-secondary)] font-sans">{row.keyMetric}</td>
                  <td className="py-2.5 text-[var(--text-muted)] font-sans">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTABanner */}
      <CTABanner
        message="Numbers tell stories. These metrics summarize the scale, impact, and technical depth behind the projects showcased in this portfolio."
        nextRoute="/journey"
        nextLabel="Explore Journey"
      />
    </div>
  );
};
