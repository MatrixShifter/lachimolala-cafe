/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF6ED',
          200: '#F5EFE0',
          300: '#EBDDC8',
          400: '#DEC6A6',
        },
        espresso: {
          900: '#140E0A',
          850: '#1B140F',
          800: '#231B15',
          700: '#2E231C',
          600: '#3D3027',
          500: '#544337',
        },
        kpink: {
          DEFAULT: '#FF6584',
          50: '#FFF0F3',
          100: '#FFE2E7',
          200: '#FFC5D0',
          300: '#FFA3B4',
          400: '#FF7D97',
          500: '#FF5C80',
          600: '#F03E67',
        },
        klavender: {
          DEFAULT: '#9F7AEA',
          50: '#F7F3FD',
          100: '#EDE5FA',
          200: '#DACAF5',
          300: '#C2A8EE',
          400: '#AA85E7',
        },
        kpeach: {
          DEFAULT: '#FDBA74',
          50: '#FFF7ED',
          100: '#FFEDD5',
        },
        washi: {
          yellow: '#FEF08A',
          pink: '#FBCFE8',
          mint: '#A7F3D0',
          lavender: '#DDD6FE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['"Caveat"', '"Nanum Pen Script"', '"Gaegu"', 'cursive'],
        script: ['"Nanum Pen Script"', '"Caveat"', '"Marck Script"', 'cursive'],
        korean: ['"Noto Sans KR"', '"Gaegu"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(27, 20, 15, 0.15), 0 8px 10px -6px rgba(27, 20, 15, 0.1)',
        'card-soft': '0 4px 20px -2px rgba(35, 27, 21, 0.06), 0 2px 6px -1px rgba(35, 27, 21, 0.04)',
        'glow-pink': '0 0 25px rgba(255, 101, 132, 0.35)',
      },
      rotate: {
        '1.5': '1.5deg',
        '-1.5': '-1.5deg',
        '2.5': '2.5deg',
        '-2.5': '-2.5deg',
      }
    },
  },
  plugins: [],
}
