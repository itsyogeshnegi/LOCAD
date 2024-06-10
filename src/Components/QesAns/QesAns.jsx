"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "./QesAns.css";
import "aos/dist/aos.css";
const QesAns = ({ Questions, Answers }) => {
  const [view, setView] = useState(true);
  const [icon, setIcon] = useState(false);
  const [plusIcon, setPlusIcon] = useState(false);
  const yourAns = () => {
    setView(!view);
    setIcon(!icon);
    setPlusIcon(!plusIcon);
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="Main_box" data-aos="fade-down-top">
      <div className="ask" onClick={yourAns}>
        <div className="ask_Q">{Questions}</div>
        <div className={`plus ${view ? "" : "plus_rotate"}`}>
          <i className={`fa-solid fa-xmark`}></i>
        </div>
      </div>
      <div className={`Ans ${view ? "" : "ansopen"}`}><li>{Answers}</li></div>
    </div>
  );
};

export default QesAns;
