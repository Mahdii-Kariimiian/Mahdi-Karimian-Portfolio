/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'], // Assuming Cabin font is also used
        raleway: ['Raleway', 'sans-serif'],
        azeret :["Azeret Mono", "monospace"]
      }
    },
  },
  plugins: [],
}