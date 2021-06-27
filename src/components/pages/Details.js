import React from "react";
import DetailsComp from "../DetailsComp";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DetailsHero from "../DetailsHero";

function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DetailsHero></DetailsHero>
      <DetailsComp></DetailsComp>
    </div>
  );
}

export default AboutUs;
