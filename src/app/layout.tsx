import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "./provider";

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
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={"GTM-MQD3GK9P"} />
      <body className={`no-scrollbar`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-T6BLKQ2H5F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Yn9kQw"
        ></script>
      </body>
    </html>
  );
}
