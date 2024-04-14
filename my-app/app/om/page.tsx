import React from "react";
import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import AboutSite from "../../components/aboutSite";

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutSite />
      <Footer />
    </div>
  );
}