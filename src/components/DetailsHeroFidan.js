import React from "react";
import "./DetailHero.css";
import fidan from "../videos/fidan merkezi.mp4";
import fidanlik1 from "../images/fidanlik (1).jpg";

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
      <video src={fidan} poster={fidanlik1} autoPlay loop muted />
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
          <h1 className="detailshero__title">Ofis ve Merkez Fidanlık</h1>

          <p className="detailshero__desc">Başköy-Kepez/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHeroAre;
