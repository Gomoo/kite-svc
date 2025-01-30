"use client";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

const links = [
  {
    name: "Products",
    url: "/",
  },
  {
    name: "Learn",
    url: "/about",
  },
  {
    name: "Company",
    url: "/services",
  },
];

function Nav() {
  return (
    <header className="relative h-[80px] z-50">
      <div className="fixed h-[80px] bg-white left-0 top-0 w-screen  flex items-center justify-between px-5 md:px-12 xl:px-20">
        <a href="/" className="">
          <Image
            src={"/landingpage/logo.png"}
            alt="logo"
            width={101.05}
            height={60}
            className="shrink-0 w-[50px] md:w-[101.05px]"
          />
        </a>
        <nav className="hidden xl:flex items-center gap-12 px-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-lg py-2.5 px-4 font-light"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className={`bg-[#0063F2] py-3 px-5 rounded-xl text-white hidden xl:block`}
        >
          Get started
        </button>
        <button className="xl:hidden">
          <AlignJustify />
        </button>
      </div>
    </header>
  );
}

export default Nav;
