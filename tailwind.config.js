/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.css',  // Make sure CSS files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font configuration
      },
    },
  },
  plugins: [
    tailwindScrollbar, // Add the scrollbar plugin
  ],
};
