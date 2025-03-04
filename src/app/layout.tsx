import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import LandingPageHeader from "@/components/landingpage/Header";
import Footer from "@/components/landingpage/Footer";

export const metadata: Metadata = {
  title: "Kite App",
  description: " Convert your Stablecoins (USDC, USDT) to Naira and Dollars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="'GTM-MQD3GK9P" />
      <body className={`no-scrollbar`}>
        <LandingPageHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
