import React from "react";
import "./LocadGalaxy.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import GalaxyBox from "@/Components/GalaxyBox/GalaxyBox";
import ServicesBox from "@/Components/GalaxyServicesBox/ServicesBox";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="LocadGalaxyHead">
        <h2>
          <span style={{ color: "darkblue" }}>LOCADGalaxy</span>{" "}
          <span style={{ color: "red" }}>Platform</span>
        </h2>
      </div>
      <div className="aboutGalaxy">
        <p>
          LOCADGalaxy leverages the benefits of marketing automation to provide
          clarity of Insight, Execution, Ease Customer Delight. LOCADGalaxy is
          an AI/ML driven unified dashboard solving for your performance
          marketing needs.
        </p>
        <p>
          Bring all your Campaigns on the Same Dashboard with the Power of
          AI/ML. LOCADGalaxy brings in clarity by integrating scattered
          stand-alone campaigns. Which allows you to focus and supercharge your
          efforts to achieve your Core Campaign objective with the horsepower of
          marketing automation at Core.
        </p>
      </div>
      <div className="locadGalaxySS">
        <img src="/locadGalaxy.png" style={{ height: "80%" }} />
      </div>
      <div className="galaxyProductHead">What LOCADGalaxy DO...</div>
      <div className="galaxyProduct">
        <GalaxyBox
          icons={"icons/hand.png"}
          head={"Easy To Get Started"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
        <GalaxyBox
          icons={"icons/board.png"}
          head={"The Only Dashboard You Need"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
        <GalaxyBox
          icons={"icons/man.png"}
          head={"Omni-Channel Marketing Automation"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
        <GalaxyBox
          icons={"icons/statisctics.png"}
          head={"Personalization"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
        <GalaxyBox
          icons={"icons/mobile.png"}
          head={"Multi Platform Insights"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
        <GalaxyBox
          icons={"icons/diagram.png"}
          head={"Empower Your Data"}
          text={`It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up`}
        />
      </div>
      <div className="galaxyServices">
        <h5 style={{ fontWeight: "600" }}>
          LOCADGalaxy Provide Great Services
        </h5>
        <p>
          Great Services backed by Great Product to help you achieve your
          Marketing goals.
        </p>
      </div>
      <div className="galaxyServicesBoxes">
        <ServicesBox
          animatedIcons={"icons/google.png"}
          Headind={"Google Performance"}
        />
        <ServicesBox
          animatedIcons={"icons/facebook.png"}
          Headind={"Facebook Performance"}
        />
        <ServicesBox
          animatedIcons={"icons/linkedin.png"}
          Headind={"Linkedin Performance"}
        />
        <ServicesBox
          animatedIcons={"icons/youtube.png"}
          Headind={"Youtube Performance"}
        />
        <ServicesBox
          animatedIcons={"icons/amazon.png"}
          Headind={"Amazon Performance"}
        />
        {/* <ServicesBox animatedIcons={"icons/play.png"} /> */}
      </div>
    </>
  );
};

export default page;
