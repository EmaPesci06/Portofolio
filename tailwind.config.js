/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      bangers: ['Bangers', 'cursive'],
      homoarak: ['Homoarak', 'cursive']
    },
    keyframes: {
      horizontalScroll: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' }
      },
      horizontalScroll2: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }
      }
    },
    animation: {
      horizontalScroll: 'horizontalScroll 19s linear infinite',
      horizontalScroll2: 'horizontalScroll2 19s linear infinite'
    },
    extend: {}
  },
  plugins: []
}
