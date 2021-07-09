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
            <i class="fas fa-home"></i>
            {"      "}
            Başköy Mah. Narçiçeği Sok. No:26 Kepez/ANTALYA
          </p>
          <p className="iletisimitem">
            <i class="fas fa-phone-alt"></i>
            {"      "} +90 533 154 03 72 (Santral)
          </p>
          <p className="iletisimitem">
            <i class="fas fa-fax"></i>
            {"      "} +90 242 322 55 72 (Fax)
          </p>
        </div>
      </div>
      <div className="haritalardizilim">
        <div className="haritadisdiv">
          <p className="iletisimitemharita">Antalya/Kepez</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12736.981332627458!2d30.637637235427785!3d37.051636428358805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c389714bcf061b%3A0x2e1ec552cd48fb6f!2zUEVSR0UgUEVZWkFKIMSwTsWeQUFUIFNBTkFZxLAgVkUgVMSwQ0FSRVQgQU5PTsSwTSDFnsSwUktFVMSw!5e0!3m2!1str!2str!4v1625172339334!5m2!1str!2str"
            className="iletisimharita"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="haritadisdiv">
          <p className="iletisimitemharita">Antalya/Kepez</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12736.981332627458!2d30.637637235427785!3d37.051636428358805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c389714bcf061b%3A0x2e1ec552cd48fb6f!2zUEVSR0UgUEVZWkFKIMSwTsWeQUFUIFNBTkFZxLAgVkUgVMSwQ0FSRVQgQU5PTsSwTSDFnsSwUktFVMSw!5e0!3m2!1str!2str!4v1625172339334!5m2!1str!2str"
            className="iletisimharita"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="haritadisdiv">
          <p className="iletisimitemharita">Antalya/Kepez</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12736.981332627458!2d30.637637235427785!3d37.051636428358805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c389714bcf061b%3A0x2e1ec552cd48fb6f!2zUEVSR0UgUEVZWkFKIMSwTsWeQUFUIFNBTkFZxLAgVkUgVMSwQ0FSRVQgQU5PTsSwTSDFnsSwUktFVMSw!5e0!3m2!1str!2str!4v1625172339334!5m2!1str!2str"
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
