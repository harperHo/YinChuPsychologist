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
        <title>劉映竺諮商心理師</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="description"
          content="劉映竺諮商心理師，提供長期深度自我探索、精神官能症心理治療、原生家庭議題、人際關係議題、女性身份議題、多元性別與自我認同等心理諮商服務。"
        />
        <meta property="og:title" content="劉映竺諮商心理師" />
        <meta
          property="og:description"
          content="提供長期深度自我探索、原生家庭議題、人際關係、多元性別與自我認同等專業心理諮商服務。"
        />
        <meta property="og:image" content="https://ycliu.tw/preview.png" />
        <meta property="og:url" content="https://ycliu.tw" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="劉映竺諮商心理師" />
        <meta
          name="twitter:description"
          content="提供長期深度自我探索、原生家庭議題、人際關係、多元性別與自我認同等專業心理諮商服務。"
        />
        <meta name="twitter:image" content="https://ycliu.tw/preview.png" />

        <Script
          id="structured-data-site-name"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "劉映竺諮商心理師",
              url: "https://ycliu.tw",
            }),
          }}
        />

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
