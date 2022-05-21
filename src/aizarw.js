import "./static/styles/App.css";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Gallery2 from "./gallery2.js";
import SimilarWeddings2 from "./similarweddings2.js";

const Aiza = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h1 style={{ color: "rgb(162, 212, 242)" }}>
        Kashif Qadri & Aiza Taimoor
      </h1>
      <h4 style={{ color: "rgb(149, 150, 150)", fontFamily: "Cursive" }}>
        Karachi
      </h4>{" "}
      &nbsp; &nbsp;
      <Gallery2 />
      <SimilarWeddings2 />
    </div>
  );
};

export default Aiza;
