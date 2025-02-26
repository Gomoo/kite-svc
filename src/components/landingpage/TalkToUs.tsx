import Image from 'next/image';

function TalkToUs() {
  return (
    <div className="relative mx-auto pt-[211px] xl:w-[1024px]">
      <div className="inview-once relative grid h-[374px] w-full grid-cols-2 gap-7 rounded-[30px] bg-[#0d2e65] bg-[url(/images/landingpage/MaskGroup.png)] object-cover opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
        <div className="flex flex-col space-y-4 pl-[60px] pt-[87px]">
          <h3 className="text-header leading-header text-white">Talk to us</h3>
          <p className="text-lg leading-body text-white">
            We’re readily available to attend to all your concerns and ensure you have a great Kite
            experience.
          </p>
          <button className="h-[57px] w-[153px] rounded-full bg-white font-['Geist'] text-xl font-semibold">
            Speak to us
          </button>
        </div>
        <Image
          src={'/images/landingpage/iphonee.png'}
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
