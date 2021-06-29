import React from "react";
import DetailsCompFidan from "../DetailsCompFidan";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DetailsHeroFidan from "../DetailsHeroFidan";

function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <DetailsHeroFidan></DetailsHeroFidan>
      <DetailsCompFidan></DetailsCompFidan>
    </div>
  );
}

export default AboutUs;
