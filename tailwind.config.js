/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      translate: {
        "1/2-nagative": "-50%",
      },
      fontFamily: {
        "tp-sans": ["var(--font-tp-sans)"],
        "gen-wan-min": ["var(--font-gen-wan-min)"],
      },
      colors: {
        sand: "#EDE8E3",
        grey: "#D1CCC7",
        "brick-red": "#D1B7A8",
        text: "#22231f",
      },
      keyframes: {
        burgerRotateRight: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(45deg) translate(4px, 4px)",
          },
        },
        burgerRotateRightReverse: {
          "0%": {
            transform: "rotate(45deg) translate(4px, 4px)",
          },
          "100%": {
            transform: "rotate(0deg) translate(0, 0)",
          },
        },
        burgerRotateLeft: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-45deg) translate(5px, -5px)",
          },
        },
        burgerRotateLeftReverse: {
          "0%": {
            transform: "rotate(-45deg) translate(5px, -5px)",
          },
          "100%": {
            transform: "rotate(0deg) translate(0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-lr": {
          "0%": {
            opacity: 0,
            transform: "translate(-20px, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        "fade-in-rl": {
          "0%": {
            opacity: 0,
            transform: "translate(20px, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
        "fade-in-bt": {
          "0%": {
            opacity: 0,
            transform: "translate(0, 20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant, matchUtilities }) {
      addVariant("child", "& > *");
      matchUtilities({
        "animation-delay": (value) => {
          return {
            "animation-delay": value,
          };
        },
      });
    },
  ],
};
