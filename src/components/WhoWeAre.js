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
          Şirketimiz 2014 yılında Antalya merkezde kurulmuştur. Fidanlıklarını
          2016-2017 yıllarında kurarak sektördeki hizmet yelpazesini
          genişletmiştir. Merkez ofisimiz 3000 m2 kapalı olmak üzere toplamda
          20.000 m2 alan ile Antalya’nın Kepez İlçesi Başköy mahallesinde,
          20.000 m2 alan ile diğer üretim merkezimiz Antalya’nın Aksu İlçesinde
          bulunmaktadır. Deneyimli çalışma arkadaşlarımızla, açık ve kapalı
          üretim merkezlerimizdeki ürünlerimizle Yurtiçi ve yurtdışı kamusal
          alanlarda ve özel sektörde, peyzaj ve çevre düzenleme işlerinde proje,
          uygulama, ürün satış ve bakım hizmetleri verilmektedir.
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
        Tanıtım
      </Button>
    </div>
  );
}

export default WhoWeAre;
