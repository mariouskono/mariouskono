/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Wajib: Mengubah toggle mode gelap menjadi manual berbasis class 
  // agar kebal terhadap Force Dark Mode bawaan OS/Browser
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Palet Dark Mode Premium (Monokromatik Charcoal & Violet)
        navy: {
          900: '#09090b', // Zinc-950 (Sangat Hitam)
          800: '#18181b', // Zinc-900 
          700: '#27272a', // Zinc-800
        },
        teal: {
          400: '#8b5cf6', // Violet-500 (Aksen utama baru)
          300: '#a78bfa', // Violet-400
        },
        // Palet Light Mode Premium (Minimalist Pearl / Offbrand)
        cream: {
          50: '#f4efe6',  // Offbrand Cream
          100: '#e8e2d7', // Slightly darker cream
        },
        offbrand: {
          green: '#4ade80',
          blue: '#38bdf8',
          orange: '#f97316',
          dark: '#1c1c1c',
        },
        slate: {
          900: '#111827', // Gray 900
          800: '#374151', // Gray 700
          light: '#9ca3af', // Gray 400
          lighter: '#f9fafb', // Gray 50
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font body bersih
        display: ['Tourney', 'sans-serif'], // Font display unik / maximalist
        mono: ['JetBrains Mono', 'monospace'], // Dipertahankan
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}