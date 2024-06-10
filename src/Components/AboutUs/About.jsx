"use client";

import React from "react";
import "./About.css";
import AboutCards from "./AboutCards";
const About = () => {
  return (
    <div className="About">
      <div className="AboutHead">
        <h2>
          About <span style={{ color: "red" }}>Us</span>
        </h2>
      </div>
      <div className="AboutText">
        <div className="AboutData">
            <p>
              We are a Singapore based technology company where we love to build
              innovative products and IOT solutions for Location Based
              Advertising & OOH media industry. Our products and real time
              analytics help business owners and agencies get meaningful
              insights like never before. Our proprietary predictive
              intelligence technology gives a new dimension to mobile
              advertising industry.
            </p>
            <p>
              We have presence across several continents and have offices in
              India, Australia, Russia, Africa and Europe. Our mission is to be
              the leaders in Adtech for OOH media space and continue developing
              new products and solutions which can help brands and business
              owners engage with their end users in the most innovative and
              effective way possible.
            </p>
            <p>
              To execute the above we have a global team of experts with in
              depth experience from the world of AdTech, Advertising and OOH
              industry. Get in touch with us now to solve all your advertising
              and targeting needs.
            </p>
        </div>
          <div className="AboutDetails1">
        <img src="/about01.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
