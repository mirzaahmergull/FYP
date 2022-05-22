import React from "react";
import "../static/styles/App.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import all from "../static/imgs/all.png";
import b from "../static/imgs/b.png";
import bw from "../static/imgs/bw.png";
import c from "../static/imgs/c.png";
import gs from "../static/imgs/gs.png";
import h from "../static/imgs/h.png";
import p from "../static/imgs/p.png";
import v from "../static/imgs/v.png";
import wp from "../static/imgs/wp.png";
import { Link } from "react-router-dom";

const ScMenu = () => {
  return (
    <ScrollMenu arrowLeft="false" arrowRight="false" wheel="true">
      <Link to="/All" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={all}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorMakeup" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={b}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorWear" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={bw}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorCaterer" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={c}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorGroom" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={gs}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorHoneymoon" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={h}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorPhoto" style={{ textDecoration: "none" }}>
        {" "}
        <img
          alt="logo"
          src={p}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorVenue" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={v}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
      <Link to="/VendorPlanner" style={{ textDecoration: "none" }}>
        <img
          alt="logo"
          src={wp}
          width="90"
          height="110"
          className="d-inline-block align-top"
        />
      </Link>
    </ScrollMenu>
  );
};

export default ScMenu;
