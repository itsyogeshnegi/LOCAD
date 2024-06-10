"use client";

import React from "react";
import "./Testimonial.css";
import Image from "next/image";
import Tcards from "../Testimonial-Cards/Tcards";
const Testimonial = () => {
  return (
    <>
      <div className="testHead">
     <h2>What Clients<span style={{color:"red"}}> Say</span></h2> 
      </div>
      <div className="Testimonial-Main">
        <Tcards 
        commit={"We are extremely happy and satisfied working with LOCAUDIT. This App has definitely increased efficiency of our operations as the real-time data exchange speeds up the tracking process. The tool helps us resolve the issues in a much more reactive manner, in the benefit of the advertisers and service users."}
        post={"MD - JCDecaux India"}
        photo={"/clients/oliy.png"}
        name={"Olivier Héroguelle"}
        />
        <Tcards 
        commit={"After successful pilots, the whole LOCAD team, helped us set up training sessions and dashboards. What we love about them is that, they dont stop exploring ways to better their existing solutions.LOCAD OOH solution is one of the most effective way in bringing in transparency in the unorganized Indian out of home industry."}
        photo={"/clients/newMember.jpeg"}
        post={"Ex-Co-Chief Officer-Kinetic"}
        name={"Rachana Lokhande"}
        />
        <Tcards 
        commit={"“LOCAD has helped us to execute geo-targeted campaign for one of our brand. They were able to grasp our needs quickly and deliver excellent results with their innovative technology. Extremely happy with their prompt services and their cooperative team.”"}
        photo={"/clients/oliverss.png"}
        post={"National Digital Head - Pernod Ricard."}
        name={"Rahul Wadhawan"}
        />
      </div>
    </>
  );
};

export default Testimonial;
