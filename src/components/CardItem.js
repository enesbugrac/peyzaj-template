import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const handleClick = () => {
    props.onClick(props.data);
  };
  return (
    <div onClick={handleClick} className="cards__item">
      <li className="cards__item">
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
          </div>
        </div>
      </li>
    </div>
  );
}

export default CardItem;
