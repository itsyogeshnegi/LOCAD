import React from 'react'
import './ScrollingSlider.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { faL } from '@fortawesome/free-solid-svg-icons';
const ScrollingSlider = () => {
  return (
    <div className="ScrollingSliderMain">
      <div className="ScrollingSliderinner">
        <Carousel
          autoPlay
          infiniteLoop={true}
          interval={4000}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
          showThumbs={false}
          autoFocus={true}
          showIndicators={true}
          // centerMode={true}
        >
          <div className="innerScrollingSlider">
            <img src="/main09jpg.jpg" />
          </div>
          <div className="innerScrollingSlider">
            <img src="/main07.jpg" />
          </div>
          <div className="innerScrollingSlider">
            <img src="/main010.png" />
          </div>
          <div className="innerScrollingSlider">
            <img src="/main55.jpg" />
          </div>
          <div className="innerScrollingSlider">
            <img src="/main11.jpg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ScrollingSlider