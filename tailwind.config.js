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
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.2)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
