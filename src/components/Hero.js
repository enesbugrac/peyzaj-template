import React from "react";
import Button from "./Button";
import "./Hero.style.css";

import poster from "../images/poster.jpg";

import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div className="hero-container">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/peyzaj-30d27.appspot.com/o/videos%2Fanasayfa.mp4?alt=media&token=dd03706b-eb5c-4dc4-a35f-19a234fa110f"
        poster={poster}
        autoPlay
        loop
        muted
      />
      <Fade left>
        <h1>Perge Peyzaj</h1>
        <div className="hero-textt">
          <div className="hero-cizik"></div>
          <p>İnş. San. ve Tic. A.Ş </p>
          <div className="hero-cizik"></div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
