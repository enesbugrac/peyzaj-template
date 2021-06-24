import React from "react";
import Button from "./Button";
import "./Hero.style.css";
import video from "../videos/pexels-roman-odintsov-8191171.mp4";
import poster from "../images/poster.jpg";

import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div className="hero-container">
      <video src={video} poster={poster} autoPlay loop muted />
      <Fade left>
        <h1>Perge Peyzaj</h1>
      </Fade>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => {
            let element = document.getElementById("section1");
            console.log(element);
            element &&
              element.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Projeler
        </Button>
        <Button
          className="btns btn-color"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          İletişim
        </Button>
      </div>
    </div>
  );
}

export default Hero;
