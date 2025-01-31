import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const lufga = localFont({
  src: [
    {
      path: '../../public/fonts/lufga/LufgaLight.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/lufga/LufgaRegular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/lufga/LufgaMedium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/lufga/LufgaSemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/lufga/LufgaBold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-lufga',
});
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
    <html lang="en">
      <body
        className={`${lufga.variable ?? ''} ${raleway.variable} ${inter.variable} no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
