import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf5ff',
          100: '#d1e3ff',
          200: '#a3c6ff',
          300: '#75a8ff',
          400: '#478bff',
          500: '#1b6eff',
          600: '#0f54d6',
          700: '#093ca3',
          800: '#052670',
          900: '#02113d',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-lg':
          '0 20px 45px rgba(4, 13, 33, 0.85), inset 0 0 25px rgba(71, 139, 255, 0.25)',
        'panel':
          '0 15px 30px rgba(2, 6, 23, 0.65), inset 0 0 0 1px rgba(148, 163, 184, 0.08)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(71, 139, 255, 0.45), transparent 60%)',
      },
    },
  },
  plugins: [forms],
}
export default config
