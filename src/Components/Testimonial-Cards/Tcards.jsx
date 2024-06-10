"use client";

import React,{useEffect} from "react";
import "./Tcards.css";
import Image from "next/image";
import AOS from "aos";
const Tcards = ({commit, photo, name, post}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="Tcards"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <div className="cardTop">

        <div className="Tcards-img">
          <Image
            src={photo}
            height={50}
            width={50}
            style={{ borderRadius: "100%" }}
          />
        </div>

        <div className="Tcards-name">
             <h6 style={{ fontWeight: "500", color: "royalblue" }}>{name}</h6>
             <p>{post}</p>
        </div>

      </div>

      {/* <div className="Tcards-post">
         
      </div> */}

      <div className="Tcards-Commit">
         <p>{commit}</p>
      </div>

    </div>
  );
};

export default Tcards;
