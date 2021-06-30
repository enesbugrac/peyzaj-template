import React from "react";
import "./main.css";
import muz1 from "../images/muz (1).jpeg";
import muz2 from "../images/muz (2).jpeg";
import muz3 from "../images/muz (3).jpeg";
import muz4 from "../images/muz (4).jpeg";
import muz5 from "../images/muz (5).jpeg";
import muz6 from "../images/muz (6).jpeg";
import muz7 from "../images/muz (7).jpeg";
import muz8 from "../images/muz (8).jpeg";
import muz9 from "../images/muz (9).jpeg";
import muz10 from "../images/muz (10).jpeg";

import Slide from "react-reveal/Slide";

function DetailsComp() {
  return (
    <section id="one" className="tiles">
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${muz1}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${muz2}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${muz3}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${muz4}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${muz5}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${muz6}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${muz7}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${muz8}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${muz9}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${muz10}')`,
          }}
        ></article>
      </Slide>
    </section>
  );
}

export default DetailsComp;
