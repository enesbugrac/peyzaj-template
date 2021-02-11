import React from "react";
import Button from "./Button";
import "./Hero.style.css";
import video from "../videos/video-2.mp4";
function Hero() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>MACERA</h1>
      <p>Ne için bekliyosun?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BAŞLA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          TRAILERI IZLE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
