import { Facebook, Instagram } from "iconsax-react";
import { Inbox, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Instagram color="#4A90E2" variant="Bold" size={24} />,
    link: "#",
  },
  {
    icon: <Facebook color="#4A90E2" variant="Bold" size={24} />,
    link: "#",
  },
  {
    icon: <Twitter color="#4A90E2" fill="#4A90E2" size={24} />,
    link: "#",
  },
  {
    icon: <Linkedin color="#4A90E2" fill="#4A90E2" size={24} />,
    link: "#",
  },
];

const footerlinks = [
  {
    header: "Product",
    links: [
      {
        title: "USD accounts",
        link: "#",
      },
      {
        title: "Cards",
        link: "#",
      },
    ],
  },
  {
    header: "Company",
    links: [
      {
        title: "About",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Press Kit",
        link: "#",
      },
    ],
  },
  {
    header: "Community",
    links: [
      {
        title: "Refer a Friend",
        link: "#",
      },
      {
        title: "Gift",
        link: "#",
      },
    ],
  },
  {
    header: "Support",
    links: [
      {
        title: "Help",
        link: "#",
      },
      {
        title: "FAQ",
        link: "#",
      },
      {
        title: "Contact",
        link: "#",
      },
    ],
  },
  {
    header: "Legal",
    links: [
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Terms of Services",
        link: "#",
      },
      {
        title: "Cookies",
        link: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <div className="bg-deepblue pb-16 md:pb-0 px-4 pt-16 md:p-10 xl:px-20 lg:pt-20">
      <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-white text-center leading-none font-lugfa font-medium ">
        Digital banking at your finger tips
      </h1>
      <div
        className="mt-10 lg:mt-16 xl:mt-[90px] border rounded-3xl p-5 md:p-8 xl:p-20"
        style={{
          border: "1px solid rgba(0, 99, 242, 0.6)",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(74, 144, 226, 1)",
          }}
          className="h-[72px] w-[72px] hidden md:flex items-center justify-center rounded-full"
        >
          <Inbox color="rgba(74, 144, 226, 1)" />
        </div>
        <div className="lg:mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-[40%] xl:w-1/2">
            <h1 className="text-white text-center md:text-left text-xl lg:text-5xl xl:text-6xl leading-tight lg:w-[482px]">
              Keep up with the latest
            </h1>
            <p className="text-[#9E9E9E] text-center md:text-left mt-3 md:mt-0 font-normal text-sm lg:text-base ">
              Join our newsletter to stay up to date on features and realeases.
            </p>
          </div>
          <div className="mt-5 md:mt-0 space-y-2 lg:space-y-6 relative md:w-[55%] lg:w-[430.17px]">
            <p className="text-white font-normal hidden md:block">
              Stay up to date
            </p>
            <div className="flex lg:flex-row items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-8/12 md:w-[430.17px] h-[50px] bg-[#1a3051] rounded-full placeholder:font-normal px-4"
              />
              <button className="bg-[#4A90E2] text-white px-5 font-normal py-2 h-[50px] rounded-full">
                Subscribe
              </button>
            </div>
            <p className="text-[#98A2B3] font-normal text-center md:text-left text-xs mt-3 md:mt-0 md:text-sm lg:text-base">
              By subscribing you agree to our{" "}
              <a className="text-white underline" href="http://">
                Privacy Policy
              </a>{" "}
            </p>
          </div>
        </div>
        <hr className="mt-10 lg:mt-20 border border-[#667085]" />
        <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:!space-x-8">
          <div className="col-span-2">
            <div className="w-full">
              <h3 className="text-center md:text-left font-raleway font-bold text-3xl text-white">
                Kite
              </h3>
              <p className="w-9/12 md:w-full mx-auto text-center md:text-left text-sm text-lightgray font-normal mt-1 md:mt-3">
                Make your complicated finance more simple
              </p>
            </div>
          </div>
          {footerlinks.map((value, i) => (
            <div className={`col-span-2 space-y-5`} key={i}>
              <h4 className="text-center md:text-left text-white">
                {value.header}
              </h4>
              <div className="block space-y-3 md:space-y-5">
                {value.links.map((value, i) => (
                  <div className="text-center md:text-left" key={i}>
                    <a
                      href={value.link}
                      className={"text-lightgray font-normal text-sm"}
                    >
                      {value.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-9">
        <p className="text-white font-normal">
          © 2025 Kite. All Right Reserved
        </p>
        <div className="flex items-center gap-2">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className="h-[44px] w-[44px] flex items-center justify-center"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
