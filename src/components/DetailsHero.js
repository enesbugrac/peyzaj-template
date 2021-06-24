import yeni from "../images/hakkimizdaBack.jpeg";
import React from "react";
import "./DetailHero.css";
import Fade from "react-reveal/Fade";
function DetailsHero() {
  return (
    <div
      id={"detaylarr"}
      className="detailshero__container"
      style={{
        background: `-webkit-linear-gradient(bottom, rgba(39,39,39,1) 0%,rgba(39,39,39,0.75) 26%,rgba(39,39,39,0.2) 100%), url(${yeni})`,
      }}
    >
      <Fade top>
        <h1 className="detailshero__title">Konyaaltı/ANTALYA</h1>
        <p className="detailshero__desc">
          Şirketimiz 2014 yılında Antalya merkezde kurulmuştur. Fidanlıklarını
          2016-2017 yıllarında kurarak sektördeki hizmet yelpazesini
          genişletmiştir. Merkez ofisimiz 3000 m2 kapalı olmak üzere toplamda
          20.000 m2 alan ile Antalya’nın Kepez İlçesi Başköy mahallesinde,
          20.000 m2 alan ile diğer üretim merkezimiz Antalya’nın Aksu İlçesinde
          bulunmaktadır.Deneyimli çalışma arkadaşlarımızla, açık ve kapalı
          üretim merkezlerimizdeki ürünlerimizle Yurtiçi ve yurtdışı kamusal
          alanlarda ve özel sektörde, peyzaj ve çevre düzenleme işlerinde proje,
          uygulama, ürün satış ve bakım hizmetleri verilmektedir.
        </p>
      </Fade>
    </div>
  );
}

export default DetailsHero;
