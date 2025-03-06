import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import LandingPageHeader from "@/components/landingpage/Header";
import Footer from "@/components/landingpage/Footer";
import GoogleAnalytics from "@/hooks/useGoogleAnalytics";

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
      <GoogleTagManager gtmId="GTM-MQD3GK9P" />
      <GoogleAnalytics/>
      <body className={`no-scrollbar`}>
        <LandingPageHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
