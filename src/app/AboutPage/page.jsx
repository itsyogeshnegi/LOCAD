"use client";

import React from "react";
import "./AboutPage.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import Clients from "@/Components/Clients/Clients";
const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />
      <div className="aboutHead">
        <h1>About Us</h1>
      </div>

      <div className="about-content">
        <div className="content">
          <div className="contentHead">
            <p>{"We are a Singapore & Delhi based Media Tech Company where we love to build innovative products and solutions for Monitoring, OOH and pDOOH advertising industry."}</p>
          </div>
          <div className="contentBody">
            <p>
              {`LOCAD's integrated AI platform and IoT solutions for the OOH and other industry verticals empower brands to engage with the right audiences at the optimal time, location, and context. We offer a comprehensive, one-stop solution for all your advertising, marketing and monitoring needs.`}
            </p>
            <p>
              {`Our diverse range of products and services caters to a variety of clients, including:`}
            </p>
              Brands:
              <div className="text-start">
              <li>Corporates across various industry segments</li>
              <li>OOH Companies</li>
              <li>Political Parties</li>
              <li>Real Estate Firms</li>
              <li>F&B Companies</li>
              <li>Manufacturing Industry</li>
              <li>Logistics</li>
              <li>Warehousing</li>
              <li>Insurance & Banking</li>
              </div>
            <br />
            <p>
           {`LOCAD's innovative products and technology deliver unparalleled
              reach and scalability while maintaining brand privacy and
              integrity.`}
            </p>
            <p className="flex gap-3">
              {`Connect with us now to learn how we can add value to your campaigns and brands.`}
              <button className="bg-blue-600 text-white p-2 rounded-md shadow-lg"><Link href={"/ContactUsPage"} className="text-white no-underline">Contact With Us</Link></button>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-64 w-full flex justify-center items-center border-2 border-black"> */}
        {/* <Clients heading={"Our Clients"} /> */}
        {/* <Clients reverse /> */}
      {/* </div> */}
      <div>
        <section>
          <div class="container-fluid pt-0 pb-0">
            <div id="map_contact" class="row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8841390891025!2d77.2134483312387!3d28.543202009462476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2186aaaaaab%3A0x20d1d9f38ef4be2c!2sLOCAD+%7C+ADTECH+FOR+OOH!5e0!3m2!1sen!2sin!4v1491456007141&key=AIzaSyDShwAro2jnXzDeD8JQlGyTQgqcM-BQWnI"
                width="600"
                height="450"
                frameborder="2px"
                allowfullscreen></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default page;
