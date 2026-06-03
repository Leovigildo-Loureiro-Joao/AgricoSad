/** @type {import('tailwindcss').Config} */

const darkScale = {
  DEFAULT: '#111827',
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1f2937',
  900: '#0f172a',
  950: '#020617',
};

const greenLightScale = {
  DEFAULT: '#ECFDF5',
  50: '#f7fffb',
  100: '#ecfdf5',
  200: '#d1fae5',
  300: '#a7f3d0',
  400: '#6ee7b7',
};

const greenScale = {
  DEFAULT: '#059669',
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#10b981',
  700: '#059669',
  800: '#047857',
  900: '#065f46',
  950: '#064e3b',
  light: greenLightScale,
};

const mintScale = {
  DEFAULT: '#ECFDF5',
  50: '#f7fffb',
  100: '#ecfdf5',
  200: '#d1fae5',
  300: '#a7f3d0',
  400: '#6ee7b7',
};

const tealScale = {
  DEFAULT: '#14b8a6',
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
};

const soilScale = {
  DEFAULT: '#8b5e34',
  50: '#faf7f2',
  100: '#f3ede5',
  200: '#e5d8c8',
  300: '#d5b99a',
  400: '#bd9368',
  500: '#9f6f42',
  600: '#8b5e34',
  700: '#6f4a28',
  800: '#54381d',
  900: '#3a2613',
};

const earthScale = {
  DEFAULT: '#b45309',
  50: '#fffaf0',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
};

const skyScale = {
  DEFAULT: '#0ea5e9',
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
};

const surfaceScale = {
  DEFAULT: '#f8faf7',
  50: '#ffffff',
  100: '#f8faf7',
  200: '#edf3ee',
  300: '#d7e3db',
  400: '#bdcfc1',
};

const borderScale = {
  DEFAULT: '#d1e7dc',
  100: '#eaf4ef',
  200: '#d1e7dc',
  300: '#b7ccc0',
  400: '#8aa79a',
};

const dangerScale = {
  DEFAULT: '#ef4444',
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
};

const warningScale = {
  DEFAULT: '#f59e0b',
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
};

const agroColors = {
  dark: darkScale,
  green: greenScale,
  mint: mintScale,
  teal: tealScale,
  soil: soilScale,
  earth: earthScale,
  sky: skyScale,
  surface: surfaceScale,
  border: borderScale,
  success: greenScale,
  warning: warningScale,
  danger: dangerScale,
  'green-dark': '#047857',
  'teal-light': '#a3f7df',
  'teal-dark': '#0f766e',
  'dark-light': '#1f2937',
  'dark-deeper': '#020617',
};

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: darkScale,
        green: greenScale,
        'green-light': greenLightScale,
        mint: mintScale,
        teal: tealScale,
        soil: soilScale,
        earth: earthScale,
        sky: skyScale,
        surface: surfaceScale,
        border: borderScale,
        danger: dangerScale,
        warning: warningScale,
        success: greenScale,
        agro: agroColors,
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        title: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        '2xs': ['1.0rem', { lineHeight: '1.4' }],
        xs: ['1.2rem', { lineHeight: '1.5' }],
        sm: ['1.4rem', { lineHeight: '1.6' }],
        base: ['1.6rem', { lineHeight: '1.7' }],
        lg: ['1.8rem', { lineHeight: '1.6' }],
        xl: ['2.0rem', { lineHeight: '1.5' }],
        '2xl': ['2.4rem', { lineHeight: '1.4' }],
        '3xl': ['3.0rem', { lineHeight: '1.3' }],
        '4xl': ['3.6rem', { lineHeight: '1.2' }],
        '5xl': ['4.8rem', { lineHeight: '1.1' }],
        '6xl': ['6.0rem', { lineHeight: '1.0' }],
      },

      spacing: {
        // The project uses a 75% root font-size scale.
      },

      borderRadius: {
        sm: '0.4rem',
        md: '0.8rem',
        lg: '1.2rem',
        xl: '1.6rem',
        '2xl': '2.4rem',
        full: '9999px',
      },

      boxShadow: {
        card: '0 2px 16px 0 rgba(17, 24, 39, 0.10)',
        green: '0 4px 24px 0 rgba(5, 150, 105, 0.25)',
        teal: '0 4px 24px 0 rgba(113, 240, 201, 0.20)',
        field: '0 12px 40px 0 rgba(5, 150, 105, 0.12)',
        night: '0 18px 48px 0 rgba(15, 23, 42, 0.28)',
      },

      backgroundImage: {
        'agro-hero':
          'linear-gradient(135deg, #0f172a 0%, #064e3b 48%, #ecfdf5 100%)',
        'agro-surface':
          'linear-gradient(180deg, #ffffff 0%, #f8faf7 100%)',
        'agro-radial':
          'radial-gradient(circle at top, #d1fae5 0%, #059669 42%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
