/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';

const links = [
  {
    name: 'Products',
    url: '/',
  },
  {
    name: 'Learn',
    url: '/about',
  },
  {
    name: 'Company',
    url: '/services',
  },
];

function Nav() {
  return (
    <header className="relative z-50 h-[80px]">
      <div className="fixed left-0 top-0 flex h-[80px] w-screen items-center justify-between bg-white px-5 md:px-12 xl:px-28">
        <a href="/" className="">
          <Image
            src={'/landingpage/logo.png'}
            alt="logo"
            width={101.05}
            height={52}
            className="w-[50px] shrink-0 md:w-[101.05px]"
          />
        </a>
        <nav className="hidden items-center gap-12 px-12 xl:flex">
          {links.map((link) => (
            <a key={link.name} href={link.url} className="px-4 py-2.5 font-light">
              {link.name}
            </a>
          ))}
        </nav>
        <button className={`hidden rounded-md bg-[#121212] px-5 py-3 text-white xl:block`}>
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
