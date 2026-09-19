import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileData, globalStatMetrics } from '../data/profile';
import { StatCard } from '../components/common/StatCard';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import { Sparkles, Activity } from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typing effect for the headline role
  useEffect(() => {
    const currentRole = profileData.typingRoles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % profileData.typingRoles.length);
    } else {
      timeout = setTimeout(() => {
        const nextLength = isDeleting ? typedText.length - 1 : typedText.length + 1;
        setTypedText(currentRole.substring(0, nextLength));
      }, isDeleting ? 35 : 75);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Hero Spatial Glass Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard
          elevated
          className="p-6 md:p-10 border-white/15 dark:border-white/10"
          tiltIntensity={4}
        >
          {/* Subtle Ambient Radial Lighting within Card */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            {/* Multi-Layered Frosted Glass Avatar */}
            <div className="relative shrink-0 self-center md:self-start">
              <div className="relative flex h-28 w-28 md:h-36 md:w-36 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/40 bg-gradient-to-tr from-cyan-500/20 via-slate-800 to-purple-500/20 p-1 shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-transform duration-300 hover:scale-105">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
              {/* Online Pulse Indicator */}
              <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_10px_#34d399] dark:border-[#0c1424] dark:bg-emerald-400" />
            </div>

            {/* Profile Bio Details */}
            <div className="space-y-4 text-center md:text-left flex-1">
              {/* Status Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <span className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-md dark:border-cyan-400/30 dark:text-cyan-300">
                  <Activity className="h-3 w-3" />
                  {profileData.handle}
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:border-emerald-400/30 dark:text-emerald-300">
                  {profileData.statusBadge}
                </span>
                <span className="hidden sm:inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-700 backdrop-blur-md dark:border-purple-400/30 dark:text-purple-300">
                  {profileData.educationBadge}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {profileData.name}
              </h1>

              {/* Animated Shimmer Typing Role */}
              <div className="h-7 text-lg font-bold text-cyan-600 dark:text-cyan-400 md:text-2xl flex items-center justify-center md:justify-start gap-1">
                <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-teal-300 dark:to-blue-400">
                  {typedText}
                </span>
                <span className="animate-pulse text-cyan-500 font-normal">|</span>
              </div>

              {/* Short Bio */}
              <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                {profileData.shortBio}
              </p>

              {/* Tech Stack Glass Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 md:justify-start">
                {profileData.skillsPills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/20 bg-white/50 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-700 hover:shadow-[0_4px_12px_rgba(34,211,238,0.15)] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Section Header */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Portfolio <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Overview</span>
        </h2>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-medium text-cyan-700 backdrop-blur-md dark:border-cyan-400/20 dark:text-cyan-300">
          Telemetry & Key Stats
        </span>
      </div>

      {/* 6 Spatial Stat Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {globalStatMetrics.map((stat, idx) => (
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

      {/* Guided Tour CTA */}
      <CTABanner
        message="Built end-to-end analytics platforms, deep learning architectures, agentic pipelines, and interactive dashboards across climate, healthcare, agriculture, sports, and bioinformatics."
        nextRoute="/skills"
        nextLabel="Explore Technical Skills"
      />
    </div>
  );
};
