import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileData, globalStatMetrics } from '../data/profile';
import { StatCard } from '../components/common/StatCard';
import { CTABanner } from '../components/common/CTABanner';

export const OverviewPage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for the headline role
  useEffect(() => {
    const currentRole = profileData.typingRoles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % profileData.typingRoles.length);
    } else {
      timeout = setTimeout(() => {
        const nextLength = isDeleting ? typedText.length - 1 : typedText.length + 1;
        setTypedText(currentRole.substring(0, nextLength));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Hero Profile Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-cyan-500/20 dark:bg-gradient-to-b dark:from-[#0e1628]/95 dark:via-[#0b1222]/95 dark:to-[#070c18]/95 dark:shadow-2xl md:p-8"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/15" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          {/* Avatar on Hero */}
          <div className="relative shrink-0 self-center md:self-start">
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/50 bg-gradient-to-tr from-cyan-100 via-white to-blue-100 p-1 shadow-[0_0_20px_rgba(34,211,238,0.25)] dark:from-cyan-950 dark:via-slate-900 dark:to-purple-950 md:h-32 md:w-32">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_8px_#34d399] dark:border-[#0e1628] dark:bg-emerald-400" />
          </div>

          {/* Profile Bio Details */}
          <div className="space-y-3.5 text-center md:text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-950/50 dark:text-cyan-300">
                {profileData.handle}
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-400">
                {profileData.statusBadge}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              {profileData.name}
            </h1>

            {/* Typing Role */}
            <div className="h-7 text-lg font-bold text-cyan-600 dark:text-cyan-400 md:text-xl">
              <span>{typedText}</span>
              <span className="animate-pulse text-cyan-500 dark:text-cyan-300 font-normal">|</span>
            </div>

            {/* Short Bio */}
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {profileData.shortBio}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 md:justify-start">
              {profileData.skillsPills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] dark:bg-cyan-400" />
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Portfolio <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Overview</span>
        </h2>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-50 px-3 py-0.5 text-xs font-medium text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-950/50 dark:text-cyan-300">
          Analytics Summary
        </span>
      </div>

      {/* StatCard Grid: 6 Cards (2 cols mobile, 3 cols desktop) */}
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

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Built end-to-end analytics platforms, machine learning systems, and interactive dashboards across climate, healthcare, education, agriculture, sports, and bioinformatics domains."
        nextRoute="/skills"
        nextLabel="Explore Skills"
      />
    </div>
  );
};
