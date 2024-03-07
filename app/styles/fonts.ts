import localFont from "next/font/local";

const taipeiSans = localFont({
  src: [
    {
      path: "./fonts/TaipeiSansTCBeta-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TaipeiSansTCBeta-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/TaipeiSansTCBeta-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tp-sans",
});

const genWanMin = localFont({
  src: "./fonts/GenWanMin-Regular.ttf",
  variable: "--font-gen-wan-min",
});

export { taipeiSans, genWanMin };
