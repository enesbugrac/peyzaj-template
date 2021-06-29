import React from "react";
import Button from "./Button";
import "./Hero.style.css";
import anasayfa from "../videos/anasayfa.mp4";

import poster from "../images/poster.jpg";

import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div className="hero-container">
      <video src={anasayfa} poster={poster} autoPlay loop muted />
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
