import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const handleClick = () => {
    props.onClick(props.data, props.path);
  };
  return (
    <>
      <li className="cards__item" onClick={handleClick}>
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Gezi Imgae"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <h5 className="cards__item__desc">{props.desc}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
