/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        area: ["Area", "serif"],
        editorial: ["Instrument Serif", "serif"],
      },
      colors: {
        brown: "#efe4d9",
        green: "#ecf4ec",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
