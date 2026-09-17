import { SocialProfileItem } from '../types';

export const socialProfilesData: SocialProfileItem[] = [
  // A. Professional
  {
    id: 'github',
    name: 'GitHub',
    category: 'professional',
    categoryLabel: 'Professional',
    username: '@lokeshpuma',
    url: 'https://github.com/lokeshpuma',
    description: 'Open-source projects, experiments, repositories, and development work.',
    ctaText: 'View GitHub',
    featured: true,
    platformIconKey: 'github',
    badge: 'Code & Repos',
    accentGradient: 'from-slate-700 to-slate-900'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    category: 'professional',
    categoryLabel: 'Professional',
    username: '@lokeshpuma',
    url: 'https://www.linkedin.com/in/lokeshpuma/',
    description: 'Professional profile, projects, education, and career updates.',
    ctaText: 'Connect on LinkedIn',
    featured: true,
    platformIconKey: 'linkedin',
    badge: 'Network',
    accentGradient: 'from-blue-600 to-cyan-700'
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    category: 'professional',
    categoryLabel: 'Professional',
    username: '@lokeshpuma',
    url: 'https://x.com/lokeshpuma',
    description: 'Tech thoughts, AI/ML updates, and development-related posts.',
    ctaText: 'Follow on X',
    featured: false,
    platformIconKey: 'x',
    badge: 'Tech Thoughts',
    accentGradient: 'from-slate-800 to-black'
  },

  // B. Competitive Programming (Coding & Problem Solving)
  {
    id: 'leetcode',
    name: 'LeetCode',
    category: 'coding',
    categoryLabel: 'Coding & Problem Solving',
    username: '@lokeshpuma',
    url: 'https://leetcode.com/u/lokeshpuma/',
    description: 'Algorithm and data-structure problem solving.',
    ctaText: 'View LeetCode',
    featured: true,
    platformIconKey: 'leetcode',
    badge: 'Algorithms',
    accentGradient: 'from-amber-600 to-orange-700'
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    category: 'coding',
    categoryLabel: 'Coding & Problem Solving',
    username: '@lokeshpuma',
    url: 'https://codeforces.com/profile/lokeshpuma',
    description: 'Competitive programming contests and problem solving.',
    ctaText: 'View Codeforces',
    featured: false,
    platformIconKey: 'codeforces',
    badge: 'Contests',
    accentGradient: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    category: 'coding',
    categoryLabel: 'Coding & Problem Solving',
    username: '@lokeshpuma',
    url: 'https://codechef.com/users/lokeshpuma',
    description: 'Competitive programming and coding contests.',
    ctaText: 'View CodeChef',
    featured: false,
    platformIconKey: 'codechef',
    badge: 'Problem Solving',
    accentGradient: 'from-amber-700 to-amber-900'
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    category: 'coding',
    categoryLabel: 'Coding & Problem Solving',
    username: '@lokeshpuma29',
    url: 'https://www.hackerrank.com/profile/lokeshpuma29',
    description: 'Programming practice, certifications, and technical challenges.',
    ctaText: 'View HackerRank',
    featured: false,
    platformIconKey: 'hackerrank',
    badge: 'Practice & Badges',
    accentGradient: 'from-emerald-600 to-green-800'
  },
  {
    id: 'atcoder',
    name: 'AtCoder',
    category: 'coding',
    categoryLabel: 'Coding & Problem Solving',
    username: '@lokeshpuma',
    url: 'https://atcoder.jp/users/lokeshpuma',
    description: 'Competitive programming contests and algorithmic problem solving.',
    ctaText: 'View AtCoder',
    featured: false,
    platformIconKey: 'atcoder',
    badge: 'Japanese Contests',
    accentGradient: 'from-slate-600 to-slate-800'
  },

  // C. AI / ML / Data Science
  {
    id: 'kaggle',
    name: 'Kaggle',
    category: 'aiml',
    categoryLabel: 'AI / ML Profiles',
    username: '@lokeshpuma',
    url: 'https://www.kaggle.com/lokeshpuma',
    description: 'Datasets, notebooks, competitions, and machine learning experiments.',
    ctaText: 'View Kaggle',
    featured: true,
    platformIconKey: 'kaggle',
    badge: 'ML & Notebooks',
    accentGradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    category: 'aiml',
    categoryLabel: 'AI / ML Profiles',
    username: '@lokeshpuma',
    url: 'http://huggingface.co/lokeshpuma',
    description: 'AI models, datasets, and machine learning experiments.',
    ctaText: 'View Hugging Face',
    featured: true,
    platformIconKey: 'huggingface',
    badge: 'Transformers & Models',
    accentGradient: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'wandb',
    name: 'Weights & Biases',
    category: 'aiml',
    categoryLabel: 'AI / ML Profiles',
    username: '@lokeshpuma',
    url: 'https://wandb.ai/profile/lokeshpuma?shareProfileType=copy',
    description: 'ML experiment tracking, model training, and experiment visualization.',
    ctaText: 'View W&B',
    featured: false,
    platformIconKey: 'wandb',
    badge: 'Experiment Tracking',
    accentGradient: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'streamlit',
    name: 'Streamlit',
    category: 'aiml',
    categoryLabel: 'AI / ML Profiles',
    username: '@lokeshpuma',
    url: 'https://share.streamlit.io/user/lokeshpuma',
    description: 'Interactive machine learning and data science applications.',
    ctaText: 'View Streamlit Apps',
    featured: false,
    platformIconKey: 'streamlit',
    badge: 'Live ML Apps',
    accentGradient: 'from-rose-500 to-red-700'
  },
  {
    id: 'deeplearning-ai',
    name: 'DeepLearning.AI',
    category: 'aiml',
    categoryLabel: 'AI / ML Profiles',
    username: '@lokeshpuma',
    url: 'https://www.deeplearning.ai/u/01KJCRVTVYQTTVV57BZKEJ3B0X?usp=sharing',
    description: 'AI and deep learning learning profile and course activity.',
    ctaText: 'View Profile',
    featured: false,
    platformIconKey: 'deeplearningai',
    badge: 'Specializations',
    accentGradient: 'from-indigo-600 to-blue-800'
  },

  // D. Writing & Knowledge Sharing
  {
    id: 'substack',
    name: 'Substack',
    category: 'writing',
    categoryLabel: 'Writing',
    username: '@lokeshpuma',
    url: 'https://substack.com/@lokeshpuma',
    description: 'Articles, technical writing, AI/ML learning, and ideas.',
    ctaText: 'Read my writing',
    featured: false,
    platformIconKey: 'substack',
    badge: 'Publications',
    accentGradient: 'from-orange-500 to-amber-600'
  },

  // E. Networking / Mentorship
  {
    id: 'topmate',
    name: 'Topmate',
    category: 'networking',
    categoryLabel: 'Professional Networking',
    username: '@lokeshpuma',
    url: 'https://topmate.io/lokeshpuma/',
    description: 'Connect with me for professional conversations, mentoring, and knowledge sharing.',
    ctaText: 'Visit Topmate',
    featured: true,
    platformIconKey: 'topmate',
    badge: 'Mentorship & 1:1',
    accentGradient: 'from-red-500 to-rose-600'
  },

  // F. Developer Community
  {
    id: 'salesforce-trailblazer',
    name: 'Salesforce Trailblazer',
    category: 'community',
    categoryLabel: 'Developer Community',
    username: '@lokeshpuma',
    url: 'https://www.salesforce.com/trailblazer/lokeshpuma',
    description: 'Salesforce learning, badges, and developer community activity.',
    ctaText: 'View Trailblazer',
    featured: false,
    platformIconKey: 'salesforce',
    badge: 'Ecosystem & Badges',
    accentGradient: 'from-sky-500 to-blue-700'
  },

  // G. Social Media
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'social',
    categoryLabel: 'Social',
    username: '@lokeshpuma',
    url: 'https://www.instagram.com/lokeshpuma',
    description: 'Personal updates, tech snapshots, and journey highlights.',
    ctaText: 'Follow on Instagram',
    featured: false,
    platformIconKey: 'instagram',
    badge: 'Social',
    accentGradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'social',
    categoryLabel: 'Social',
    username: '@lokeshpuma29',
    url: 'https://www.facebook.com/@lokeshpuma29',
    description: 'Social updates and community connections.',
    ctaText: 'Connect on Facebook',
    featured: false,
    platformIconKey: 'facebook',
    badge: 'Social',
    accentGradient: 'from-blue-600 to-indigo-800'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'social',
    categoryLabel: 'Social',
    username: '@lokeshpuma29',
    url: 'https://www.reddit.com/user/lokeshpuma29/',
    description: 'Discussions on AI, ML, programming, and tech communities.',
    ctaText: 'View Reddit Profile',
    featured: false,
    platformIconKey: 'reddit',
    badge: 'Tech Communities',
    accentGradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    category: 'social',
    categoryLabel: 'Social',
    username: '@lokeshpuma.bsky.social',
    url: 'https://bsky.app/profile/lokeshpuma.bsky.social',
    description: 'Decentralized tech thoughts, AI discussions, and web updates.',
    ctaText: 'Follow on Bluesky',
    featured: false,
    platformIconKey: 'bluesky',
    badge: 'Open Social Web',
    accentGradient: 'from-sky-400 to-blue-600'
  }
];

export const socialCategoriesList = [
  { id: 'all', label: 'All Profiles', count: socialProfilesData.length },
  { id: 'featured', label: 'Featured', count: socialProfilesData.filter((p) => p.featured).length },
  { id: 'aiml', label: 'AI / ML Profiles', count: socialProfilesData.filter((p) => p.category === 'aiml').length },
  { id: 'coding', label: 'Coding & CP', count: socialProfilesData.filter((p) => p.category === 'coding').length },
  { id: 'professional', label: 'Professional', count: socialProfilesData.filter((p) => p.category === 'professional').length },
  { id: 'writing', label: 'Writing', count: socialProfilesData.filter((p) => p.category === 'writing').length },
  { id: 'networking', label: 'Networking', count: socialProfilesData.filter((p) => p.category === 'networking').length },
  { id: 'community', label: 'Community', count: socialProfilesData.filter((p) => p.category === 'community').length },
  { id: 'social', label: 'Social', count: socialProfilesData.filter((p) => p.category === 'social').length },
];

export const technicalWorkflowMapping = [
  {
    action: 'Code',
    description: 'Core repositories, open-source code & production systems',
    platforms: [{ name: 'GitHub', url: 'https://github.com/lokeshpuma', icon: 'github' }]
  },
  {
    action: 'Compete',
    description: 'Algorithms, data structures & competitive speed contests',
    platforms: [
      { name: 'LeetCode', url: 'https://leetcode.com/u/lokeshpuma/', icon: 'leetcode' },
      { name: 'Codeforces', url: 'https://codeforces.com/profile/lokeshpuma', icon: 'codeforces' },
      { name: 'CodeChef', url: 'https://codechef.com/users/lokeshpuma', icon: 'codechef' },
      { name: 'AtCoder', url: 'https://atcoder.jp/users/lokeshpuma', icon: 'atcoder' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/lokeshpuma29', icon: 'hackerrank' }
    ]
  },
  {
    action: 'Build AI',
    description: 'Transformer models, Kaggle solutions & experiment runs',
    platforms: [
      { name: 'Hugging Face', url: 'http://huggingface.co/lokeshpuma', icon: 'huggingface' },
      { name: 'Kaggle', url: 'https://www.kaggle.com/lokeshpuma', icon: 'kaggle' },
      { name: 'Weights & Biases', url: 'https://wandb.ai/profile/lokeshpuma?shareProfileType=copy', icon: 'wandb' }
    ]
  },
  {
    action: 'Deploy',
    description: 'Interactive analytics prototypes & ML demos',
    platforms: [{ name: 'Streamlit', url: 'https://share.streamlit.io/user/lokeshpuma', icon: 'streamlit' }]
  },
  {
    action: 'Learn',
    description: 'Deep Learning specializations & advanced neural architectures',
    platforms: [{ name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/u/01KJCRVTVYQTTVV57BZKEJ3B0X?usp=sharing', icon: 'deeplearningai' }]
  },
  {
    action: 'Write',
    description: 'Deep-dive technical breakdowns & architectural notes',
    platforms: [{ name: 'Substack', url: 'https://substack.com/@lokeshpuma', icon: 'substack' }]
  },
  {
    action: 'Connect',
    description: 'Professional networking, mentorship & collaborations',
    platforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lokeshpuma/', icon: 'linkedin' },
      { name: 'Topmate', url: 'https://topmate.io/lokeshpuma/', icon: 'topmate' }
    ]
  }
];
