'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function LandingPageHeader() {
  return (
    <div className="h-[675px] w-full overflow-hidden bg-[url('/images/landingpage/header.png')] bg-cover pt-3">
      <Navbar />
      <Content />
    </div>
  );
}

export default LandingPageHeader;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`inview-once lg"w-10/12 container fixed top-3 z-50 mx-auto flex h-[58px] w-11/12 items-center justify-between opacity-0 transition-all duration-500 [--slidein-delay:100ms] inview:animate-slidein ${isScrolled ? 'lg:px-[6%]' : '!px-[5.1%] lg:!px-[12.1%]'}`}
    >
      <Image src="/images/logo.png" width={74} height={44} alt="logo" className="" />

      <button
        className={`flex h-[32px] w-[115px] items-center justify-center rounded-full font-['Geist'] text-sm font-semibold transition-all duration-300 ${
          isScrolled
            ? 'bg-orange text-white' // Styles after scrolling 200px
            : 'text-orbg-orange bg-white' // Default styles
        }`}
      >
        Download
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="mt-[88px] flex flex-col items-center justify-center">
      <div className="w-[388px] space-y-2.5">
        <h1 className="inview-once text-center font-['Geist'] text-[44px] font-semibold leading-[51px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
          The Super App for Global Banking
        </h1>
        <p className="inview-once text-center text-sm font-normal leading-[26px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
          Open a US dollar bank account and start sending, receiving, and saving money in minutes.
        </p>
      </div>
      <button className="inview-once mt-4 flex h-[57px] w-[266px] items-center justify-center gap-3 rounded-full bg-white opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
        <h3 className="text-xl !font-semibold text-orange">Download App</h3>
        <div className="flex gap-3">
          <Image
            src="/images/landingpage/ios.png"
            width={22.58}
            height={22.58}
            alt="ios"
            className="shrink-0 object-contain"
          />
          <div className="h-7 w-[0.8px] bg-[#d9d9d9]" />
          <Image
            src="/images/landingpage/android.png"
            width={22.58}
            height={22.58}
            alt="android"
            className="shrink-0 object-contain"
          />
        </div>
      </button>
      <Image
        src="/images/landingpage/iphonee.png"
        alt="phone"
        width={429.51}
        height={721}
        className="object-contain"
        priority
      />
    </div>
  );
}
