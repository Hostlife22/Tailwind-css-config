let plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: theme("colors.orange.500"),
          color: "white",
          padding: "10px 0",
          display: "block",
          width: "100%",
          fontSize: "18px",
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: theme("colors.orange.600"),
          },
        },
      });
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.4)",
        },
      });
    }),
  ],
};
