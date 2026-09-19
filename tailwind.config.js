/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dashboard: {
          bg: 'var(--bg-main)',
          card: 'var(--card-bg)',
          'card-hover': 'var(--card-hover)',
          'card-border': 'var(--card-border)',
          sidebar: 'var(--sidebar-bg)',
          topbar: 'var(--topbar-bg)',
          surface: 'var(--card-surface)',
          accent: 'var(--accent-cyan)',
          'accent-teal': 'var(--accent-teal)',
          'accent-glow': 'rgba(34, 211, 238, 0.15)',
          muted: 'var(--text-muted)',
          text: 'var(--text-primary)',
          'text-dim': 'var(--text-secondary)'
        }
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glass-ambient': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-elevated': '0 20px 50px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(255, 255, 255, 0.1)',
        'glass-specular': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'glass-dock': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.35)',
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
