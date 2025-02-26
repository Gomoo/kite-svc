import Image from "next/image";

const row1 = [
  "/images/landingpage/upwork.jpeg",
  "/images/landingpage/fiverr.jpeg",
  "/images/landingpage/dribble.jpeg",
];
const row2 = [
  "/images/landingpage/youtube.jpeg",
  "/images/landingpage/tiktok.png",
  "/images/landingpage/deel.jpeg",
];

function GetPaid() {
  return (
    <div className="relative mx-auto pt-[192px] xl:w-[1024px]">
      <h3 className="inview-once text-header font-medium leading-header tracking-[-3%] opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
        Get Paid Seamlessly, Wherever You Work
      </h3>
      <p className="inview-once mt-4 w-[425px] text-[17px] font-normal leading-[26px] text-textTertiary opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
        Receive payments effortlessly from leading freelance and creative
        platforms.
      </p>
      <div className="mt-[46px] grid grid-cols-2 gap-2.5">
        <div className="inview-once flex h-[323px] gap-[10.66px] rounded-[20px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
          <div className="h-full w-[100px] shrink-0 space-y-2.5">
            {row1.map((image, index) => (
              <div
                key={index}
                className="flex h-[100px] w-full shrink-0 items-center justify-center rounded-2xl bg-gray-100"
              >
                <Image
                  src={image}
                  alt="get-paid"
                  width={60}
                  height={60}
                  className={`shrink-0 object-cover object-top grayscale duration-500 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
          <div className="flex h-full w-[322.67px] items-center justify-center rounded-2xl bg-gray-100">
            <Image
              src={"/images/landingpage/logo.png"}
              alt="get-paid"
              width={214}
              height={215}
              className="shrink-0 object-cover object-top"
            />
          </div>
          <div className="h-full w-[100px] shrink-0 space-y-2.5">
            {row2.map((image, index) => (
              <div
                key={index}
                className="flex h-[100px] w-full shrink-0 items-center justify-center rounded-2xl bg-gray-100"
              >
                <Image
                  src={image}
                  alt="get-paid"
                  width={60}
                  height={60}
                  className={`shrink-0 object-cover object-top grayscale duration-500 ease-in-out hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="inview-once relative h-[329px] overflow-hidden rounded-[20px] opacity-0 [--slidein-delay:700ms] inview:animate-slidein">
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
        </div>
      </div>
    </div>
  );
}

export default GetPaid;
