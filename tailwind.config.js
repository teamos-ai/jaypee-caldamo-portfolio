/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blue-tinted near-black base (never pure #000)
        ink: {
          950: "#05080f",
          900: "#080d18",
          800: "#0c1424",
        },
        // Deep-blue accent family (client-specified)
        deep: {
          900: "#152238",
          800: "#192841",
          700: "#1c2e4a",
          600: "#203354",
          500: "#23395d",
        },
        // Lifted steel/azure for interactive highlights (AA on dark)
        steel: {
          400: "#5f7fb0",
          300: "#8aa6d4",
          200: "#b9cdec",
        },
        // Warm-cool near-whites (never pure #fff)
        paper: {
          DEFAULT: "#f3f5f9",
          muted: "#aeb9cc",
          dim: "#7d889b",
        },
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'Hanken Grotesk'", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      screens: {
        xs: "480px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
