import "./static/styles/App.css";
import React from "react";
import SimilarWeddings3 from "./similarweddings3.js";
import "react-alice-carousel/lib/alice-carousel.css";
import Gallery1 from "./gallery.js";

const Farhan = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h1 style={{ color: "rgb(162, 212, 242)" }}>
        Farhan Saeed & Urwa Hocane
      </h1>
      <h4 style={{ color: "rgb(149, 150, 150)", fontFamily: "Cursive" }}>
        Karachi
      </h4>{" "}
      &nbsp; &nbsp;
      <Gallery1 />
      <SimilarWeddings3 />
    </div>
  );
};

export default Farhan;
