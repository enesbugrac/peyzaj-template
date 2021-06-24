import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Fade from "react-reveal/Fade";

import "../Hakkimizda.css";
function Hakkimizda() {
  return (
    <>
      <Navbar />

      <div className="hakkimizda-container">
        <Fade right>
          <div className="hakkimizda-yazikutusu">
            <h3 className="hakkimizda-yazi">
              Şirketimiz 2014 yılında Antalya merkezde kurulmuştur.
              Fidanlıklarını 2016-2017 yıllarında kurarak sektördeki hizmet
              yelpazesini genişletmiştir.
            </h3>
            <br></br>
            <h3 className="hakkimizda-yazi">
              Merkez ofisimiz 3000 m2 kapalı olmak üzere toplamda 20.000 m2 alan
              ile Antalya’nın Kepez İlçesi Başköy mahallesinde, 20.000 m2 alan
              ile diğer üretim merkezimiz Antalya’nın Aksu İlçesinde
              bulunmaktadır.
            </h3>
            <br></br>
            <h3 className="hakkimizda-yazi">
              Deneyimli çalışma arkadaşlarımızla, açık ve kapalı üretim
              merkezlerimizdeki ürünlerimizle Yurtiçi ve yurtdışı kamusal
              alanlarda ve özel sektörde, peyzaj ve çevre düzenleme işlerinde
              proje, uygulama, ürün satış ve bakım hizmetleri verilmektedir.
            </h3>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default Hakkimizda;
