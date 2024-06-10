import React from "react";
import "./Services.css";
const ServicesBox = ({ animatedIcons, Headind, Content }) => {
  return (
    <div className="ServicesBox">
      <img src={animatedIcons} style={{ height: "40%" }} />
      <h6>{Headind}</h6>
      {/* <p>{Content}</p> */}
    </div>
  );
};

export default ServicesBox;
