import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MusicCardDemo from "../HizmetTekli";
import uretim from "../../images/uretim.jpeg";
import danismanlik from "../../images/danismanlik.jpeg";
import proje from "../../images/proje.jpeg";
import uygulama from "../../images/uygulama.jpeg";

import "../Hizmetlerimiz.css";
import Fade from "react-reveal/Fade";

function Hizmetlerimiz() {
  return (
    <>
      <div className="urunlerimizpage">
        <MusicCardDemo proje="PROJE" link={proje} />
        <MusicCardDemo proje="UYGULAMA" link={uygulama} />
        <MusicCardDemo proje="ÜRETİM" link={uretim} />
        <MusicCardDemo proje="DANIŞMANLIK" link={danismanlik} />
      </div>
    </>
  );
}

export default Hizmetlerimiz;
