/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFD',
          100: '#D7D5FB',
          200: '#AFABF8',
          300: '#8781F4',
          400: '#5F57F1',
          500: '#4F46E5',
          600: '#2A1FDC',
          700: '#2018B1',
          800: '#161286',
          900: '#0D0B5A'
        },
        secondary: {
          DEFAULT: '#EC4899',
          50: '#FCE7F3',
          100: '#FBCFE7',
          200: '#F9A8D4',
          300: '#F472B6',
          400: '#EC4899',
          500: '#DB2777',
          600: '#BE185D',
          700: '#9D174D',
          800: '#831843',
          900: '#500724'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 