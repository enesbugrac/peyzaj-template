import are from "../videos/are.mp4";
import React from "react";
import "./DetailHero.css";
import arec1 from "../images/arec (1).jpg";

import Fade from "react-reveal/Fade";
function DetailsHeroAre() {
  return (
    <div
      id={"detaylarr"}
      className="detailshero__container"
      style={{
        background: `-webkit-linear-gradient(bottom, rgba(39,39,39,1) 0%,rgba(39,39,39,0.75) 26%,rgba(39,39,39,0.2) 100%)`,
      }}
    >
      <video src={are} poster={arec1} autoPlay loop muted />
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
          <h1 className="detailshero__title">Arecastrum Üretim Merkezi</h1>

          <p className="detailshero__desc">Aksu/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHeroAre;
