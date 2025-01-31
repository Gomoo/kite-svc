import Image from 'next/image';
import StoreButton from './StoreButton';

const images = [
  '/landingpage/upwork.svg',
  '/landingpage/fiver.svg',
  '/landingpage/pioneer.svg',
  '/landingpage/tiktok.svg',
  '/landingpage/amazon.svg',
  '/landingpage/etsy.svg',
];

function GetPaidFast() {
  return (
    <div className="p-4 md:p-10 xl:p-20">
      <div className="rounded-3xl bg-deepblue pt-20">
        <h1 className="inview:animate-slidein inview-once text-center font-lugfa text-3xl font-medium leading-none text-white opacity-0 [--slidein-delay:100ms] lg:text-6xl">
          Get paid faster
        </h1>
        <p className="inview:animate-slidein inview-once mx-auto mt-4 w-9/12 text-center text-sm font-normal text-white opacity-0 [--slidein-delay:300ms] md:w-[631px] lg:text-lg">
          Open an account today and start receiving faster USD payment in more than 30+ platforms
          globally. Maximize your earnings across all platforms using Kite.
        </p>
        <div className="flex w-full justify-center">
          <StoreButton isGetPay />
        </div>
        <div className="inview:animate-slidein inview-once mx-auto mt-6 grid grid-cols-2 gap-4 px-4 opacity-0 [--slidein-delay:700ms] md:mt-16 md:grid-cols-3 xl:w-9/12 xl:gap-6 xl:px-0">
          {images.map((img, index) => (
            <div
              className="flex h-[71px] items-center justify-center rounded-xl bg-blue lg:h-[122px] lg:w-[298px] lg:rounded-3xl"
              key={index}
            >
              <Image
                src={img}
                alt={`${index}-platform`}
                className="h-[18px] w-[66px] object-center md:h-[28px] md:w-[75.14px] lg:h-9 lg:w-[130px]"
                width={130}
                height={36}
              />
            </div>
          ))}
        </div>
        <Image
          src={'/landingpage/foreign2.png'}
          alt="design.3.1"
          width={600}
          height={700}
          className="inview:animate-slidein inview-once mx-auto mt-[54px] w-4/12 opacity-0 [--slidein-delay:1000ms] md:h-[100px] md:w-[400px] lg:h-[200px] lg:w-[600px]"
        />
      </div>
    </div>
  );
}

export default GetPaidFast;
