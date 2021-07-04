import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const handleClick = () => {
    props.onClick(props.data, props.path);
  };
  return (
    <>
      <li className="cards__item" onClick={handleClick}>
        <div className="cards__item__pic-wrap">
          <img className="cards__item__child" src={props.src} alt="" />
        </div>{" "}
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <h5 className="cards__item__desc">{props.desc}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
