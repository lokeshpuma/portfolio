import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  // Category 1 — AI, Machine Learning & Deep Learning
  {
    id: 'deep-learning-iit-ropar',
    title: 'Deep Learning — IIT Ropar',
    provider: 'NPTEL / SWAYAM',
    category: 'aiml',
    categoryLabel: 'AI & Machine Learning',
    completionDate: '2026',
    isoDate: '2026-05-01',
    credentialType: 'Academic Certification',
    resultScore: 'Elite — 73%',
    achievementDetails: {
      score: '73%',
      assignments: '25/25',
      exam: '48.49/75',
      duration: '12 weeks',
      credits: '4'
    },
    description: '12-week academic deep learning course covering neural networks, deep learning architectures, optimization, and applied deep learning concepts.',
    badge: 'ELITE • 73%',
    certificateUrl: 'https://drive.google.com/file/d/1hlymoPjce3pDFysmNypJ77Vo3mcn49hb/view?usp=sharing',
    featured: true,
    tags: ['Python', 'Deep Learning', 'Neural Networks', 'Machine Learning', 'CNNs', 'Transformers'],
    providerIconKey: 'nptel'
  },
  {
    id: 'oci-ai-foundations-associate',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    provider: 'Oracle',
    category: 'aiml',
    categoryLabel: 'AI & Machine Learning',
    completionDate: '2025',
    isoDate: '2025-10-15',
    credentialType: 'Professional Certification',
    description: 'Professional certification covering foundational concepts in Artificial Intelligence and Oracle Cloud Infrastructure.',
    badge: 'AI FOUNDATIONS',
    certificateUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5D5BB2FCECDBD59844CB2F706A1652B2ADEC7CC52C506F344EE989CBD83AFE61',
    featured: true,
    tags: ['Artificial Intelligence', 'Oracle Cloud', 'Machine Learning', 'OCI'],
    providerIconKey: 'oracle'
  },

  // Category 2 — Data Science & Analytics
  {
    id: 'data-science-job-sim-commbank',
    title: 'Introduction to Data Science Job Simulation',
    provider: 'Commonwealth Bank — Forage',
    category: 'data-science',
    categoryLabel: 'Data Science & Analytics',
    completionDate: 'February 26, 2026',
    isoDate: '2026-02-26',
    credentialType: 'Job Simulation',
    description: 'Practical data science job simulation involving data aggregation, anonymisation, analysis approaches, and database design.',
    badge: 'JOB SIMULATION • DATA SCIENCE',
    certificateUrl: 'https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_68f8a55da3cfe73dff395f35_1772106616763_completion_certificate.pdf',
    featured: true,
    tags: ['Data Science', 'Data Analysis', 'Database Design', 'Anonymisation'],
    providerIconKey: 'forage'
  },
  {
    id: 'data-science-infosys',
    title: 'Data Science',
    provider: 'Infosys Springboard',
    category: 'data-science',
    categoryLabel: 'Data Science & Analytics',
    completionDate: 'June 5, 2025',
    isoDate: '2025-06-05',
    credentialType: 'Course Certification',
    description: 'Foundational data science course covering core concepts and principles of data science.',
    badge: 'DATA SCIENCE',
    certificateUrl: 'https://drive.google.com/file/d/1OkIxB3uUghsGPXbHN0w_K4dc8IhBqria/view?usp=sharing',
    isDuplicateUrlFlagged: true,
    featured: false,
    tags: ['Data Science', 'Data Analysis', 'Analytics Fundamentals'],
    providerIconKey: 'infosys'
  },
  {
    id: 'skillquest-data-science',
    title: 'SkillQuest — Data Science Foundation',
    provider: 'Simplilearn SkillUp',
    category: 'data-science',
    categoryLabel: 'Data Science & Analytics',
    completionDate: 'July 17, 2025',
    isoDate: '2025-07-17',
    credentialType: 'Assessment / Certification',
    resultScore: 'Passed Assessment',
    description: 'Assessment-based certification validating foundational knowledge of Data Science concepts.',
    badge: 'PASSED ASSESSMENT',
    certificateUrl: 'https://drive.google.com/file/d/19K-Gj1hee5BQHdBwQJarAOGK_W9YjbsY/view?usp=sharing',
    featured: false,
    tags: ['Data Science', 'Data Analysis', 'Assessment'],
    providerIconKey: 'simplilearn'
  },

  // Category 3 — Cloud Computing
  {
    id: 'gcp-career-launchpad-computing',
    title: 'Google Cloud Career Launchpad — Computing Foundations',
    provider: 'Google Cloud',
    category: 'cloud',
    categoryLabel: 'Cloud Computing',
    completionDate: 'April 10, 2026',
    isoDate: '2026-04-10',
    credentialType: 'Learning Track',
    description: 'Computing foundations learning track covering cloud computing concepts, Google Cloud fundamentals, courses, and hands-on labs.',
    badge: 'GOOGLE CLOUD • COMPLETED',
    certificateUrl: 'https://drive.google.com/file/d/1DXOMXn_StvcLIpqT2Wyhp5PM1soNLNmh/view?usp=sharing',
    featured: true,
    tags: ['Google Cloud', 'Cloud Computing', 'Cloud Foundations', 'GCP'],
    providerIconKey: 'googlecloud'
  },
  {
    id: 'cloud-job-sim-datacom',
    title: 'Introduction to Cloud Job Simulation',
    provider: 'Datacom — Forage',
    category: 'cloud',
    categoryLabel: 'Cloud Computing',
    completionDate: 'March 5, 2026',
    isoDate: '2026-03-05',
    credentialType: 'Job Simulation',
    description: 'Practical cloud-focused simulation involving application registration on cloud infrastructure and GitHub Actions workflow configuration.',
    badge: 'JOB SIMULATION • CLOUD',
    certificateUrl: 'https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_68f8a55da3cfe73dff395f35_1772681542976_completion_certificate.pdf',
    featured: true,
    tags: ['Cloud Computing', 'GitHub Actions', 'Cloud Infrastructure', 'CI/CD'],
    providerIconKey: 'forage'
  },

  // Category 4 — Generative AI
  {
    id: 'genai-job-sim-bcgx',
    title: 'GenAI Job Simulation',
    provider: 'BCG X — Forage',
    category: 'genai',
    categoryLabel: 'Generative AI',
    completionDate: 'July 25, 2026',
    isoDate: '2026-07-25',
    credentialType: 'Job Simulation',
    description: 'Hands-on Generative AI simulation involving financial data extraction, initial analysis, and development of an AI-powered financial chatbot.',
    badge: 'GENERATIVE AI • JOB SIMULATION',
    certificateUrl: 'https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_68f8a55da3cfe73dff395f35_1784967390422_completion_certificate.pdf',
    featured: true,
    tags: ['Generative AI', 'Financial Chatbot', 'AI Data Analysis', 'LLMs', 'Prompt Engineering'],
    providerIconKey: 'forage'
  },

  // Category 5 — Natural Language Processing
  {
    id: 'nlp-text-mining-simplilearn',
    title: 'Natural Language Processing (NLP) and Text Mining Tutorial for Beginners',
    provider: 'Simplilearn SkillUp',
    category: 'nlp',
    categoryLabel: 'Natural Language Processing',
    completionDate: 'September 18, 2025',
    isoDate: '2025-09-18',
    credentialType: 'Course',
    description: 'Beginner-level introduction to Natural Language Processing and text mining, including fundamental text-processing concepts and NLP workflows.',
    badge: 'NLP • TEXT MINING',
    certificateUrl: 'https://drive.google.com/file/d/12QU-5gDwrivy6jvIhoCioJ-0qDg-Duih/view?usp=sharing',
    featured: false,
    tags: ['NLP', 'Text Mining', 'Text Processing', 'Tokenization'],
    providerIconKey: 'simplilearn'
  },
  {
    id: 'free-nlp-intellipaat',
    title: 'Free NLP Course Online',
    provider: 'Intellipaat Academy',
    category: 'nlp',
    categoryLabel: 'Natural Language Processing',
    completionDate: 'October 23, 2025',
    isoDate: '2025-10-23',
    credentialType: 'Course',
    description: 'Introductory Natural Language Processing course covering essential NLP concepts, language processing techniques, and text analysis workflows.',
    badge: 'NLP',
    certificateUrl: 'https://drive.google.com/file/d/1lEnAuMGusQql0UUs38vk1wSIP468hAyK/view?usp=sharing',
    featured: false,
    tags: ['NLP', 'Text Analysis', 'Language Processing'],
    providerIconKey: 'intellipaat'
  },

  // Category 6 — Python & Programming Foundations
  {
    id: 'basics-of-python-infosys',
    title: 'Basics of Python',
    provider: 'Infosys Springboard',
    category: 'python',
    categoryLabel: 'Python & Programming Foundations',
    completionDate: 'February 2, 2024',
    isoDate: '2024-02-02',
    credentialType: 'Course',
    description: 'Foundational Python programming course covering programming logic, Python syntax, data types, and fundamental programming structures.',
    badge: 'PYTHON • FOUNDATION',
    certificateUrl: 'https://drive.google.com/file/d/17tjxh1eE8eaW9UjkOMr4WCd6umvKkJ0m/view?usp=sharing',
    featured: false,
    tags: ['Python', 'Programming Fundamentals', 'Data Types', 'Syntax'],
    providerIconKey: 'infosys'
  },
  {
    id: 'python-for-beginners-simplilearn',
    title: 'Python for Beginners',
    provider: 'Simplilearn SkillUp',
    category: 'python',
    categoryLabel: 'Python & Programming Foundations',
    completionDate: 'November 17, 2024',
    isoDate: '2024-11-17',
    credentialType: 'Course',
    description: 'Beginner-level Python course covering basic syntax, programming concepts, and practical coding fundamentals.',
    badge: 'PYTHON • BEGINNER',
    certificateUrl: 'https://drive.google.com/file/d/12biXa99fUhhKbccH0e-_mZnMjCwWoD4Q/view?usp=sharing',
    featured: false,
    tags: ['Python', 'Coding Fundamentals', 'Control Flow'],
    providerIconKey: 'simplilearn'
  },

  // Category 7 — Additional Learning
  {
    id: 'nlp-neuro-linguistic-cursa',
    title: 'Complete Guide to NLP Neuro Linguistic Programming',
    provider: 'Cursa',
    category: 'additional',
    categoryLabel: 'Additional Learning',
    completionDate: 'September 18, 2025',
    isoDate: '2025-09-18',
    credentialType: 'Course',
    achievementDetails: {
      duration: '3h 25m video + 82 pages'
    },
    description: 'Introductory learning material on Neuro-Linguistic Programming (behavioral and interpersonal communication frameworks).',
    badge: 'ADDITIONAL LEARNING',
    certificateUrl: 'https://drive.google.com/file/d/1OkIxB3uUghsGPXbHN0w_K4dc8IhBqria/view?usp=sharing',
    isDuplicateUrlFlagged: true,
    featured: false,
    tags: ['Neuro-Linguistic Programming', 'Communication', 'Personal Development'],
    providerIconKey: 'cursa'
  }
];

export const certificateCategoriesList = [
  { id: 'all', label: 'All Credentials', count: certificationsData.length },
  { id: 'aiml', label: 'AI / ML', count: certificationsData.filter((c) => c.category === 'aiml').length },
  { id: 'data-science', label: 'Data Science', count: certificationsData.filter((c) => c.category === 'data-science').length },
  { id: 'cloud', label: 'Cloud Computing', count: certificationsData.filter((c) => c.category === 'cloud').length },
  { id: 'genai', label: 'Generative AI', count: certificationsData.filter((c) => c.category === 'genai').length },
  { id: 'nlp', label: 'NLP', count: certificationsData.filter((c) => c.category === 'nlp').length },
  { id: 'python', label: 'Python', count: certificationsData.filter((c) => c.category === 'python').length },
  { id: 'additional', label: 'Additional Learning', count: certificationsData.filter((c) => c.category === 'additional').length },
];

export const learningJourneyTimeline = [
  {
    year: '2024',
    title: 'Python Foundations',
    description: 'Programming logic, syntax, data structures, and core coding fundamentals with Infosys & Simplilearn.'
  },
  {
    year: '2025',
    title: 'Data Science → NLP → AI/ML Foundations',
    description: 'Exploratory data analysis, NLP text mining, OCI AI foundations, and structured statistical modeling.'
  },
  {
    year: '2026',
    title: 'Deep Learning → Cloud → Job Simulations → GenAI',
    description: 'Elite 73% IIT Ropar Deep Learning, Google Cloud Computing, Commonwealth Bank Data Science & BCG X GenAI chatbot development.'
  }
];
