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
import arecastrumuretimsahasi from "../images/arecastrumuretimsahasi.jpeg";
import { useEffect } from "react";
import { firestore } from "../firebase";

import "react-multi-carousel/lib/styles.css";

import { useHistory } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
function Cards() {
  let history = useHistory();
  let detailsModalShow = (data) => {
    window.scrollTo(0, 0);
    history.push("/detaylar");
  };
  const [allData, setallData] = useState([]);
  useEffect(() => {
    let arr = [];
    firestore
      .collection("projeler")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
      });
    setallData(arr);
    console.log(allData, arr);
  }, []);
  let konyalti = [konyaalti];

  let korkuteliimg = [korkuteli];
  let expoimg = [expo, expo3, expo2];
  let fidanlık = [expo2];

  let muzuretimsahasiImg = [muzuretimsahasi];
  let sur = [suryapi];
  let perge = [pergepeyzaj, pergepeyzaj1];
  let demre = [demre1, demre2];
  let kaleiciImg = [kaleici2, kaleici];
  let arecastrumuretimsahasiImg = [arecastrumuretimsahasi];

  const [dep, setdep] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);

  let detailsModalClose = () => {
    useHistory.push("/detaylar");
  };
  return (
    <div className="cards">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            onClick={(data) => detailsModalShow(data)}
            src={fidanlık[0]}
            data={fidanlık}
            text="Fidanlık Merkezi-Kepez/ANTALYA"
            label="Perge"
          />
          <CardItem
            onClick={(data) => detailsModalShow(data)}
            src={arecastrumuretimsahasiImg[0]}
            data={arecastrumuretimsahasiImg}
            text="Arecastrum Üretim Merkezi-Aksu/ANTALYA"
            label="Perge"
          />
          <CardItem
            onClick={(data) => detailsModalShow(data)}
            src={muzuretimsahasiImg[0]}
            data={muzuretimsahasiImg}
            text="Muz Üretim Merkezi-Boğazkent/ANTALYA"
            label="Perge"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
