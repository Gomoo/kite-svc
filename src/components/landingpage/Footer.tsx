import { link } from "fs";
import Image from "next/image";

const socials = [
  {
    link: "https://www.facebook.com/profile.php?id=61572986044137",
    icon: "/images/landingpage/facebook.png",
  },
  {
    link: "https://x.com/UseKitehq?t=xJ9OJrnxNM0ps_b4156NzA&s=09",
    icon: "/images/landingpage/twitter.png",
  },
  {
    link: "https://www.instagram.com/usekitehq?igsh=MTE1c2JuczlveHozNg==",
    icon: "/images/landingpage/instagram.png",
  },
  {
    link: "https://www.linkedin.com/company/usekite/",
    icon: "/images/landingpage/linkedin-2.png",
  },
  {
    link: "https://medium.com/@usekitehq",
    icon: "/images/landingpage/ic_medium.png",
  },
];

const link1 = [
  {
    link: "/",
    title: "USD Savings",
  },
  {
    link: "/",
    title: "Virtual Cards",
  },
  {
    link: "/",
    title: "Multi-currency Wallet",
  },
  {
    link: "/",
    title: "Bills Payment",
  },
];

const link2 = [
  {
    link: "/",
    title: "Smart invoicing",
  },
  {
    link: "/",
    title: "USD Account",
  },
  {
    link: "/",
    title: "Currency Exchange",
  },
  {
    link: "/",
    title: "Money Transfer",
  },
];

const link3 = [
  {
    link: "/",
    title: "USD Savings",
  },
  {
    link: "/",
    title: "Virtual Cards",
  },
  {
    link: "/",
    title: "Smart invoicing",
  },
  {
    link: "/",
    title: "USD Account",
  },
  {
    link: "/",
    title: "Currency Exchange",
  },
];
const link4 = [
  {
    link: "/",
    title: "Multi-currency Wallets",
  },
  {
    link: "/",
    title: "Bills Payment",
  },
];
function Footer() {
  return (
    <div className="footer mt-[81px] w-full md:mt-[225px] md:h-[536px]">
      <div className="mx-auto hidden h-[351.85px] pt-[104px] md:block md:w-11/12 xl:w-[1030px]">
        <div className="h-[240px flex">
          <div className="space-y-[69px]">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              className="inview-once opacity-0 [--slidein-delay:100ms] inview:animate-slidein"
              width={74}
              height={44}
            />
            <div className="flex gap-[30px]">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer  "
                >
                  <Image
                    src={social.icon}
                    width={18}
                    height={18}
                    alt="social"
                    className="inview-once object-contain opacity-0 inview:animate-slidein"
                    style={
                      { "--slidein-delay": `${(index + 1) * 100}ms` } as any
                    }
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="inview-once ml-28 flex flex-col space-y-8 opacity-0 [--slidein-delay:300ms] inview:animate-slidein xl:ml-[255px]">
            <p className="font-normal text-textSecondary">Features</p>
            {link1.map((link, index) => (
              <p
                // href={link.link}
                key={index}
                className="font-normal text-textPrimary"
              >
                {link.title}
              </p>
            ))}
          </div>
          <div className="inview-once ml-[44px] flex flex-col space-y-8 pt-[52.3px] opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
            {link2.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className="font-normal text-textPrimary"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="inview-once mt-[50px] h-[2px] w-full bg-gray-100 opacity-0 [--slidein-delay:700ms] inview:animate-slidein" />
        <div className="flex justify-between">
          <h6 className="inview-once mt-[30px] font-normal opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
            © 2025 Kite
          </h6>
          <div className="mt-[30px] flex items-center gap-3 inview-once font-normal opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
            <a href="/privacy-policy" className="text-base">
              Privacy Policy
            </a>
            <a href="/delete-account" className="text-base">
              Delete Account
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 pb-[131px] pt-7 md:hidden">
        <div className="">
          <h5 className="inview-once text-[13px] font-medium opacity-0 [--slidein-delay:100ms] inview:animate-slidein">
            Features
          </h5>
          <div className="mt-1.5 grid grid-cols-2">
            <div className="col-span-1">
              <div className="inview-once flex flex-col space-y-2 opacity-0 [--slidein-delay:300ms] inview:animate-slidein">
                {link3.map((link, index) => (
                  <a
                    href={link.link}
                    key={index}
                    className="text-[13px] font-normal text-gray-500"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              {" "}
              <div className="inview-once flex flex-col space-y-2 opacity-0 [--slidein-delay:500ms] inview:animate-slidein">
                {link4.map((link, index) => (
                  <a
                    href={link.link}
                    key={index}
                    className="text-[13px] font-normal text-gray-500"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          className="inview-once mt-10 opacity-0 [--slidein-delay:300ms] inview:animate-slidein"
          width={74}
          height={44}
        />
        <h6 className="inview-once mt-2.5 text-xs font-normal text-gray-400 opacity-0 [--slidein-delay:1000ms] inview:animate-slidein">
          © 2025 Kite
        </h6>
        <div className="mt-4 flex gap-[30px]">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer "
            >
              <Image
                src={social.icon}
                width={18}
                height={18}
                alt="social"
                className="inview-once object-contain opacity-0 inview:animate-slidein"
                style={{ "--slidein-delay": `${(index + 1) * 100}ms` } as any}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
