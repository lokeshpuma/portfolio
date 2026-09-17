import { SkillItem, InterviewCoverageItem, SkillCategorySummary } from '../types';

export const technicalSkills: SkillItem[] = [
  { id: 'python', name: 'Python', category: 'Programming', icon: 'Code' },
  { id: 'cpp', name: 'C++', category: 'Programming', icon: 'Terminal' },
  { id: 'tensorflow-pytorch', name: 'TensorFlow & PyTorch', category: 'Machine Learning', icon: 'Cpu' },
  { id: 'fastapi-flask', name: 'FastAPI & Flask', category: 'Programming', icon: 'Layers' },
  { id: 'react-tailwind', name: 'React & Tailwind CSS', category: 'Visualization', icon: 'LayoutDashboard' },
  { id: 'scikit-learn', name: 'Scikit-Learn', category: 'Machine Learning', icon: 'Cpu' },
  { id: 'deep-learning-nlp', name: 'Deep Learning & NLP', category: 'Machine Learning', icon: 'Brain' },
  { id: 'data-cleaning-eda', name: 'Data Cleaning & EDA', category: 'Data Analysis', icon: 'Sparkles' },
  { id: 'smote-tuning', name: 'SMOTE & GridSearchCV', category: 'Machine Learning', icon: 'Sliders' },
  { id: 'vector-dbs', name: 'Vector Databases & RAG', category: 'Data Analysis', icon: 'Database' },
  { id: 'docker-mlops', name: 'Docker & MLOps CI/CD', category: 'Programming', icon: 'Cpu' },
  { id: 'prob-stats', name: 'Probability & Statistics', category: 'Statistics', icon: 'PieChart' },
];

export const interviewCoverage: InterviewCoverageItem[] = [
  {
    id: 'problem-framing',
    theme: 'Problem Framing & Auto-EDA',
    projects: 'Data Story AI | SkillLens',
    description: 'Automated data profiling, imbalance resolution with SMOTE, and feature analysis.'
  },
  {
    id: 'deep-learning-acoustic',
    theme: 'Deep Learning & Neural Architectures',
    projects: 'Prenatal Postnatal Risk | Tone Pulse AI',
    description: 'Multi-modal baby cry audio classification and transformer sentiment scoring.'
  },
  {
    id: 'geospatial-ml',
    theme: 'Geospatial ML & Spatial Validation',
    projects: 'HeatFlux AI | Google Earth Engine',
    description: 'City-aware GroupKFold validation on satellite observations preventing spatial leakage.'
  },
  {
    id: 'deterministic-safety',
    theme: 'Deterministic Safety & Rule Engines',
    projects: 'Hydro Triage | Clinical Systems',
    description: 'Rule-based safety triage engines with 100% deterministic contraindication overrides.'
  },
  {
    id: 'mlops-deployment',
    theme: 'MLOps, Containerization & CI/CD',
    projects: 'SkillLens | Prenatal Risk Detection',
    description: 'FastAPI + React containerized Docker pipelines deployed with GitHub Actions.'
  }
];

export const skillCategories: SkillCategorySummary[] = [
  {
    name: 'Machine Learning',
    count: 4,
    skills: 'TensorFlow, PyTorch, Scikit-Learn, Deep Learning, NLP',
    icon: 'Cpu'
  },
  {
    name: 'Programming',
    count: 4,
    skills: 'Python, C++, FastAPI, Flask, Docker, CI/CD',
    icon: 'Code'
  },
  {
    name: 'Data Analysis',
    count: 2,
    skills: 'Pandas, NumPy, Vector Databases, SMOTE, EDA',
    icon: 'Database'
  },
  {
    name: 'Visualization',
    count: 1,
    skills: 'React, Next.js, Tailwind CSS, Interactive Dashboards',
    icon: 'BarChart'
  },
  {
    name: 'Statistics',
    count: 1,
    skills: 'Probability, Hypothesis Testing, Evaluation Metrics',
    icon: 'Clock'
  }
];
