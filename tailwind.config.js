/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#177C5D",
      },
    },
  },
  plugins: [],
};
