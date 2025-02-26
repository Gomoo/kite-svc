/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const panels = [
  {
    image: "/images/landingpage/1.png",
    title: "Freelancers",
    description:
      "Kite is designed to meet the global banking needs of individuals, providing an efficient way to receive USD payments and easily convert to local currency at the best rates.",
  },
  {
    image: "/images/landingpage/2.png",
    title: "Remote Workers",
    description:
      "Kite is designed to meet the global banking needs of individuals, providing an efficient way to receive USD payments and easily convert to local currency at the best rates.",
  },
  {
    image: "/images/landingpage/3.png",
    title: "Digital Nomads",
    description:
      "Kite is designed to meet the global banking needs of individuals, providing an efficient way to receive USD payments and easily convert to local currency at the best rates.",
  },
];

function GlobalBank() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };
  return (
    <div className="relative pt-[117.95px]">
      <h3 className="inview-once text-center text-header font-semibold leading-[51px] opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
        A truly global bank for Freelancers
      </h3>
      <p className="inview-once mx-auto mt-1.5 w-[540px] text-center text-sm leading-[26px] tracking-[-0.22px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
        Kite is designed to meet the global banking needs of individuals,
        providing an efficient way to receive USD payments and easily convert to
        local currency at the best rates.
      </p>
      <div className="inview-once mx-auto mt-11 flex h-[463px] justify-center gap-4 rounded-[10px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
        {panels.map((panel, index) => {
          const img = `bg-[url('/images/landingpage/${index + 1}.png')]`;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative h-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${expandedIndex === index ? "w-[773px]" : "w-[200px]"} block min-w-[200px]`}
            >
              <img
                src={panel.image}
                alt=""
                className={`h-full w-full object-cover ${index === 1 ? "object-[58%]" : "object-[53%]"}`}
              />
              <div
                className={`absolute bottom-9 left-4 ${expandedIndex === index ? "w-[472px]" : "w-[172px]"} z-10`}
              >
                <h3
                  className={`text-2xl font-bold text-white !transition-all duration-500 ease-in-out ${expandedIndex !== index && "w-[162px]"}`}
                >
                  {panel.title}
                </h3>

                <p
                  className={`mt-px text-sm text-white transition-all delay-700 ${expandedIndex === index ? "block" : "hidden"}`}
                >
                  {panel.description}
                </p>
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
              0deg,
              rgba(22, 36, 39, 0.9) 0%,
              rgba(243, 223, 202, 0.36) 51.19%,
              rgba(248, 225, 228, 0) 100%
            )`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-[54px] h-[2px] w-10/12 bg-[#e4e2e1]/40" />
    </div>
  );
}

export default GlobalBank;
