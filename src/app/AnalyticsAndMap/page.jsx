"use client";
import React, { useState, useEffect } from "react";
import "./AnalyticsAndMap.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import LiveData from "@/Components/AnalyticsBoxes/LiveData";
import axios from "axios";
import AnalyticsMap from "@/Components/AnalyticsMap/AnalyticsMap";
import { Line, Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import Footer from "@/Components/Footer/Footer";
const Page = () => {
  const [audit, setAudit] = useState([]);
  const [screeno, setScreeno] = useState([]);
  const [plano, setPlano] = useState([]);

  const fetchData = async (api, setter) => {
    try {
      const apiData = await axios.get(api);
      setter(apiData.data);
    } catch (error) {
      console.error(`Error fetching data from ${api}:`, error);
    }
  };  

  const auditApi = "https://2not7rklia.execute-api.ap-south-1.amazonaws.com/dev/getAuditStats";
  const screenoApi = "https://screenoapi.locad.net/admin/getDashboardCounts";
  const planoApi = "https://plano-v1-api.locad.tech/planoAnalytics";

  useEffect(() => {
    fetchData(auditApi, setAudit);
    fetchData(screenoApi, setScreeno);
    fetchData(planoApi, setPlano);
  }, []);

  const stateArray = [
    {
      _id: "Punjab",
      total: 541,
    },
    {
      _id: "Rajasthan",
      total: 493,
    },
    {
      _id: "Maharashtra",
      total: 1487,
    },
    {
      _id: "Haryana",
      total: 799,
    },
    {
      _id: "Mizoram",
      total: 98,
    },
    {
      _id: "Tripura",
      total: 130,
    },
    {
      _id: "Andhra Pradesh",
      total: 448,
    },
    {
      _id: "Arunachal Pradesh",
      total: 120,
    },
    {
      _id: "Assam",
      total: 444,
    },
    {
      _id: "Tamil Nadu",
      total: 624,
    },
    {
      _id: "Bihar",
      total: 493,
    },
    {
      _id: "Manipur",
      total: 111,
    },
    {
      _id: "Chhattisgarh",
      total: 223,
    },
    {
      _id: "Uttar Pradesh",
      total: 1628,
    },
    {
      _id: "Odisha",
      total: 338,
    },
    {
      _id: "Kerala",
      total: 269,
    },
    {
      _id: "Goa",
      total: 107,
    },
    {
      _id: "Meghalaya",
      total: 159,
    },
    {
      _id: "Sikkim",
      total: 93,
    },
    {
      _id: "Karnataka",
      total: 1207,
    },
    {
      _id: "Jharkhand",
      total: 344,
    },
    {
      _id: "Himachal Pradesh",
      total: 123,
    },
    {
      _id: "West Bengal",
      total: 1055,
    },
    {
      _id: "Nagaland",
      total: 111,
    },
    {
      _id: "Uttarakhand",
      total: 169,
    },
    {
      _id: "Madhya Pradesh",
      total: 432,
    },
    {
      _id: "Telangana",
      total: 690,
    },
    {
      _id: "Gujarat",
      total: 696,
    },
  ];

  const pieData = {
    labels: stateArray.map(row => row._id),
    datasets: [
      {
        label: "States",
        data: stateArray.map(row => row.total),
        borderColor: "#333",
        backgroundColor: [
          "#6499E9",
          "#9EDDFF",
          "#A6F6FF",
          "skyblue",
          "#6499E9",
          "#9EDDFF",
          "#A6F6FF",
        ],
      },
    ],
  };

  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="AnalyticsAndMap_Head">
        <h2>
          {" "}
          <span style={{ color: "red" }}>Live</span> Platform Analytics
        </h2>
      </div>

      {/* Plano */}

      <div className="productHead">
        <h3>Plano Analytics</h3>
      </div>
      <div className="boxStore">
        <LiveData
          color={"royalblue"}
          heading={"Total Locations"}
          data={plano.inventoryCount}
        />
        <LiveData
          color={"#1f75a1"}
          heading={"Total Campaigns"}
          data={plano.campCount}
        />
        <LiveData
          color={"#009687ff"}
          heading={"Total Users"}
          data={plano.userCount}
        />
        <LiveData
          color={"#ff8441"}
          heading={"Total Vendors"}
          data={plano.vendorCount}
        />
        <LiveData
          color={"skyblue"}
          heading={"Total sites"}
          data={plano.units}
        />
      </div>

      {/* Screeno */}

      <div className="productHead">
        <h3>Screeno Analytics</h3>
      </div>
      <div className="boxStore">
        <LiveData
          color={"royalblue"}
          heading={"Screens"}
          data={51069}
          // data={screeno.screens}
        />
        <LiveData
          color={"#1f75a1"}
          heading={"Campaigns"}
          data={screeno.campaigns}
        />
        <LiveData
          color={"#009687ff"}
          heading={"Total impressions"}
          data={20880163728}
        />
        <LiveData color={"#ff8441"} heading={"Users"} data={screeno.users} />
        <LiveData
          color={"skyblue"}
          heading={"Total Value of Media INR+"}
          data={1000000000}
        />
      </div>

      {/* Locaudit */}

      <div className="productHead">
        <h3>Locaudit Analytics</h3>
      </div>
      <div className="boxStore">
      <LiveData
          color={"royalblue"}
          heading={"Total Audits"}
          data={audit.total_audits ? audit.total_audits : 4206760}
        />
        <LiveData
          color={"#1f75a1"}
          heading={"Campaign Accross Cities"}
          data={audit.total_camps ? audit.total_camps : 9762}
        />
        <LiveData
          color={"#009687ff"}
          heading={"Total Campaigns"}
          data={audit.camp_cities ? audit.camp_cities : 5983}
          />
        <LiveData
          color={"#ff8441"}
          heading={"Current Live Audits"}
          data={audit.live_audits ? audit.live_audits : 1438}
        />
        <LiveData
          color={"skyblue"}
          heading={"Current Monitors Onfield"}
          data={audit.live_monitors ? audit.live_monitors : 98}
        />

      </div>

      {/* Map */}

      <div className="productHead">
        <h3>Map Analytics</h3>
      </div>
      <div className="locAduits-Bar-Map">
        <div className="locauditBar">
          <h4 style={{ fontWeight: "600" }}>Total Campaigns by States</h4>
          <Bar animate={true} data={pieData} />
        </div>
        <div className="locauditMap">
          <AnalyticsMap />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
