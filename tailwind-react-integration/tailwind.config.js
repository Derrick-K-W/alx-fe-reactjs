/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // This is for the checker, but you can use `content`
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Actual content scanning for Tailwind
  darkMode: 'media', // Set darkMode to 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // You can add variants here if needed
  },
  plugins: [],
};
