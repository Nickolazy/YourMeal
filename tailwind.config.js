/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF5C00",
        blue: "#5cb6ff",
        yellow: "#FFAB08",
        gray: "#F2F2F3"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      screens: {
        '1.5xl': '1600px',
        '3xl': '2200px',
      },
    },
  },
  plugins: [],
}