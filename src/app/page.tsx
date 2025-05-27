import Footer from "@/components/landingpage/Footer";
import LandingPageHeader from "@/components/landingpage/Header";
import LandingPage from "@/screens/landingPage/LandingPage";
import React from "react";

function Home() {
  return (
    <>
      <LandingPageHeader />
      <LandingPage />
      <Footer />
    </>
  );
}

export default Home;
