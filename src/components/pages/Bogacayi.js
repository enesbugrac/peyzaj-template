import React from "react";
import arec1 from "../../images/web-boğaçayı/bogacayi (1).jpeg";
import arec2 from "../../images/web-boğaçayı/bogacayi (2).jpeg";
import arec3 from "../../images/web-boğaçayı/bogacayi (3).jpeg";
import arec4 from "../../images/web-boğaçayı/bogacayi (4).jpg";
import arec5 from "../../images/web-boğaçayı/bogacayi (5).jpg";
import arec6 from "../../images/web-boğaçayı/bogacayi (6).jpeg";
import arec7 from "../../images/web-boğaçayı/bogacayi (7).jpg";
import arec8 from "../../images/web-boğaçayı/bogacayi (8).jpeg";
import "../Bogacayi.css";

import Slide from "react-reveal/Slide";
function Bogacayi() {
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

export default Bogacayi;
