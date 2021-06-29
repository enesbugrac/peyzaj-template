import React from "react";
import "./DetailHero.css";
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
      <video
        src="https://firebasestorage.googleapis.com/v0/b/peyzaj-30d27.appspot.com/o/videos%2Ffidan%20merkezi.mp4?alt=media&token=9ba59875-b7ff-4072-9e55-c5bc17b2b64c"
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
          <h1 className="detailshero__title">Fidanlık Merkezi</h1>

          <p className="detailshero__desc">Kepez/ANTALYA</p>
        </Fade>
      </div>
    </div>
  );
}

export default DetailsHeroAre;
