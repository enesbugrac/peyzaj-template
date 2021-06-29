import React from "react";
import "./main.css";
import fidanlik1 from "../images/fidanlik (1).jpg";
import fidanlik2 from "../images/fidanlik2.jpg";
import fidanlik3 from "../images/fidanlik (3).jpg";
import fidanlik4 from "../images/fidanlik4.JPG";
import fidanlik5 from "../images/fidanlik5.JPG";
import fidanlik6 from "../images/fidanlik6.JPG";
import fidanlik7 from "../images/fidanlik7.JPG";
import fidanlik8 from "../images/fidanlik8.JPG";
import fidanlik9 from "../images/fidanlik9.JPG";
import fidanlik10 from "../images/fidanlik10.JPG";
import fidanlik11 from "../images/fidanlik11.JPG";
import fidanlik12 from "../images/fidanlik (12).jpg";
import fidanlik13 from "../images/fidanlik (13).jpg";
import fidanlik14 from "../images/fidanlik (14).jpg";
import fidanlik15 from "../images/fidanlik (15).jpg";
import fidanlik16 from "../images/fidanlik (16).jpg";

import Slide from "react-reveal/Slide";

function DetailsComp() {
  return (
    <section id="one" className="tiles">
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik1}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik2}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik3}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik4}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik5}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik6}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik7}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik8}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik9}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik10}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik11}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik12}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik13}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik14}')`,
          }}
        ></article>
      </Slide>
      <Slide left>
        <article
          style={{
            backgroundImage: `url('${fidanlik15}')`,
          }}
        ></article>
      </Slide>
      <Slide right>
        <article
          style={{
            backgroundImage: `url('${fidanlik16}')`,
          }}
        ></article>
      </Slide>
    </section>
  );
}

export default DetailsComp;
