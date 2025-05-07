"use client";
import useIsAppleDevice from "@/hooks/useIsApple";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
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
  const [isScrolledBg, setIsScrolledBg] = useState(false);
  const [isScrolledBgDesktop, setIsScrolledBgDesktop] = useState(false);
  const { storeLink } = useIsAppleDevice();
  const whatsapplink = "https://wa.me/2349126671174";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 10) {
        setIsScrolledBg(true);
      } else {
        setIsScrolledBg(false);
      }
      if (window.scrollY > 570) {
        setIsScrolledBgDesktop(true);
      } else {
        setIsScrolledBgDesktop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`inview-once container fixed top-[30px] z-50 mx-auto flex h-[58px] items-center justify-between opacity-0 transition-all duration-500 [--slidein-delay:100ms] inview:animate-slidein md:top-3 md:w-11/12 lg:w-11/12 ${
        isScrolled
          ? "px-[5.1%]" // Styles after scrolling 200px
          : "!px-[5.1%] lg:!px-[12.1%]" // Default styles
      } ${
        isScrolledBg && "!top-0 h-[80px] bg-white md:h-[58px] md:bg-transparent" // Styles after scrolling 700px
      } ${isScrolledBgDesktop && "!top-0 h-[80px] bg-white md:h-[58px] md:bg-white"} `}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={74}
          height={44}
          alt="logo"
          // className="bg-white"
        />
      </Link>

      <div className={`flex items-center gap-3`}>
        <button
          className={`group flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white font-['Geist'] text-sm font-semibold transition-all duration-100 ease-in-out md:w-fit md:px-3 ${
            isScrolled ? "bg-black md:border md:border-green-500 md:bg-white" : ""
          }`}
        >
          <a
            href={whatsapplink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-full w-full items-center justify-center gap-2 ${isScrolled ? "" : "transition-colors duration-300 ease-in-out group-hover:text-green-500"} `}
          >
            <Image
              alt="whatsapp"
              src={"/images/whatsapp.png"}
              height={20}
              width={20}
              className="h-4 w-4 shrink-0 md:h-5 md:w-5"
            />
            <span className="hidden md:block">Chat with us</span>
          </a>
        </button>
        <button
          className={`group flex h-[32px] w-[32px] items-center justify-center rounded-full font-['Geist'] text-sm font-semibold transition-all duration-300 ease-in-out hover:border hover:border-orange md:w-[115px] ${
            isScrolled
              ? "bg-black text-orange md:bg-orange md:text-white"
              : "text-orbg-orange bg-white"
          }`}
        >
          <a
            href={storeLink}
            className={`flex h-full w-full items-center justify-center ${isScrolled ? "" : "transition-colors duration-300 ease-in-out group-hover:text-orange"} `}
          >
            <Download className="md:hidden" size={16} />
            <span className="hidden md:block">Download</span>
          </a>
        </button>
      </div>
    </div>
  );
}

function Content() {
  const { storeLink } = useIsAppleDevice();

  return (
    <div className="mt-44 flex flex-col items-center justify-center md:mt-[88px]">
      <div className="w-[388px] space-y-5 md:space-y-2.5">
        <h1 className="inview-once text-center font-['Geist'] text-[40px] font-semibold leading-[51px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:text-[44px]">
          The Super App for Global Banking
        </h1>
        <p className="inview-once mx-auto w-9/12 text-center text-[17px] font-normal leading-[26px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:w-auto md:text-sm">
          Open a US dollar bank account and start sending, receiving, and saving money in minutes.
        </p>
      </div>
      <button className="inview-once mt-7 flex h-[57px] w-[266px] items-center justify-center gap-3 rounded-full bg-white opacity-0 transition-colors duration-500 ease-in-out [--slidein-delay:500ms] hover:border hover:border-orange inview:animate-slidein md:mt-4">
        <a href={storeLink} className="flex h-full w-full items-center justify-center gap-3">
          <h3 className="text-mobileBody font-medium text-orange md:text-xl md:!font-semibold">
            Download <span className="hidden md:inline">App</span>
            {/* <span className="inline md:hidden">on mobile</span> */}
          </h3>
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
        </a>
      </button>
      <Image
        src="/images/landingpage/Iphone.png"
        alt="phone"
        width={350.51}
        height={700}
        className="inview-once !mt-3 hidden object-contain opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:block"
        priority
      />
    </div>
  );
}
