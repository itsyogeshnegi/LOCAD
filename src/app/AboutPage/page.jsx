"use client";

import React from "react";
import "./AboutPage.css";
import UpperNav from "@/Components/NavBar/UpperNav";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import Link from "next/link";
import Clients from "@/Components/Clients/Clients";
import Footer from "@/Components/Footer/Footer";
import AboutClients from "@/Components/AboutClients/AboutClients";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="contentHead my-4">
            <p>
              {
                "We are a Singapore & Delhi based Media Tech Company where we love to build innovative products and solutions for Monitoring, OOH and pDOOH advertising industry."
              }
              <br/>
            </p>
          </div>
          <div className="contentBody">
            <p>
              {`LOCAD's integrated AI platform and IoT solutions for the OOH and other industry verticals empower brands to engage with the right audiences at the optimal time, location, and context.`}
            </p>
            <p>
              {` We offer a comprehensive, one-stop solution for all your advertising, marketing and monitoring needs.`}
            </p>
            <p>
              {`Our diverse range of products and services caters to a variety of clients, including:`}
            </p>
            <b className="text-2xl font-bold">Brands</b>
            <div className="text-start">
              <li className="font-semibold">Corporates across various industry segments</li>
              <li className="font-semibold">OOH Companies</li>
              <li className="font-semibold">Political Parties</li>
              <li className="font-semibold">Real Estate Firms</li>
              <li className="font-semibold">F&B Companies</li>
              <li className="font-semibold">Manufacturing Industry</li>
              <li className="font-semibold">Logistics</li>
              <li className="font-semibold">Warehousing</li>
              <li className="font-semibold">Insurance & Banking</li>
            </div>
            <br />
            <p>
              {`LOCAD's innovative products and technology deliver unparalleled
              reach and scalability while maintaining brand privacy and
              integrity.`}
            </p>
            <p className="flex gap-3">
              {`Connect with us now to learn how we can add value to your campaigns and brands.`}
              <button className="bg-blue-600 text-white p-2 rounded-md shadow-lg">
                <Link
                  href={"/ContactUsPage"}
                  className="text-white no-underline">
                  Contact With Us
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center mb-5">
        <p className="font-semibold text-2xl">Our Clients</p>
        <Clients />
        <Clients reverse={true} />
      </div>
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
      <Footer />
    </>
  );
};

export default page;
