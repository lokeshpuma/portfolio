import React, { useState } from 'react';
import {
  certificationsData,
  certificateCategoriesList,
  learningJourneyTimeline
} from '../data/certifications';
import { CertificateCategory, CertificationItem } from '../types';
import { CertificateCard } from '../components/certificates/CertificateCard';
import { CertificateDetailModal } from '../components/certificates/CertificateDetailModal';
import { CTABanner } from '../components/common/CTABanner';
import { GlassCard } from '../components/common/GlassCard';
import {
  Search,
  Sparkles,
  BookOpen,
  ArrowUpDown,
  GraduationCap,
  Cloud,
  Brain,
  Terminal,
  Layers,
  Compass,
  ArrowRight
} from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedCertForModal, setSelectedCertForModal] = useState<CertificationItem | null>(null);

  // Filter & sort logic
  const filteredCertificates = certificationsData
    .filter((cert) => {
      const matchesCategory =
        selectedCategory === 'all' ? true : cert.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        cert.title.toLowerCase().includes(query) ||
        cert.provider.toLowerCase().includes(query) ||
        cert.categoryLabel.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.isoDate.localeCompare(a.isoDate);
      } else {
        return a.isoDate.localeCompare(b.isoDate);
      }
    });

  // Ordered Categories when viewing 'all' and search is empty
  const categorySections: { key: CertificateCategory; label: string; icon: React.ElementType }[] = [
    { key: 'aiml', label: 'AI, Machine Learning & Deep Learning', icon: Brain },
    { key: 'genai', label: 'Generative AI', icon: Sparkles },
    { key: 'data-science', label: 'Data Science & Analytics', icon: Layers },
    { key: 'cloud', label: 'Cloud Computing', icon: Cloud },
    { key: 'nlp', label: 'Natural Language Processing', icon: BookOpen },
    { key: 'python', label: 'Python & Programming Foundations', icon: Terminal },
    { key: 'additional', label: 'Additional Learning', icon: GraduationCap }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-cyan-500 shadow-[0_0_12px_#22d3ee] dark:bg-cyan-400" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Certifications & <span className="text-cyan-600 dark:text-cyan-400 text-glow-cyan">Learning</span>
          </h1>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          A collection of certifications, professional learning programs, cloud training, and hands-on job simulations covering AI, Machine Learning, Data Science, NLP, Python, and Cloud Computing.
        </p>

        {/* Small Statistics Summary Bar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 pt-2">
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400">12+</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Credentials</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">AI / ML</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Deep Learning & OCI</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">GenAI</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">BCG X Simulation</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">Data Science</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Analytics & Forage</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">Cloud</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">GCP & Datacom</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/60 p-3.5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0c1424]/80">
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">Python & NLP</div>
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Text Mining & Syntax</div>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search certifications, providers, skills..."
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

          {/* Sort Order Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sort by:</span>
            <button
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className="flex items-center gap-1.5 rounded-2xl border border-white/20 bg-white/60 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition hover:bg-white/80 dark:border-white/10 dark:bg-[#0c1424]/80 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <ArrowUpDown className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {certificateCategoriesList.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CertificateCategory)}
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

      {/* Categorized Layout vs Filtered List */}
      {selectedCategory === 'all' && !searchQuery ? (
        <div className="space-y-10">
          {categorySections.map((sec) => {
            const secCertificates = certificationsData.filter((c) => c.category === sec.key);
            if (secCertificates.length === 0) return null;
            const Icon = sec.icon;

            return (
              <div key={sec.key} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5 dark:border-white/[0.06]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    {sec.label}
                  </h2>
                  <span className="text-xs text-slate-400 font-medium">({secCertificates.length})</span>
                </div>

                {/* Cards Grid */}
                <div
                  className={`grid gap-5 ${
                    sec.key === 'aiml' || sec.key === 'genai' || sec.key === 'cloud'
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {secCertificates.map((cert, idx) => (
                    <CertificateCard
                      key={cert.id}
                      certificate={cert}
                      featured={cert.featured}
                      onOpenDetails={(c) => setSelectedCertForModal(c)}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCertificates.map((cert, idx) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  featured={cert.featured}
                  onOpenDetails={(c) => setSelectedCertForModal(c)}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <GlassCard className="p-10 text-center" enableTilt={false}>
              <Compass className="mx-auto h-8 w-8 text-slate-400" />
              <h3 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                No certifications found
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Try adjusting your search query or switching category filters.
              </p>
            </GlassCard>
          )}
        </div>
      )}

      {/* Learning Journey Progression Section */}
      <GlassCard className="p-6 md:p-8" enableTilt={false}>
        <div className="border-b border-white/10 pb-4 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Learning Journey & Continuous Progression
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            How coursework, academic certifications, and industry simulations shaped my technical capabilities
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {learningJourneyTimeline.map((item, idx) => (
            <div
              key={item.year}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/40 p-5 backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
            >
              <div>
                <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-bold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                  {item.year}
                </span>
                <h4 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="mt-4 hidden md:flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <span>Progression</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* CTABanner Guided Tour */}
      <CTABanner
        message="Continuous learning through industry-recognized certifications, hands-on projects, and practical application of analytical and machine learning concepts."
        nextRoute="/social"
        nextLabel="Explore Social & Activity"
      />

      {/* Certificate Detail Modal */}
      <CertificateDetailModal
        certificate={selectedCertForModal}
        onClose={() => setSelectedCertForModal(null)}
      />
    </div>
  );
};
