"use client";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import UpperNav from "@/Components/NavBar/UpperNav";
import React from "react";

const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="p-2 flex justify-center items-center">
        <h1>Transit Media</h1>
      </div>
      <div className="px-10 py-1">
        <p className="text-justify">
          {` New Age Transit Advertising Platform with Tracking and Live Progress
          Introducing our cutting-edge Transit Advertising Platform, designed to
          revolutionize the way brands engage with their audiences on the move.
          Whether its cab, auto, train or aircraft branding our platform
          integrates advanced tracking and real-time progress monitoring to
          ensure your campaigns are not only impactful but also measurable and
          optimizable.`}
        </p>
      </div>
      <div className="text-center text-2xl font-semibold">
        <p>Why Choose Our Transit Advertising Platform?</p>
      </div>
      <div className="flex flex-col text-center items-center w-full justify-center px-5">
        <li className="text-start">
          Innovation: Stay ahead of the competition with our innovative tracking
          and monitoring technology.
        </li>
        <li className="text-start">
          Efficiency: Optimize your campaigns with real-time data and actionable
          insights.
        </li>
        <li className="text-start">
          Transparency: Enjoy complete transparency with detailed,
          easy-to-understand reports.
        </li>
        <li className="text-start">
          Support: Benefit from our dedicated support team, ready to assist you
          at every step.
        </li>
      </div>
      <div className="flex flex-col text-center items-center w-full justify-center px-5 mt-5">
        <h1 className="text-xl  py-1 font-bold">
          PLATFORM SCREENSHOTS AND DRIVER APP SCREENSHOTS ALSO + PICTURES OF
          TRANSIT MEDIA CAMPAIGNS
        </h1>
        <p className="text-xl font-Teko">Key Features</p>
        <p className="text-start">
          1. Advanced Tracking Capabilities: Our platform leverages
          state-of-the-art tracking technology to monitor your transit ads in
          real-time. Whether your advertisements are on buses, taxis, or trains,
          we provide comprehensive data on ad visibility and audience
          engagement.
        </p>
        <p className="text-start">
          2. Live Progress Monitoring: Stay updated with the live progress of
          your campaigns. Our dashboard offers real-time insights into the reach
          and effectiveness of your ads, allowing you to make informed decisions
          and adjustments on the fly.
        </p>
        <p className="text-start">
          {`3. Detailed Analytics and Reporting: Access in-depth analytics that
          provide a clear picture of your campaign’s performance. Our reports
          include key metrics such as impressions, engagement rates, and
          conversion data, helping you understand the impact of your advertising
          efforts.`}
        </p>
        <p className="text-start">
          {`4. Driver Engagement & Pay-out: Platform seamlessly makes direct
          payment to drivers of the vehicles via the Driver’s app. Get real time
          visibility and on-demand proof of posting of your campaigns.`}
        </p>
        <p className="text-start">
          {`5. Customizable Campaigns: Design and launch campaigns that cater to
          your specific needs and objectives. Our platform offers a variety of
          customization options, ensuring that your ads align perfectly with
          your brand’s message and goals. Transform your transit advertising
          efforts with our platform and experience the power of real-time
          tracking and progress monitoring. Let us help you drive greater
          engagement and achieve your marketing goals with precision and ease.`}
        </p>
      </div>
    </>
  );
};

export default page;
