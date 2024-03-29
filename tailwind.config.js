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
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
