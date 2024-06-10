"use client";
import React from "react";
import "./LocauditPro.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Footer from "@/Components/Footer/Footer";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="locaudit-pro">
        <h2>
          <span style={{ color: "darkblue" }}>Locaudit Pro - </span>{" "}
          <span style={{ color: "red" }}>Platform</span>
        </h2>
      </div>
      <div className="locaudit_pro_about">
        <p style={{ fontWeight: "600" }}>
          Put the power of improvement in the hands of every team member with
          Locaudit Pro. So anyone can understand what’s working, what’s not, and
          what to do about it. All from one platform.
        </p>
        <p>
        {`Welcome to LOCAUDIT Pro, a cutting-edge AI tool designed to
         revolutionize proof of posting, site monitoring, and reporting
          for OOH and other industry verticals namely Manufacturing, 
          Logistics, Supply Chain, Retail, Warehousing, Facility Management,
          Construction etc. Whether you're a brand, agency, corporate or
          OH media company, LOCAUDIT Pro provides the comprehensive 
          solutions you need to ensure transparency, efficiency, and 
          accuracy in your operations.`}
          </p>
      </div>
      <div className="Platform-Pro">
        <h3>The Locaudit Pro Dashboard</h3>
      </div>
      <div className="pro_dashboard">
        <img src="/locaudit-pro.png" />
        <img src="./proDash.png" />
      </div>
      <div className="pro_App">
        <h4>Locaudit Pro App</h4>
        <div className="proAppSS">
          <img src="/proApp1.jpg" />
          <img src="/proApp.jpg" />
          <img src="/proApp2.jpg" />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default page;
