/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1A6358",
          800: "#115045",
          900: "#0F4840",
          950: "#0D3D35",
        },
        gold: {
          DEFAULT: "#D4A843",
          400: "#DDBA62",
          600: "#B8922E",
        },
        brown: {
          DEFAULT: "#8B6F47",
          400: "#A0845C",
          600: "#7A5F3A",
        },
        cream: "#F9F6F0",
        dark: "#2D2D2D",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};
