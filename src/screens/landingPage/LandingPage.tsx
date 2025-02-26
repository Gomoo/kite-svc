"use client";
import Footer from "@/components/landingpage/Footer";
import GetAccount from "@/components/landingpage/GetAccount";
import GetPaid from "@/components/landingpage/GetPaid";
import GlobalBank from "@/components/landingpage/GlobalBank";
import LandingPageHeader from "@/components/landingpage/Header";
import Possibilities from "@/components/landingpage/Possibilities";
import TalkToUs from "@/components/landingpage/TalkToUs";
import { useEffect } from "react";
import { inViewSensor } from "tailwind-inview";

function LandingPage() {
  useEffect(inViewSensor, []);
  return (
    <div className="relative">
      <LandingPageHeader />
      <div className="mx-auto w-11/12 xl:w-10/12">
        <GlobalBank />
        <Possibilities />
        <GetAccount />
        <GetPaid />
        <TalkToUs />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
