import React from "react";
import "../Referanslar.css";
import bogacayi from "../../images/web-boğaçayı/bogacayi (1).jpeg";
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
              <h3 className="majortitle">
                ANTALYA BOĞAÇAYI
                <p>ÇEVRE DÜZNELEMESİ PEYZAJ İŞLERİ</p>
              </h3>
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
              <h3 className="majortitle">
                EXPO2016 ANTALYA BÜYÜKŞEHİR BELEDİYESİ <p>PAVİLYONU</p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA İLİ DEMRE İLÇESİ{" "}
                <p>SAHİL PROJESİ İNŞAAT, PEYZAJ VE ÇEVRE DÜZENLEMESİ</p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA İLİ DEMRE İLÇESİ PAZAR YERİ
                <p>OTOPARK VE MAHALLE PARKI ÇEVRE DÜZENLEMELERİ</p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA KALEİÇİ KENTSEL TASARIM UYGULAMA{" "}
                <p>ÇEVRE DÜZENLEME VE PEYZAJ İŞLERİ</p>
              </h3>
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
        <a href="/referanslar/kgmexpo" className="image">
          <img src={kgmexpo} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3 className="majortitle">
                EXPO2016 TCK 13. BÖLGE MÜDÜRLÜĞÜ
                <p>PAVİLYONU </p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA KONYAALTI SAHİLİ-SAHİL ANTALYA
                <p>YAŞAM PARKI PEYZAJ UYGULAMASI</p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA KANAL KORKUTELİ <p>ÇEVRESİ PEYZAJ UYGULAMASI</p>
              </h3>
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
              <h3 className="majortitle">
                ANTALYA KEPEZ VE SANTRAL MAHALLELERİ{" "}
                <p>KENTSEL DÖNÜŞÜM PROJESİ (SURYAPI)</p>
              </h3>
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
