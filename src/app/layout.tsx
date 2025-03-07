import type { Metadata } from "next";
import "./globals.css";
// import { GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';

import LandingPageHeader from "@/components/landingpage/Header";
import Footer from "@/components/landingpage/Footer";


export const metadata: Metadata = {
  title: "Kite App",
  description: `Open a USD account in minutes with Kite. Send and receive funds globally and manage multiple currencies—all in one place.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQD3GK9P');
        `}
      </Script>
    </>
      </head>
      <body className={`no-scrollbar`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQD3GK9P"
            height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
        </noscript>
        <LandingPageHeader />
        {children}
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={"G-9ET789RPSE"} /> */}
    </html>
  );
}
