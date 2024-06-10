"use client";

import React, { useEffect } from "react";
import "./Slider.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import AOS from "aos";
const Slider = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="mainSlider" data-aos="zoom-in-up">
        <div className="sliderText">
          <div className="heading">
            <h2>
              Adtech For <span style={{ color: "red" }}>OOH & DOOH</span>
            </h2>
          </div>

          <p>
            {`LOCAD's integrated AI platform and IoT solutions for the OOH and other industry verticals empower brands to engage with the right audiences at the optimal time, location, and context. We offer a comprehensive, one-stop solution for all your advertising and monitoring needs.`}{" "}
          </p>

          <p>
            {`LOCAD's innovative products and technology deliver unparalleled reach and scalability while maintaining brand privacy and integrity.Connect with us now to learn how we can add value to your campaigns and brands.`}
          </p>
          <button className="bg-blue-600 text-white p-2 rounded-md shadow-lg"><Link href={"/ContactUsPage"} className="text-white no-underline">Contact With Us</Link></button>
        </div>
        <div className="mainsliderImg">
          <Carousel
            autoPlay
            infiniteLoop={true}
            interval={4000}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
            showThumbs={false}
            autoFocus={true}
            showIndicators={false}>
            <div className="sliderImg">
              <img src="/mainSlider.jpg" />
            </div>
            <div className="sliderImg">
              <img src="/mainSlider1.jpg" />
            </div>
            <div className="sliderImg">
              <img src="/mainSlider2.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full py-1 flex justify-center items-center">
      </div>
    </>
  );
};

export default Slider;
