"use client";

import React,{useEffect} from "react";
import Link from "next/link";
import "./ProductCards.css";
import AOS from "aos";
import Image from "next/image";
const ProductCards = ({ logo, text, links, para, logIn, height, width , knowMore}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, });
  }, []);
  return (
    <div
      className="ProductCards h-full xl:h-[330px] md:h-auto relative py-3 max:md:px-5 "
      data-aos="zoom-in-up">
      <div className="px-3">
        <div className="productLogo">
          <img height={height} width={width} alt="tag" src={logo} />
        </div>
        <div className="productText max:md:my-1"> 
          <h6>
            <b>{text}</b>
          </h6>
          <p className="text-md">{para}</p>
        </div>
      </div>
      <div className=" xl:absolute px-3 max-md:my-2 bottom-2 w-full flex justify-between">
        {links}
        <button id="productbtn">
          <a
            href={knowMore}
            style={{ textDecoration: "none", color: "red", fontWeight: "500" }}>
            <b>Know More</b>
          </a>
        </button>
        <button id="productbtn1">
          <b>
            <a
              href={logIn}
              style={{ textDecoration: "none", color: "white" }}
              target="_blank">
              Log In
            </a>
          </b>
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
