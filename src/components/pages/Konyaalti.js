import React from "react";
import arec1 from "../../images/web - konyaaltı/konyaalti (1).jpg";
import arec2 from "../../images/web - konyaaltı/konyaalti (2).jpg";
import arec3 from "../../images/web - konyaaltı/konyaalti (3).jpg";
import arec4 from "../../images/web - konyaaltı/konyaalti (4).JPG";
import arec5 from "../../images/web - konyaaltı/konyaalti (5).jpg";
import arec6 from "../../images/web - konyaaltı/konyaalti (6).jpg";
import arec7 from "../../images/web - konyaaltı/konyaalti (7).jpg";
import arec8 from "../../images/web - konyaaltı/konyaalti (8).jpg";
import arec9 from "../../images/web - konyaaltı/konyaalti (9).jpg";
import arec10 from "../../images/web - konyaaltı/konyaalti (10).jpg";
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
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${arec9}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${arec10}')`,
          }}
        ></article>
      </Slide>
    </section>
  );
}

export default Demre;
