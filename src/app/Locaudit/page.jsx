"use client";
import React from "react";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import "./Locaudit.css";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />

      <div className="locauditHead">
        <h1>
          <span style={{ color: "darkblue" }}>Locaudit</span>{" "}
          <span style={{ color: "red" }}>Platform</span>
        </h1>
      </div>

      <div className="locauditIntro">
        <div className="locauditVideo">
          <iframe
            frameborder="0"
            width="90%"
            height="100%"
            src="https://www.youtube.com/embed/vaMjJyuyOa0?controls=0&autoplay=1&rel=0"></iframe>
        </div>
      </div>

      <div className="AboutLocaudit">
        <div className="AboutLocauditHead">
          <h3>
            <span style={{ color: "red" }}>About</span>{" "}
            <span style={{ color: "darkblue" }}>Locaudit</span>
          </h3>
        </div>
        <div className="AboutLocauditText">
          <p>
            LOCAUDIT is a leading real time monitoring and reporting platform
            for OOH media, asset owners, site owners, vendors, agencies and
            brands etc.
          </p>
          <p>
            Outdoor media remains one of the most effective ways that marketers
            can reach audiences with a creative visual message and a high degree
            of frequency. While it therefore still commands a large share of
            advertisers’ budgets – particularly in hard to reach places where
            impactful media options are limited – the age-old efficacy question
            remains: With such significant investment, how can you be sure that
            you are not only getting what you paid for, but also getting value
            for money?
          </p>
          <p>
            The answer is our LOCAUDIT platform, which not only checks if the
            correct material is properly displayed, but also assesses the
            condition of the structure and the quality of the advertisement
            installation, site impact, light visibility, performance of vendors
            and monitors, time taken to pass, nearby clutter and obstructions.
            “The photographs, data and location information – collected using
            our Android app on devices at each site – is uploaded automatically
            and maintained on our web dashboard so that it can be viewed
            remotely whenever the client needs to do so.
          </p>
          <p style={{ fontSize: "800" }}>
            To know more about our solution and how we can add value to your
            business please sign up for your account today!
          </p>
        </div>
      </div>

      <div className="TheLocauditPlatform">
        <div className="TheLocauditPlatformHead">
          <h2>The Locaudit Platform™</h2>
        </div>
        <div className="LocauditPlatformImage">
          <Image
            height={100}
            width={300}
            layout="responsive"
            alt="page"  
            src="/locaudit_platform_moniter.png"
          />
        </div>
        <div className="h-48 w-full flex justify-around items-center max-md:h-auto max-md:flex-col max-md:gap-3">
          <div><img src={"/bjp/one.png"} className="h-44 max-md:h-32  shadow-lg rounded-md"/></div>
          <div><img src={"/bjp/two.png"} className="h-44 max-md:h-32 shadow-lg rounded-md"/></div>
          <div><img src={"/bjp/three.png"} className="h-44 max-md:h-32 shadow-lg rounded-md"/></div>
        </div>

        <div className="RealTimeBasedMonitoringPlatform">
          <div className="RealTimeBasedMonitoringPlatformHead">
            <h2>
              Real Time Based{" "}
              <span style={{ color: "red" }}>Monitoring Platform</span>
            </h2>
          </div>
          <div className="RealTimeBasedMonitoringPlatformImage">
            <Image
              height={60}
              width={250}
              alt="page"
              layout="responsive"
              src="/monitoring_platform.png"
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default page;
