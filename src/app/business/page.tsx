"use client";
import useIsAppleDevice from "@/hooks/useIsApple";
import { Widget } from "@typeform/embed-react";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Business() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative h-screen">
        <Widget id="w9NIVr8N" className="h-full" />
      </div>
    </div>
  );
}

export default Business;

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
      } ${isScrolledBgDesktop && "!top-0 h-[80px] bg-white md:h-[58px]"} `}
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
          className={`group flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white font-['Geist'] text-sm font-semibold transition-all duration-100 ease-in-out hover:border hover:border-green-500 md:w-fit ${
            isScrolled ? "bg-black md:bg-white" : ""
          }`}
        >
          <a
            href={whatsapplink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-full w-full items-center justify-center gap-2 md:px-3 ${isScrolled ? "" : "transition-colors duration-300 ease-in-out group-hover:text-green-500"} `}
          >
            <Image
              alt="whatsapp"
              src={"/images/whatsapp.png"}
              height={20}
              width={20}
              className="h-4 w-4 !shrink-0 object-contain md:h-5 md:w-5"
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
