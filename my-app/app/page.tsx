'use client';

import React, { useEffect, useState } from "react";
import CompleteMenu from '../components/Main/completeMenu';
import Logo from '../components/Main/logo';
import Info from '../components/Other/infoText';
import NavCardsHoms from '../components/LandingPage/navCardsHoms';
import Footer from '../components/Main/footer';
import LandingFiller from '../components/LandingPage/landingFiller';
import LandingFiller2 from "@/components/LandingPage/landingFiller2";
import Facts from "@/components/LandingPage/facts";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isiPad = /iPad/i.test(userAgent);
    
      return isMobile && !isiPad;
    }
    

    setIsMobile(checkIfMobile());
  }, []);

  return (
    <div>
      <Logo />
      {!isMobile && <CompleteMenu />}
      {!isMobile && <Info />}
      {!isMobile && <NavCardsHoms />}
      {!isMobile && <Facts />}
      {!isMobile && <LandingFiller />}
      {!isMobile && <LandingFiller2 />}
      {!isMobile && <Footer />}
      {isMobile && (

        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-red-100 text-red-500 p-4 text-center rounded-lg ml-10 mr-10">
            Den här hemsidan stöds bara på datorer och surfplattor. Vänligen besök oss på en större enhet.
          </div>
        </div>
      )}
    </div>
  );
}
