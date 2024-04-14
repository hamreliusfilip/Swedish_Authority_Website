import React from "react";

import CompleteMenu from '../components/completeMenu';
import Logo from '../components/logo';
import Info from '../components/infoText';
import NavCardsHoms from '../components/navCardsHoms';
import Footer from '../components/footer';
import LandingFiller from '../components/landingFiller';
import LandingFiller2 from "@/components/landingFiller2";
import Facts from "@/components/facts";


export default function Home() {

  return (
    <div>
      <Logo />
      <CompleteMenu /> 
      <Info /> 
      <NavCardsHoms />
      <Facts />
      <LandingFiller2 />
      <LandingFiller />
      <Footer />
    </div>
  );
}
