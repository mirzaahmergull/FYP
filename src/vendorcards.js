import ScMenu from "./scrollMenu.js";
import React from "react";
import Cards from "./cards.js";
const VendorCards = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <ScMenu />

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ color: "rgb(162, 212, 242)" }}>Cards & Invitations</h2>
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
        <Cards />
      </div>
    </div>
  );
};

export default VendorCards;
