import Image from "next/image";

const panels = [
  {
    image: "/images/landingpage/icon1.svg",
    title: "USD Savings",
    description:
      "Save in USD and protect your money from currency fluctuations.",
  },
  {
    image: "/images/landingpage/icon2.svg",
    title: "Virtual Cards",
    description:
      "Shop and pay online with secure virtual dollar cards, accepted worldwide",
  },
  {
    image: "/images/landingpage/icon3.svg",
    title: "Multi-currency Wallet",
    description:
      "Hold, send, and convert multiple currencies effortlessly in one secure wallet.",
  },
  {
    image: "/images/landingpage/icon4.svg",
    title: "Bills Payment",
    description:
      "Pay utilities, subscriptions, and other bills seamlessly, all in one place.",
  },
  {
    image: "/images/landingpage/icon5.svg",
    title: "Money Transfer",
    description:
      "Send and receive money globally with fast, low-cost transfers.",
  },
  {
    image: "/images/landingpage/icon6.svg",
    title: "Smart Invoicing",
    description:
      "Create, send, and track professional invoices to get paid faster.",
  },
  {
    image: "/images/landingpage/icon7.svg",
    title: "USD Accounts",
    description:
      "Open a USD bank account instantly to receive and make international payments.",
  },
  {
    image: "/images/landingpage/icon8.svg",
    title: "Currency Exchange",
    description: "Convert currencies at the best rates with no hidden fees.",
  },
];

function Possibilities() {
  return (
    <div className="mx-auto pb-[78px] pt-[101px] xl:w-[1024px] xl:px-[94px]">
      <h3 className="inview-once text-mobileHeader text-center !font-medium leading-[57.2px] opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:text-header">
        Sky-high Possibilities
      </h3>
      <p className="inview-once text-mobileBody mx-auto mt-4 w-9/12 text-center font-normal leading-body tracking-[-0.22px] opacity-0 [--slidein-delay:300ms] inview:animate-slidein md:mt-1.5 md:w-[540px] md:text-sm">
        All your global banking needs in one super app.
      </p>
      <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {panels.map((panel, index) => (
          <div
            className="inview-once h-[146.39px] rounded-[20px] p-4 opacity-0 inview:animate-slidein"
            key={index}
            style={
              {
                background: "rgba(71, 61, 92, 0.02)",
                "--slidein-delay": `${(index + 1) * 100}ms`,
              } as React.CSSProperties
            }
          >
            <Image
              src={panel.image}
              alt={panel.title}
              width={32}
              height={32}
              className="shrink-0"
            />
            <h4 className="mt-2.5 !text-[16.3px] font-semibold leading-[23.4px] tracking-[-0.54px]">
              {panel.title}
            </h4>
            <p className="mt-px text-xs tracking-[-0.32px] text-textSecondary">
              {panel.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Possibilities;
