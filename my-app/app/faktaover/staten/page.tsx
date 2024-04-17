import React from "react";
import CompleteMenu from '../../../components/completeMenu';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';
import AboutState from '../../../components/aboutState';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutState />
      <Footer />
    </div>
  );
}
