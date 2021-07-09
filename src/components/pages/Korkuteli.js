import React from "react";
import arec1 from "../../images/web - korkuteli/korkuteli (1).JPG";
import arec2 from "../../images/web - korkuteli/korkuteli (2).JPG";
import arec3 from "../../images/web - korkuteli/korkuteli (3).jpg";
import arec4 from "../../images/web - korkuteli/korkuteli (4).jpg";

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
    </section>
  );
}

export default Demre;
