"use client";

import React from "react";
import "./MobileAdPlatform.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import MobileCards from "@/Components/Mobile-Cards/MobileCards";
import Footer from "@/Components/Footer/Footer";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="Mobile-Ad-Platform-Head">
        <h2 style={{ fontWeight: "650" }}>
         <span style={{ color: "darkblue" }}>Mobile Ad</span>   <span style={{ color: "red" }}>Platform</span>
        </h2>
      </div>

      <div className="intro">
        <div className="introVideo">
          <div className="videos">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Kc_Ll0EK7Sc?autoplay=1&autohide=1&disablekb=1&showinfo=0&modestbranding=1&loop=1&playlist=Kc_Ll0EK7Sc&rel=0"
              frameborder="0"></iframe>
          </div>
        </div>
        <div className="introText">
          <p>
            The consumer sees an{" "}
            <span style={{ color: "red" }}>OOH advertisement</span> while
            traveling through a pre-defined geofenced area.
          </p>
          <p>
            While engaging with an app, within the geofence, the consumer sees a
            similar ad appear on their phone as a mobile banner ad.{" "}
          </p>
        </div>
      </div>
      <div className="mobileCards">
        <MobileCards
          img={"/geo_targeting.jpg"}
          headTopic={"GEO TARGETING"}
          para={
            "Our platform lets advertisers choose any location or site accross the globe and geo-fence it with any km radius. Highly targeted ads and videos are then delivered to the right audience at the right time and right location."
          }
        />
        <MobileCards
          img={"/display_ads&video_ads.jpg"}
          headTopic={"DISPLAY ADS & VIDEO ADS"}
          para={
            "Location relevant & contextual banner and video ads are delivered to a highly targeted audience. Be it for driving footfalls to a particular location or creating pre-post event buzz or simply to engage with the end user, our platform lets you do all this and much more in no time."
          }
        />
        <MobileCards
          img={"/re_targeting.jpg"}
          headTopic={"RE-TARGETING"}
          para={
            "This is a fairly powerful feature wherein once the consumers engages with our ads and let us store their device id's we can then re-target them on the basis of their tastes and preference at any time in future irrespective of which app or mobile website they are under."
          }
        />
        <MobileCards
          img={"/analytics_from_ooh.png"}
          headTopic={"DATA ANALYTICS FROM OOH & OTHERS SOURCES"}
          para={
            "Re-targeting combined with data from our OOH platforms ensures unparalleled reach and targeting options for our advertisers."
          }
        />
        <MobileCards
          img={"/other_targeting_parameter.jpg"}
          headTopic={"OTHER TARGETING PARAMETER"}
          para={
            "Advertisers could also target on the basis of time/day parting, ISP/channel category,demographics, audience profile etc. With our proprietary technology advertisers can also create instant social media buzz and engagement via our platform."
          }
        />
        <MobileCards
          img={"/ooh_mobile_features.webp"}
          headTopic={"OOH MOBILE FEATURES"}
          para={
            "At LOCAD we combine the power of OOH with mobile to increase engagement opportunities with your target audience! The LOCAD Mobile Network is a customized geo-fencing solution, grounded in OOH assets, with location verification enabled."
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default page;
