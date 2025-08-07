/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        "hellopy-purple": {
          100: "#960cc4",
          200: "#7e5fff",
          300: "#c449fa",
          400: "#d58bfb",
          500: "#ebc6ff",
          600: "#f4e2ff",
        },
        "hellopy-yellow": {
          100: "#fadf50",
          200: "#ffe67d",
          300: "#ffeea4",
          400: "#fdf3c0",
          500: "#fef5d6",
          600: "#fef8e9",
        },
        "main-purple": "#7E5FFF",
        "header-yellow": "#ffeea4",
        "header-purple": "#891fbd",
        footer: "#2d003d",
      },
    },
  },
  plugins: [],
};
