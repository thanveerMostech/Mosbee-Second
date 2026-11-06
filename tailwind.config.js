/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          offwhite: '#F5F5F5',
        },
        accent: {
          blue: '#2563EB',
          yellow: '#FACC15',
        },
        navy: {
          DEFAULT: '#0A0A0A',
          deep: '#0A0A0A',
          light: '#2563EB',
        },
        brand: {
          DEFAULT: '#2563EB',
          50: 'rgba(37, 99, 235, 0.1)',
          100: 'rgba(37, 99, 235, 0.15)',
          200: 'rgba(37, 99, 235, 0.25)',
          500: '#2563EB',
          600: '#2563EB',
          700: '#2563EB',
          800: '#0A0A0A',
          900: '#0A0A0A',
          950: '#0A0A0A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
