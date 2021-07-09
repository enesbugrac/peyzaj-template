import React from "react";
import "../Referanslar.css";
import bogacayi from "../../images/web-boğaçayı/bogacayi (1).jpg";
import demre from "../../images/web-demre sahil/demre (3).JPG";
import expo from "../../images/web-expo büyükşehir/expo (2).JPG";
import demrepark from "../../images/web - demre park/demrepark (3).jpg";
import kaleici from "../../images/web - kaleiçi/kaleici (1).JPG";
import kaleicimermelipark from "../../images/web - kaleiçi mermerli park/kaleicimermelipark (1).JPG";
import kgmexpo from "../../images/web - kgm expo/kgmexpo (2).JPG";
import konyaalti from "../../images/web - konyaaltı/konyaalti (2).jpg";
import korkuteli from "../../images/web - korkuteli/korkuteli (2).JPG";
import suryapi from "../../images/web - suryapı/suryapi (2).JPG";

import Button from "../Button";
import { useHistory } from "react-router-dom";
function Referanslar() {
  const history = useHistory();
  return (
    <section id="two" className="spotlights">
      <section>
        <a href="/referanslar/bogacayi" className="image">
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
              buttonSize="btn--medium"
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
        <a href="/referanslar/expo" className="image">
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
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/demresahili" className="image">
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
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/demrepark" className="image">
          <img src={demrepark} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Demre Park</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/demrepark");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/kaleici" className="image">
          <img src={kaleici} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Kaleiçi</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/kaleici");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/kaleicimermelipark" className="image">
          <img src={kaleicimermelipark} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Kaleiçi Mermerli Park</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/kaleicimermelipark");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/kgmexpo" className="image">
          <img src={kgmexpo} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">KGM Expo</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/kgmexpo");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/konyaalti" className="image">
          <img src={konyaalti} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Konyaaltı</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/konyaalti");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/korkuteli" className="image">
          <img src={korkuteli} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Korkuteli</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/korkuteli");
              }}
              buttonSize="btn--medium"
            >
              Daha Fazlasını Gör
            </Button>
          </div>
        </div>
      </section>
      <section>
        <a href="/referanslar/suryapi" className="image">
          <img src={suryapi} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">Sur Yapı</h3>
            </header>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              onClick={() => {
                window.scrollTo(0, 0);
                history.push("/referanslar/suryapi");
              }}
              buttonSize="btn--medium"
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
