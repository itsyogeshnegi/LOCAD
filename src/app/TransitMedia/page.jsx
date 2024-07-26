"use client";
import Footer from "@/Components/Footer/Footer";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import UpperNav from "@/Components/NavBar/UpperNav";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    accessibility: false,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="p-1 flex justify-center items-center flex-col">
        <p className="text-xl font-semibold">
          New Age Transit Advertising Platform with Tracking and Live Progress
        </p>
        <h1>Transit Media</h1>
      </div>
      <div className="p-4 py-1">
        <p className="text-justify">
          {`
          Introducing our cutting-edge Transit Advertising Platform, designed to
          revolutionize the way brands engage with their audiences on the move.
          Whether its cab, auto, train or aircraft branding our platform
          integrates advanced tracking and real-time progress monitoring to
          ensure your campaigns are not only impactful but also measurable and
          optimizable.`}
        </p>
      </div>
      <div className="p-5 flex justify-center items-center flex-wrap gap-5">
        <img src="/transit/cab4.jpg" className="h-56" />
        <img src="/transit/bus.jpg" className="h-56" />
        <img src="/transit/auto1.jpg" className="h-56" />
      </div>
      <div className="text-center text-2xl font-semibold">
        <p>Why Choose Our Transit Advertising Platform?</p>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col  ">
          <li className="text-start">
            <span className="font-semibold">Innovation:</span> Stay ahead of the
            competition with our innovative tracking and monitoring technology.
          </li>
          <li className="text-start">
            <span className="font-semibold">Efficiency:</span> Optimize your
            campaigns with real-time data and actionable insights.
          </li>
          <li className="text-start">
            <span className="font-semibold">Transparency:</span> Enjoy complete
            transparency with detailed, easy-to-understand reports.
          </li>
          <li className="text-start">
            <span className="font-semibold">Support:</span> Benefit from our
            dedicated support team, ready to assist you at every step.
          </li>
        </div>
      </div>
      <div className="p-5">
        <Slider {...settings} className="mx-4">
          <img src="/transit/auto1.jfif" className="h-56 p-4" />
          <img src="/transit/bus2.jpg" className="h-56 p-4" />
          <img src="/transit/cab1.jfif" className="h-56 p-4" />
          <img src="/transit/auto5.jpg" className="h-56 p-4" />
          <img src="/transit/cab3.jfif" className="h-56 p-4" />
          <img src="/transit/bus3.jfif" className="h-56 p-4" />
          <img src="/transit/auto2.jfif" className="h-56 p-4" />
          <img src="/transit/cab4.jpg" className="h-56 p-4" />
          <img src="/transit/bus.jfif" className="h-56 p-4" />
          <img src="/transit/auto3.jfif" className="h-56 p-4" />
          <img src="/transit/bus4.jfif" className="h-56 p-4" />
          <img src="/transit/auto4.jfif" className="h-56 p-4" />
          <img src="/transit/auto4.jfif" className="h-56 p-4" />
          <img src="/transit/auto5.jpg" className="h-56 p-4" />
          <img src="/transit/bus2.jpg" className="h-56 p-4" />
        </Slider>
      </div>
      <div className="flex flex-col text-center items-center w-full justify-center p-5 mt-5">
        <p className="text-3xl font-bold">Key Features</p>
        <p className="text-start">
          <span className="font-semibold">1. Advanced</span> Tracking
          Capabilities: Our platform leverages state-of-the-art tracking
          technology to monitor your transit ads in real-time. Whether your
          advertisements are on buses, taxis, or trains, we provide
          comprehensive data on ad visibility and audience engagement.
        </p>
        <p className="text-start">
          <span className="font-semibold">2. Live RTO Verification:</span>
          {` With our platform you can now for the 1st
          time in India get RTO verification on the fly to ensure greater
          transparency and accountability. No way for local installers to fudge
          or duplicate pictures!!`}
        </p>
        <p className="text-start">
          <span className="font-semibold">3. Live Progress Monitoring:</span>{" "}
          Stay updated with the live progress of your campaigns. Our dashboard
          offers real-time insights into the reach and effectiveness of your
          ads, allowing you to make informed decisions and adjustments on the
          fly.
        </p>
        <p className="text-start">
          <span className="font-semibold">
            4. Detailed Analytics and Reporting:
          </span>
          {` Access in-depth analytics that
          provide a clear picture of your campaign’s performance. Our reports
          include key metrics such as impressions, engagement rates, and
          conversion data, helping you understand the impact of your advertising
          efforts.`}
        </p>
        <p className="text-start">
          <span className="font-semibold">5. Driver Engagement & Pay-out:</span>
          {` Platform seamlessly makes direct
          payment to drivers of the vehicles via the Driver’s app. Get real time
          visibility and on-demand proof of posting of your campaigns.`}
        </p>
        <p className="text-start">
          <span className="font-semibold">6. Customizable Campaigns:</span>
          {` Design and launch campaigns that cater to
          your specific needs and objectives. Our platform offers a variety of
          customization options, ensuring that your ads align perfectly with
          your brand’s message and goals. Transform your transit advertising
          efforts with our platform and experience the power of real-time
          tracking and progress monitoring. Let us help you drive greater
          engagement and achieve your marketing goals with precision and ease.`}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
