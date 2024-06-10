"use client";

import React, {useEffect} from "react";
import "./Products.css";
import ProductCards from "./ProductCards";
import Slider from "react-slick";
const Products = () => {



  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="section">
      <div className="container">
        <div className="productTopic">
          <h2>
            OUR <span style={{ color: "red" }}>PRODUCTS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
          <ProductCards
            logo={"/locad_logo.png"}
            text={"MOBILE AD PLATFORM"}
            para={
              "LOCAD’s platform is a one stop solution for all your advertising needs. It's a hyper local mobile advertising platform across channels for brands and agencies and OOH media companies."
            }
            logIn={"https://dsp.locaddsp.com/alogin"}
            knowMore={"/Mobile-Ad-Platform"}
          />
          <ProductCards
            logo={"/plano_logo.png"}
            text={"OOH MEDIA PLANNING PLATFORM"}
            para={
              "PLANO, the ultimate data drive Out-Of-Home (OOH) media planning platform designed to streamline media planning across multiple geographical locations. Whether you are a local vendor or a national network, PLANO offers a simple yet powerful solution to optimize your OOH media campaigns."
            }
            logIn={"https://planoindia.locad.net/"}
            knowMore={"/Plano"}
          />
          <ProductCards
            logo={"/locaudit_logo.png"}
            text={
              "OOH INVENTORY MANAGEMENT, POP, MONITORING & REPORTING PLATFORM"
            }
            para={
              "LOCAUDIT is a powerful tool for OOH proof of posting, monitoring of sites and reporting (both internal and external) for brands, agencies and OOH media companies."
            }
            logIn={"https://locaudit.locad.net/"}
            knowMore={"/Locaudit"}
          />
          <ProductCards
            logo={"/screeno_logo.png"}
            text={"DOOH CMS"}
            para={
              "Its an unqiue platform for purchasing programmatic DOOH inventory and complete content management system for advertisers and digital media owners."
            }
            logIn={"https://screenodooh.locad.net/"}
            knowMore={"/Screeno"}
          />

          <ProductCards
            logo={`/pro2.jpg`}
            // height={"70px"}
            // width={"50%"}
            text={"POP, MONITORING & REPORTING PRO"}
            para={
              "            Welcome to LOCAUDIT Pro, a cutting-edge AI tool designed to revolutionize proof of posting, site monitoring, and reporting for OOH and other industry verticals namely Manufacturing, Logistics, Supply Chain, Retail, Warehousing, Facility Management, Construction etc."
            }
            logIn={"https://locaudit-pro.locad.net/"}
            knowMore={"/Locaudit-Pro"}
          />
          <ProductCards
            // height={"80px"}
            // width={"24%"}
            logo={`/LocadGobal.jpg`}
            text={"PROGRAMMATIC DOOH NETWORK"}
            para={
              "It's an unqiue platform for purchasing programmatic DOOH inventory and complete content management system for advertisers and digital media owners."
            }
            knowMore={"/LocadGalaxy"}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
