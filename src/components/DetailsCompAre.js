import React from "react";
import "./main.css";
import arec1 from "../images/arec (1).jpg";
import arec2 from "../images/arec (2).jpg";
import arec3 from "../images/arec (3).jpg";
import arec4 from "../images/arec (4).jpg";
import arec5 from "../images/arec (5).jpg";
import arec6 from "../images/arec (6).jpg";
import arec7 from "../images/arec (7).jpg";
import arec8 from "../images/arec (8).jpg";

import Slide from "react-reveal/Slide";

function DetailsComp() {
  return (
    <section id="one" className="tiles">
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

export default DetailsComp;
