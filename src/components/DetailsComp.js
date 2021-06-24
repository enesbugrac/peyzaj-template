import React from "react";
import "./main.css";
import demre1 from "../images/demresahili (2).jpeg";
import eski from "../images/eski.JPG";
import yeni from "../images/yeniPNG.JPG";
import Slide from "react-reveal/Slide";

function DetailsComp() {
  let link = "https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png";
  return (
    <section id="one" className="tiles">
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${eski}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${yeni}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${eski}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${yeni}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${eski}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${yeni}')`,
          }}
        ></article>
      </Slide>
    </section>
  );
}

export default DetailsComp;
