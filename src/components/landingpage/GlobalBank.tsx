/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

const panels = [
  {
    image: "/images/landingpage/1.png",
    title: "Freelancers",
    description:
      "Get paid seamlessly in USD and convert to your local currency anytime.",
  },
  {
    image: "/images/landingpage/2.png",
    title: "Remote Workers",
    description: "Receive your salary in USD with ease, no hidden fees.",
  },
  {
    image: "/images/landingpage/3.png",
    title: "Digital Nomads",
    description:
      "A global banking system that moves with you, wherever you go.",
  },
];

function GlobalBank() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  const title = ["Freelancers", "Remote Workers", "Digital Nomads"];
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startTimeout = () => {
      timeoutId = setTimeout(() => {
        setExpandedIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        startTimeout(); // Recursively start the timeout again
      }, 7000);
    };

    startTimeout();

    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts or when expandedIndex changes
    };
  }, [expandedIndex]);

  return (
    <div className="relative pt-[117.95px]">
      <h3 className="inview-once hidden text-center text-mobileHeader font-semibold leading-mobileHeader opacity-0 ease-in-out [--slidein-delay:100ms] inview:animate-slidein md:block md:text-header md:leading-[51px]">
        A truly global bank for {title[expandedIndex]}
      </h3>
      <h3 className="inview-once text-center text-mobileHeader font-semibold leading-mobileHeader opacity-0 ease-in-out [--slidein-delay:100ms] inview:animate-slidein md:hidden md:text-header md:leading-[51px]">
        A truly global bank for {title[expandedIndex]}
      </h3>
      <p className="inview-once mx-auto mt-4 text-center text-mobileBody font-normal leading-body tracking-[-0.22px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:mt-1.5 md:w-[540px] md:text-sm">
        Kite is designed to meet the global banking needs of individuals,
        providing an efficient way to receive USD payments and easily convert to
        local currency at the best rates.
      </p>
      <div className="inview-once mx-auto mt-11 hidden h-[463px] justify-center gap-4 rounded-[10px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:flex">
        {panels.map((panel, index) => {
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

      <div className="mt-[63px] space-y-12 md:hidden">
        {panels.map((panel, index) => (
          <div
            className={`inview-once opacity-0 inview:animate-slidein`}
            key={index}
            style={
              {
                "--slidein-delay": `200ms`,
              } as React.CSSProperties
            }
          >
            <div className="relative h-[354px] w-full overflow-hidden rounded-xl">
              <img
                src={panel.image}
                alt=""
                className={`h-full w-full object-cover`}
              />
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
              />
            </div>
            <div className={`spcae-y-[9px] mt-[17px]`}>
              <h3
                className={`text-[15px] font-bold text-black !transition-all duration-500 ease-in-out`}
              >
                {panel.title}
              </h3>

              <p
                className={`mt-px text-[17px] font-normal text-textTertiary transition-all delay-700`}
              >
                {panel.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-[54px] h-[2px] w-10/12 bg-[#e4e2e1]/40" />
    </div>
  );
}

export default GlobalBank;
