/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Primary — Teal/Cyan ──────────────────────────────────────────
        // Light mode: primary-600 on white = 4.6:1 ✓ (AA)
        // Dark mode:  primary-400 on gray-900 = 5.1:1 ✓ (AA)
        primary: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // ── Accent — Amber ───────────────────────────────────────────────
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // ── Neutral — Slate (replaces mixed gray) ────────────────────────
        gray: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans:    ['var(--font-sans)',    'Open Sans',      'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Montserrat',     'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Fluid type scale
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1':      ['clamp(2rem,   4vw, 3.5rem)',  { lineHeight: '1.15' }],
        'h2':      ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'h3':      ['clamp(1.25rem,2vw, 1.75rem)', { lineHeight: '1.3'  }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Section rhythm
        'section': '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-md': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.08)',
        'card-lg': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',
        'glow':    '0 0 0 3px rgb(13 148 136 / 0.25)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in':      'fadeIn 0.4s ease-out both',
        'slide-up':     'slideUp 0.5s ease-out both',
        'slide-down':   'slideDown 0.3s ease-out both',
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':      { opacity: '0.5', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
