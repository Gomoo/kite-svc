"use client";
import useIsAppleDevice from "@/hooks/useIsApple";
import Image from "next/image";

const sections = [
  {
    title: "Create an account",
    description:
      "With your email address, you can easily create your Kite account from the app on either the App store or Play Store.",
    icon: "/images/landingpage/User.png",
    image: null,
    bg: "#f8f7f8",
  },
  {
    title: "Complete verification",
    description:
      "Submit all requested documents to complete your verification process.",
    icon: "/images/landingpage/IdentificationCard.png",
    image: null,
    bg: "#fff7f2",
  },
  {
    title: "Request a USD account",
    description:
      "Once verification is done, simply request for your USD account and start making global payments.",
    icon: "/images/landingpage/CurrencyDollar.png",
    image: "/images/landingpage/iphone.png",
    bg: "#E8F2FF",
  },
];

function GetAccount() {
  const { storeLink } = useIsAppleDevice();

  return (
    <div className="relative mx-auto pt-20 xl:w-[1024px]">
      <p className="inview-once text-center text-mobileBody font-semibold leading-[26px] text-textSecondary [--slidein-delay:100ms] inview:animate-slidein md:text-sm">
        HOW IT WORKS
      </p>
      <h3 className="inview-once mt-2.5 text-center text-mobileHeader font-semibold leading-mobileHeader opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:text-header md:font-medium md:leading-header">
        Get a USD Account in 3 Easy Steps
      </h3>
      <div
        className={`inview-once mt-[54px] grid grid-cols-2 gap-[34px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein`}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`rounded-[20px] duration-700 ease-in-out hover:scale-[1.03] ${index === 2 ? "col-span-2 flex h-[354px] flex-row justify-between md:h-auto lg:h-[404px] lg:flex-row" : "col-span-2 h-[354px] md:col-span-1 md:h-[404px]"} relative`}
            style={
              {
                background: section.bg,
              } as React.CSSProperties
            }
          >
            <div className="pb-[27.87px] pl-6 pt-[60px] md:pl-7 xl:pl-[42px]">
              <Image
                src={section.icon}
                width={32.24}
                height={32.88}
                alt="icon"
                className="shrink-0"
              />
              <h4 className="mt-5 text-2xl font-semibold tracking-[-0.54px] md:mt-6 md:text-[35.87px] md:leading-[46.63px]">
                {section.title}
              </h4>
              <p
                className={`mt-[15px] h-[78px] w-11/12 text-[15px] font-normal leading-[26px] tracking-[0%] text-textSecondary md:h-[130px] md:text-[20.11px] md:leading-[33px] lg:h-[99px] ${index === 2 ? "md:w-[304px] lg:w-[424px]" : ""} `}
              >
                {section.description}
              </p>
              <button className="inview-once mt-7 flex h-[57px] w-[266px] items-center justify-center gap-3 rounded-full bg-white opacity-0 transition-colors duration-500 ease-in-out [--slidein-delay:500ms] hover:border hover:border-orange inview:animate-slidein md:mt-4">
                <a
                  href={storeLink}
                  className="flex h-full w-full items-center justify-center gap-3"
                >
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
                </a>
              </button>
            </div>
            {section.image && (
              <Image
                src={section.image}
                alt="iphone"
                height={794}
                width={473}
                className="mx-auto mt-auto hidden h-auto w-[390px] shrink-0 object-contain md:block lg:w-[473px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAccount;
