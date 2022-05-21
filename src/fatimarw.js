import "./static/styles/App.css";
import React from "react";
import SimilarWeddings1 from "./similarweddings1.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const stagePadding = {
  paddingLeft: 20, // in pixels
  paddingRight: 20,
};

const items = [
  <img
    src="https://i.pinimg.com/originals/77/05/77/7705772e941ea2386960f3e3d0dcde0e.jpg"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="http://www.rewaj.pk/wp-content/uploads/2012/12/Fatima-effendi-and-Kanwar-Arsalan-Wedding-Marriage-Latest-Pictures91861830_2012121323370.jpg"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="https://i0.wp.com/www.dailyinfotainment.com/wp-content/uploads/2019/07/1563901232_598_Actors-Fatima-Effendi-Arsalan-Kanwar-Spotted-at-Recent-Wedding.jpg?w=1200&ssl=1"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="https://www.bazaarr.com/sites/default/files/styles/large/public/clip_images/c7/39/c739f9e36fc9459676da1f80f88d68eb.jpg?itok=-eRFJdBg"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="https://i.pinimg.com/originals/f5/d8/08/f5d8084a93ed17201d184822c51fb4f2.jpg"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="https://i1.wp.com/style.pk/wp-content/uploads/2018/01/Fatima-Effendi-and-Kanwar-Arsalan-at-a-Wedding-2.jpg?resize=577%2C585"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
  <img
    src="https://shadiwelcome.com/uploads/real_wedding/11487527108.jpg"
    onDragStart={handleDragStart}
    alt=""
    style={{ width: "440px", height: "440px" }}
  />,
];

const Fatima = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h1 style={{ color: "rgb(162, 212, 242)" }}>
        Kanwar Arsalan & Fatima Effendi
      </h1>
      <h4 style={{ color: "rgb(149, 150, 150)", fontFamily: "Cursive" }}>
        Karachi
      </h4>{" "}
      &nbsp; &nbsp;
      <AliceCarousel
        className="alice-carousel

alice-carousel__stage
alice-carousel__stage-item

alice-carousel__prev-btn
alice-carousel__prev-btn-item

alice-carousel__next-btn
alice-carousel__next-btn-item

alice-carousel__play-btn
alice-carousel__play-btn-item

alice-carousel__dots
alice-carousel__dots-item"
        animationDuration="500"
        autoPlay="true"
        animationType="fadeout"
        autoPlayInterval="500"
        buttonsDisabled="false"
        autoPlayStrategy="all"
        infinite="true"
        keyboardNavigation="true"
        mouseTracking="true"
        responsive={responsive}
        stagePadding={stagePadding}
        items={items}
      />
      <SimilarWeddings1 />
    </div>
  );
};

export default Fatima;
