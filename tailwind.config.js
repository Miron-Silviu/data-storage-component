/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    // colors: {
    //   // primary
    //   // primary: "hsl(6, 100%, 80%) to hsl(335, 100%, 65%)",
    //   primary: "rgb(var(--color-primary) / <alpha-value>)",
    // },
    extend: {
      colors: {
        // primary
        "regal-blue": "hsl(6, 100%, 80%) to hsl(335, 100%, 65%)",
        primary: "#FFCA80",
        secondary: "#A800BA",
      },
    },
  },
  plugins: [],
};

// content: ["./dist/*.{html,js}"],
