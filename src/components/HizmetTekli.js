import React from "react";
import "./HizmetTekli.css";
function HizmetTekli({ link }) {
  return (
    <div className="hizmettekli">
      <img className="hizmet_img" alt="" src={link} width="100" />
      <h4>PROJE YÖNETİM</h4>
      <p>
        BETULA olarak tüm peyzaj mimarlığı hizmetlerine hakimiyetimiz , uzun
        firma geçmişimizden gelen deneyimimiz ve güncel tüm sektör verilerini
        analiz edebilen kadromuzla peyzaj proje yönetimi ve danışmanlığı ile
        ilgili çalışmalar gerçekleştirmekteyiz.Peyzaj proje yönetim sistemimizle
        işveren adına projenin en akılcı ,en doğru fiyata ve tam zamanında
        uygulanmasını sağlamayı , tüm süreci raporlayarak kontrolü
        kolaylaştırmayı, uygulama sonunda sürprizsiz sonları garanti ediyoruz.
      </p>
    </div>
  );
}

export default HizmetTekli;
