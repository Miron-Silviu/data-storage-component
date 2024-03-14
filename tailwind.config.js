/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "99px",
      large: "12px",
    },
    screens: {
      sm: { min: "50px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "2600px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      // lg: { min: "1024px", max: "1279px" },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // xl: { min: "1280px", max: "1535px" },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // primary and secondary
        primary: "#FFCA80",
        secondary: "#A800BA",

        // Neutral

        PaleBlue: "#D0EEFF",
        GrayishBlue: "#8B9393",
        DarkBlue: "#1B354B",
        VeryDarkBlue: " #13121D",
        Blue: "#2596be",
        white: "#ffffff",
      },
      fontFamily: {
        Raleway: ['"Raleway"'],
      },
    },
  },
  plugins: [],
};

// content: ["./dist/*.{html,js}"],
