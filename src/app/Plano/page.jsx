"use client";
import React from "react";
import "./Plano.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Footer from "@/Components/Footer/Footer";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="planoHead">
        <h2>
          <span style={{ color: "darkblue" }}>Plano</span>{" "}
          <span style={{ color: "red" }}>Platform</span>
        </h2>
      </div>

      <div className="plano">
        <div className="plnao_about">
          <div className="plano_screen_about">
            <div className="planoAbout">
              <h3>About Plano</h3>
            </div>
            <p className="font-black text-2xl">OOH Planning Tool - PLANO</p>
            <p className="px-0">
              {`Welcome to PLANO, the ultimate data drive Out-Of-Home
               (OOH) media planning platform designed to streamline media
                planning across multiple geographical locations. Whether 
                you are a local vendor or a national network, PLANO offers
                a simple yet powerful solution to optimize your OOH media campaigns.`}
            </p>
          </div>
        </div>
      </div>
      <div
        className="Features"
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          fontWeight: "900",
        }}>
        <h3>Key Features:</h3>
      </div>
      <div className="planoFeatures">
        <div className="plano_box">
          <ol start={1}>
            <p style={{ fontWeight: "700", fontSize: "15px" }}>
              Inventory Management:
            </p>
            <li>
              1.Comprehensive Database: Access a centralized repository for all
              your site locations.
            </li>
            <li>
              2.Real-Time Updates: Get instant updates on site availability and
              status.
            </li>
            <li>
              3.Geographical Mapping: Utilize interactive maps for a visual
              overview of site locations and their attributes.
            </li>
          </ol>
        </div>
        <div className="plano_box">
          <ol start={1}>
            <p style={{ fontWeight: "700" }}>Data Driven Campaign Planning:</p>
            <li>
              1.Targeting and Segmentation: Select sites based on demographic, geographic, and psychographic criteria.
            </li>
            <li>
              2.Budget Allocation: Manage your budget efficiently across different locations.
            </li>
            <li>
             3.Performance Forecasting: Use predictive analytics to estimate the impact and reach of your campaigns.
            </li>
          </ol>
        </div>
        <div className="plano_box">
          <ol start={1}>
            <p style={{ fontWeight: "700" }}>Sales and Booking</p>
            <li>
            1.Automated Sales Processes: Streamline workflows for booking and sales, reducing manual effort.
            </li>
            <li>
              2.Client Portal: Provide clients with a dedicated portal to view available sites, book spaces, and track campaign progress.
            </li>
            <li>
              Historical performance data to inform media selection decisions.
            </li>
          </ol>
        </div>
        <div className="plano_box">
          <ol start={1}>
            <p style={{ fontWeight: "700" }}>Reporting and Analytics:</p>
            <li>
              1.Detailed Reports: Generate customizable reports on inventory status, campaign performance, and financials.
            </li>
            <li>
              2.Data Integration: Integrate with other data sources and platforms for comprehensive analysis.
            </li>
            <li>
              3.Dashboards: Monitor real-time data and gain insights through interactive dashboards.
            </li>
          </ol>
        </div>
      </div>
      <div className="planoOtherSS">
        <img
          src="/planoSSLogPage.png"
          style={{ height: "300px", margin: "20px" }}
        />
        <img src="/planoSS1.png" style={{ height: "300px", margin: "20px" }} />
        <img src="/planoSS2.png" style={{ height: "300px", margin: "20px" }} />
      </div>
      <div
        className="Features"
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          fontWeight: "900",
        }}>
        <h3 className="font-bold">Benefits</h3>
      </div>
      <div className="w-full px-2 justify-center items-center flex">
        <ul className="px-3 ">
          <li className="">
          <span className="font-bold">Efficiency:</span><br/>
          Time-Saving: Automated processes reduce the time required for inventory management and campaign planning.<br/>
          Reduced Errors: Minimize human errors with automated data entry and management.

          </li>
          <br/>
          <li>
          <span className="font-bold">Scalability:</span><br/>
          Flexible: Easily scalable to manage an increasing number of sites and campaigns.<br/>
          Adaptable: Suitable for small vendors with a few sites to large vendors managing thousands of locations.

          </li>
          <br/>
          <li>
          <span className="font-bold">Improved Decision Making:</span><br/>
          Data-Driven Insights: Access comprehensive data to make informed decisions.<br/>
          Performance Tracking: Continuously monitor and optimize campaigns with detailed reporting.

          </li>
          <br/>
          <li>
          <span className="font-bold">Enhanced Client Satisfaction:</span><br/>
          Transparency: Clients can view available inventory and campaign progress, improving trust and satisfaction.<br/>
          Responsive Service: Faster response times due to streamlined processes and real-time updates.

          </li>
          <br/>
          <li>
          <span className="font-bold">Use Cases:</span><br/>
          Local OOH Vendors: Simplify the management of a few sites within a city or region.<br/>
          National OOH Networks: Efficiently manage extensive inventories spread across the country.<br/>
          Advertising Agencies: Plan, book, and monitor campaigns for your clients with ease.<br/>
          Large Corporations: Manage internal advertising assets and campaigns across various locations.

          </li>
        </ul>
      </div>
      <div className="flex w-full flex-col px-2 justify-center items-center my-3">
        <h1 className="font-semibold">Why Choose PLANO?</h1>
        <p className="mx-7 text-justify">PLANO is designed to meet the diverse needs of OOH site vendors, offering a robust platform that ensures better resource utilization, improved campaign performance, and enhanced client satisfaction. Simplify your OOH media planning with PLANO and experience the future of inventory management and campaign optimization.</p>
      </div>
      <Footer/>
    </>
  );
};

export default page;
