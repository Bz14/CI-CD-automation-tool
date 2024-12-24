/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1E3A8A', // Dark blue color
        blue: '#3B82F6',     // Blue color
        black: '#000000',    // Black color
      },
    },
  },
  plugins: [],
}
