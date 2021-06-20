import React from "react";
import Button from "./Button";
import "./Hero.style.css";
import video from "../videos/video-2.mp4";
function Hero() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Perge Peyzaj</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
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
