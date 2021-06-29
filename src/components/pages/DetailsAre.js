import React from "react";
import DetailsCompAre from "../DetailsCompAre";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DetailsHeroAre from "../DetailsHeroAre";

function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DetailsHeroAre></DetailsHeroAre>
      <DetailsCompAre></DetailsCompAre>
    </div>
  );
}

export default AboutUs;
