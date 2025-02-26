import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kite App',
  description: ' Convert your Stablecoins (USDC, USDT) to Naira and Dollars.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`no-scrollbar`}>{children}</body>
    </html>
  );
}
