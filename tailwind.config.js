/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
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
      },
    },
  },
  plugins: [],
};

// content: ["./dist/*.{html,js}"],
