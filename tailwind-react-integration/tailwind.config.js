/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Scans these files for class names
  darkMode: 'media', // Set darkMode to 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // You can add variants here if needed
  },
  plugins: [],
};
