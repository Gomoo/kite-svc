import Image from "next/image";
import SimpleAutoScroll, { Row1, Row2, Row5 } from "../AutoScroll";
import Marquee from "react-fast-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
const row3 = [
  "/images/landingpage/toptal.png",
  "/images/landingpage/x.jpeg",
  "/images/landingpage/deel.jpeg",
];
const row4 = [
  "/images/landingpage/payoneer.jpeg",
  "/images/landingpage/freelancer.jpeg",
  "/images/landingpage/be.jpeg",
];

function FAQ() {
  const qa = [
    {
      q: "What is the minimum fee on Kite?",
      a: "Every transaction on Kite has a minimum fee of $5 to ensure smooth and secure processing.",
    },
    {
      q: "What is the maximum fee on Kite?",
      a: "The maximum fee charged for any transaction is $25. You will never be charged above this cap.",
    },
    {
      q: "What is the deposit fee?",
      a: "Depositing into your Kite wallet attracts a flat fee of $1.5 regardless of the amount you are funding.",
    },
    {
      q: "Which bank powers Kite's USD account?",
      a: "Your USD wallet on Kite is powered by Lead Bank, ensuring your funds are secure and traceable.",
    },
    {
      q: "What is the withdrawal limit in a day?",
      a: "There is no daily withdrawal limit on Kite. You can withdraw as much as you want.",
    },
  ];
  return (
    <div className="relative mx-auto pt-[192px] xl:w-[1024px]">
      <h3 className="inview-once text-center text-mobileHeader font-medium leading-mobileHeader tracking-[-3%] opacity-0 [--slidein-delay:100ms] inview:animate-slidein md:text-header md:leading-header">
        Frequently Asked Questions
      </h3>

      <div className="mt-[46px] px-4">
        <Accordion type="single" collapsible className="w-full" defaultValue="0">
          {qa.map((value, index) => (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger className="text-lg !no-underline md:text-xl">
                {value.q}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 md:text-balance md:text-base">
                <p>{value?.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
