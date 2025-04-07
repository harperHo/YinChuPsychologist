import React from "react";
import Script from "next/script";

import { taipeiSans, genWanMin } from "./styles/fonts";
import "./globals.css";

const GA_ID = "G-66ZHT41ZDL";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${taipeiSans.variable} ${genWanMin.variable} font-tp-sans bg-sand text-text`}
    >
      <head>
        <title>劉映竺諮商心理師 Ying Chu Liu Counseling Psychologist</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Google Analytics Script 1: Load gtag.js */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        {/* Google Analytics Script 2: Initialize gtag */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
