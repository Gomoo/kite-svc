"use client";
import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  useEffect(() => {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    function gtag() {
    // @ts-ignore
      dataLayer.push(arguments);
    }
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', "G-9ET789RPSE");
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-9ET789RPSE`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9ET789RPSE');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;