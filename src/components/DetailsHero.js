import React from "react";
import "./DetailHero.css";

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
      <video
        src="https://firebasestorage.googleapis.com/v0/b/peyzaj-30d27.appspot.com/o/videos%2FWhatsApp%20Video%202021-06-28%20at%2000.55.01.mp4?alt=media&token=9df882c9-d40a-4df3-92e9-181f005dd364"
        autoPlay
        loop
        muted
      />
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
          <h1 className="detailshero__title">Muz Üretim Merkezi</h1>

          <p className="detailshero__desc">Boğazkent/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHero;
