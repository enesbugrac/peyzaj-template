import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import demre1 from "../images/demresahili (2).jpeg";
import demre2 from "../images/demresahili.jpeg";
import kaleici from "../images/kaleici.jpeg";
import kaleici2 from "../images/kaleici (2).jpeg";
import expo from "../images/expo.jpeg";
import expo2 from "../images/expo (2).jpeg";
import expo3 from "../images/expo (3).jpeg";
import icdis from "../images/içvedişmekanuretimsahasi.jpeg";
import icdis1 from "../images/içvedişmekanuretimsahasi (2).jpeg";
import icdis2 from "../images/içvedişmekanuretimsahasi (3).jpeg";
import icdis3 from "../images/içvedişmekanuretimsahasi (4).jpeg";
import suryapi from "../images/suryapi.jpeg";
import pergepeyzaj from "../images/pergepeyzaj.jpeg";
import pergepeyzaj1 from "../images/pergepeyzaj (2).jpeg";
import muzuretimsahasi from "../images/muzuretimsahasi.jpeg";
import konyaalti from "../images/konyaalti.jpeg";
import korkuteli from "../images/korkuteli.jpeg";

function Cards() {
  let detailsModalShow = (data) => {
    setdep(data);
    setisOpen(true);
  };

  let korkuteliimg = [korkuteli];
  let expoimg = [expo, expo3, expo2];
  let icvedisimg = [icdis, icdis1, icdis2, icdis3];
  let sur = [suryapi];
  let perge = [pergepeyzaj, pergepeyzaj1];
  let demre = [demre1, demre2];
  let kaleiciImg = [kaleici2, kaleici];

  const [dep, setdep] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);

  let detailsModalClose = () => {
    setphotoIndex(0);
    setisOpen(false);
  };
  return (
    <div className="cards">
      <h1>Projelerimiz</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={kaleiciImg[0]}
              data={kaleiciImg}
              text="Kaleiçi Projesi"
              label="Peyzaj"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={demre[0]}
              data={demre}
              text="Demre Projesi"
              label="Peyzaj"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={icvedisimg[0]}
              data={icvedisimg}
              text="İç ve Dış Mekanlar"
              label="Peyzaj"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={expoimg[0]}
              data={expoimg}
              text="Expo Projesi"
              label="Peyzaj"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              data={sur}
              src={sur[0]}
              text="Sur Yapı"
              label="Peyzaj"
            />
            <CardItem
              data={korkuteliimg}
              src={korkuteliimg[0]}
              text="Korkuteli Projesi"
              label="Peyzaj"
              onClick={(data) => detailsModalShow(data)}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={perge[0]}
              data={perge}
              text="Perge Peyzaj"
              label="Peyzaj"
            />
          </ul>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={dep[photoIndex]}
          nextSrc={dep[(photoIndex + 1) % dep.length]}
          prevSrc={dep[(photoIndex + dep.length - 1) % dep.length]}
          onCloseRequest={() => detailsModalClose()}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + dep.length - 1) % dep.length)
          }
          onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % dep.length)}
        />
      )}
    </div>
  );
}

export default Cards;
