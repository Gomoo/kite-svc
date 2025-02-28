import Image from "next/image";

function TalkToUs() {
  return (
    <div className="relative mx-auto hidden pt-[211px] md:block xl:w-[1024px]">
      <div className="inview-once relative grid w-full gap-7 bg-[#0d2e65] bg-[url(/images/landingpage/MaskGroup.png)] object-cover opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:h-[374px] md:grid-cols-2 md:rounded-[30px]">
        <div className="flex flex-col space-y-4 pl-6 pt-[87px] md:pl-[60px]">
          <h3 className="text-header leading-header text-white">Talk to us</h3>
          <p className="text-lg leading-body text-white">
            We’re readily available to attend to all your concerns and ensure
            you have a great Kite experience.
          </p>
          <button className="h-[57px] w-[153px] rounded-full bg-white font-['Geist'] text-xl font-semibold text-black">
            Speak to us
          </button>
        </div>
        <Image
          src={"/images/landingpage/iphone.png"}
          alt="iphone"
          height={794}
          width={473}
          className="mt-auto shrink-0"
        />
      </div>
    </div>
  );
}

export default TalkToUs;

export function MobileTalkToUs() {
  return (
    <div className="relative mx-auto pt-[91px] md:hidden xl:w-[1024px]">
      <div className="inview-once relative grid w-full gap-7 bg-[#0d2e65] bg-[url(/images/landingpage/MaskGroup.png)] object-cover opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
        <div className="flex flex-col space-y-4 pl-6 pt-[82px]">
          <h3 className="text-mobileHeader leading-mobileHeader font-medium text-white md:text-header md:leading-header">
            Talk to us
          </h3>
          <p className="text-mobileBody w-[317px] font-normal leading-body text-white">
            We&apos;re readily available to attend to all your concerns and
            ensure you have a great Kite experience.
          </p>
          {/* <button className="h-[57px] w-[153px] rounded-full bg-white font-['Geist'] text-xl font-semibold text-black">
            Speak to us
          </button> */}
        </div>
        <Image
          alt="iphone"
          src={"/images/landingpage/Iphone.png"}
          height={794}
          width={473}
          className="mt-8 shrink-0"
        />
      </div>
    </div>
  );
}
