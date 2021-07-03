import React from "react";
import "../Referanslar.css";
import bogacayi from "../../images/web-boğaçayı/bogacayi (1).jpg";
import demre from "../../images/web-demre sahil/demre (3).JPG";
import expo from "../../images/web-expo büyükşehir/expo (2).JPG";

import Button from "../Button";
import { useHistory } from "react-router-dom";
function Referanslar() {
  const history = useHistory();
  return (
    <section id="two" className="spotlights">
      <section>
        <a href="/" className="image">
          <img src={bogacayi} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Boğaçayı</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/bogacayi");
              }}
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/" className="image">
          <img src={demre} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Demre Sahil</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/demresahili");
              }}
              buttonSize="btn--large"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/" className="image">
          <img src={expo} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Expo Büyükşehir</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/expo");
              }}
              buttonSize="btn--large"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Referanslar;
