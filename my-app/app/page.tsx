import React from "react";

import CompleteMenu from '../components/Main/completeMenu';
import Logo from '../components/Main/logo';
import Info from '../components/Other/infoText';
import NavCardsHoms from '../components/LandingPage/navCardsHoms';
import Footer from '../components/Main/footer';
import LandingFiller from '../components/LandingPage/landingFiller';
import LandingFiller2 from "@/components/LandingPage/landingFiller2";
import Facts from "@/components/Other/facts";

export default function Home() {

  return (
    <div>
      <Logo />
      <CompleteMenu />
      <Info />
      <NavCardsHoms />
      <Facts />
      <LandingFiller />
      <LandingFiller2 />
      <Footer />
    </div>
  );
}
