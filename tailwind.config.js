/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Press Start 2P', 'PixelFont', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#B8860B',
        },
        gaming: {
          blue: '#4B0082',
          purple: '#800080',
          pink: '#FF69B4',
        },
      },
    },
  },
  plugins: [aspectRatio],
} 