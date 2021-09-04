import React from "react";
import "../Iletisim.css";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);
function Iletisim() {
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="iletisimpage">
      <div className="iletisimpage-yazilar">
        <h1 className="titleiletisim">İletişim</h1>
        <div className="iletisimpage-desc">
          <p className="iletisimitem">
            <h3 className="baslik">Ofis ve Merkez Fidanlık </h3>
            <br></br>
            <i class="fas fa-home"></i>
            {"      "} Başköy Mah. Narçiçeği Sok. No:26 Kepez/ANTALYA
          </p>
          <p className="iletisimitem">
            <i class="fas fa-phone-alt"></i>
            {"      "} +90 533 154 03 72 (Santral)
          </p>
          <p className="iletisimitem">
            <i class="fas fa-fax"></i>
            {"      "} +90 242 322 55 72 (Fax)
          </p>
          <p className="iletisimitem">
            <i class="fas fa-envelope-square"></i>
            {"      "} info@pergepeyzaj.com
          </p>
        </div>
      </div>
      <div className="haritalardizilim">
        <div className="haritadisdiv">
          <p className="iletisimitemharita">
            Ofis ve Merkez Fidanlık &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12736.981332627458!2d30.637637235427785!3d37.051636428358805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c389714bcf061b%3A0x2e1ec552cd48fb6f!2zUEVSR0UgUEVZWkFKIMSwTsWeQUFUIFNBTkFZxLAgVkUgVMSwQ0FSRVQgQU5PTsSwTSDFnsSwUktFVMSw!5e0!3m2!1str!2str!4v1625172339334!5m2!1str!2str"
            className="iletisimharita"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="haritadisdiv">
          <p className="iletisimitemharita">
            Merkez Mandırlar Mah. 5263 parsel Aksu/Antalya
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.405265559724!2d30.83606665811585!3d36.917360994981124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU1JzAyLjUiTiAzMMKwNTAnMTMuOCJF!5e1!3m2!1str!2str!4v1626092937847!5m2!1str!2str"
            className="iletisimharita"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="haritadisdiv">
          <p className="iletisimitemharita">
            Boğazkent Ahmediye Mah. 300 Ada 3031 Parsel Serik/Antalya
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.2868995900711!2d31.16204482921736!3d36.85788599874603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzI4LjQiTiAzMcKwMDknNDUuMyJF!5e1!3m2!1str!2str!4v1626093116319!5m2!1str!2str"
            className="iletisimharita"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
