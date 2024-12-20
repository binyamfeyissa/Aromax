/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A5D4F',
          hover: '#3d4d41',
        },
        secondary: '#D2C4B6',
      },
    },
  },
  plugins: [],
}