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
    <Marquee className="mb-10 mt-[60px] h-20 bg-gray-100">
      <div className="flex gap-7">
        {images.map((img, index) => (
          <div key={index} className="relative flex !h-10 shrink-0">
            <img src={img} alt="country" className="!h-full object-contain" />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default TickerComp;
