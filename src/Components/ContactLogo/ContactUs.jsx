"use client";

import React from "react";
import "./ContactUs.css";
import UpperNav from "../NavBar/UpperNav";
import MainNavBar from "../NavBar/MainNavBar";
const ContactUs = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />

      <div className="Contact-Us">
        <div className="Contact-Icons">
          <div className="contact-logo"></div>
          <div className="contact-logo"></div>
          <div className="contact-logo"></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
