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
        "chen-yu-luo-yan": ["var(--font-chen-yu-luo-yan)"],
      },
      colors: {
        // primary: "#F0ECEA",
        // primary: "#F8F6F6",
        // primary: "#F5F4F0",
        primary: "#EDE8E3",
        // #CCD0DB blue
        "profile-pic-bg": "#EDE8E3",
        brown: "#C2B6A8",
        "primary-2": "#D1CCC7",
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
  plugins: [],
};
