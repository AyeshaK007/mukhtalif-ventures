import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C62828',
          hover: '#A61E1E',
          light: '#FDECEC',
        },
        blue: {
          DEFAULT: '#1E4E9D',
          dark: '#163C78',
          light: '#EAF2FF',
        },
        gold: '#D4A62A',
        surface: {
          bg: '#F8FAFC',
          white: '#FFFFFF',
          gray: '#F1F5F9',
          border: '#E2E8F0',
        },
        ink: {
          heading: '#1E293B',
          body: '#1E293B',
          secondary: '#64748B',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        card: '14px',
        'card-lg': '16px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(15,76,151,0.08)',
        navbar: '0 6px 20px rgba(0,0,0,0.08)',
        button: '0 4px 15px rgba(15,76,151,0.20)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(90deg, rgba(15,76,151,0.80) 0%, rgba(15,76,151,0.55) 45%, rgba(15,76,151,0.20) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        dash: 'dash 2.4s ease-out forwards',
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
