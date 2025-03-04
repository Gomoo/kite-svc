/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const images = [
  "/images/landingpage/Frame1.svg",
  "/images/landingpage/Frame2.svg",
  "/images/landingpage/Frame3.svg",
  "/images/landingpage/Frame4.svg",
  "/images/landingpage/Frame5.svg",
  "/images/landingpage/Frame6.svg",
  "/images/landingpage/Frame7.svg",
  "/images/landingpage/Frame8.svg",
];

function TickerComp() {
  return (
    <>
      <div className="mx-auto mt-[52px] md:pt-[101px] xl:px-[94px]">
        <h3 className="inview-once text-center text-mobileHeader !font-medium leading-mobileHeader opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:text-header md:leading-[57.2px]">
          Global Payments For Global Talents
        </h3>
        <p className="inview-once mx-auto mt-4 w-9/12 text-center text-mobileBody font-normal leading-body tracking-[-0.22px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:mt-1.5 md:w-[540px] md:text-sm">
          Send and receive USD payments from 100+ countries across the globe.
        </p>
      </div>
      <Marquee className="mb-10 mt-[52px] h-20 bg-gray-100">
        <div className="flex gap-7">
          {images.map((img, index) => (
            <div key={index} className="relative flex !h-10 shrink-0">
              <img src={img} alt="country" className="!h-full object-contain" />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
}

export default TickerComp;
