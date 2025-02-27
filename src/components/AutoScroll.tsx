import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const row1 = [
  "/images/landingpage/upwork.jpeg",
  "/images/landingpage/fiverr.jpeg",
  "/images/landingpage/dribble.jpeg",
];
const row2 = [
  "/images/landingpage/youtube.jpeg",
  "/images/landingpage/tiktok.png",
  "/images/landingpage/ebay.jpeg",
];
const row4 = [
  "/images/landingpage/payoneer.jpeg",
  "/images/landingpage/freelancer.jpeg",
  "/images/landingpage/be.jpeg",
];
const row3 = [
  "/images/landingpage/toptal.png",
  "/images/landingpage/x.jpeg",
  "/images/landingpage/deel.jpeg",
];
const SimpleAutoScroll = () => {
  const [scrolling] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    const content: any = contentRef.current;
    if (!container || !content) return;

    // Clone the content to create the illusion of infinite scrolling
    const cloneContent = () => {
      // Clear existing clones first
      const existingClones: any = container.querySelectorAll(".clone");
      existingClones.forEach((clone: any) => clone.remove());

      // Create a clone and append it
      const clone = content.cloneNode(true);
      clone.classList.add("clone");
      container.appendChild(clone);
    };

    cloneContent();

    let animationId: any;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrolling) return;

      // Increment scroll position
      scrollPos += 1;
      container.scrollTop = scrollPos;

      // If we've scrolled past the original content height, reset to create infinite loop effect
      if (scrollPos >= content.offsetHeight) {
        scrollPos = 0;
        container.scrollTop = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    // const handleMouseEnter = () => setScrolling(false);
    // const handleMouseLeave = () => setScrolling(true);

    // container.addEventListener("mouseenter", handleMouseEnter);
    // container.addEventListener("mouseleave", handleMouseLeave);

    // Handle window resize
    const handleResize = () => cloneContent();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      //   container.removeEventListener("mouseenter", handleMouseEnter);
      //   container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={contentRef}
        className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5"
      >
        {row3.map((image, index) => (
          <div
            key={index}
            className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
          >
            <Image
              src={image}
              alt="get-paid"
              width={60}
              height={60}
              className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleAutoScroll;

export const Row1 = () => {
  const [scrolling, setScrolling] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    const content: any = contentRef.current;
    if (!container || !content) return;

    const cloneContent = () => {
      const existingClones: any = container.querySelectorAll(".clone");
      existingClones.forEach((clone: any) => clone.remove());

      const clone = content.cloneNode(true);
      clone.classList.add("clone");
      container.appendChild(clone);
    };

    cloneContent();

    let animationId: any;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrolling) return;

      scrollPos += 1;
      container.scrollTop = scrollPos;

      if (scrollPos >= content.offsetHeight) {
        scrollPos = 0;
        container.scrollTop = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // container.addEventListener("mouseenter", handleMouseEnter);
    // container.addEventListener("mouseleave", handleMouseLeave);

    // Handle window resize
    const handleResize = () => cloneContent();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", handleResize);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={contentRef}
        className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5"
      >
        {row1.map((image, index) => (
          <div
            key={index}
            className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
          >
            <Image
              src={image}
              alt="get-paid"
              width={60}
              height={60}
              className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Row2 = () => {
  const [scrolling] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    const content: any = contentRef.current;
    if (!container || !content) return;

    const cloneContent = () => {
      const existingClones: any = container.querySelectorAll(".clone");
      existingClones.forEach((clone: any) => clone.remove());

      const clone = content.cloneNode(true);
      clone.classList.add("clone");
      container.appendChild(clone);
    };

    cloneContent();

    let animationId: any;
    let scrollPos = 323;

    const scroll = () => {
      if (!scrolling) return;

      scrollPos -= 1;
      container.scrollTop = scrollPos;

      if (scrollPos <= 0) {
        scrollPos = 323;
        container.scrollTop = 323;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleResize = () => cloneContent();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={contentRef}
        className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5"
      >
        {row2.map((image, index) => (
          <div
            key={index}
            className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
          >
            <Image
              src={image}
              alt="get-paid"
              width={60}
              height={60}
              className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export const Row5 = () => {
  const [scrolling] = useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container: any = containerRef.current;
    const content: any = contentRef.current;
    if (!container || !content) return;

    const cloneContent = () => {
      const existingClones: any = container.querySelectorAll(".clone");
      existingClones.forEach((clone: any) => clone.remove());

      const clone = content.cloneNode(true);
      clone.classList.add("clone");
      container.appendChild(clone);
    };

    cloneContent();

    let animationId: any;
    let scrollPos = 323;

    const scroll = () => {
      if (!scrolling) return;

      scrollPos -= 1;
      container.scrollTop = scrollPos;

      if (scrollPos <= 0) {
        scrollPos = 323;
        container.scrollTop = 323;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleResize = () => cloneContent();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div
        ref={contentRef}
        className="flex h-full shrink-0 justify-between md:block md:w-[100px] md:space-y-2.5"
      >
        {row4.map((image, index) => (
          <div
            key={index}
            className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-full"
          >
            <Image
              src={image}
              alt="get-paid"
              width={60}
              height={60}
              className={`shrink-0 rounded-md object-cover object-top duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
