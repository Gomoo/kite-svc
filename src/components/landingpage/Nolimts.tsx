'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { inViewSensor } from 'tailwind-inview';

function Nolimts() {
  useEffect(inViewSensor, []);

  return (
    <div className="mt-16 lg:mt-[45px]">
      <h2 className="inview:animate-slidein inview-once text-center font-lugfa text-3xl font-bold opacity-0 [--slidein-delay:300ms] md:text-5xl xl:text-[56px] xl:leading-[61px]">
        No limits, no borders.
      </h2>
      <div className="flex items-center justify-center gap-6">
        <h2 className="inview:animate-slidein inview-once text-center font-lugfa text-3xl font-bold text-[#0063F2] opacity-0 [--slidein-delay:700ms] md:text-5xl xl:text-[64px]">
          → Go global.
        </h2>
      </div>
      <div className="space-y-6 px-4 pb-20 md:space-y-14 md:px-10 lg:space-y-10 xl:px-20">
        <USAccount />
        <LeftComponent
          image={
            <div className="md:h-full">
              <div className="h-full w-full items-end space-y-2 px-6 pt-7 md:hidden">
                <h5 className="text-base font-normal text-[#E5E5E5]">VIRTUAL CARD</h5>
                <h3 className="text-3xl text-white">Shop and spend globally</h3>
                <p className="text-lg font-normal text-white">
                  Make international payments with a virtual debit card that just works.
                </p>
                <Image
                  src={'/landingpage/cards.png'}
                  alt="card"
                  width={500}
                  height={500}
                  className="ml-auto h-[240px] w-[240px] md:w-[240px] md:object-contain"
                />
              </div>
              <div className="hidden !h-full w-full !items-end px-6 md:flex">
                <Image
                  src={'/landingpage/cards.png'}
                  alt="card"
                  width={500}
                  height={500}
                  className="mt-auto object-contain md:w-[240px] lg:w-full"
                />
              </div>
            </div>
          }
          sub="VIRTUAL CARD"
          title="Shop and spend globally"
          description={`Make international payments with a virtual debit card that just works.`}
        />
        <CurrencyConversion />
        <LeftComponent
          image={
            <div className="md:h-full">
              <div className="h-full w-full items-end space-y-3 px-6 pt-7 md:hidden">
                <h5 className="text-base font-normal text-[#E5E5E5]">GLOBAL PAYMENT</h5>
                <h3 className="text-3xl text-white">Collections and Payouts</h3>
                <p className="text-lg font-normal text-white">
                  Receive USD payments via wires or ACH from your employers or clients on any
                  platform such as Upwork, Deel, Amazon, e.t.c. Also make faster payments.
                </p>
              </div>
              <div className="flex h-full w-full flex-col items-end justify-end space-y-2.5 overflow-hidden pb-1.5 pt-8 md:hidden">
                {[1, 2].map((value, i) => (
                  <Image
                    key={i}
                    src={'/landingpage/notification.png'}
                    alt="notification"
                    width={500}
                    height={500}
                    className="-mr-10 h-14 w-10/12 object-contain lg:h-[58px]"
                  />
                ))}
              </div>
              <div className="hidden h-full w-full px-4 py-8 md:block lg:!space-y-4 lg:px-[29px] lg:py-[46px]">
                {[1, 2, 3, 4].map((value, i) => (
                  <Image
                    key={i}
                    src={'/landingpage/notification.png'}
                    alt="notification"
                    width={500}
                    height={500}
                    className="h-14 w-full lg:h-16 xl:h-20 xl:w-full"
                  />
                ))}
              </div>
            </div>
          }
          sub="GLOBAL PAYMENT"
          title="Collections and Payouts"
          description={`Receive USD payments via wires or ACH from your employers or clients on any platform such as Upwork, Deel, Amazon, e.t.c. Also make faster payments.`}
        />
        <Map />
        <div className="space-y-5 lg:space-y-2">
          <h3 className="inview:animate-slidein inview-once text-3xl opacity-0 [--slidein-delay:300ms]">
            Move money seamlessly
          </h3>
          <p className="inview:animate-slidein inview-once text-lg font-normal text-[#505050] opacity-0 [--slidein-delay:500ms] lg:w-7/12">
            Experience the freedom of smooth, reliable and secure financial transactions. Whether
            you’re sending or receiving payment, we make it simple fast and hassle-free for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nolimts;

function USAccount() {
  return (
    <div className="inview:animate-slidein inview-once mt-10 flex w-full flex-col gap-5 rounded-3xl bg-[#F9FAFB] px-7 pt-7 opacity-0 duration-300 ease-out [--slidein-delay:300ms] hover:scale-[1.02] hover:transition-all hover:duration-300 hover:ease-in md:px-[45px] md:pt-9 lg:flex-row lg:pt-[54px] xl:mt-14">
      <div className="flex flex-col lg:w-8/12 lg:!space-y-2">
        <p className="no__limit__caption font-normal text-[#505050]">BANK ACCOUNTS</p>
        <div className="">
          <h3 className="heading-3 mt-3">Access a US bank account</h3>
          <p className="body-text">
            Easily open a USD bank account in less than 24 hrs and get your IBAN to start receiving
            global payments
          </p>
        </div>
      </div>
      <Image
        src={'/landingpage/bank.png'}
        alt="bank"
        width={500}
        height={500}
        className="mx-auto h-[197px] w-[223px] md:h-[352px] md:w-[400px] xl:object-contain"
      />
    </div>
  );
}

function LeftComponent({
  image,
  title,
  description,
  sub,
}: {
  image: React.ReactElement;
  sub: string;
  title: string;
  description: string;
}) {
  return (
    <div className="inview:animate-slidein inview-once flex gap-4 opacity-0 duration-300 ease-out [--slidein-delay:300ms] hover:scale-[1.02] hover:transition-all hover:duration-300 hover:ease-in lg:flex-row lg:gap-6 xl:h-[460px]">
      <div className="rounded-3xl bg-[#001430] md:w-4/12 lg:h-[460px]">{image}</div>
      <div className="hidden w-8/12 space-y-4 rounded-3xl border border-[#E5E5E5] bg-[#F9FAFB] px-[45px] py-[54px] md:block lg:space-y-8">
        <h3 className="no__limit__caption font-normal text-[#505050]">{sub}</h3>
        <div>
          <h3 className="heading-3 mt-3">{title}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

function CurrencyConversion() {
  return (
    <div className="inview:animate-slidein inview-once flex w-full flex-col gap-5 rounded-3xl bg-[#F9FAFB] px-7 pb-10 pt-7 opacity-0 duration-300 ease-out [--slidein-delay:500ms] hover:scale-[1.02] hover:transition-all hover:duration-300 hover:ease-in md:px-[45px] md:pt-9 lg:flex-row lg:pb-10 lg:pt-[54px]">
      <Image
        src={'/landingpage/currency.png'}
        alt="bank"
        width={500}
        height={500}
        className="mx-auto md:-mt-5 md:w-6/12 lg:-mt-16 lg:h-[352px] lg:w-6/12"
      />
      <div className="flex flex-col lg:w-6/12 lg:space-y-6">
        <p className="no__limit__caption font-normal text-[#505050]">CURRENCRY CONVERSION</p>
        <div className="">
          <h3 className="heading-3 mt-3">Convert money at the best rate</h3>
          <p className="body-text">
            Effortlessly exchange major world currencies at the best rates. Convert money from local
            to foreign and back in a flash.
          </p>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="inview:animate-slidein inview-once relative h-[205px] w-full opacity-0 [--slidein-delay:700ms] md:h-[500px] lg:h-[766.59px]">
      <Image src="/landingpage/map.jpeg" alt="map" layout="fill" objectFit="cover" />
      <Image
        src={'/landingpage/blackman.png'}
        alt="black man"
        className="inview:animate-slidein inview-once absolute left-2/4 top-2/4 z-20 h-3.5 w-3.5 opacity-0 [--slidein-delay:300ms] md:h-[55px] md:w-[55px]"
        width={55}
        height={55}
      />
      <Image
        src={'/landingpage/whiteman.png'}
        alt="black man"
        className="inview:animate-slidein inview-once absolute left-[15%] top-[32%] z-20 h-3 w-3 opacity-0 [--slidein-delay:500ms] md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
      <Image
        src={'/landingpage/whiteman2.png'}
        alt="black man"
        className="inview:animate-slidein inview-once absolute right-[15%] top-[32%] z-20 h-3 w-3 opacity-0 [--slidein-delay:700ms] md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
      <Image
        src={'/landingpage/blackman.png'}
        alt="black man"
        className="inview:animate-slidein inview-once absolute left-[27%] top-[65%] z-20 h-3 w-3 opacity-0 [--slidein-delay:1000ms] md:h-[35px] md:w-[35px]"
        width={40}
        height={40}
      />
      <Image
        src={'/landingpage/whiteman.png'}
        alt="black man"
        className="inview:animate-slidein inview-once absolute bottom-[20%] right-[10%] z-20 h-3 w-3 opacity-0 [--slidein-delay:1200ms] md:right-[5%] md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
    </div>
  );
}
