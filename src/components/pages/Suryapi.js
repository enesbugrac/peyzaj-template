import React from "react";
import arec1 from "../../images/web - suryapı/suryapi (1).JPG";
import arec2 from "../../images/web - suryapı/suryapi (2).JPG";
import arec3 from "../../images/web - suryapı/suryapi (3).jpeg";
import arec4 from "../../images/web - suryapı/suryapi (4).jpeg";
import arec5 from "../../images/web - suryapı/suryapi (5).jpeg";
import arec6 from "../../images/web - suryapı/suryapi (6).jpeg";
import arec7 from "../../images/web - suryapı/suryapi (7).jpeg";

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
            backgroundImage: `url('${arec7}')`,
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
    </section>
  );
}

export default Demre;
