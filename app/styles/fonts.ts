import localFont from "next/font/local";

const taipeiSans = localFont({
  src: [
    {
      path: "./fonts/TaipeiSansTCBeta-Regular-subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TaipeiSansTCBeta-Light-subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TaipeiSansTCBeta-Bold-subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tp-sans",
});

const genWanMin = localFont({
  src: "./fonts/GenWanMin-Regular-subset.woff2",
  variable: "--font-gen-wan-min",
});

export { taipeiSans, genWanMin };
