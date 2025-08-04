/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'DM Serif Display', secondary: 'Jost',
    },
    backgroundImage: {
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
}

