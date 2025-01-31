import { Facebook, Instagram } from 'iconsax-react';
import { Inbox, Linkedin, Twitter } from 'lucide-react';

const socials = [
  {
    icon: <Instagram color="#4A90E2" variant="Bold" size={24} />,
    link: '#',
  },
  {
    icon: <Facebook color="#4A90E2" variant="Bold" size={24} />,
    link: '#',
  },
  {
    icon: <Twitter color="#4A90E2" fill="#4A90E2" size={24} />,
    link: '#',
  },
  {
    icon: <Linkedin color="#4A90E2" fill="#4A90E2" size={24} />,
    link: '#',
  },
];

const footerlinks = [
  {
    header: 'Product',
    links: [
      {
        title: 'USD accounts',
        link: '#',
      },
      {
        title: 'Cards',
        link: '#',
      },
    ],
  },
  {
    header: 'Company',
    links: [
      {
        title: 'About',
        link: '#',
      },
      {
        title: 'Careers',
        link: '#',
      },
      {
        title: 'Press Kit',
        link: '#',
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        title: 'Refer a Friend',
        link: '#',
      },
      {
        title: 'Gift',
        link: '#',
      },
    ],
  },
  {
    header: 'Support',
    links: [
      {
        title: 'Help',
        link: '#',
      },
      {
        title: 'FAQ',
        link: '#',
      },
      {
        title: 'Contact',
        link: '#',
      },
    ],
  },
  {
    header: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        title: 'Terms of Services',
        link: '#',
      },
      {
        title: 'Cookies',
        link: '#',
      },
    ],
  },
];

function Footer() {
  return (
    <div className="bg-deepblue px-4 pb-16 pt-16 md:p-10 md:pb-0 lg:pt-20 xl:px-20">
      <h1 className="inview:animate-slidein inview-once text-center font-lugfa text-xl font-medium leading-none text-white opacity-0 [--slidein-delay:100ms] md:text-3xl lg:text-5xl xl:text-6xl">
        Digital banking at your finger tips
      </h1>
      <div
        className="mt-10 rounded-3xl border p-5 md:p-8 lg:mt-16 xl:mt-[90px] xl:p-20"
        style={{
          border: '1px solid rgba(0, 99, 242, 0.6)',
        }}
      >
        <div
          style={{
            border: '1px solid rgba(74, 144, 226, 1)',
          }}
          className="inview:animate-slidein inview-once hidden h-[72px] w-[72px] items-center justify-center rounded-full opacity-0 [--slidein-delay:300ms] md:flex"
        >
          <Inbox color="rgba(74, 144, 226, 1)" />
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row lg:mt-8">
          <div className="md:w-[40%] xl:w-1/2">
            <h1 className="inview:animate-slidein inview-once text-center text-xl leading-tight text-white opacity-0 [--slidein-delay:500ms] md:text-left lg:w-[482px] lg:text-5xl xl:text-6xl">
              Keep up with the latest
            </h1>
            <p className="inview:animate-slidein inview-once mt-3 text-center text-sm font-normal text-[#9E9E9E] opacity-0 [--slidein-delay:700ms] md:mt-0 md:text-left lg:text-base">
              Join our newsletter to stay up to date on features and realeases.
            </p>
          </div>
          <div className="relative mt-5 space-y-2 md:mt-0 md:w-[55%] lg:w-[430.17px] lg:space-y-6">
            <p className="inview:animate-slidein inview-once hidden font-normal text-white opacity-0 [--slidein-delay:500ms] md:block">
              Stay up to date
            </p>
            <div className="inview:animate-slidein inview-once flex items-center justify-between gap-4 opacity-0 [--slidein-delay:700ms] lg:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-[50px] w-8/12 rounded-full bg-[#1a3051] px-4 placeholder:font-normal md:w-[430.17px]"
              />
              <button className="h-[50px] rounded-full bg-[#4A90E2] px-5 py-2 font-normal text-white">
                Subscribe
              </button>
            </div>
            <p className="inview:animate-slidein inview-once mt-3 text-center text-xs font-normal text-[#98A2B3] opacity-0 [--slidein-delay:1000ms] md:mt-0 md:text-left md:text-sm lg:text-base">
              By subscribing you agree to our{' '}
              <a className="text-white underline" href="http://">
                Privacy Policy
              </a>{' '}
            </p>
          </div>
        </div>
        <hr className="mt-10 border border-[#667085] lg:mt-20" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:!space-x-8 lg:mt-20">
          <div className="inview:animate-slidein inview-once col-span-2 opacity-0 [--slidein-delay:100ms]">
            <div className="w-full">
              <h3 className="text-center font-raleway text-3xl font-bold text-white md:text-left">
                Kite
              </h3>
              <p className="mx-auto mt-1 w-9/12 text-center text-sm font-normal text-lightgray md:mt-3 md:w-full md:text-left">
                Make your complicated finance more simple
              </p>
            </div>
          </div>
          {footerlinks.map((value, i) => (
            <div
              className={`inview:animate-slidein inview-once col-span-2 space-y-5 opacity-0 [--slidein-delay:300ms]`}
              key={i}
            >
              <h4 className="text-center text-white md:text-left">{value.header}</h4>
              <div className="block space-y-3 md:space-y-5">
                {value.links.map((value, i) => (
                  <div className="text-center md:text-left" key={i}>
                    <a href={value.link} className={'text-sm font-normal text-lightgray'}>
                      {value.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-9 flex flex-col items-center justify-between md:flex-row">
        <p className="inview:animate-slidein inview-once font-normal text-white opacity-0 [--slidein-delay:100ms]">
          © 2025 Kite. All Right Reserved
        </p>
        <div className="flex items-center gap-2">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className={`inview:animate-slidein inview-once flex h-[44px] w-[44px] items-center justify-center opacity-0 [--slidein-delay:200ms]`}
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
