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
        lightOrange: "#ff4d00",
        blue: "#5cb6ff",
        yellow: "#FFAB08",
        gray: "#F2F2F3",
        midGray: "#ebebeb",
        darkGray: "#CFCFCF",
        lightText: "#B1B1B1"

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