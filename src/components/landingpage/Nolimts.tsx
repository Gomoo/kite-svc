import { ArrowRight } from "iconsax-react";
import Image from "next/image";

function Nolimts() {
  return (
    <div className="mt-16 lg:mt-[85px]">
      <h2 className="text-4xl md:text-5xl xl:text-[64px] text-center font-lugfa">
        No limits, no borders.
      </h2>
      <div className="flex justify-center items-center gap-6">
        <ArrowRight size={48} className="text-[#0063F2] text-3xl xl:text-5xl" />
        <h2 className="text-4xl md:text-5xl xl:text-[64px] text-center font-lugfa text-[#0063F2]">
          Go global.
        </h2>
      </div>
      <div className="px-4 md:px-10 xl:px-20 space-y-6 md:space-y-14 lg:space-y-10 pb-20">
        <USAccount />
        <LeftComponent
          image={
            <div className="md:h-full">
              <div className="h-full space-y-2 w-full px-6 md:hidden items-end pt-7">
                <h5 className="text-base font-normal text-[#E5E5E5]">
                  VIRTUAL CARD
                </h5>
                <h3 className="text-3xl text-white">Shop and spend globally</h3>
                <p className="text-lg text-white font-normal">
                  Make international payments with a virtual debit card that
                  just works.
                </p>
                <Image
                  src={"/landingpage/cards.png"}
                  alt="card"
                  width={500}
                  height={500}
                  className="ml-auto md:object-contain h-[240px] w-[240px] md:w-[240px] "
                />
              </div>
              <div className="hidden !h-full w-full px-6 md:flex !items-end">
                <Image
                  src={"/landingpage/cards.png"}
                  alt="card"
                  width={500}
                  height={500}
                  className="object-contain mt-auto md:w-[240px] "
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
            <div className="md:h-full ">
              <div className="h-full space-y-3 w-full px-6 md:hidden items-end pt-7">
                <h5 className="text-base font-normal text-[#E5E5E5]">
                  GLOBAL PAYMENT
                </h5>
                <h3 className="text-3xl text-white">Collections and Payouts</h3>
                <p className="text-lg text-white font-normal">
                  Receive USD payments via wires or ACH from your employers or
                  clients on any platform such as Upwork, Deel, Amazon, e.t.c.
                  Also make faster payments.
                </p>
              </div>
              <div className="h-full flex flex-col justify-end pb-1.5 overflow-hidden items-end w-full md:hidden pt-8 space-y-2.5">
                {[1, 2].map((value, i) => (
                  <Image
                    key={i}
                    src={"/landingpage/notification.png"}
                    alt="notification"
                    width={500}
                    height={500}
                    className="w-10/12 h-14 lg:h-[58px] object-contain -mr-10"
                  />
                ))}
              </div>
              <div className="hidden md:block h-full w-full px-4 lg:px-[29px] py-8 lg:py-[46px] lg:space-y-4">
                {[1, 2, 3, 4].map((value, i) => (
                  <Image
                    key={i}
                    src={"/landingpage/notification.png"}
                    alt="notification"
                    width={500}
                    height={500}
                    className="w-full h-14 lg:h-12 object-contain"
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
        <div className="space-y-5 lg:space-y-10">
          <h3 className="text-3xl">Move money seamlessly</h3>
          <p className="lg:w-7/12 text-lg font-normal text-[#505050]">
            Experience the freedom of smooth, reliable and secure financial
            transactions. Whether you’re sending or receiving payment, we make
            it simple fast and hassle-free for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nolimts;

function USAccount() {
  return (
    <div className="bg-[#F9FAFB] flex flex-col lg:flex-row gap-5 w-full mt-10 xl:mt-14 rounded-3xl md:px-[45px] pt-7 px-7 md:pt-9 lg:pt-[54px]">
      <div className="lg:!space-y-8 flex flex-col lg:w-8/12">
        <p className="font-normal md:text-lg text-[#505050]">BANK ACCOUNTS</p>
        <div className="">
          <h3 className="mt-3 md:mt-4 text-3xl">Access a US bank account</h3>
          <p className="text-lg font-normal mt-3 text-[#505050]">
            Easily open a USD bank account in less than 24 hrs and get your IBAN
            to start receiving global payments
          </p>
        </div>
      </div>
      <Image
        src={"/landingpage/bank.png"}
        alt="bank"
        width={500}
        height={500}
        className="mx-auto md:w-[400px] w-[223px] h-[197px] md:h-[352px]"
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
    <div className="flex  lg:flex-row gap-4 lg:gap-6">
      <div className="md:w-4/12 lg:h-[314px] bg-[#001430] rounded-3xl">
        {image}
      </div>
      <div className="hidden md:block w-8/12 bg-[#F9FAFB] rounded-3xl space-y-4 lg:space-y-8 px-[45px] py-[54px] border border-[#E5E5E5]">
        <h3 className="font-normal text-lg text-[#505050]">{sub}</h3>
        <div>
          <h3 className="text-3xl">{title}</h3>
          <p className="text-lg lg:mt-4 font-normal text-[#505050] lg:w-[536px] xl:w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CurrencyConversion() {
  return (
    <div className="bg-[#F9FAFB] pb-10 lg:pb-10 flex flex-col lg:flex-row gap-5 w-full rounded-3xl px-[45px] pt-[54px]">
      <Image
        src={"/landingpage/currency.png"}
        alt="bank"
        width={500}
        height={500}
        className="mx-auto md:w-6/12 md:-mt-5 lg:-mt-16 lg:w-6/12 lg:h-[352px]"
      />
      <div className="lg:space-y-6 flex flex-col lg:w-6/12">
        <p className="font-normal text-lg text-[#505050]">
          CURRENCRY CONVERSION
        </p>
        <div className="">
          <h3 className="mt-4 text-3xl">Convert money at the best rate</h3>
          <p className="text-lg font-normal text-[#505050] lg:mt-4">
            Effortlessly exchange major world currencies at the best rates.
            Convert money from local to foreign and back in a flash.
          </p>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="h-[205px] md:h-[500px] lg:h-[766.59px] w-full relative">
      <Image
        src="/landingpage/map.jpeg"
        alt="map"
        layout="fill"
        objectFit="cover"
      />
      <Image
        src={"/landingpage/blackman.png"}
        alt="black man"
        className="absolute z-20 left-2/4 top-2/4 h-3.5 w-3.5 md:h-[55px] md:w-[55px]"
        width={55}
        height={55}
      />
      <Image
        src={"/landingpage/whiteman.png"}
        alt="black man"
        className="absolute z-20 left-[15%] top-[32%] h-3 w-3 md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
      <Image
        src={"/landingpage/whiteman2.png"}
        alt="black man"
        className="absolute z-20 right-[15%] top-[32%] h-3 w-3 md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
      <Image
        src={"/landingpage/blackman.png"}
        alt="black man"
        className="absolute z-20 left-[27%] top-[65%] h-3 w-3 md:h-[35px] md:w-[35px]"
        width={40}
        height={40}
      />
      <Image
        src={"/landingpage/whiteman.png"}
        alt="black man"
        className="absolute z-20 right-[10%] md:right-[5%] bottom-[20%] h-3 w-3 md:h-[35px] md:w-[35px]"
        width={35}
        height={35}
      />
    </div>
  );
}
