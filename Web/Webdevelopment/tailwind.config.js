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
      container: {
        center: true, // Center the container
        margin: {
          DEFAULT: '6px', // Default padding
          sm: '8px',      // Padding for small devices
          md: '10px',      // Padding for medium devices
          lg: '12px',      // Padding for large devices
          xl: '14px',      // Padding for extra large devices
        },
      },
      
    },
  },
  plugins: [],
}
