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
    extend: {}
  },
  plugins: []
}
