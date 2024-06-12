"use client";
import React, { useEffect } from "react";
import "./pDOOH-Network.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
const page = () => {

  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="pDOOH-Network-Head">
        <h2>
          Programmatic-
          <span style={{ color: "red" }}>DOOH Network</span>
        </h2>
      </div>

      <div className=" flex w-full px-4 flex-col text-center items-center bg-[whitesmoke] shadow-lg">
        <h5 className="font-medium text-lg">
          Our Programmatic DOOH network is one of the largest single connected
          networks of 50,000+ across metro’s and top 120 cities. It creates high
          visibility and mega impact for brands and advertisers.
        </h5>
        <p style={{ color: "red" }}>
          Our current network has 50,000+ DOOH Live Screens across the following
          categories.
        </p>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Outdoor Digital <span style={{ color: "red" }}>Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            {/* <b style={{ fontWeight: "600" }}>Telecom Tower LED</b> */}
            <p>
              Pan India Digital Outdoor Network across top 120+ towns and cities
              targeting premium audiences and millennials.
            </p>
            <p>Audience Profile: Men 50% Women 50%, Age-15 yrs to 60 yrs</p>
            <br />
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/outdoor.jpg" />
        </div>
      </div>
      <div className="Retail-Network" style={{ flexDirection: "row-reverse" }}>
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Corporate<span style={{ color: "red" }}> Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <p>
              100+ Locations with 500+ Screens We create an impactful platform
              for all brands to advertise & create brand awareness at pre
              corporate and co-working space network through multiple screens
              accessed by 100,000+ eyeballs per day from corporate,
              start ups, others.
            </p>
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/cor.jpg" />
        </div>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Innovative 3D &{" "}
              <span style={{ color: "red" }}> Anamorphic Screen Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            {/* <b style={{ fontWeight: "600" }}>Retail Network-Electronics:</b> */}
            <p>
              Revolutionary 3D & anamorphic screen network redefines immersive
              entertainment and visual experiences.
            </p>
            <br />
          </div>
        </div>
        <div className="RetailPartTwo">
          <video autoPlay loop muted controls style={{ width: "500px", height: "200px" }}>
            <source src="https://s3.amazonaws.com/locad.ftp.server/locad_public_images/video/Galleria.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="Retail-Network" style={{ flexDirection: "row-reverse" }}>
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Retail <span style={{ color: "red" }}>Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <b style={{ fontWeight: "600" }}>Retail Network-Electronics:</b>
            <p>
              23 locations with 2100+ screens with an average footfall of 60000
              to 2,50,000/ per day across the entire network, we create a
              powerful marketing strategy with In store digital wall advertising
              and branding at the retail network across all their 82 stores
              covering multiple locations like Mumbai, Pune, Gujarat, Delhi,
              Noida, Gurugram.
            </p>
            {/* <p>Audience Profile: Men-40% Women-60%, Age- 15 yrs to 60 yrs</p> */}
            <br />
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/retail.jpg" />
        </div>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Transit
              <span style={{ color: "red" }}> Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <p>
              Airport : 500+ Screens connected to a single <br />
              dashboard across T1, T2 and T3 Delhi Airport
            </p>
            <br />
            <p>
              Metro and Railways : 950+ screens connecting the major railway
              stations and Metro stations of India. We have presence across
              Delhi NCR, Mumbai, Hyderabad etc.
            </p>
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/trasit.jpg" />
        </div>
      </div>
      <div className="Retail-Network" style={{ flexDirection: "row-reverse" }}>
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Gym <span style={{ color: "red" }}>Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <b style={{ fontWeight: "600" }}>Retail Network-Electronics:</b>
            <p>
              23 locations with 2100+ screens with an average footfall of 60000
              to 2,50,000/ per day across the entire network, we create a
              powerful marketing strategy with In store digital wall advertising
              and branding at the retail network across all their 82 stores
              covering multiple locations like Mumbai, Pune, Gujarat, Delhi,
              Noida, Gurugram.
            </p>
            {/* <p>Audience Profile: Men-40% Women-60%, Age- 15 yrs to 60 yrs</p> */}
            <br />
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/gym.jpg" />
        </div>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              Residential<span style={{ color: "red" }}> Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <p>
              1000+ Screens across premium
              <br /> residential condominiums Pan India
            </p>
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/Residential.jpg" />
        </div>
      </div>
      <div className="Retail-Network" style={{ flexDirection: "row-reverse" }}>
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              EV Charging<span style={{ color: "red" }}>Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <b style={{ fontWeight: "600" }}>Retail Network-Electronics:</b>
            <p>
              23 locations with 2100+ screens with an average footfall of 60000
              to 2,50,000/ per day across the entire network, we create a
              powerful marketing strategy with In store digital wall advertising
              and branding at the retail network across all their 82 stores
              covering multiple locations like Mumbai, Pune, Gujarat, Delhi,
              Noida, Gurugram.
            </p>
            {/* <p>Audience Profile: Men-40% Women-60%, Age-15 yrs to 60 yrs</p> */}
            <br />
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/ev.jpg" />
        </div>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              ATM<span style={{ color: "red" }}> Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <b style={{ fontWeight: "600" }}>
              Co-working space: 16 Locations with 400 Screens
            </b>
            <p>
              We create an impactful platform for all brands to advertise &
              create brand awareness at Co working space network through
              multiple screens accessed by 6000+ eyeballs per day from
              corporate, start ups, others.
            </p>
            <br />
            {/* <b>Location advantage</b> */}
            {/* <p>
              Audience Profile: Young Millennials + Targeting Startups, Age - 20
              yrs to 45 yrs
            </p> */}
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/atm.jpg" />
        </div>
      </div>
      <div className="Retail-Network" style={{ flexDirection: "row-reverse" }}>
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              {`Bars & Clubs`}
              <span style={{ color: "red" }}>Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <b style={{ fontWeight: "600" }}>Pubs and Café :</b>
            <p>
              220+ Screens are connected across all premium restaurants,
              <br /> Pubs and Café’s to our systems and available for
              advertising.
            </p>
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/bar1.jpg" />
        </div>
      </div>
      <div className="Retail-Network">
        <div className="RetailPartOne">
          <div className="retail-Head">
            <b>
              MALL<span style={{ color: "red" }}> Network</span>
            </b>
          </div>
          <div
            className="retails-details"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            {/* <b>Co-working space: 16 Locations with 400 Screens</b> */}
            <p>
              We create an impactful platform for all brands to advertise &
              create brand awareness at Mall space network through multiple
              screens accessed by 10000+ eyeballs per day from corporate, start
              ups, others.
            </p>
            <br />
            {/* <b>Location advantage</b> */}
            {/* <p>
              Audience Profile: Young Millennials + Targeting Startups, Age - 20
              yrs to 45 yrs
            </p> */}
          </div>
        </div>
        <div className="RetailPartTwo">
          <img alt="logo" layout="responsive" src="/networks/mall.jpg" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;

export function generateMetaData({params}){
  return{
    title:"p-DOOH-Network",
    description:"p-DOOH-Network description"
  }
}