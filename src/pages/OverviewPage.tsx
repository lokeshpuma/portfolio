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
      {/* Hero Profile Bevel Panel */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bevel-panel p-6 md:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Beveled Square Avatar Frame matching dock */}
          <div className="relative shrink-0 self-center md:self-start">
            <div
              className="relative flex h-24 w-24 items-center justify-center p-1 md:h-28 md:w-28"
              style={{
                clipPath:
                  'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
                background: 'linear-gradient(145deg, var(--border-light), var(--panel-sub))',
              }}
            >
              <div
                className="h-full w-full overflow-hidden bg-[var(--panel-sub)]"
                style={{
                  clipPath:
                    'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
                }}
              >
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            {/* Status Indicator */}
            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-[var(--bg-main)] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)]" />
          </div>

          {/* Profile Bio Details */}
          <div className="space-y-3 text-center md:text-left flex-1 min-w-0">
            {/* Outline Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="outline-tag px-2 py-0.5">
                {profileData.handle}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent-amber)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
                <span>{profileData.statusBadge}</span>
              </span>
            </div>

            {/* Name - Display face anchored to avatar baseline */}
            <h1 className="font-sans text-3xl font-bold tracking-tight text-[var(--text-primary)] uppercase md:text-4xl leading-tight">
              {profileData.name}
            </h1>

            {/* Typing Role */}
            <div className="h-6 font-mono text-sm md:text-base font-semibold text-[var(--accent-amber)] flex items-center">
              <span>{typedText}</span>
              <span className="animate-pulse text-[var(--accent-amber)] font-normal ml-0.5">_</span>
            </div>

            {/* Short Bio: line-height 1.7, max-w-[70ch] */}
            <p className="bio-body text-xs md:text-sm text-[var(--text-secondary)]">
              {profileData.shortBio}
            </p>

            {/* Tech Stack Chips in Outline-Tag Style snapped to 8px gap */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 md:justify-start">
              {profileData.skillsPills.map((skill) => (
                <span
                  key={skill}
                  className="outline-tag px-2.5 py-0.5 transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent-amber)]"
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
        <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
        <h2 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Portfolio Overview
        </h2>
        <span className="meta-label outline-tag px-2 py-0.5">
          TELEMETRY // SUMMARY
        </span>
      </div>

      {/* StatCard Grid: 6 Cards as one cohesive ledger block snapped to 8px grid */}
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
