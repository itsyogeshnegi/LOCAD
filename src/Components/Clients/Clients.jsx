"use client";
import React,{useEffect} from "react";
import "./Clients.css";
import Slider from "react-slick";
import AOS from "aos";
const Clients = ({ heading, reverse }) => {
  useEffect(() => {
    AOS.init({ duration: 500,once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    accessibility: false,
    cssEase: "linear",
    pauseOnHover: true,
    rtl: reverse ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="OURCLIENTSMain">
      {heading && (
        <div className="OURCLIENTS">
          <h2>
            OUR <span style={{ color: "red" }}>CLIENTS</span>
          </h2>
        </div>
      )}
      <div className="slickCarousel">
        <Slider {...settings}>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/bjp.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/paytm.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/omp.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/MMI.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/edu.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/rapport.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/Dentsu.png" />
          </div>
          <div className="clientLogo">
            <img
              height={100}
              width={100}
              src="/clients/Richardson_srilanka.png"
            />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/resolution.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/kinetic.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/IMBV.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/zoho.webp" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/swiggy.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/delhiMall.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/zeeMedia.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/jc_decaux.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={120} src="/clients/vmart.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={120} src="/clients/sis.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={120} src="/clients/SISE.png" />
          </div>
          <div className="clientLogo">
            <img
              height={100}
              width={100}
              src="/clients/hindustan_unilever.png"
            />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/MediaRed.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/ITW.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/77.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/mp.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/Amity_university.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/bom.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/harts_tyres.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/kohler.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/wpp.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/gold_logo.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/kanakia.png" />
          </div>
          <div className="clientLogo">
            <img
              height={100}
              width={100}
              src="/clients/hindusthanpublicity.png"
            />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/lakme.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/fair_&_lovely.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/growel_101.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/karvy.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/absolut_vodka.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/Ajanta_logo.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/cloveDental.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/alchemist.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/balaji_symphony.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/21.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/22.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/23.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/24.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/25.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/26.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/27.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/28.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/29.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/30.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/31.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/32.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={110} src="/cc/33.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/34.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/35.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/36.webp" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/37.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/blackberrys.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/brand-street.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/bom.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/casinodays_logo.png" />
          </div>
          <div className="clientLogo">
            <img
              height={100}
              width={120}
              src="/clients/Care_health_insurance_logo.png"
            />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/education_first.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/savoy.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/haware_logo_3.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/LG_logo.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/oyo_innov8.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/olx-cashmycar.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/laqshya.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/Pionner.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/PromoredGroup.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/Rubicon.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/ruia_agro_farm.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/social_street.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/tag_heuer.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/village.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/times_ooh.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/ipg_mb.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/clients/sushi_central.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/1.gif" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/2.jpeg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/3.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/4.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/5.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/6.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/7.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/8.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/9.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/10.png" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/11.jpg" />
          </div>
          <div className="clientLogo">
            <img height={100} width={100} src="/cc/12.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
