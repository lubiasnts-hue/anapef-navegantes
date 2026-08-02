/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#6B4C9A',
          700: '#5A3E8A',
        }
      }
    },
  },
  plugins: [],
}
