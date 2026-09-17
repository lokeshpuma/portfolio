import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'prenatal-postnatal-risk',
    title: 'Prenatal Postnatal Risk Detection',
    subtitle: 'AI-Powered Neonatal Health & Cry Classification System',
    category: 'ML',
    description: 'Predicts fetal risk, infant health status, and acoustic baby cry classifications using TensorFlow and Scikit-Learn.',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'Scikit-Learn', 'TensorFlow', 'Docker'],
    status: 'completed',
    statusLabel: 'Deployed neonatal risk prediction platform',
    metrics: [
      { label: 'Model Modalities', value: '3' },
      { label: 'Framework', value: 'TensorFlow' },
      { label: 'Real-time Predictions', value: 'Sub-50ms' }
    ],
    links: {
      details: '#prenatal-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'AI-powered neonatal health monitoring system integrating maternal biometric risk detection, fetal health regression models, and deep neural network acoustic baby cry classification.',
      problem: 'Early neonatal distress detection is critical in clinical settings; healthcare workers need real-time multi-modal risk scoring with instant confidence calibration.',
      architecture: [
        'Developed Flask & FastAPI backend services with Scikit-Learn tabular models and TensorFlow deep learning classifiers',
        'Engineered audio feature extraction pipeline (MFCCs, spectral contrast, chroma) for baby cry classification',
        'Constructed responsive Next.js / React and Tailwind CSS frontend containerized with Docker',
        'Automated CI/CD deployment using GitHub Actions for continuous validation'
      ],
      results: [
        'High sensitivity on critical fetal distress risk factors',
        'Sub-50ms real-time inference with calibrated confidence metrics',
        'End-to-end containerized Docker deployment'
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'Flask', 'Scikit-Learn', 'TensorFlow', 'Docker', 'GitHub Actions']
    }
  },
  {
    id: 'skill-lens',
    title: 'SkillLens',
    subtitle: 'Human Skill Extinction Predictor & Workforce Analytics',
    category: 'ML',
    description: 'Analyzes 95 skills and predicts 1-, 2-, and 3-year market obsolescence trends with K-Means and statistical forecasting.',
    tags: ['React 18', 'FastAPI', 'Vector Databases', 'MLOps', 'LLM Orchestration', 'K-Means'],
    status: 'completed',
    statusLabel: 'Deployed workforce intelligence platform',
    metrics: [
      { label: 'Analyzed Skills', value: '95' },
      { label: 'Forecast Horizons', value: '1, 2, 3 Years' },
      { label: 'Frontend', value: 'React 18' }
    ],
    links: {
      details: '#skilllens-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Workforce analytics platform forecasting technical skill half-life, demand degradation, and emerging capability transitions using vector embeddings and clustering algorithms.',
      problem: 'Rapid emergence of generative AI and automation requires dynamic forecasting to identify which capabilities have high obsolescence risks.',
      architecture: [
        'FastAPI backend utilizing K-Means clustering and statistical time-series forecasting across 95 skills',
        'Vector database integration for semantic similarity mapping across job roles and market requisites',
        'React 18 (Vite), TypeScript, and Tailwind CSS frontend with interactive risk visualizations',
        'Containerized with Docker and deployed on Vercel with automated MLOps monitoring'
      ],
      results: [
        'Synthesized 1-, 2-, and 3-year skill extinction score trajectories',
        'Provided automated skill pivot recommendations based on vector distance embeddings'
      ],
      techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Vector DB', 'K-Means', 'Docker', 'Vercel']
    }
  },
  {
    id: 'heatflux-ai',
    title: 'HeatFlux AI',
    subtitle: 'Urban Heat Island Geospatial ML Estimation System',
    category: 'ML',
    description: 'City-aware geospatial ML platform using Google Earth Engine, MODIS satellite imagery, and ensemble regressors.',
    tags: ['Google Earth Engine', 'Geospatial ML', 'Ensemble Regressors', 'MLOps', 'Cross-Validation'],
    status: 'completed',
    statusLabel: 'Deployed geospatial estimation workspace',
    metrics: [
      { label: 'Cities Analyzed', value: '25' },
      { label: 'Engineered Features', value: '26' },
      { label: 'Observations', value: '~4,500' }
    ],
    links: {
      details: '#heatflux-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Geospatial AI platform quantifying micro-climate surface temperatures and urban heat island intensity using satellite observations and meteorological reanalysis.',
      problem: 'Urban heat mitigation requires fine-grained thermal estimation without geographical data leakage across cities.',
      architecture: [
        'Satellite data ingestion from Google Earth Engine (MODIS LST & NDVI) and ERA5 surface data',
        'City-aware GroupKFold cross-validation preventing spatial auto-correlation optimism',
        'Ensemble regression with XGBoost, LightGBM, and TensorFlow/PyTorch models',
        'Containerized with Docker and deployed with React / Next.js interfaces'
      ],
      results: [
        'Achieved superior cross-city generalization on unseen metropolitan areas',
        'Delivered real-time data processing and model performance telemetry'
      ],
      techStack: ['Python', 'Google Earth Engine', 'Scikit-Learn', 'TensorFlow', 'Flask', 'Next.js', 'Docker']
    }
  },
  {
    id: 'hydro-triage',
    title: 'Hydro Triage',
    subtitle: 'Explainable Rule-Based Healthcare Triage & Intent System',
    category: 'Systems',
    description: 'Healthcare triage system using Python rule-based safety engine, Supabase PostgreSQL, and Groq API intent classification.',
    tags: ['Rule-Based Systems', 'NLP', 'Supabase', 'Data Privacy', 'Automated Testing', 'Groq API'],
    status: 'completed',
    statusLabel: 'Deployed healthcare triage system',
    metrics: [
      { label: 'Automated Tests', value: '19' },
      { label: 'Triage Levels', value: '3' },
      { label: 'Database', value: 'Supabase' }
    ],
    links: {
      details: '#hydrotriage-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Clinical symptom urgency assessment platform combining deterministic safety rule evaluation with conversational NLP for structured patient intake.',
      problem: 'Medical intake tools must provide deterministic guarantees on life-threatening symptoms rather than relying on unconstrained generative predictions.',
      architecture: [
        'Rule-based safety engine written in Python for deterministic symptom severity ranking',
        'Integrated Groq API for lightning-fast conversational intent extraction without saving private PHI',
        'Streamlit-based application connected to Supabase PostgreSQL for secure record handling',
        'Automated CI testing with GitHub Actions running comprehensive unit and integration test suites'
      ],
      results: [
        '100% deterministic safety override on critical red-flag symptoms',
        'All 19 automated integration and unit test suites passing'
      ],
      techStack: ['Python', 'Streamlit', 'Supabase PostgreSQL', 'Groq API', 'GitHub Actions', 'PyTest']
    }
  },
  {
    id: 'tone-pulse-ai',
    title: 'Tone Pulse AI',
    subtitle: 'Privacy-Focused Sentiment & Distress Analysis Engine',
    category: 'ML',
    description: 'Privacy-focused sentiment and distress classification engine using Next.js 16, React 19, FastAPI, and Hugging Face Transformers.',
    tags: ['NLP', 'Sentiment Analysis', 'Next.js 16', 'React 19', 'FastAPI', 'Docker', 'Transformers'],
    status: 'completed',
    statusLabel: 'Deployed local NLP engine',
    metrics: [
      { label: 'Validation Benchmark', value: '100%' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Frontend', value: 'Next.js 16' }
    ],
    links: {
      details: '#tonepulse-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Privacy-first natural language processing engine designed to classify emotional valence, subtle sentiment cues, and urgent psychological distress markers.',
      problem: 'Support organizations require explainable emotional distress detection without sending sensitive conversational text to persistent external servers.',
      architecture: [
        'FastAPI-based NLP backend with optional Hugging Face Transformer model support for emotion detection',
        'Engineered explainable sentiment scoring with traceable word-level contribution weights',
        'Modern responsive UI built with Next.js 16, React 19, and Tailwind CSS',
        'Containerized in Docker for seamless on-premise or cloud hosting'
      ],
      results: [
        'Achieved 100% validation on benchmark evaluation test suites',
        'Sub-15ms local inference latency with zero persistent data logging'
      ],
      techStack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'FastAPI', 'Python', 'Hugging Face', 'Docker']
    }
  },
  {
    id: 'data-story-ai',
    title: 'Data Story AI',
    subtitle: 'Automated Dataset Profiling, EDA, SMOTE & RAG Assistant',
    category: 'Analytics',
    description: 'AI-powered data analysis assistant using React, FastAPI, SMOTE, GridSearchCV, and RAG for automated dataset question answering.',
    tags: ['React', 'FastAPI', 'Scikit-Learn', 'EDA', 'SMOTE', 'Hyperparameter Tuning', 'RAG'],
    status: 'completed',
    statusLabel: 'Deployed automated analytics workspace',
    metrics: [
      { label: 'Imbalance Handling', value: 'SMOTE' },
      { label: 'Tuning', value: 'GridSearchCV' },
      { label: 'QA Engine', value: 'RAG' }
    ],
    links: {
      details: '#datastory-details',
      demo: 'https://github.com/lokeshpuma',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Automated data exploration, preprocessing, model benchmarking, and narrative insight platform that empowers analysts to understand complex datasets in seconds.',
      problem: 'Data science workflows spend 80% of effort on repetitive cleaning, imbalance management, and exploratory plotting before modeling begins.',
      architecture: [
        'FastAPI backend performing automated data type profiling, missing value imputation, and correlation analysis',
        'SMOTE class rebalancing and hyperparameter optimization via GridSearchCV across multiple algorithms',
        'RAG-powered conversational engine answering natural language questions about dataset distributions',
        'React and TypeScript interactive dashboard with rich visualization components'
      ],
      results: [
        'Automated end-to-end dataset profiling from hours down to seconds',
        'Generated interactive executive summary reports with exportable charts'
      ],
      techStack: ['React', 'TypeScript', 'FastAPI', 'Scikit-Learn', 'SMOTE', 'Pandas', 'RAG']
    }
  },
  {
    id: 'helixforge-algo',
    title: 'HelixForge',
    subtitle: 'De Novo Genome Assembler & Graph Optimization',
    category: 'CP',
    description: 'High-performance C++ genome assembler utilizing De Bruijn graphs, Eulerian paths, and sequencing diagnostic algorithms.',
    tags: ['C++', 'Competitive Programming', 'Graph Theory', 'Bioinformatics', 'Algorithms'],
    status: 'completed',
    statusLabel: 'High-performance algorithmic implementation',
    metrics: [
      { label: 'Graph Edges', value: '75,145' },
      { label: 'Core Algorithms', value: '10' },
      { label: 'N50 Metric', value: '1,143 bp' }
    ],
    links: {
      details: '#helixforge-details',
      github: 'https://github.com/lokeshpuma'
    },
    detailsData: {
      overview: 'Computational biology and graph theory engine that reconstructs continuous genomic sequences from fragmented short-read datasets using Eulerian path traversals.',
      problem: 'Assembling sequence fragments requires memory-efficient graph structures and topological pruning of sequencing errors.',
      architecture: [
        'Constructed custom De Bruijn graph adjacency representations in modern C++',
        'Implemented tip-clipping and bubble-popping algorithms for topological error correction',
        'Computed N50 / L50 assembly metrics with performance benchmarking'
      ],
      results: [
        'Assembled 75k+ graph edges with sub-second execution efficiency',
        'Demonstrated strong algorithmic foundations across dynamic programming and graph structures'
      ],
      techStack: ['C++', 'Graph Theory', 'Data Structures', 'Bioinformatics']
    }
  }
];
