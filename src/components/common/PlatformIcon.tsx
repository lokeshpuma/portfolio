import React from 'react';
import {
  Github,
  Linkedin,
  Globe,
  Terminal,
  Code2,
  Share2,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Bot
} from 'lucide-react';

interface PlatformIconProps {
  platformKey: string;
  className?: string;
  size?: number;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({
  platformKey,
  className = 'w-5 h-5',
  size = 20
}) => {
  const key = platformKey.toLowerCase();

  switch (key) {
    case 'github':
      return <Github className={className} size={size} />;

    case 'linkedin':
      return <Linkedin className={className} size={size} />;

    case 'x':
    case 'twitter':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case 'leetcode':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.15a1.378 1.378 0 0 0-.962-2.339h-.09zM20.617 10.741H8.814a1.375 1.375 0 1 0 0 2.75h11.803a1.375 1.375 0 1 0 0-2.75z" />
        </svg>
      );

    case 'kaggle':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.188-6.589-1.558 1.504v5.044c0 .219-.109.328-.328.328H5.166c-.219 0-.328-.109-.328-.328V.328c0-.219.109-.328.328-.328h2.673c.219 0 .328.109.328.328v14.475l6.398-6.398c.137-.142.298-.213.484-.213h3.336c.145 0 .236.052.273.156.037.104.015.203-.066.297l-6.953 6.844 7.152 8.355c.074.093.09.191.047.293z" />
        </svg>
      );

    case 'huggingface':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.1 21.2a1 1 0 0 0 1.2 1.2l4.2-.762A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-3.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7.3 6.5a.75.75 0 0 1 1.05.15c.66.88 1.84 1.6 3.75 1.6s3.09-.72 3.75-1.6a.75.75 0 1 1 1.2.9c-.93 1.24-2.52 2.2-4.95 2.2s-4.02-.96-4.95-2.2a.75.75 0 0 1 .15-1.05z" />
        </svg>
      );

    case 'wandb':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2.5 19.5L7 4.5l4.5 9 4.5-9 4.5 15H17l-3-9-4 8.5L7 11l-2.5 8.5H2.5z" />
        </svg>
      );

    case 'streamlit':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.92 3.38a1.69 1.69 0 0 0-2.3 0L3.38 14.62a1.69 1.69 0 0 0 0 2.38l3.62 3.62a1.69 1.69 0 0 0 2.38 0l11.24-11.24a1.69 1.69 0 0 0 0-2.38l-3.7-3.62zM9.5 17.5l-4-4 8-8 4 4-8 8z" />
        </svg>
      );

    case 'deeplearningai':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );

    case 'codeforces':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.5 7.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 3 0V9a1.5 1.5 0 0 0-1.5-1.5zm7.5-4.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 3 0V4.5a1.5 1.5 0 0 0-1.5-1.5zm7.5 7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 3 0V12a1.5 1.5 0 0 0-1.5-1.5z" />
        </svg>
      );

    case 'codechef':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      );

    case 'hackerrank':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm3.6 15.6h-1.8v-3H10.2v3H8.4V8.4h1.8v3h3.6v-3h1.8v7.2z" />
        </svg>
      );

    case 'atcoder':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z" />
        </svg>
      );

    case 'substack':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      );

    case 'topmate':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 9h8M12 9v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'salesforce':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.1 4.5c1.2-1.3 3-2 5-2 3.1 0 5.7 2.1 6.5 5 .9.4 1.7 1.1 2.2 2 .5.9.8 2 .7 3.1-.2 2.3-1.8 4.2-4.1 4.8-.4.1-.8.1-1.2.1H5.8c-1.3 0-2.6-.5-3.5-1.4C1.4 15.2.9 13.9.9 12.6c0-2.2 1.5-4.1 3.6-4.7.4-1.7 1.6-3 3.1-3.7.8-.4 1.6-.5 2.5-.5z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );

    case 'facebook':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );

    case 'reddit':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.56 12 8 12.56 8 13.25c0 .688.56 1.25 1.25 1.25.688 0 1.25-.562 1.25-1.25 0-.69-.562-1.25-1.25-1.25zm5.5 0c-.688 0-1.25.56-1.25 1.25 0 .688.562 1.25 1.25 1.25.69 0 1.25-.562 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm-5.465 3.99a.465.465 0 0 0-.328.795c1.02 1.02 2.65 1.24 3.043 1.24.394 0 2.023-.22 3.043-1.24a.465.465 0 0 0-.656-.656c-.722.723-1.898.924-2.387.924-.49 0-1.665-.2-2.387-.924a.46.46 0 0 0-.328-.14z" />
        </svg>
      );

    case 'bluesky':
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.879.139 2.592 0 3.868 0 5.084c0 1.216.586 9.878 1.026 11.455.772 2.766 3.42 3.461 5.774 2.97 3.39-.708 4.67-3.13 5.2-4.229.53 1.099 1.81 3.521 5.2 4.229 2.354.491 5.002-.204 5.774-2.97.44-1.577 1.026-10.239 1.026-11.455 0-1.216-.139-2.492-.902-3.205-.659-.613-1.664-.935-4.3 1.026-2.752 1.942-5.711 5.881-6.798 7.995z" />
        </svg>
      );

    default:
      return <Globe className={className} size={size} />;
  }
};
