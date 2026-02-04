/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'hbrz-blue': '#002B5B',
        'hbrz-gold': '#C5A021',
      },
      letterSpacing: {
        'widest-plus': '0.2em',
        'ultra-wide': '0.3em',
        'mega-wide': '0.4em',
      },
    },
  },
  plugins: [],
}
