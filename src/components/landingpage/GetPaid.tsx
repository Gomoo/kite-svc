import Image from "next/image";
import SimpleAutoScroll, { Row1, Row2, Row5 } from "../AutoScroll";
import Marquee from "react-fast-marquee";

const row1 = [
  "/images/landingpage/upwork.jpeg",
  "/images/landingpage/fiverr.jpeg",
  "/images/landingpage/dribble.jpeg",
];
const row2 = [
  "/images/landingpage/youtube.jpeg",
  "/images/landingpage/tiktok.png",
  "/images/landingpage/ebay.jpeg",
];
const row3 = [
  "/images/landingpage/toptal.png",
  "/images/landingpage/x.jpeg",
  "/images/landingpage/deel.jpeg",
];
const row4 = [
  "/images/landingpage/payoneer.jpeg",
  "/images/landingpage/freelancer.jpeg",
  "/images/landingpage/be.jpeg",
];

function GetPaid() {
  return (
    <div className="relative mx-auto pt-[192px] xl:w-[1024px]">
      <h3 className="inview-once text-center text-mobileHeader font-medium leading-mobileHeader tracking-[-3%] opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:text-header md:leading-header">
        Get Paid Seamlessly, Wherever You Work
      </h3>
      <p className="inview-once mx-auto mt-4 w-9/12 text-center text-mobileBody font-normal leading-[26px] text-textTertiary opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:w-[425px]">
        Receive payments effortlessly from leading freelance and creative
        platforms.
      </p>
      <div className="mt-[46px] md:hidden">
        <div className="inview-once mx-auto flex w-[322.67px] flex-col justify-center gap-[30px] rounded-[20px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:h-[323px] md:w-full md:flex-row md:gap-[11px]">
          <Marquee className="">
            <div className="flex h-full shrink-0 justify-between space-x-2.5 md:block md:w-[100px] md:space-x-0 md:space-y-2.5">
              {row1.map((image, index) => (
                <div
                  key={index}
                  className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
                >
                  <Image
                    src={image}
                    alt="get-paid"
                    width={60}
                    height={60}
                    className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="flex h-full shrink-0 justify-between space-x-2.5 md:block md:w-[100px] md:space-x-0 md:space-y-2.5">
              {row2.map((image, index) => (
                <div
                  key={index}
                  className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
                >
                  <Image
                    src={image}
                    alt="get-paid"
                    width={60}
                    height={60}
                    className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
                  />
                </div>
              ))}
            </div>
          </Marquee>

          <div className="flex h-[322.67px] w-[322.67px] items-center justify-center rounded-2xl bg-gray-100 md:h-full">
            <Image
              src={"/images/landingpage/logo.png"}
              alt="get-paid"
              width={214}
              height={215}
              className="shrink-0 object-cover object-top"
            />
          </div>
          <Marquee>
            <div className="flex h-full shrink-0 justify-between space-x-2.5 md:block md:w-[100px] md:space-x-0 md:space-y-2.5">
              {row3.map((image, index) => (
                <div
                  key={index}
                  className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
                >
                  <Image
                    src={image}
                    alt="get-paid"
                    width={60}
                    height={60}
                    className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="flex h-full shrink-0 justify-between space-x-2.5 md:block md:w-[100px] md:space-x-0 md:space-y-2.5">
              {row4.map((image, index) => (
                <div
                  key={index}
                  className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
                >
                  <Image
                    src={image}
                    alt="get-paid"
                    width={60}
                    height={60}
                    className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        {/* <div className="inview-once relative h-[329px] overflow-hidden rounded-[20px] opacity-0 [--slidein-delay:700ms] inview:animate-slidein">
          <Image
            src={"/images/landingpage/getpaid.png"}
            alt="get-paid"
            fill
            className="scale-[1.05] object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
              0deg,
              rgba(22, 36, 39, 0.9) 0%,
              rgba(243, 223, 202, 0.36) 40%,
              rgba(248, 225, 228, 0) 100%
            )`,
            }}
          ></div>
        </div> */}
      </div>
      <div className="mt-[46px] hidden md:block">
        <div className="inview-once relative mx-auto flex w-[322.67px] flex-col justify-center gap-[30px] overflow-hidden rounded-[20px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:h-[323px] md:w-full md:flex-row md:gap-[11px]">
          <Row1 />
          <Row2 />
          <div className="flex h-[322.67px] w-[322.67px] items-center justify-center rounded-2xl bg-gray-100 md:h-full">
            <Image
              src={"/images/landingpage/logo.png"}
              alt="get-paid"
              width={214}
              height={215}
              className="shrink-0 object-cover object-top"
            />
          </div>
          <SimpleAutoScroll />

          <Row5 />
        </div>
      </div>
    </div>
  );
}

export default GetPaid;
