/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        bgColors: '#14141F',
        pinkColors: '#e250e5',
        blueColors: '#4b50e6',
      },
    },
  },
  plugins: [],
};
