import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MusicCardDemo from "../HizmetTekli";

import "../Urunlerimiz.css";
import Fade from "react-reveal/Fade";

function Urunlerimiz() {
  return (
    <>
      <div className="urunlerimizpage">
        <div className="urunlerimizpagewrap">
          <MusicCardDemo
            proje="PROJE"
            link="https://images.unsplash.com/photo-1571493322333-94ab5b524af4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80"
          />
          <MusicCardDemo
            proje="UYGULAMA"
            link="https://images.unsplash.com/photo-1419332552192-47d29e59b1e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80"
          />
        </div>
        <div className="urunlerimizpagewrap">
          <MusicCardDemo
            proje="YÖNETİM"
            link="https://images.unsplash.com/photo-1595256858804-ad34bc0ce444?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          />
          <MusicCardDemo
            proje="DANIŞMANLIK"
            link="https://images.unsplash.com/flagged/photo-1552686234-8e47d5602508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
          />
        </div>
      </div>
    </>
  );
}

export default Urunlerimiz;
