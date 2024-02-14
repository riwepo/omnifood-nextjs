/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#ffffff",
      "burnt-orange": {
        100: "#e67e22",
        200: "#cf711f",
        300: "#45260a",
        400: "#eb984e",
        500: "",
      },
      whites: { 100: "#fdf2e9", 200: "#fae5d3" },
      greys: {
        100: "#333",
        200: "#555",
        300: "#888",
        400: "#ddd",
        500: "#6f6f6f",
        600: "#eee",
        700: "#767676",
      },
      tags: { vegetarian: "#51cf66", vegan: "#94d82d", paleo: "#ffd43b" },
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// .tag--vegetarian {
//   background-color: #51cf66;
// }
// .tag--vegan {
//   background-color: #94d82d;
// }
// .tag--paleo {
//   background-color: #ffd43b;
// }
