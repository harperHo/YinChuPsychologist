import React from "react";

import { taipeiSans, genWanMin } from "./styles/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${taipeiSans.variable} ${genWanMin.variable} font-tp-sans bg-primary text-text`}
    >
      <body>{children}</body>
    </html>
  );
}
