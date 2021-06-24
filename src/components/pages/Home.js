import React from "react";
import "../../App.css";
import Cards from "../Cards";
import WhoWeAre from "../WhoWeAre";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <WhoWeAre />
      <Footer />
    </>
  );
}

export default Home;
