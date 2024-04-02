import React from "react";

import CompleteMenu from '../components/completeMenu';
import Logo from '../components/logo';
import Info from '../components/infoText';
import SearchBar from '../components/searchBar';

export default function Home() {

  return (
    <div>
      <Logo />
      <CompleteMenu /> 
      <Info /> 
      <SearchBar /> 
    </div>
  );
}
