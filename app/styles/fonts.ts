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

const chenYuLuoYan = localFont({
  src: "./fonts/ChenYuluoyan-Thin.ttf",
  variable: "--font-chen-yu-luo-yan",
});

export { taipeiSans, chenYuLuoYan };
