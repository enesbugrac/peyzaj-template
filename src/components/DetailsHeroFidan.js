import React from "react";
import "./DetailHero.css";
import fidanlik from "../videos/fidan merkezi.mp4";
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
      <video src={fidanlik} autoPlay loop muted />
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
          <h1 className="detailshero__title">Fidanlık Merkezi</h1>

          <p className="detailshero__desc">Kepez/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHeroAre;
