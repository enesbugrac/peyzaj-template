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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

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
      <h1 id={"section1"}>Projelerimiz</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
              },
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={kaleiciImg[0]}
              data={kaleiciImg}
              text="Kaleiçi/ANTALYA"
              label="Perge"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={demre[0]}
              data={demre}
              text="Demre Park/ANTALYA"
              label="Perge"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={konyalti[0]}
              data={konyalti}
              text="Konyaaltı/ANTALYA"
              label="Perge"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              src={expoimg[0]}
              data={expoimg}
              text="Expo/Antalya"
              label="Perge"
            />
            <CardItem
              onClick={(data) => detailsModalShow(data)}
              data={sur}
              src={sur[0]}
              text="Sur Yapı/ANTALYA"
              label="Perge"
            />
            <CardItem
              data={korkuteliimg}
              src={korkuteliimg[0]}
              text="Korkuteli/ANTALYA"
              label="Perge"
              onClick={(data) => detailsModalShow(data)}
            />
          </Carousel>
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
