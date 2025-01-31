import Image from 'next/image';
import React from 'react';
import StoreButton from './StoreButton';

function Header() {
  return (
    <div className="flex flex-col px-4 md:px-10 md:pt-5 lg:flex-row lg:items-center lg:px-20 xl:justify-between xl:px-28">
      <div className="md:w-8/12">
        <h1 className="inview:animate-slidein inview-once font-lugfa text-4xl font-bold opacity-0 [--slidein-delay:300ms] md:text-5xl lg:leading-[73px] xl:text-[73px]">
          Smarter USD banking for Africa&apos;s professionals
        </h1>
        <p className="inview:animate-slidein inview-once mt-4 text-lg font-normal leading-none text-[#98A2B3] opacity-0 [--slidein-delay:500ms] xl:w-10/12 xl:text-lg">
          Easily open a free USD bank account in your name for global collections and payouts. Get
          the Kite app and access seamless payment solutions.
        </p>
        <StoreButton />
        {/* <div className="mt-10 hidden items-center gap-5 md:mt-5 md:flex xl:w-11/12">
          <Image
            src="/landingpage/avatars.png"
            alt="avatars"
            width={150}
            height={40}
            className="shrink-0 lg:h-[55px] lg:w-[138px]"
          />
          <p className="text-sm font-normal leading-tight text-[#9e9e9e] xl:text-base">
            Trusted and loved by freelancers from Andela, Fiverr and more who use our services for
            more convenient payments.
          </p>
        </div> */}
      </div>
      <div className="inview:animate-slidein inview-once flex justify-center pt-[43px] opacity-0 [--slidein-delay:700ms] lg:w-1/2 lg:justify-end">
        <Image
          src={'/landingpage/Body.png'}
          alt="mobile-phone"
          width={359}
          height={740}
          className="shrink-0 lg:h-[500px] lg:w-[359px] lg:object-contain xl:h-[650px] xl:object-contain"
        />
      </div>
    </div>
  );
}

export default Header;
