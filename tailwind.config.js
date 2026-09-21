/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          dark: "#1C1410",
          light: "#F7F6F3",
        },
        ink: {
          dark: "#EDE3D6",
          light: "#1A1F26",
        },
        line: "#4A3B2E",
        signal: "#FF8A3D",
      },
      fontFamily: {
        head: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
