import { JourneyMilestone } from '../types';

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'dsce-degree',
    yearOrDate: '2023 – 2027',
    badgeType: 'GraduationCap',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Dayananda Sagar College of Engineering (DSCE)',
    bullets: [
      'Pursuing B.S. in Computer Science in Bengaluru, Karnataka with strong foundations in Machine Learning, Deep Learning, and NLP.',
      'Active coursework in Neural Networks, Data Structures & Algorithms, Distributed Systems, and MLOps pipelines.'
    ],
    durationText: 'Sep 2023 – May 2027',
    highlightStat: {
      label: 'Current CGPA',
      value: '8.86'
    }
  },
  {
    id: 'oracle-ai-foundations',
    yearOrDate: 'Oct 2025',
    badgeType: 'Award',
    title: 'OCI AI Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure',
    bullets: [
      'Certified in Oracle Cloud Infrastructure AI Foundations covering enterprise machine learning architectures, automated model training, and cloud computing principles.'
    ]
  },
  {
    id: 'gcp-launchpad',
    yearOrDate: 'April 2026',
    badgeType: 'CheckCircle',
    title: 'Google Cloud Career Launchpad',
    subtitle: 'Google Cloud Platform (GCP)',
    bullets: [
      'Completed comprehensive Google Cloud infrastructure and machine learning deployment tracks covering Vertex AI, cloud storage, and automated deployment pipelines.'
    ]
  },
  {
    id: 'nptel-deep-learning',
    yearOrDate: 'May 2026',
    badgeType: 'BookOpen',
    title: 'Deep Learning – IIT Ropar',
    subtitle: 'NPTEL Certification (Score: 73%)',
    bullets: [
      'Rigorous academic deep learning credential covering CNNs, RNNs, Transformers, optimization backpropagation dynamics, and loss function tuning.',
      'Achieved Elite 73% evaluation score.'
    ],
    highlightStat: {
      label: 'NPTEL Score',
      value: '73%'
    }
  },
  {
    id: 'inamigos-internship',
    yearOrDate: 'July 2026 – Present',
    badgeType: 'Briefcase',
    title: 'AI Data Analytics Internship',
    subtitle: 'InAmigos Foundation',
    bullets: [
      'Researched AI tools to optimize workflows and collaborated on AI projects and technical documentation.',
      'Built a React (Vite), TypeScript, and Tailwind CSS frontend with interactive visualizations, containerized using Docker, and deployed on Vercel to deliver Skill Extinction Scores and risk-based insights.'
    ],
    durationText: 'July 2026 – Present'
  }
];
