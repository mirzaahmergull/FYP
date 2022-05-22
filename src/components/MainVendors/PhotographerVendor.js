import ScMenu from "../Menu.js";
import React from "react";
import Photographers from "../SubVendors/Photographer.js";

const VendorPhoto = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <ScMenu />

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ color: "rgb(162, 212, 242)" }}>Photographers</h2>
        <div
          style={{
            borderTop: "2px solid #fff ",
            marginLeft: 20,
            marginRight: 20,
            color: "rgb(149, 150, 150)",
          }}
        >
          ___________________________________________________________
        </div>{" "}
        &nbsp; &nbsp;
        <Photographers />
      </div>
    </div>
  );
};

export default VendorPhoto;
