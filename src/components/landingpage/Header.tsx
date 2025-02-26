"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function LandingPageHeader() {
  return (
    <div className="relative h-[572px] overflow-hidden bg-[url('/images/landingpage/header.png')] bg-cover pt-3 md:h-[675px]">
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`inview-once container fixed top-[50px] z-50 mx-auto flex h-[58px] items-center justify-between opacity-0 transition-all duration-500 [--slidein-delay:100ms] inview:animate-slidein md:top-3 md:w-11/12 lg:w-10/12 ${isScrolled ? "px-[5.1%]" : "!px-[5.1%] lg:!px-[12.1%]"}`}
    >
      <Image
        src="/images/logo.png"
        width={74}
        height={44}
        alt="logo"
        // className="bg-white"
      />

      <button
        className={`flex h-[32px] w-[115px] items-center justify-center rounded-full font-['Geist'] text-sm font-semibold transition-all duration-300 ${
          isScrolled
            ? "bg-orange text-white" // Styles after scrolling 200px
            : "text-orbg-orange bg-white" // Default styles
        }`}
      >
        Download
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="mt-44 flex flex-col items-center justify-center md:mt-[88px]">
      <div className="w-[388px] space-y-5 md:space-y-2.5">
        <h1 className="inview-once text-center font-['Geist'] text-[40px] font-semibold leading-[51px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:text-[44px]">
          The Super App for Global Banking
        </h1>
        <p className="inview-once mx-auto w-9/12 text-center text-[17px] font-normal leading-[26px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:w-auto md:text-sm">
          Open a US dollar bank account and start sending, receiving, and saving
          money in minutes.
        </p>
      </div>
      <button className="inview-once mt-7 flex h-[57px] w-[266px] items-center justify-center gap-3 rounded-full bg-white opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:mt-4">
        <h3 className="text-mobileBody font-medium text-orange md:text-xl md:!font-semibold">
          Download <span className="hidden md:inline">App</span>
          <span className="inline md:hidden">on mobile</span>
        </h3>
        <div className="hidden gap-3 md:flex">
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
        src="/images/landingpage/iphone.png"
        alt="phone"
        width={429.51}
        height={721}
        className="hidden object-contain md:block"
        priority
      />
    </div>
  );
}
