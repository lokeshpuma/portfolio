export interface StatMetric {
  id: string;
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  badge?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'Data Analysis' | 'Statistics' | 'Machine Learning' | 'Visualization';
  icon?: string;
}

export interface InterviewCoverageItem {
  id: string;
  theme: string;
  projects: string;
  description?: string;
}

export interface SkillCategorySummary {
  name: 'Programming' | 'Data Analysis' | 'Statistics' | 'Machine Learning' | 'Visualization';
  count: number;
  skills: string;
  icon: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ML' | 'Analytics' | 'Visualization' | 'Systems' | 'CP';
  description: string;
  tags: string[];
  status?: 'completed' | 'in-progress';
  statusLabel?: string;
  metrics: ProjectMetric[];
  links: {
    details?: string;
    demo?: string;
    github?: string;
  };
  detailsData?: {
    overview: string;
    problem: string;
    architecture: string[];
    results: string[];
    techStack: string[];
  };
}

export interface TechnicalProofItem {
  id: string;
  projectTitle: string;
  statBadge: string;
  statColor?: string;
  description: string;
}

export interface EngineeringCapability {
  id: string;
  icon: string;
  title: string;
  description: string;
  evidenceProjects: string[];
}

export interface PortfolioCompositionItem {
  name: string;
  value: number;
  count: number;
  color: string;
}

export interface MLEvaluationRow {
  project: string;
  validationStrategy: string;
  keyMetric: string;
  detail: string;
}

export interface StoryItem {
  id: string;
  icon: string;
  project: string;
  headline: string;
  narrative: string;
}

export interface WorkPrinciple {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface JourneyMilestone {
  id: string;
  yearOrDate: string;
  badgeType: string;
  title: string;
  subtitle?: string;
  orgLogoText?: string;
  bullets: string[];
  highlightStat?: {
    label: string;
    value: string;
  };
  durationText?: string;
  links?: { label: string; url: string }[];
}

export type CertificateCategory =
  | 'all'
  | 'aiml'
  | 'data-science'
  | 'cloud'
  | 'genai'
  | 'nlp'
  | 'python'
  | 'additional';

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  category: 'aiml' | 'data-science' | 'cloud' | 'genai' | 'nlp' | 'python' | 'additional';
  categoryLabel: string;
  completionDate: string;
  isoDate: string; // YYYY-MM-DD for accurate sorting
  credentialType: string;
  resultScore?: string;
  achievementDetails?: {
    score?: string;
    assignments?: string;
    exam?: string;
    duration?: string;
    credits?: string;
  };
  description: string;
  badge: string;
  certificateUrl: string;
  featured?: boolean;
  tags: string[];
  providerIconKey?: string;
  isDuplicateUrlFlagged?: boolean;
}

export type SocialCategory =
  | 'all'
  | 'featured'
  | 'professional'
  | 'coding'
  | 'aiml'
  | 'writing'
  | 'networking'
  | 'community'
  | 'social';

export interface SocialProfileItem {
  id: string;
  name: string;
  category: 'professional' | 'coding' | 'aiml' | 'writing' | 'networking' | 'community' | 'social';
  categoryLabel: string;
  username: string;
  url: string;
  description: string;
  ctaText: string;
  featured?: boolean;
  platformIconKey: string;
  badge?: string;
  accentGradient?: string;
}
