/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-mode": {
          dark: "#222222",
          mid: "#454b57",
          light: "#787e85",
          calm: "#495b6f",
          accent: "#b1a690",
        },
        "light-mode": {
          "red-1": "#A70000",
          "red-2": "#D62727",
          "red-3": "#FF5252",
          "red-4": "#FFE4E4",
          "yellow-1": "#E69500",
          "yellow-2": "#FFB52E",
          "yellow-3": "#FFC45C",
          "yellow-4": "#FFD68A",
          "green-1": "#398564",
          "green-2": "#49AB81",
          "green-3": "#61CE9F",
          "green-4": "#B0EADD",
          "blue-1": "#2475BB",
          "blue-2": "#3DA1F6",
          "blue-3": "#A0D3FF",
          "blue-4": "#D8EDFF",
        },
      },
    },
  },
  plugins: [],
};
