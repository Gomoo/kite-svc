import Image from 'next/image';

const data = [
  {
    classname: 'h-[94px] w-[155px] mx-auto object-contain absolute top-[25%] left-[30%]',
    description: 'Zero account & card maintenance fees',
    image: '/landingpage/3.1.png',
  },
  {
    classname: '',
    description: 'Competitive exchange rates',

    image: '/landingpage/3.2.png',
  },
  {
    classname: '',
    description: 'Instant transaction notifications',

    image: '/landingpage/3.3.png',
  },
  {
    classname: '',
    description: 'An IBAN for your payment needs',
    image: '/landingpage/3.4.png',
  },
  {
    classname: '',
    description: 'P2P for free and faster payments',

    image: '/landingpage/3.5.png',
  },
  {
    classname: '-mt-4',
    description: 'Expense management',

    image: '/landingpage/3.6.png',
  },
];

function ForeignAccount() {
  return (
    <div className="bg-deepblue px-4 pb-20 md:px-10 xl:px-20">
      <div className="flex justify-between">
        <div className="mt-10 lg:mt-20 lg:w-[542px]">
          <h1 className="inview:animate-slidein inview-once font-lugfa text-3xl font-medium leading-none text-white opacity-0 [--slidein-delay:100ms] lg:text-5xl xl:text-[64px]">
            A truly global foreign account.
          </h1>
          <p className="inview:animate-slidein inview-once mt-2 font-normal text-white opacity-0 [--slidein-delay:300ms] lg:mt-4 lg:text-xl">
            Get a global foreign account that puts you in total control of your money
          </p>
          <button
            className={`inview:animate-slidein inview-once mt-6 rounded-xl bg-blue px-5 py-3 text-white opacity-0 [--slidein-delay:500ms]`}
          >
            Get started
          </button>
        </div>
        <Image
          src={'/landingpage/foreign.png'}
          alt="design.3.1"
          width={600}
          height={700}
          className="inview:animate-slidein inview-once mb-auto h-[69px] w-4/12 object-contain opacity-0 [--slidein-delay:700ms] md:h-[700px] lg:h-[200px] xl:h-[400px] xl:w-[600px]"
        />
      </div>
      <div className="inview:animate-slidein inview-once mt-20 grid gap-5 opacity-0 [--slidein-delay:1000ms] md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {data.map((item, i) => (
          <div key={i} className="foreign__card !overflow-hidden !rounded-3xl">
            <div className="h-[182px] w-full">
              <Image
                src={item.image}
                alt="foreign"
                width={325}
                height={182}
                className={`${i === 0 ? item.classname : ''}`}
              />
            </div>
            <div className="relative">
              <p className="text-2xl font-semibold text-[#aaaaaa]">0{i + 1} -</p>

              <Image
                src={'/landingpage/blur.png'}
                alt="foreign"
                width={325}
                height={105}
                className="absolute -left-10 -top-12 !h-[105px] w-[325px]"
              />
            </div>
            <div className="relative">
              <div className="mt-6 text-2xl text-white md:text-xl xl:text-3xl">
                {item.description}
              </div>
              <Image
                src={'/landingpage/blur.png'}
                alt="foreign"
                width={325}
                height={105}
                className="absolute -left-0 -top-14 !h-[105px] w-[325px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForeignAccount;
