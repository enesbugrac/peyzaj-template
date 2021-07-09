import React from "react";
import arec1 from "../../images/web - suryapı/suryapi (1).JPG";
import arec2 from "../../images/web - suryapı/suryapi (2).JPG";

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
    </section>
  );
}

export default Demre;
