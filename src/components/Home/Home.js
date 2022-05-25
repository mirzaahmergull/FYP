import logo from "../../static/svgs/heart.svg"
import "../../static/styles/App.css";
import Component2 from "./HomePageSlide";
import "bootstrap/dist/css/bootstrap.min.css";
import CardFlip from "./HomePageCardFlip";
import React from "react";
import C5 from "./HomePageBottom";

const Home = () => {
  return (
    <div>
      <Component2 />
      <></> &nbsp;
      <h1 style={{ color: "rgb(162, 212, 242)" }}>Find the Perfect Look</h1>
      <h4 style={{ color: "rgb(149, 150, 150)", fontFamily: "Cursive" }}>
        Get lost in thousands of photos of decor, outfits, jewellery and more to
        inspire you for your big day
      </h4>{" "}
      &nbsp;
      <div
        style={{
          borderTop: "2px solid #fff ",
          marginLeft: 20,
          marginRight: 20,
          color: "rgb(149, 150, 150)",
        }}
      >
        ______________________________________{" "}
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          color="rgb(149, 150, 150)"
        />{" "}
        ______________________________________
      </div>{" "}
      &nbsp;
      <></> &nbsp;
      <CardFlip />
      <></> &nbsp;
      <></> &nbsp;
      <C5 />
      <div style={{ backgroundColor: "rgb(227, 227, 227)" }}>
        <></> &nbsp;
        <></> &nbsp;
        <h1 style={{ color: "rgb(162, 212, 242)" }}>Read Advice & Ideas</h1>
        <h4 style={{ color: "white", fontFamily: "Cursive" }}>
          Practical, on trend advice you cannot afford to miss out. Think of it
          like your wedding planning BFF.
        </h4>{" "}
        &nbsp;
        <div
          style={{
            marginLeft: 20,
            marginRight: 20,
            color: "rgb(149, 150, 150)",
          }}
        >
          ______________________________________{" "}
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            color="rgb(149, 150, 150)"
          />{" "}
          ______________________________________
        </div>{" "}
        &nbsp;
      </div>
      &nbsp;
    </div>
  );
};

export default Home;
