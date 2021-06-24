import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HizmetTekli from "../HizmetTekli";

import "../Urunlerimiz.css";
import Fade from "react-reveal/Fade";

function Urunlerimiz() {
  return (
    <>
      <Navbar />
      <div className="urunlerimizpage">
        <div className="urunlerimizpagewrap">
          <HizmetTekli link="https://betula.com.tr/themes/peyzaj/img/img-icon/icon-projeyonetim.png" />
          <HizmetTekli link="https://betula.com.tr/themes/peyzaj/img/img-icon/icon-projeyonetim.png" />
        </div>
        <div className="urunlerimizpagewrap">
          <HizmetTekli link="https://betula.com.tr/themes/peyzaj/img/img-icon/icon-projeyonetim.png" />
          <HizmetTekli link="https://betula.com.tr/themes/peyzaj/img/img-icon/icon-projeyonetim.png" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Urunlerimiz;
