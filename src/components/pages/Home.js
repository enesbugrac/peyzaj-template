import React from "react";
import "../../App.css";
import Cards from "../Cards";
import WhoWeAre from "../WhoWeAre";

import Hero from "../Hero";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <WhoWeAre />
    </>
  );
}

export default Home;