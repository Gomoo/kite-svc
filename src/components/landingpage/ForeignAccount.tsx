import Image from "next/image";

const data = [
  {
    classname:
      "h-[94px] w-[155px] mx-auto object-contain absolute top-[25%] left-[30%]",
    description: "Zero account & card maintenance fees",
    image: "/landingpage/3.1.png",
  },
  {
    classname: "",
    description: "Competitive exchange rates",

    image: "/landingpage/3.2.png",
  },
  {
    classname: "",
    description: "Instant transaction notifications",

    image: "/landingpage/3.3.png",
  },
  {
    classname: "",
    description: "An IBAN for your payment needs",
    image: "/landingpage/3.4.png",
  },
  {
    classname: "",
    description: "P2P for free and faster payments",

    image: "/landingpage/3.5.png",
  },
  {
    classname: "-mt-4",
    description: "Expense management",

    image: "/landingpage/3.6.png",
  },
];

function ForeignAccount() {
  return (
    <div className="bg-deepblue px-4 md:px-10 xl:px-20 pb-20">
      <div className="flex justify-between">
        <div className="lg:w-[542px] mt-10 lg:mt-20">
          <h1 className="text-3xl lg:text-5xl xl:text-[64px] text-white leading-none font-lugfa font-medium ">
            A truly global foreign account.
          </h1>
          <p className="text-white font-normal lg:text-xl mt-2 lg:mt-4">
            Get a global foreign account that puts you in total control of your
            money
          </p>
          <button className={`bg-blue mt-6 py-3 px-5 rounded-xl text-white`}>
            Get started
          </button>
        </div>
        <Image
          src={"/landingpage/foreign.png"}
          alt="design.3.1"
          width={600}
          height={700}
          className="object-contain lg:h-[200px] xl:h-[400px] h-[69px] mb-auto md:h-[700px] w-4/12 xl:w-[600px]"
        />
      </div>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
        {data.map((item, i) => (
          <div key={i} className="foreign__card !rounded-3xl !overflow-hidden">
            <div className="h-[182px] w-full">
              <Image
                src={item.image}
                alt="foreign"
                width={325}
                height={182}
                className={`${i === 0 ? item.classname : ""}`}
              />
            </div>
            <div className="relative">
              <p className="text-[#aaaaaa] font-semibold text-2xl">
                0{i + 1} -
              </p>

              <Image
                src={"/landingpage/blur.png"}
                alt="foreign"
                width={325}
                height={105}
                className="absolute -top-12 -left-10 w-[325px] !h-[105px] "
              />
            </div>
            <div className="relative">
              <div className="text-2xl md:text-xl xl:text-3xl text-white mt-6">
                {item.description}
              </div>
              <Image
                src={"/landingpage/blur.png"}
                alt="foreign"
                width={325}
                height={105}
                className="absolute -top-14 -left-0 w-[325px] !h-[105px] "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForeignAccount;
