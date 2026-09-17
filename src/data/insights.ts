import {
  TechnicalProofItem,
  EngineeringCapability,
  PortfolioCompositionItem,
  MLEvaluationRow,
  StoryItem,
  WorkPrinciple
} from '../types';

export const selectedTechnicalProof: TechnicalProofItem[] = [
  {
    id: 'prenatal-proof',
    projectTitle: 'Prenatal Postnatal Risk Detection',
    statBadge: 'Sub-50ms inference across 3 modalities',
    description: 'Trained multi-modal neonatal risk models and audio cry classification neural networks with TensorFlow and Scikit-Learn.'
  },
  {
    id: 'skilllens-proof',
    projectTitle: 'SkillLens',
    statBadge: '95 skills across 3-year forecast horizons',
    description: 'Synthesized skill obsolescence curves with K-Means clustering, vector embeddings, and FastAPI MLOps pipelines.'
  },
  {
    id: 'heatflux-proof',
    projectTitle: 'HeatFlux AI',
    statBadge: '25 cities and 26 engineered features',
    description: 'Benchmarked ensemble regressors with city-aware GroupKFold across ~4,500 observations from Google Earth Engine.'
  },
  {
    id: 'hydrotriage-proof',
    projectTitle: 'Hydro Triage',
    statBadge: '19 automated tests & 100% safety overrides',
    description: 'Built deterministic healthcare symptom triage with Supabase PostgreSQL and Groq conversational intent classification.'
  },
  {
    id: 'tonepulse-proof',
    projectTitle: 'Tone Pulse AI',
    statBadge: '100% validation on benchmark datasets',
    description: 'Engineered privacy-conscious FastAPI sentiment & distress analysis with Next.js 16 and Hugging Face Transformers.'
  },
  {
    id: 'datastory-proof',
    projectTitle: 'Data Story AI',
    statBadge: 'Automated SMOTE, GridSearchCV & RAG',
    description: 'Integrated automated exploratory profiling, hyperparameter optimization, and dataset QA conversational workflows.'
  }
];

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: 'deep-learning-systems',
    icon: 'Target',
    title: 'Deep Learning & Predictive Modeling',
    description: 'Acoustic feature classification, neural networks, time-series forecasting, and cross-validated ensemble regressors.',
    evidenceProjects: ['Prenatal Risk Detection', 'SkillLens', 'HeatFlux AI']
  },
  {
    id: 'fullstack-ai-prod',
    icon: 'Code',
    title: 'Full-Stack AI & MLOps Deployment',
    description: 'Turned research algorithms into containerized Docker web services with FastAPI, Next.js, and automated GitHub Actions.',
    evidenceProjects: ['SkillLens', 'Tone Pulse AI', 'Hydro Triage']
  },
  {
    id: 'explainable-ai',
    icon: 'ShieldCheck',
    title: 'Explainable, Local & Responsible AI',
    description: 'Deterministic clinical safety engines, local-first zero data persistence NLP, and verifiable feature attributions.',
    evidenceProjects: ['Hydro Triage', 'Tone Pulse AI', 'Data Story AI']
  },
  {
    id: 'data-eng-ml',
    icon: 'Database',
    title: 'Geospatial & Vector Data Engineering',
    description: 'Google Earth Engine satellite pipelines, vector database embeddings, SMOTE class balancing, and RAG retrieval systems.',
    evidenceProjects: ['HeatFlux AI', 'SkillLens', 'Data Story AI']
  }
];

export const portfolioComposition: PortfolioCompositionItem[] = [
  { name: 'Machine Learning & Deep Learning', value: 55, count: 7, color: '#22d3ee' },
  { name: 'Analytics & Profiling', value: 20, count: 3, color: '#3b82f6' },
  { name: 'Systems & Safety Engines', value: 15, count: 2, color: '#10b981' },
  { name: 'Competitive Algorithms', value: 10, count: 1, color: '#f59e0b' }
];

export const mlEvaluations: MLEvaluationRow[] = [
  {
    project: 'Prenatal Postnatal Risk',
    validationStrategy: 'Multi-modal validation',
    keyMetric: 'Sub-50ms inference | TensorFlow + Scikit-Learn',
    detail: 'Acoustic baby cry classification and fetal risk regression.'
  },
  {
    project: 'SkillLens',
    validationStrategy: 'Time-series forecasting',
    keyMetric: '95 skills | 1-, 2-, 3-year forecast horizons',
    detail: 'Vector database clustering with MLOps tracking.'
  },
  {
    project: 'HeatFlux AI',
    validationStrategy: 'City-aware validation',
    keyMetric: 'Up to 8 regressors | GroupKFold | 25 cities',
    detail: 'Spatial holdout prevents geospatial test data contamination.'
  },
  {
    project: 'Hydro Triage',
    validationStrategy: '19 automated test suites',
    keyMetric: '100% deterministic safety override',
    detail: 'Rule-based clinical contraindication guarantees.'
  },
  {
    project: 'Tone Pulse AI',
    validationStrategy: 'Benchmark validation',
    keyMetric: '100% accuracy on test datasets | Sub-15ms',
    detail: 'Privacy-focused sentiment & psychological distress analysis.'
  },
  {
    project: 'Data Story AI',
    validationStrategy: 'GridSearchCV optimization',
    keyMetric: 'SMOTE rebalancing | RAG conversational QA',
    detail: 'Automated dataset profiling with balanced multi-class evaluation.'
  }
];

export const storiesWorthDiscussing: StoryItem[] = [
  {
    id: 'prenatal-story',
    icon: 'TrendingUp',
    project: 'Prenatal Postnatal Risk Detection',
    headline: 'Multi-modal neonatal risk & cry audio classification',
    narrative: 'Combined tabular clinical maternal risk indicators with deep neural acoustic audio models for comprehensive neonatal distress classification.'
  },
  {
    id: 'skilllens-story',
    icon: 'Users',
    project: 'SkillLens',
    headline: 'Forecasting technological skill extinction curves',
    narrative: 'Engineered decay rate metrics and vector distance similarity models to project career capability longevity across multi-year horizons.'
  },
  {
    id: 'heatflux-story',
    icon: 'Compass',
    project: 'HeatFlux AI',
    headline: 'Geospatial ML with spatial leakage prevention',
    narrative: 'Grouped 25 cities during validation across ~4,500 observations so satellite test tiles never appeared in training.'
  },
  {
    id: 'hydrotriage-story',
    icon: 'Shield',
    project: 'Hydro Triage',
    headline: 'Deterministic healthcare safety overrides',
    narrative: 'Separated symptom urgency determination into deterministic clinical rule sets while using conversational LLMs purely for natural language intake.'
  }
];

export const howIWorkPrinciples: WorkPrinciple[] = [
  {
    id: 'validate',
    icon: 'CheckCircle2',
    title: 'Validate before deploying',
    description: 'Used GroupKFold, stratified splits, five-fold CV, and automated test suites instead of reporting inflated training metrics.',
    tag: 'Validation'
  },
  {
    id: 'reproducible',
    icon: 'FileCode2',
    title: 'Keep pipelines reproducible',
    description: 'Containerized applications with Docker and automated deployments using GitHub Actions and MLOps tracking.',
    tag: 'Reproducibility'
  },
  {
    id: 'inspectable',
    icon: 'Eye',
    title: 'Make results inspectable',
    description: 'Provided explainable feature attributions, word-level attention cues, and confidence metrics for every model output.',
    tag: 'Explainability'
  },
  {
    id: 'usable-product',
    icon: 'Layers',
    title: 'Finish with a usable product',
    description: 'Projects conclude in interactive web applications, real-time APIs, and deployable tools rather than static notebooks.',
    tag: 'Engineering'
  }
];
