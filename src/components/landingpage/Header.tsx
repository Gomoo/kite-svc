import Image from "next/image";
import React from "react";
import StoreButton from "./StoreButton";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row xl:items-center xl:justify-between px-4 md:px-10 lg:px-20 xl:pt-10 ">
      <div className="xl:w-1/2 mt-[54px] lg:w-[522px]">
        <h1 className="text-4xl md:text-5xl xl:text-[82px] leading-none font-lugfa font-medium ">
          Smarter USD banking for Africa&apos;s professionals
        </h1>
        <p className="text-[#98A2B3] font-normal text-lg xl:text-xl leading-none mt-4">
          Easily open a free USD bank account in your name for global
          collections and payouts. Get the Kite app and access seamless payment
          solutions.
        </p>
        <StoreButton />
        <div className="hidden mt-10 md:flex gap-5">
          <Image
            src="/landingpage/avatars.png"
            alt="avatars"
            width={200}
            height={60}
            className="shrink-0 lg:w-[138px] lg:h-[55px]"
          />
          <p className="text-[#9e9e9e] font-normal text-sm xl:text-base leading-tight">
            Trusted and loved by freelancers from Andela, Fiverr and more who
            use our services for more convenient payments.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end pt-[43px]">
        <Image
          src={"/landingpage/Body.png"}
          alt="mobile-phone"
          width={359}
          height={740}
          className="lg:w-[359px] lg:h-[500px] lg:object-contain xl:h-[740px]"
        />
      </div>
    </div>
  );
}

export default Header;
