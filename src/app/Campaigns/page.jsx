"use client";
import Footer from "@/Components/Footer/Footer";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import UpperNav from "@/Components/NavBar/UpperNav";
import React from "react";

const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="p-2 text-center flex justify-center items-center">
        <h1>{`Campaign Measurement & Attribution`}</h1>
      </div>
      <div className="py-2 px-10">
        <p className="text-justify">
          {`At LOCAD, we provide cutting-edge AI/ML solutions for measuring and
          attributing the success of your Out-of-Home (OOH) and Programmatic
          Digital Out-of-Home (pDOOH) advertising campaigns. Our sophisticated
          tools and methodologies ensure that you gain deep insights into your
          campaign performance, allowing for precise optimization and improved
          ROI.`}
        </p>
      </div>
      <div className="p-5">
        <img src="/campaign-measurement/s1.png" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">Key Features</h1>
      </div>
      <div>
        <ul className="px-10 text-justify">
          <li>
            <span className="font-semibold">
              1.Advanced Tracking Technologies:{" "}
            </span>
            {`Leverage the latest in tracking
            technology to monitor the effectiveness of your OOH and pDOOH
            campaigns. Our system captures real-time data on ad visibility,
            engagement, and audience interaction, providing you with a clear
            picture of your campaign’s reach and impact.`}
          </li>
          <br />
          <li>
            <span className="font-semibold">2. ROI Measurement:</span>
            {` Accurately measure the return on investment for your OOH and pDOOH campaigns. Our tools calculate the financial impact of your advertising efforts, helping you understand which campaigns deliver the best results and where to allocate future budgets.
`}
          </li>

          <br />
          <li>
            <span className="font-semibold">
              3. Detailed Performance Analytics:
            </span>
            {` Access in-depth analytics that break down key performance indicators (KPIs) such as impressions, dwell time, engagement rates, and conversion metrics. Our intuitive dashboard allows you to easily interpret data and make informed decisions.`}
          </li>
          <br />
          <li>
            <span className="font-semibold">4. Real-Time Reporting:</span>
            {` Benefit from real-time reporting capabilities that provide instant insights into your campaign’s performance. Stay updated with live data feeds and customizable reports that keep you informed and agile.`}
          </li>
          <br />
          <li>
            <span className="font-semibold">
              5. Comprehensive Attribution Models:
            </span>
            {`Understand the true value of
            your OOH and pDOOH campaigns with our multi-touch attribution
            models. Track how each ad exposure contributes to the customer
            journey and overall conversion, giving you a holistic view of your
            advertising effectiveness.`}
          </li>
          <br />
          <li>
            <span className="font-semibold">6. Continuous Optimization:</span>
            {` Optimize your campaigns on-the-fly with our continuous improvement features. Use real-time data and performance insights to adjust your strategies, ensuring that your campaigns remain effective and responsive to changing market conditions.`}
          </li>
          <br />
          <li>
            <span className="font-semibold">
              7. Pre-Post Campaign Measurement:
            </span>
            {` Get both pre and post campaign measurement to better understand the location visitation attribution. Our platform not only helps to identify the audience devices across locations but also re-target audiences anytime in future as well via their device ids. `}
          </li>
        </ul>
      </div>
      <div className="p-5">
        <img src="/campaign-measurement/s2.png" />
        <br />
        <img src="/campaign-measurement/s4.png" />
      </div>
      <div className="flex text-center justify-center items-center flex-col px-10">
        <h1 className="font-semibold">Why Choose Us?</h1>
      </div>
      <div className="px-14 text-justify">
        <li>
          <span className="font-semibold">Expertise:</span>
          {` Benefit from our extensive experience (10yrs+) and expertise in OOH and pDOOH advertising, ensuring your campaigns are designed and measured for success.`}
        </li>
        <li>
        <span className="font-semibold">Innovation:</span>
          {` Utilize the latest technology and innovative solutions to stay ahead of the competition.`}</li>
        <li>
        <span className="font-semibold">Transparency:</span>
          {` Enjoy complete transparency with clear, comprehensive reports and actionable insights.`}</li>
        <li>
        <span className="font-semibold">Support:</span>
          {` Rely on our dedicated support team to help you interpret data, optimize campaigns, and achieve your marketing objectives.`}</li>
      </div>
      {/* <br/> */}
      <div className="px-14 py-4 font-semibold">
        <p>
          {`
          At LOCAD, we are dedicated to helping you measure, analyze, and optimize your OOH and pDOOH campaigns. Our goal is to provide you with the insights and tools you need to drive meaningful engagement and maximize your advertising ROI.
          `}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
