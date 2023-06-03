/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      slate: "#020617",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      lime: "#84cc16",
      teal: "#34d399",
      blue: "#1d4ed8",
      "dark-blue": "#172554",
      indigo: "#1e1b4b",
      violet: "#5b21b6",
    },
    fontFamily: {
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Consolas"],
      display: ["Oswald"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    },
    minWidth: {
      0: "0",
      100: "100px",
    },
    extend: {},
  },
  plugins: [],
};
