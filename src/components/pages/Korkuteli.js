import React from "react";
import arec1 from "../../images/web - korkuteli/korkuteli (1).JPG";
import arec2 from "../../images/web - korkuteli/korkuteli (2).JPG";
import arec3 from "../../images/web - korkuteli/korkuteli (3).jpg";
import arec4 from "../../images/web - korkuteli/korkuteli (4).jpg";
import arec5 from "../../images/web - korkuteli/korkuteli (5).jpeg";
import arec6 from "../../images/web - korkuteli/korkuteli (6).jpeg";
import arec7 from "../../images/web - korkuteli/korkuteli (7).jpeg";
import arec8 from "../../images/web - korkuteli/korkuteli (8).JPG";
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
