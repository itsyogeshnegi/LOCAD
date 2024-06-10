"use client";

import React from "react";
import "./Whom.css";
import WhomCards from "./WhomCards";
const Whom = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="Whom1">
          <h2>
            For <span style={{ color: "red" }}>Whom</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-5">
          <WhomCards
            icon={"/icons/ads.png"}
            head={"ADVERTISERS"}
            text={
              "LOCAD's platforms have been designed carefully keeping in mind the needs of advertisers and their agencies in managing national OOH advertising campaigns throughout the production and posting processes."
            }
          />
          <WhomCards
            icon={"/icons/agc.png"}
            head={"AGENCIES"}
            text={
              "Our platform automates, centralizes and simplifies many of the complex and time consuming aspects of the production and posting processes enabling agencies to deliver superior service to their clients."
            }
          />
          <WhomCards
            icon={"/icons/vendor.png"}
            head={"MEDIA VENDORS"}
            text={
              "Our software and hardware are not only integrated to simplify the process of providing real-time performance data but also helps media owners to monetize their assets better and become more efficient."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Whom;
