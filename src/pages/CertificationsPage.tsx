import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  certificationsData,
  certificateCategoriesList,
  learningJourneyTimeline
} from '../data/certifications';
import { CertificateCategory, CertificationItem } from '../types';
import { CertificateCard } from '../components/certificates/CertificateCard';
import { CertificateDetailModal } from '../components/certificates/CertificateDetailModal';
import { CTABanner } from '../components/common/CTABanner';
import {
  Search,
  Award,
  Sparkles,
  BookOpen,
  ArrowUpDown,
  GraduationCap,
  Cloud,
  Brain,
  Terminal,
  Layers,
  Calendar,
  CheckCircle2
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

  const categories = [
    { key: 'all' as CertificateCategory, label: 'All' },
    { key: 'aiml' as CertificateCategory, label: 'AI & ML' },
    { key: 'genai' as CertificateCategory, label: 'GenAI' },
    { key: 'data-science' as CertificateCategory, label: 'Data Science' },
    { key: 'cloud' as CertificateCategory, label: 'Cloud' },
    { key: 'nlp' as CertificateCategory, label: 'NLP' },
    { key: 'python' as CertificateCategory, label: 'Python' },
    { key: 'additional' as CertificateCategory, label: 'Additional' }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-5 w-[3px] bg-[var(--accent-amber)] shadow-[0_0_6px_var(--accent-glow)] rounded-[1px]" />
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Certifications & Learning
          </h1>
          <span className="meta-label outline-tag px-2 py-0.5">
            CREDENTIAL VERIFICATION
          </span>
        </div>
        <p className="max-w-3xl text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
          Academic certifications, professional learning tracks, cloud programs, and hands-on job simulations across AI, Machine Learning, Data Science, and Cloud Computing.
        </p>

        {/* Small Statistics Summary Bar in Ledger Style snapped to 8px */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 pt-1">
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono tabular-nums text-lg font-bold text-[var(--accent-amber)]">12+</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">CREDENTIALS</div>
          </div>
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono text-lg font-bold text-[var(--text-primary)]">AI / ML</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">DEEP LEARNING & OCI</div>
          </div>
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono text-lg font-bold text-[var(--text-primary)]">GENAI</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">BCG X SIMULATION</div>
          </div>
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono text-lg font-bold text-[var(--text-primary)]">DATA SCIENCE</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">ANALYTICS & FORAGE</div>
          </div>
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono text-lg font-bold text-[var(--text-primary)]">CLOUD</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">GCP & ORACLE</div>
          </div>
          <div className="bevel-panel p-3 text-center">
            <div className="font-mono tabular-nums text-lg font-bold text-[var(--accent-amber)]">73%</div>
            <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase">NPTEL ELITE</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search by title, provider, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] py-2 pl-9 pr-3 font-mono text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-[var(--accent-border)]"
            />
          </div>

          {/* Sort Button */}
          <button
            onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            className="flex items-center gap-1.5 self-start rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] px-3 py-2 font-mono text-xs text-[var(--text-secondary)] transition hover:border-[var(--accent-border)] hover:text-[var(--text-primary)] sm:self-auto"
          >
            <ArrowUpDown className="h-3 w-3 text-[var(--accent-amber)]" />
            <span>SORT: {sortOrder.toUpperCase()}</span>
          </button>
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

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Learning Journey Timeline as Bevel Panel */}
      <div className="bevel-panel p-6 space-y-4">
        <div className="border-b border-[var(--border-hairline)] pb-3">
          <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-[var(--text-primary)]">
            Learning Journey & Continuous Progression
          </h3>
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">
            Chronological progression of learning tracks and credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {learningJourneyTimeline.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[2px] border border-[var(--border-hairline)] bg-[var(--panel-sub)] p-3.5 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono tabular-nums text-[10px] font-bold text-[var(--accent-amber)]">{item.year}</span>
                <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase">MILESTONE</span>
              </div>
              <h4 className="font-sans text-xs font-bold text-[var(--text-primary)]">{item.title}</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTABanner */}
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
