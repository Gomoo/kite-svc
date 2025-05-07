import Image from "next/image";

function TalkToUs() {
  const whatsapplink = "https://wa.me/2349126671174";

  return (
    <div className="relative mx-auto hidden pt-[211px] md:block xl:w-[1024px]">
      <div className="inview-once relative grid w-full gap-7 bg-[#0d2e65] bg-[url(/images/landingpage/MaskGroup.png)] object-cover opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:h-[374px] md:grid-cols-2 md:rounded-[30px]">
        <div className="flex flex-col space-y-4 pl-6 pt-[87px] md:pl-[60px]">
          <h3 className="text-header leading-header text-white">Talk to us</h3>
          <p className="text-lg leading-body text-white">
            We’re readily available to attend to all your concerns and ensure you have a great Kite
            experience.
          </p>
          <button className="h-[57px] w-fit rounded-full bg-white px-3 font-['Geist'] text-xl font-semibold text-black">
            <a
              href={whatsapplink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full w-full items-center gap-2"
            >
              <Image
                alt="whatsapp"
                src={"/images/whatsapp.png"}
                height={20}
                width={20}
                className="shrink-0"
              />
              Speak to us
            </a>
          </button>
        </div>
        <Image
          src={"/images/landingpage/Iphone.png"}
          alt="iphone"
          height={700}
          width={350}
          className="mt-auto shrink-0 md:ml-[83px]"
        />
      </div>
    </div>
  );
}

export default TalkToUs;

export function MobileTalkToUs() {
  const whatsapplink = "https://wa.me/2349126671174";

  return (
    <div className="relative mx-auto pt-[91px] md:hidden xl:w-[1024px]">
      <div className="inview-once relative grid w-full gap-7 bg-[#0d2e65] bg-[url(/images/landingpage/MaskGroup.png)] object-cover opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
        <div className="flex flex-col space-y-4 pl-6 pt-[82px]">
          <h3 className="text-mobileHeader font-medium leading-mobileHeader text-white md:text-header md:leading-header">
            Talk to us
          </h3>
          <p className="w-[317px] text-mobileBody font-normal leading-body text-white">
            We&apos;re readily available to attend to all your concerns and ensure you have a great
            Kite experience.
          </p>
          <button className="h-[57px] w-fit rounded-full bg-white px-3 font-['Geist'] text-xl font-semibold text-black">
            <a
              href={whatsapplink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-full w-full items-center gap-3"
            >
              <Image
                alt="whatsapp"
                src={"/images/whatsapp.png"}
                height={20}
                width={20}
                className="shrink-0"
              />
              Speak to us
            </a>
          </button>
        </div>
        <Image
          src={"/images/landingpage/Iphone.png"}
          alt="iphone"
          height={794}
          width={300}
          className="mx-auto mt-8 shrink-0"
        />
      </div>
    </div>
  );
}
