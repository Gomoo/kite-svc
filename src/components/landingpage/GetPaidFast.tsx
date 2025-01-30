import Image from "next/image";
import StoreButton from "./StoreButton";

const images = [
  "/landingpage/upwork.svg",
  "/landingpage/fiver.svg",
  "/landingpage/pioneer.svg",
  "/landingpage/tiktok.svg",
  "/landingpage/amazon.svg",
  "/landingpage/etsy.svg",
];

function GetPaidFast() {
  return (
    <div className="p-4 md:p-10 xl:p-20">
      <div className="bg-deepblue rounded-3xl pt-20">
        <h1 className="text-3xl lg:text-6xl text-white text-center leading-none font-lugfa font-medium ">
          Get paid faster
        </h1>
        <p className="text-white font-normal text-sm lg:text-lg mt-4 text-center w-9/12 md:w-[631px] mx-auto ">
          Open an account today and start receiving faster USD payment in more
          than 30+ platforms globally. Maximize your earnings across all
          platforms using Kite.
        </p>
        <div className="flex justify-center w-full">
          <StoreButton isGetPay />
        </div>
        <div className="px-4 xl:px-0 xl:w-9/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6 mt-6 md:mt-16">
          {images.map((img, index) => (
            <div
              className="h-[71px] lg:h-[122px] lg:w-[298px] flex justify-center rounded-xl lg:rounded-3xl items-center bg-blue"
              key={index}
            >
              <Image
                src={img}
                alt={`${index}-platform`}
                className="object-center h-[18px] w-[66px] md:h-[28px] md:w-[75.14px] lg:h-9 lg:w-[130px]"
                width={130}
                height={36}
              />
            </div>
          ))}
        </div>
        <Image
          src={"/landingpage/foreign2.png"}
          alt="design.3.1"
          width={600}
          height={700}
          className="w-4/12 md:w-[400px] md:h-[100px] lg:h-[200px] lg:w-[600px] mx-auto mt-[54px]"
        />
      </div>
    </div>
  );
}

export default GetPaidFast;
