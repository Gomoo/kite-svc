/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import { HorizontalTicker } from "react-infinite-ticker";
import Image from "next/image";
import { useState } from "react";

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
  const [duration, setDuration] = useState(15000);
  const [delay, setDelay] = useState(0);
  const [easing, setEasing] = useState("linear");
  const [reverse, setReverse] = useState(false);

  return (
    <div className="mb-10 mt-[60px] flex h-20 w-screen items-center bg-gray-100">
      <HorizontalTicker
        duration={duration}
        easing={easing}
        delay={delay}
        reverse={reverse}
      >
        {images.map((img, index) => (
          <div className="box-wrapper box-wrapper--vertical" key={index}>
            <div className="box relative !h-10 shrink-0 overflow-hidden">
              <img src={img} alt="country" className="!h-full object-contain" />
            </div>
          </div>
        ))}
      </HorizontalTicker>
    </div>
  );
}

export default TickerComp;
