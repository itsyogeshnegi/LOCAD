"use client";

import React from "react";
import "./TotalCount.css";
import CountUp from 'react-countup';
import Image from "next/image";
const TotalCount = () => {
  return (
    <div className="TotalCount">

      <div className="counts">
        <Image src={"/totalCount/audit.png"} width={60} height={60}/>
        <span style={{ color: "royalblue" }}>
          <CountUp start={0} end={4} />
          M+
        </span>
        Total Audits
      </div>
      <div className="counts">
        <Image src={"/totalCount/verify.png"} width={60} height={60}/>
        <span style={{ color: "royalblue" }}>
          <CountUp start={0} end={1} />
          M+
        </span>
        Verified Sites
      </div>
      <div className="counts">
      <Image src={"/totalCount/cityscape.png"} width={60} height={60}/>
        <span style={{ color: "royalblue" }}>
          <CountUp start={0} end={9850} />+
        </span>
        Cities & Towns
      </div>
      <div className="counts">
      <Image src={"/totalCount/media.png"} width={60} height={60}/>
        <span style={{ color: "royalblue" }}>
          <CountUp start={0} end={5000} />+
        </span>
        Media Owners
      </div>
      <div className="counts">
      <Image src={"/totalCount/brand.png"} width={60} height={60}/>
        <span style={{ color: "royalblue" }}>
          <CountUp start={0} end={8500} />+
        </span>
        Brands & Companies
      </div>
    </div>
  );
};

export default TotalCount;
