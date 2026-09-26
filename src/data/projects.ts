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
  }
];
