import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  socialProfilesData,
  socialCategoriesList
} from '../data/socialProfiles';
import { SocialCategory } from '../types';
import { ProfileCard } from '../components/social/ProfileCard';
import { CTABanner } from '../components/common/CTABanner';
import { Search } from 'lucide-react';

export const SocialActivityPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SocialCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering profiles
  const filteredProfiles = socialProfilesData.filter((profile) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'featured'
        ? profile.featured
        : profile.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      profile.name.toLowerCase().includes(query) ||
      profile.description.toLowerCase().includes(query) ||
      profile.username.toLowerCase().includes(query) ||
      profile.categoryLabel.toLowerCase().includes(query) ||
      (profile.badge && profile.badge.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { key: 'all' as SocialCategory, label: 'All Channels' },
    { key: 'featured' as SocialCategory, label: 'Featured' },
    { key: 'professional' as SocialCategory, label: 'Professional' },
    { key: 'aiml' as SocialCategory, label: 'AI & ML' },
    { key: 'coding' as SocialCategory, label: 'Algorithms' },
    { key: 'writing' as SocialCategory, label: 'Articles' },
    { key: 'social' as SocialCategory, label: 'Social' }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Page Hero Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
            <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Social & Activity
            </h1>
            <span className="meta-label outline-tag px-2 py-0.5">
              DEVELOPER PROFILES
            </span>
          </div>
          <p className="max-w-3xl text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
            Connect across platforms where I build, collaborate, benchmark models, compete, and share technical documentation.
          </p>
        </div>

        {/* Status Indicator Tag */}
        <div className="flex items-center gap-2 self-start font-mono text-[10px] text-[var(--accent-amber)] border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3 py-1 rounded-[2px] md:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
          <span>NETWORK // CHANNELS ACTIVE</span>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search platforms, handles, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] py-2 pl-9 pr-3 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)]"
            />
          </div>

          <span className="font-mono tabular-nums text-[10px] text-[var(--text-muted)]">
            {filteredProfiles.length} PLATFORMS CONNECTED
          </span>
        </div>

        {/* Category Outline Filters */}
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`rounded-[2px] px-2.5 py-1 font-mono text-xs transition ${
                selectedCategory === cat.key
                  ? 'border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent-amber)] font-bold'
                  : 'border border-[var(--border-hairline)] bg-[var(--panel-sub)] text-[var(--text-muted)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Profile Bevel Panels */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProfiles.map((profile, idx) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            featured={profile.featured}
            index={idx}
          />
        ))}
      </div>

      {/* CTABanner */}
      <CTABanner
        message="Have an internship, project, or collaboration in mind? Reach out directly via the contact form or email."
        nextRoute="/contact"
        nextLabel="Get In Touch"
      />
    </div>
  );
};
