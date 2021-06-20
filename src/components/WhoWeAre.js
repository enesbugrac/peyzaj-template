import React from "react";
import Button from "./Button";
import "./WhoWeAre.css";
function WhoWeAre() {
  return (
    <div className="whowheare-container">
      <div className="whowheare-text">
        <h1 className="whowheare-title">Biz Kimiz</h1>
        <h4 className="whowheare-desciription">
          {" "}
          Choose To Be Fit (C2B) provides a platform and community to connect
          professionals (Trainers, Nutritionists, Chefs, and Massage Therapists)
          with clients in their area.. If you need a Trainer to help you meet
          your fitness goals, a Massage Therapist to provide you with a
          therapeutic massage, a Nutritionist to design a tailored meal plan, or
          a Personal Chef to prepare you the perfect meal, choose Choose To Be
          Fit.
        </h4>
      </div>
      <div className="whowheare-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BHACKCNDMW8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Button
        className="btns btn-color"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        İletişim
      </Button>
    </div>
  );
}

export default WhoWeAre;
