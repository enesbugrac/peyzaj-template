import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Image from "../images/img-9.jpg";
import Image1 from "../images/img-1.jpg";
import Image2 from "../images/img-2.jpg";
import Image3 from "../images/img-3.jpg";
import Image4 from "../images/img-4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Bu İNANİLMAZ rotalara bakın!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image2}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={Image3}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={Image4}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={Image1}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={Image1}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={Image2}
              text="Amazon ormanlarının derinliklerini keşfedin"
              label="Macera"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
