import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useState } from "react";

import fidanlikana from "../images/fidanlikana.jpg";

import muzuretimsahasi from "../images/muzuretimsahasi.jpeg";

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
  let detailsModalShow = (data, path) => {
    window.scrollTo(0, 0);
    console.log(path);
    history.push(path);
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

  let muzuretimsahasiImg = [muzuretimsahasi];
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
            onClick={(data, path) => detailsModalShow(data, path)}
            src={fidanlikana}
            path="/fidanlik"
            text="Ofis ve Merkez Fidanlık"
            desc="Başköy-Kepez/ANTALYA"
            label="Perge"
          />
          <CardItem
            onClick={(data, path) => detailsModalShow(data, path)}
            src={arecastrumuretimsahasiImg[0]}
            path="/arecastrum"
            desc="Mandırlar-Aksu/ANTALYA"
            text="Mandırlar Üretim Tesisleri"
            label="Perge"
          />
          <CardItem
            onClick={(data, path) => detailsModalShow(data, path)}
            src={muzuretimsahasiImg[0]}
            path="/muz"
            text="Boğazkent Üretim Tesisleri"
            desc="Boğazkent-Serik/ANTALYA"
            label="Perge"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
