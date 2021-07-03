import React from "react";
import arec1 from "../../images/web-demre sahil/demre (1).jpg";
import arec2 from "../../images/web-demre sahil/demre (2).jpg";
import arec3 from "../../images/web-demre sahil/demre (3).JPG";
import arec4 from "../../images/web-demre sahil/demre (4).JPG";
import arec5 from "../../images/web-demre sahil/demre (5).JPG";
import arec6 from "../../images/web-demre sahil/demre (6).JPG";
import arec7 from "../../images/web-demre sahil/demre (7).JPG";
import arec8 from "../../images/web-demre sahil/demre (8).JPG";
import "../Bogacayi.css";

import Slide from "react-reveal/Slide";
function Demre() {
  return (
    <section id="one" className="ana">
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${arec1}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${arec2}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${arec3}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${arec4}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${arec5}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${arec6}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${arec7}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${arec8}')`,
          }}
        ></article>
      </Slide>
    </section>
  );
}

export default Demre;
