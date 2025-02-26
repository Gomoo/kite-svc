import Image from "next/image";

const sections = [
  {
    title: "Create an account",
    description:
      "With your email address, you can easily create your Kite account from the app on either the App store or Play Store.",
    icon: "/images/landingpage/Calendar.svg",
    image: null,
    bg: "#f8f7f8",
  },
  {
    title: "Complete verification",
    description:
      "Submit all requested documents to complete your verification process.",
    icon: "/images/landingpage/Calendar.svg",
    image: null,
    bg: "#fff7f2",
  },
  {
    title: "Request a USD account",
    description:
      "Once verification is done, simply request for your USD account and start making global payments.",
    icon: "/images/landingpage/Calendar.svg",
    image: "/images/landingpage/iphone.png",
    bg: "#E8F2FF",
  },
];

function GetAccount() {
  return (
    <div className="relative mx-auto pt-20 xl:w-[1024px]">
      <p className="inview-once text-center text-sm font-semibold leading-[26px] text-textSecondary [--slidein-delay:100ms] inview:animate-slidein">
        HOW IT WORKS
      </p>
      <h3 className="inview-once mt-2.5 text-center text-[44px] font-medium leading-[57.2px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
        Get a USD Account in 3 Easy Steps
      </h3>
      <div
        className={`inview-once mt-[54px] grid grid-cols-2 gap-[34px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein`}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`rounded-[20px] duration-700 ease-in-out hover:scale-[1.03] ${index === 2 ? "col-span-2 flex flex-row justify-between lg:h-[404px] lg:flex-row" : "col-span-2 h-[404px] md:col-span-1"} relative`}
            style={
              {
                background: section.bg,
              } as React.CSSProperties
            }
          >
            <div className="pb-[27.87px] pl-7 pt-[60px] xl:pl-[42px]">
              <Image
                src={section.icon}
                width={32.24}
                height={32.88}
                alt="icon"
                className="shrink-0"
              />
              <h4 className="mt-6 text-[35.87px] font-semibold leading-[46.63px] tracking-[-0.54px]">
                {section.title}
              </h4>
              <p
                className={`mt-[15px] text-[20.11px] font-normal leading-[33px] tracking-[0%] text-textSecondary md:h-[130px] lg:h-[99px] ${index === 2 ? "md:w-[304px] lg:w-[424px]" : ""} `}
              >
                {section.description}
              </p>
              <button className="mt-4 flex h-[57px] w-[266px] items-center justify-center gap-3 rounded-full bg-white">
                <h3 className="text-xl !font-semibold text-orange">
                  Download App
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
              </button>
            </div>
            {section.image && (
              <Image
                src={section.image}
                alt="iphone"
                height={794}
                width={473}
                className="mx-auto mt-auto h-auto w-[390px] shrink-0 object-contain lg:w-[473px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAccount;
