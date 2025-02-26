import Image from "next/image";

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
      <h3 className="inview-once text-mobileHeader leading-mobileHeader text-center font-medium tracking-[-3%] opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:text-header md:leading-header">
        Get Paid Seamlessly, Wherever You Work
      </h3>
      <p className="inview-once text-mobileBody mx-auto mt-4 w-9/12 text-center font-normal leading-[26px] text-textTertiary opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:w-[425px]">
        Receive payments effortlessly from leading freelance and creative
        platforms.
      </p>
      <div className="mt-[46px]">
        <div className="inview-once mx-auto flex w-[322.67px] flex-col justify-center gap-[30px] rounded-[20px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein md:h-[323px] md:w-full md:flex-row md:gap-[11px]">
          <div className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5">
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
                  className={`shrink-0 object-cover object-top grayscale duration-300 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
          <div className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5">
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
                  className={`shrink-0 object-cover object-top grayscale duration-300 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
          <div className="flex h-[322.67px] w-[322.67px] items-center justify-center rounded-2xl bg-gray-100 md:h-full">
            <Image
              src={"/images/landingpage/logo.png"}
              alt="get-paid"
              width={214}
              height={215}
              className="shrink-0 object-cover object-top"
            />
          </div>
          <div className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5">
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
                  className={`shrink-0 object-cover object-top grayscale duration-300 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
          <div className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5">
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
                  className={`shrink-0 object-cover object-top grayscale duration-300 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
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
    </div>
  );
}

export default GetPaid;
