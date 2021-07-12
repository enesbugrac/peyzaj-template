import React from "react";
import "./DetailHero.css";
import muz from "../videos/muz.mp4";
import muz1 from "../images/muz (1).jpeg";

import Fade from "react-reveal/Fade";
function DetailsHero() {
  return (
    <div
      id={"detaylarr"}
      className="detailshero__container"
      style={{
        background: `-webkit-linear-gradient(bottom, rgba(39,39,39,1) 0%,rgba(39,39,39,0.75) 26%,rgba(39,39,39,0.2) 100%)`,
      }}
    >
      <video src={muz} playsinline poster={muz1} autoPlay loop muted />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="detailshero__text">
        <Fade top>
          <h1 className="detailshero__title">Boğzakent Üretim Tesisleri</h1>
          <p className="detailshero__desc">Boğazkent-Serik/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHero;
