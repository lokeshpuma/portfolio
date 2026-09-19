import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  socialProfilesData,
  socialCategoriesList
} from '../data/socialProfiles';
import { SocialCategory } from '../types';
import { ProfileCard } from '../components/social/ProfileCard';
import { GitHubLiveActivity } from '../components/social/GitHubLiveActivity';
import { WhereIBuildSummary } from '../components/social/WhereIBuildSummary';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import {
  Search,
  Sparkles,
  Share2,
  Code2,
  Brain,
  Award,
  Globe,
  BookOpen,
  Users,
  Compass
} from 'lucide-react';

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

  const featuredProfiles = socialProfilesData.filter((p) => p.featured);

  // Group by category when displaying All (and search is empty)
  const categoryOrder: { key: SocialCategory; label: string; icon: React.ElementType }[] = [
    { key: 'aiml', label: 'AI & Machine Learning', icon: Brain },
    { key: 'coding', label: 'Coding & Problem Solving', icon: Code2 },
    { key: 'professional', label: 'Professional Networks', icon: Globe },
    { key: 'writing', label: 'Writing & Articles', icon: BookOpen },
    { key: 'networking', label: 'Professional Networking & Mentorship', icon: Users },
    { key: 'community', label: 'Developer Community', icon: Award },
    { key: 'social', label: 'Social Media', icon: Share2 }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Page Hero Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Social & <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Activity</span>
            </h1>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Connect with me across the platforms where I build, train models, compete, write, and share open-source code.
          </p>
        </div>

        {/* Indicator Pill */}
        <div className="flex items-center gap-2 self-start rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur-md dark:border-cyan-400/30 dark:text-cyan-300 md:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          <span>Connected Across 20+ Platforms</span>
        </div>
      </div>

      {/* Live GitHub Telemetry Card */}
      <GitHubLiveActivity />

      {/* Where I Build Workflow Mapping */}
      <WhereIBuildSummary />

      {/* Search & Category Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search platforms, handles, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/20 bg-white/60 py-2.5 pl-10 pr-4 text-xs font-medium text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-xl transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#0c1424]/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProfiles.length}</span> profiles
          </div>
        </div>

        {/* Horizontally scrollable category pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {socialCategoriesList.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as SocialCategory)}
                className={`flex shrink-0 items-center gap-1.5 rounded-2xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? 'glass-pill-active text-cyan-900 dark:text-cyan-200 font-bold shadow-sm'
                    : 'border border-white/15 bg-white/50 text-slate-600 hover:bg-white/80 dark:border-white/[0.08] dark:bg-[#0c1424]/75 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-950 dark:text-cyan-200'
                      : 'bg-white/60 text-slate-500 dark:bg-white/[0.06] dark:text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Profiles Section */}
      {(selectedCategory === 'all' || selectedCategory === 'featured') && !searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Featured Profiles
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Key developer, AI/ML & competitive platforms
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProfiles.map((profile, idx) => (
              <ProfileCard key={profile.id} profile={profile} featured={true} index={idx} />
            ))}
          </div>
        </div>
      )}

      {/* All / Filtered Profiles Grid */}
      {selectedCategory === 'all' && !searchQuery ? (
        <div className="space-y-8">
          {categoryOrder.map((catGroup) => {
            const catProfiles = socialProfilesData.filter((p) => p.category === catGroup.key);
            if (catProfiles.length === 0) return null;
            const Icon = catGroup.icon;

            return (
              <div key={catGroup.key} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2 dark:border-white/[0.06]">
                  <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    {catGroup.label}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">({catProfiles.length})</span>
                </div>

                <div
                  className={`grid gap-4 ${
                    catGroup.key === 'social'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {catProfiles.map((profile, idx) => (
                    <ProfileCard key={profile.id} profile={profile} index={idx} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProfiles.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProfiles.map((profile, idx) => (
                <ProfileCard key={profile.id} profile={profile} index={idx} />
              ))}
            </div>
          ) : (
            <GlassCard className="p-10 text-center" enableTilt={false}>
              <Compass className="mx-auto h-8 w-8 text-slate-400" />
              <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                No profiles found
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Try adjusting your search query or selecting a different category filter.
              </p>
            </GlassCard>
          )}
        </div>
      )}

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Interested in AI, machine learning, deep learning, or building intelligent systems? Let's collaborate and connect."
        nextRoute="/contact"
        nextLabel="Explore Contact Tab"
      />
    </div>
  );
};
