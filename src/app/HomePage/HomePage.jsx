import React, { useState, useEffect } from "react";
import ContactLogo from "@/Components/ContactLogo/ContactLogo";
import MainNavBar from "@/Components/NavBar/MainNavBar";
import UpperNav from "@/Components/NavBar/UpperNav";
import ScrollingSlider from "@/Components/Scrolling-Slider/ScrollingSlider";
import Slider from "@/Components/Slider/Slider";
import Clients from "@/Components/Clients/Clients";
import Products from "@/Components/OurProducts/Products";
import Whom from "@/Components/Whom/Whom";
import TotalCount from "@/Components/Total Counts/TotalCount";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Footer from "@/Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { BarLoader, HashLoader, ClimbingBoxLoader } from "react-spinners";
import Head from "next/head";
const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "smokewhite",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <HashLoader color="red" loading={loading} size={100} />
        </div>
      ) : (
        <>
          <ContactLogo/>
          <UpperNav />
          <MainNavBar />
          <ScrollingSlider />
          <Clients heading={"Our Clients"} />
          <Clients reverse />
          <Slider />
          <Products />
          <Whom />
          <TotalCount />
          <Testimonial />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
