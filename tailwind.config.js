/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo2': ['Baloo 2', 'sans-serif']
      },
      fontWeight: {
        'regular': 300,
        'bold': 400,
        'black': 700,

      },
      colors: {
        gold: 'rgba(255, 215, 0, 0.5)',
        white: 'rgba(255, 255, 255, 0.9)',
        black: 'rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}

