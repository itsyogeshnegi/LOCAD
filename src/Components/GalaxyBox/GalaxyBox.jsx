import React from "react";
import "./Galaxy.css";
const GalaxyBox = ({ icons, head, text }) => {
  return (
    <div className="GalaxyBox">
      <h2>
        <img src={icons} style={{ height: "60px" }} />
      </h2>
      <h5 style={{ fontWeight: "600" }}>{head}</h5>
      <p>{text}</p>
    </div>
  );
};

export default GalaxyBox;
