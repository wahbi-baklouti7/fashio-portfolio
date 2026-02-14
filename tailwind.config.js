/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#050505",
          charcoal: "#1A1A1A",
          divider: "#2A2A2A",
          offwhite: "#FAFAFA",
          muted: "#888888",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.15em",
      },
      transitionDuration: {
        slow: "700ms",
      },
    },
  },
  plugins: [],
};
